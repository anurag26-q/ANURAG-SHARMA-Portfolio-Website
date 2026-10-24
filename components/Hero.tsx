import React from 'react';
import { Sheet } from './Sheet';
import { profile } from '../data';

export const Hero: React.FC = () => (
  <Sheet id="title" className="hero" label="SHEET 01 / 12 — TITLE" cut="A" reveal={false}
    titleBlock={[['DRAWN BY', 'ANURAG SHARMA'], ['DISCIPLINE', 'AI / ML'], ['SCALE', '1 : 1']]}>
    <div className="cons" aria-hidden>
      <svg>
        <line className="cl" x1="0" y1="62%" x2="100%" y2="62%" /><line className="cl" x1="82%" y1="0" x2="82%" y2="100%" />
        <circle className="cc" cx="82%" cy="62%" r="140" /><circle className="cc" cx="82%" cy="62%" r="200" strokeDasharray="3 6" />
        <text className="ct" x="83%" y="61%">R140</text><text className="ct" x="83%" y="20%">℄ CENTER LINE</text><text className="ct" x="4%" y="61%">DATUM A</text>
      </svg>
    </div>
    <div className="lbl">PORTFOLIO DRAWING SET · AI / ML ENGINEERING</div>
    <svg className="name" viewBox="0 0 1000 330" role="img" aria-label={profile.name}>
      <text x="0" y="135">{profile.first}</text><text className="l2" x="0" y="295">{profile.last}</text>
    </svg>
    <div className="hand note">← drawn to spec, built for production</div>
    <div className="row">
      <div>
        <p>{profile.role} · {profile.location}. I build and deploy <strong>production LLM systems</strong> — Agentic AI, RAG &amp; Graph RAG pipelines, LLM fine-tuning (PEFT, LoRA) and vLLM serving — currently automating insurance operations at <strong>FBSPL</strong>.</p>
        <div className="btns">
          <a className="btn f" href="#systems">VIEW SYSTEMS ↓</a>
          <a className="btn" href={profile.resume} download>RESUME.PDF</a>
          <a className="btn" href="#contact">CONTACT</a>
        </div>
      </div>
      <div className="stamp" aria-hidden>
        <svg viewBox="0 0 200 200"><defs><path id="cp" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" /></defs>
          <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="3" /><circle cx="100" cy="100" r="64" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <text fontFamily="JetBrains Mono" fontSize="15" fontWeight="700" fill="currentColor" letterSpacing="3"><textPath href="#cp">AI/ML ENGINEER · UDAIPUR · INDIA · </textPath></text></svg>
        <div className="mid">APPROVED<br />FOR HIRE</div>
      </div>
    </div>
    <div className="kpis">
      <div><b>~2 yrs</b>PRODUCTION LLM SYSTEMS</div>
      <div><b>90–95%</b>EXTRACTION ACCURACY</div>
      <div><b>99%</b>ROUTING ACCURACY</div>
      <div><b>~414 ms</b>p50 ON vLLM</div>
    </div>
  </Sheet>
);
