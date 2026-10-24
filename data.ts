// ---------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site.
// ---------------------------------------------------------------

export const profile = {
  name: 'Anurag Sharma',
  first: 'ANURAG',
  last: 'SHARMA',
  role: 'AI/ML Engineer',
  location: 'Udaipur, India',
  email: 'anuragparashar111@gmail.com',
  phone: '+91-9755617871',
  phoneHref: 'tel:+919755617871',
  linkedin: 'https://www.linkedin.com/in/anurag-sharma-q',
  github: 'https://github.com/anurag26-q',
  resume: '/resume.pdf',
  summary:
    'AI/ML Engineer with ~2 years building and deploying production LLM systems: Agentic AI, RAG and Graph RAG pipelines, and LLM fine-tuning (PEFT, LoRA) served on AWS.',
  notes: [
    'Currently building insurance-operations automation at FBSPL: LLM-assisted policy checking, retrieval-first document extraction at 90–95% accuracy, and a verification-gated UI automation engine with graph-based self-healing.',
    'Deep learning background spanning CNN / BiLSTM architectures through transformer fine-tuning and vLLM deployment.',
    'Research: M.Tech thesis on real-time gesture recognition (MediaPipe → 1D-CNN → BiLSTM + self-attention).',
  ],
};

export const spec: [string, string][] = [
  ['NAME', 'Anurag Sharma'],
  ['ROLE', 'AI/ML Engineer · FBSPL'],
  ['LOCATION', 'Udaipur, India'],
  ['EXPERIENCE', '~2 years · production LLM systems'],
  ['EDUCATION', 'M.Tech CS (pursuing) — Shriram College of Engg. & Mgmt\nB.Tech IT — ITM University Gwalior (CGPA 8.0)'],
  ['TRAINING', 'Full Stack Data Science — Naresh IT, Hyderabad (2025)'],
  ['CERTIFICATION', 'Cambridge Business English Certificate (2024)'],
];

export const skills: { cat: string; items: string }[] = [
  { cat: 'AI/ML & Deep Learning', items: 'Deep Learning, CNNs, BiLSTM, Self-Attention, Transformers, PyTorch, LLM Fine-Tuning (PEFT, LoRA, QLoRA), Model Serving (vLLM), LLM Evaluation (RAGAS, DeepEval)' },
  { cat: 'GenAI & Agentic AI', items: 'Agentic AI, Multi-Agent Systems, RAG, Graph RAG, Hybrid Search (BM25 + vector), Prompt Engineering, Tool / Function Calling, MCP, LangChain, LangGraph, Graphiti, Document Intelligence & OCR' },
  { cat: 'Cloud & Deployment', items: 'AWS (EC2, S3, Bedrock), Docker, Kubernetes, CI/CD, Redis, Celery, Git' },
  { cat: 'Languages & Data', items: 'Python, SQL, PostgreSQL, PostGIS, Neo4j, FalkorDB, MongoDB, Typesense, FAISS, Qdrant, Pinecone, ChromaDB' },
  { cat: 'Backend & LLM APIs', items: 'FastAPI, REST APIs, Django, asyncpg, WebSockets, Rasa · Claude (Anthropic), OpenAI, AWS Bedrock, Gemini, Llama, Mistral, Qwen' },
];

export interface Job {
  rev: string;
  role: string;
  org: string;
  period: string;
  context?: string;
  points: string[];
  tags: string[];
}

export const jobs: Job[] = [
  {
    rev: 'D', role: 'AI/ML Engineer', org: 'FBSPL', period: 'Apr 2026 – Present',
    context: 'Insurance operations automation. The agency management systems (Applied Epic, AMS360, EZLynx) have no API access, so document parsing and browser automation are the main paths.',
    points: [
      'Policy checking tool: LLM-assisted comparison of issued policies against agency records — cut a 2–3 hour manual checklist to ~45 minutes with ~70% of items automated; handles chunked PDFs up to ~300 pages and surfaced a real policy-number mismatch.',
      'Retrieval-first extraction: native PDF text + Typesense hybrid search (BM25 + vector, Gemini embeddings) narrows context before LLM structuring — replacing a page-by-page multimodal approach at significantly lower cost.',
      'Document intelligence (ACORD forms, dec pages, loss runs): layout-aware field linking; hybrid OCR + LLM validation reaching 90–95% extraction accuracy.',
      'Verification-gated UI automation platform: application-agnostic engine running YAML runbooks synthesized from SOPs and screen recordings, checked by a deterministic validator before they run.',
      'Tiered resolution & graph self-healing: text anchor → cached selector → lexical → LLM → vision; verified transitions form a state graph that routes stray runs back on track.',
      'Crew Support: geospatial crew-matchmaking service (retrieve-then-rank) with PostGIS eligibility filters and explainable, versioned weighted scoring.',
      'Agnos: fine-tuned Qwen2.5-Coder-1.5B with LoRA as a HERMES tool-call router across 125 agents — 99% routing, 100% priority, 0 garbage tokens; served on vLLM at ~414 ms p50 and ~3,400 tok/s.',
    ],
    tags: ['LLMs', 'Typesense', 'OCR', 'Browser Automation', 'PostGIS', 'LoRA', 'vLLM'],
  },
  {
    rev: 'C', role: 'AI/ML Engineer', org: 'QSS Technosoft', period: 'Feb 2026 – Apr 2026',
    points: [
      'Graph RAG pipeline with Graphiti temporal knowledge graphs (FalkorDB + Neo4j) for multi-hop retrieval across ad, podcast and Spotify data; AWS Bedrock (Claude, Titan) for NL-to-Cypher.',
      'Built scavenger-falkordb, a custom MCP server exposing FalkorDB schema introspection and Cypher execution to Claude / LangGraph agents, with human-in-the-loop triple validation.',
      'MindCollect: hybrid Graph RAG (Neo4j + HNSW vector index), async ingestion pipeline on S3 and a multi-agent framework for intent, context gathering and reports.',
      'Averisource: GenAI feature that analyzes legacy COBOL and auto-generates documentation and business-rule summaries.',
    ],
    tags: ['Graphiti', 'Neo4j', 'FalkorDB', 'MCP', 'AWS Bedrock', 'LangGraph'],
  },
  {
    rev: 'B', role: 'AI/ML Developer', org: 'Plutos.One', period: 'Sep 2025 – Feb 2026',
    points: [
      'Built an LLM-based financial chatbot presented at Global Fintech Fest 2025.',
      'Contributed to a payment-network chatbot deployed across 6 countries.',
      'FastAPI backend services for model serving; improved response consistency and latency by restructuring prompts and inference flow.',
      'WhatsApp visa chatbot: multilingual Rasa assistant with Gupshup, Redis/Celery and Docker — load-tested to 5K+ users.',
    ],
    tags: ['LLMs', 'FastAPI', 'Rasa', 'Redis', 'Celery', 'Docker'],
  },
  {
    rev: 'A', role: 'Software Developer Intern', org: 'DigiMonk Technologies', period: 'Jun 2024 – Nov 2024',
    points: ['Built an AI Sales Dialer Agent (Vapi.ai + Twilio) boosting lead conversion by 25%; REST APIs cut manual work by 40%.'],
    tags: ['Vapi.ai', 'Twilio', 'Django', 'REST'],
  },
];

// --- System drawings ------------------------------------------------
// Diagram items: ['box',x,y,w,h,label,sub?] ['hbox',x,y,w,h] ['dia',cx,cy,w,h,label]
// ['circ',cx,cy,r,label?] ['ln',path,arrow?] ['dash',path] ['dim',x1,x2,y,label]
// ['txt',x,y,text,anchor?] ['ltxt',x,y,label] ['note',x,y,text,path?]   (canvas is 1000 x 370)
export type Item = (string | number | boolean)[];

export interface System {
  title: string;
  sub: string;
  org: string;
  desc: string;
  meta: [string, string][];
  items: Item[];
  status: string;
}

export const systems: System[] = [
  {
    title: 'POLICY CHECK & EXTRACTION', sub: 'DOCUMENT INTELLIGENCE · INSURANCE', org: 'FBSPL', status: 'LIVE',
    desc: 'Retrieval-first extraction for ACORD forms, dec pages and loss runs. Native PDF text and hybrid search narrow the context before the LLM structures fields; a validation gate checks every result. Powers a policy-checking tool that cut a 2–3 hour checklist to ~45 minutes.',
    meta: [['ACCURACY', '90–95%'], ['CHECKLIST', '2–3 h → ~45 min'], ['AUTOMATED', '~70% of items'], ['DOCS', 'up to ~300 pages']],
    items: [
      ['box', 20, 150, 130, 80, 'PDF INPUT', 'ACORD · dec pages'], ['ln', 'M150 190H215'],
      ['box', 215, 150, 140, 80, 'NATIVE TEXT', '+ layout'], ['ln', 'M355 190H410'],
      ['hbox', 410, 120, 180, 140], ['box', 410, 120, 180, 140, 'HYBRID SEARCH', 'Typesense BM25+vec'], ['ln', 'M590 190H650'],
      ['box', 650, 150, 120, 80, 'LLM', 'structuring'], ['ln', 'M770 190H800'],
      ['dia', 860, 190, 120, 100, 'VALIDATE'],
      ['dash', 'M860 240V320H500V265'], ['txt', 680, 340, 'RE-QUERY ON LOW CONFIDENCE', 'middle'],
      ['dim', 410, 590, 95, 'NARROWS CONTEXT'],
      ['note', 620, 60, '90–95% accuracy', 'M700 68 Q760 90 850 140'],
    ],
  },
  {
    title: 'UI AUTOMATION ENGINE', sub: 'VERIFICATION-GATED · SELF-HEALING', org: 'FBSPL', status: 'LIVE',
    desc: 'An application-agnostic automation engine for systems with no API (Applied Epic and others). SOPs and screen recordings become YAML runbooks, a deterministic validator checks them before they run, and each step resolves its target through ordered tiers. Verified transitions form a state graph that routes stray runs back on track.',
    meta: [['INPUT', 'SOPs + recordings'], ['RUNBOOKS', 'YAML'], ['RESOLUTION', '5 tiers'], ['RECOVERY', 'State graph']],
    items: [
      ['box', 20, 40, 140, 50, 'SOP DOCS'], ['box', 20, 130, 140, 50, 'RECORDINGS'],
      ['ln', 'M160 65 L230 100'], ['ln', 'M160 155 L230 120'],
      ['box', 230, 80, 130, 60, 'YAML RUNBOOK'], ['ln', 'M360 110H410'],
      ['dia', 480, 110, 140, 90, 'VALIDATOR'], ['ln', 'M550 110H600'],
      ['hbox', 600, 30, 170, 250], ['box', 600, 30, 170, 250, '', ''], ['ltxt', 685, 62, 'TIERED RESOLVER'],
      ['txt', 685, 100, '1 TEXT ANCHOR', 'middle'], ['txt', 685, 135, '2 CACHED SELECTOR', 'middle'], ['txt', 685, 170, '3 LEXICAL MATCH', 'middle'],
      ['txt', 685, 205, '4 LLM', 'middle'], ['txt', 685, 240, '5 VISION', 'middle'],
      ['ln', 'M770 155H830'],
      ['circ', 860, 110, 12], ['circ', 940, 110, 12], ['circ', 860, 200, 12], ['circ', 940, 200, 12],
      ['ln', 'M872 110H928', false], ['ln', 'M860 122V188', false], ['ln', 'M940 122V188', false], ['ln', 'M872 200H928', false], ['ln', 'M870 120L930 190', false],
      ['txt', 900, 245, 'STATE GRAPH', 'middle'],
      ['note', 60, 325, 'cache a selector only after assertions pass', 'M450 318 Q570 310 600 270'],
    ],
  },
  {
    title: 'AGNOS TOOL-CALL ROUTER', sub: 'LORA FINE-TUNING · vLLM SERVING', org: 'FBSPL · Agnos', status: 'LIVE',
    desc: 'Fine-tuned Qwen2.5-Coder-1.5B-Instruct with LoRA as a HERMES tool-call router across 125 agents. Fixed CJK garbage tokens by unfreezing the LM head (modules_to_save), then deployed on vLLM with the stock hermes parser and benchmarked with GuideLLM.',
    meta: [['ROUTING', '99% · 100% priority'], ['LATENCY', '~414 ms p50'], ['THROUGHPUT', '~3,400 tok/s'], ['LOAD', '43.7 req/s · 100% SLA']],
    items: [
      ['box', 20, 145, 120, 70, 'REQUEST'], ['ln', 'M140 180H200'],
      ['hbox', 200, 100, 200, 160], ['box', 200, 100, 200, 160, 'QWEN2.5-CODER 1.5B', 'LoRA adapter'], ['ln', 'M400 180H460'],
      ['box', 460, 145, 140, 70, 'HERMES PARSER', 'vLLM'],
      ['ln', 'M600 160 L720 50'], ['ln', 'M600 170 L720 130'], ['ln', 'M600 190 L720 230'], ['ln', 'M600 200 L720 310'],
      ['box', 720, 30, 170, 40, 'AGENT 001'], ['box', 720, 110, 170, 40, 'AGENT 002'], ['box', 720, 210, 170, 40, 'AGENT 124'], ['box', 720, 290, 170, 40, 'AGENT 125'],
      ['txt', 805, 185, '· · ·', 'middle'],
      ['dim', 200, 400, 85, 'FINE-TUNED CORE'],
      ['note', 40, 320, '0 garbage tokens on 3K samples', 'M300 310 Q330 290 300 262'],
    ],
  },
  {
    title: 'TEMPORAL GRAPH RAG + MCP', sub: 'KNOWLEDGE GRAPHS · AGENTS', org: 'QSS Technosoft', status: 'SHIPPED',
    desc: 'Graph RAG with Graphiti temporal knowledge graphs on FalkorDB + Neo4j for multi-hop retrieval across ad, podcast and Spotify datasets. NL-to-Cypher runs on AWS Bedrock, and a custom MCP server (scavenger-falkordb) lets Claude / LangGraph agents introspect the schema and run Cypher with human-in-the-loop validation.',
    meta: [['GRAPH', 'Graphiti · FalkorDB · Neo4j'], ['LLM', 'Bedrock (Claude, Titan)'], ['AGENTS', 'LangGraph'], ['TOOLING', 'Custom MCP server']],
    items: [
      ['box', 20, 60, 140, 60, 'DATASETS', 'ads · podcasts'], ['ln', 'M160 90H220'], ['box', 220, 60, 140, 60, 'GRAPHITI', 'temporal KG'], ['ln', 'M360 90 L420 90'],
      ['circ', 470, 70, 13], ['circ', 545, 45, 10], ['circ', 610, 90, 15], ['circ', 530, 125, 10], ['circ', 470, 140, 9],
      ['ln', 'M483 66L535 48', false], ['ln', 'M555 50L597 82', false], ['ln', 'M478 80L522 118', false], ['ln', 'M540 125L596 98', false], ['ln', 'M470 83V131', false],
      ['txt', 540, 175, 'FALKORDB + NEO4J', 'middle'],
      ['ln', 'M610 108 L650 230'],
      ['hbox', 600, 230, 180, 80], ['box', 600, 230, 180, 80, 'MCP SERVER', 'scavenger-falkordb'],
      ['ln', 'M780 270H830'], ['box', 830, 230, 150, 80, 'AGENTS', 'Claude · LangGraph'],
      ['dash', 'M905 230V140H660'], ['txt', 800, 130, 'NL → CYPHER (BEDROCK)', 'middle'],
      ['note', 120, 280, 'human-in-the-loop before graph commit', 'M440 285 Q540 300 598 280'],
    ],
  },
  {
    title: 'CREW MATCHMAKING SERVICE', sub: 'GEOSPATIAL · RETRIEVE-THEN-RANK', org: 'FBSPL · Crew Support', status: 'LIVE',
    desc: 'A standalone geospatial matchmaking service for aviation crew staffing. Hard eligibility filters (type rating, medical class, passport validity, PostGIS ST_DWithin radius, availability) run in SQL; tunable weighted scoring in Python ranks the rest. Weights live in a versioned table, ratings use Bayesian shrinkage, and a read-only DB role means a scoring bug can only mis-order — never mis-assign.',
    meta: [['FILTER', 'SQL + PostGIS'], ['RANK', 'Weighted scoring'], ['RATINGS', 'Bayesian shrinkage'], ['SAFETY', 'Read-only DB role']],
    items: [
      ['box', 20, 145, 130, 70, 'CREW POOL'], ['ln', 'M150 180H200'],
      ['ln', 'M200 95 L460 140 L460 220 L200 265 Z', false],
      ['txt', 330, 120, 'TYPE RATING', 'middle'], ['txt', 330, 160, 'MEDICAL · PASSPORT', 'middle'], ['txt', 330, 200, 'ST_DWithin RADIUS', 'middle'], ['txt', 330, 240, 'AVAILABILITY', 'middle'],
      ['ln', 'M460 180H520'],
      ['hbox', 520, 130, 180, 100], ['box', 520, 130, 180, 100, 'WEIGHTED SCORE', 'versioned ruleset'], ['ln', 'M700 180H760'],
      ['box', 760, 60, 200, 34, '#1  0.94'], ['box', 760, 110, 200, 34, '#2  0.91'], ['box', 760, 160, 200, 34, '#3  0.87'], ['box', 760, 210, 200, 34, '#4  0.82'],
      ['txt', 860, 270, 'RANKED SHORTLIST', 'middle'],
      ['note', 470, 320, 'can mis-order, never mis-assign', 'M610 300 Q640 270 610 236'],
    ],
  },
  {
    title: 'REAL-TIME GESTURE RECOGNITION', sub: 'M.TECH THESIS · DEEP LEARNING', org: 'Shriram College', status: 'RESEARCH',
    desc: 'Thesis pipeline: MediaPipe Holistic landmarks feed parallel 1D-CNN encoders, followed by a BiLSTM with self-attention for classification. Evaluated on SHREC’17 and a self-recorded gesture dataset. Review paper submitted to IJSREM (under review).',
    meta: [['INPUT', 'MediaPipe Holistic'], ['ENCODERS', 'Parallel 1D-CNN'], ['SEQUENCE', 'BiLSTM + attention'], ['DATA', 'SHREC’17 + custom']],
    items: [
      ['box', 20, 145, 130, 70, 'VIDEO', 'webcam'], ['ln', 'M150 180H200'],
      ['box', 200, 145, 150, 70, 'MEDIAPIPE', 'holistic landmarks'],
      ['ln', 'M350 170 L410 80'], ['ln', 'M350 180 L410 180'], ['ln', 'M350 190 L410 280'],
      ['box', 410, 50, 130, 60, '1D-CNN', 'hands'], ['box', 410, 150, 130, 60, '1D-CNN', 'pose'], ['box', 410, 250, 130, 60, '1D-CNN', 'face'],
      ['ln', 'M540 80 L610 160'], ['ln', 'M540 180 L610 180'], ['ln', 'M540 280 L610 200'],
      ['hbox', 610, 120, 180, 120], ['box', 610, 120, 180, 120, 'BiLSTM', '+ self-attention'], ['ln', 'M790 180H850'],
      ['box', 850, 145, 130, 70, 'GESTURE', 'class'],
      ['note', 640, 300, 'evaluated on SHREC’17', 'M700 290 Q720 270 700 245'],
    ],
  },
];

// Earlier projects (from previous portfolio)
export const archive: { title: string; tech: string; desc: string }[] = [
  { title: 'AI-Powered Customer Support Chatbot (RAG)', tech: 'FAISS · Gemini · LangChain · Python', desc: 'Enterprise RAG chatbot with document ingestion (PDF, CSV, text), adaptive top-k and hybrid search; 1K+ daily interactions, 30% lower latency and 20% better accuracy via reranking and caching.' },
  { title: 'WhatsApp Visa Chatbot', tech: 'Rasa · Django · Gupshup · Redis · Celery · Docker', desc: 'Real-time multilingual visa-assistance bot on WhatsApp with async task handling; load-tested to 5K+ concurrent users.' },
  { title: 'Sentiment Analysis for Movie Reviews', tech: 'BERT · LoRA · PyTorch · MLflow · Streamlit', desc: 'Fine-tuned BERT with LoRA on IMDb — 92% F1, 70% fewer trainable parameters and 40% faster inference, tracked in MLflow.' },
  { title: 'AI Sales Dialer Agent', tech: 'Vapi.ai · Twilio · Django', desc: 'Automated calling and lead-engagement agent with call-log and analytics APIs; +25% lead conversion.' },
];
