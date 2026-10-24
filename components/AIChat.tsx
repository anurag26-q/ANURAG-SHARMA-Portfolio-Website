import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { streamGeminiResponse } from '../services/geminiService';
import { ChatMessage, ChatSender } from '../types';
import { guard, wordCount, sanitize, clampWords, MAX_WORDS, MAX_CHARS, HISTORY_TURNS } from '../services/chatGuard';

const suggestions = ['What does Anurag do at FBSPL?', 'Graph RAG experience?', 'How to contact him?'];

export const AIChat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [tip, setTip] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([{
    id: '1', sender: ChatSender.SYSTEM, timestamp: new Date(),
    text: "Hi! I'm JARVIS, Anurag's AI assistant. Ask me about his experience, systems or skills.",
  }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);
  useEffect(() => { if (open) setTip(false); }, [open]);

  const words = wordCount(input);
  const over = words > MAX_WORDS;

  const send = async (raw: string) => {
    if (loading) return;
    const g = guard(raw);
    if (!g.ok) {
      setMessages(p => [...p, { id: Date.now().toString(), text: g.reason, sender: ChatSender.SYSTEM, timestamp: new Date() }]);
      return;
    }
    const q = g.text;
    const user: ChatMessage = { id: Date.now().toString(), text: q, sender: ChatSender.USER, timestamp: new Date() };
    const history = messages
      .filter(m => m.sender !== ChatSender.SYSTEM && m.text)
      .slice(-HISTORY_TURNS)
      .map(m => ({ role: m.sender === ChatSender.USER ? 'user' : 'ai', content: m.text }));
    const aiId = (Date.now() + 1).toString();
    setMessages(p => [...p, user, { id: aiId, text: '', sender: ChatSender.AI, timestamp: new Date() }]);
    setInput('');
    setLoading(true);
    try {
      const stream = await streamGeminiResponse(history, q);
      let full = '';
      for await (const chunk of stream) {
        if (chunk.text) { full += chunk.text; setMessages(p => p.map(m => m.id === aiId ? { ...m, text: clampWords(full) } : m)); }
      }
      if (!full.trim()) throw new Error('empty response');
    } catch (e) {
      console.error('Chat error:', e);
      setMessages(p => p.map(m => m.id === aiId
        ? { ...m, sender: ChatSender.SYSTEM, text: "I can't reach my model right now — please email Anurag at anuragparashar111@gmail.com." }
        : m));
    } finally { setLoading(false); }
  };

  return (
    <>
      {tip && !open && <div className="ctip hand">ask JARVIS about me →</div>}
      <button className="cbtn" onClick={() => setOpen(o => !o)} aria-label="Toggle AI chat">
        {open ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
      <div className={`chat ${open ? '' : 'closed'}`} role="dialog" aria-label="JARVIS chat">
        <div className="ch">
          <div><b>JARVIS</b><small>● ONLINE · PORTFOLIO ASSISTANT</small></div>
          <button onClick={() => setOpen(false)} aria-label="Close">×</button>
        </div>
        <div className="msgs">
          {messages.map(m => (
            <div key={m.id} className={`m ${m.sender}`}>
              <span className="w">{m.sender === ChatSender.USER ? 'YOU' : 'JARVIS'}</span>
              {m.text || (loading ? '▍' : '')}
            </div>
          ))}
          <div ref={end} />
        </div>
        {messages.length < 3 && <div className="chips">{suggestions.map(s => <button key={s} onClick={() => send(s)}>{s}</button>)}</div>}
        <form onSubmit={e => { e.preventDefault(); send(input); }}>
          <input value={input} maxLength={MAX_CHARS} onChange={e => setInput(e.target.value)} placeholder="> ask about Anurag's work…" disabled={loading} aria-label="Your question" />
          <span className={`wc ${over ? 'over' : ''}`}>{words}/{MAX_WORDS}</span>
          <button type="submit" disabled={loading || !sanitize(input) || over} aria-label="Send"><Send size={16} /></button>
        </form>
      </div>
    </>
  );
};
