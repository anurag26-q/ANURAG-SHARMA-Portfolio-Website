// ---------------------------------------------------------------
// Input guard for JARVIS: sanitizes visitor input, enforces limits
// and blocks prompt-injection / off-topic drift before any API call.
// ---------------------------------------------------------------

export const MAX_WORDS = 100;
export const MAX_CHARS = 700;
export const MAX_MESSAGES_PER_SESSION = 20;
export const MIN_INTERVAL_MS = 2500;
export const HISTORY_TURNS = 6; // only the last N messages are sent as context

/** Normalize unicode, drop control / zero-width / HTML, collapse whitespace. */
export function sanitize(raw: string): string {
  return raw
    .normalize('NFKC')
    .replace(/[​-‏‪-‮⁠-⁤﻿]/g, '') // zero-width & bidi controls
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')  // control chars
    .replace(/<[^>]*>/g, ' ')                                       // HTML / XML-like tags
    .replace(/```[\s\S]*?```/g, ' ')                                // code fences
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, MAX_CHARS);
}

export const wordCount = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);

const INJECTION: RegExp[] = [
  /ignore\s+(all\s+|the\s+|any\s+)?(previous|prior|above|earlier)\s+(instructions?|prompts?|rules?|messages?)/i,
  /disregard\s+(all\s+|the\s+|your\s+)?(previous|prior|above|instructions?|rules?)/i,
  /forget\s+(everything|all|your\s+(instructions?|rules?))/i,
  /(system|developer)\s*(prompt|message|instructions?)/i,
  /(reveal|show|print|repeat|leak|output)\s+(me\s+)?(your|the)\s+(instructions?|prompt|rules|system|context)/i,
  /\byou\s+are\s+now\b/i,
  /\b(act|behave|pretend|roleplay|role-play)\s+(as|like)\b/i,
  /\bnew\s+(instructions?|rules?|persona)\b/i,
  /\b(jailbreak|DAN mode|developer mode|god mode)\b/i,
  /\b(override|bypass)\s+(your|the|all)\b/i,
  /\[(system|inst)\]|<\|?(system|im_start|im_end)\|?>/i,
  /\bapi[\s_-]?key\b/i,
];

export type GuardResult =
  | { ok: true; text: string }
  | { ok: false; reason: string };

let lastSent = 0;
let sentCount = 0;

/** Validate a visitor message. Returns cleaned text or a friendly refusal. */
export function guard(raw: string): GuardResult {
  const text = sanitize(raw);
  if (!text) return { ok: false, reason: 'Please type a question.' };
  if (wordCount(text) > MAX_WORDS)
    return { ok: false, reason: `Please keep questions under ${MAX_WORDS} words.` };
  if (INJECTION.some(r => r.test(text)))
    return { ok: false, reason: "I can only answer questions about Anurag's work, skills and experience." };
  const now = Date.now();
  if (now - lastSent < MIN_INTERVAL_MS)
    return { ok: false, reason: 'Easy there — please wait a moment before the next question.' };
  if (sentCount >= MAX_MESSAGES_PER_SESSION)
    return { ok: false, reason: 'Question limit reached for this visit — email anuragparashar111@gmail.com to continue the conversation.' };
  lastSent = now;
  sentCount++;
  return { ok: true, text };
}

/** Trim an AI reply to a word budget (defence in depth if the model runs long). */
export function clampWords(s: string, max = 120): string {
  const w = s.trim().split(/\s+/);
  return w.length <= max ? s : w.slice(0, max).join(' ') + '…';
}
