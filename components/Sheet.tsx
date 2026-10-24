import React from 'react';
import { useReveal } from './RevealOnScroll';

interface Props {
  id: string;
  label: string;          // e.g. "SHEET 02 / 12 — SPECIFICATION"
  titleBlock: [string, string][];
  cut?: string;           // section-cut letter shown below the sheet
  className?: string;
  frameClass?: string;
  reveal?: boolean;
  children: React.ReactNode;
}

const Z = ['A', 'B', 'C', 'D', 'E', 'F'];

export const Sheet: React.FC<Props> = ({ id, label, titleBlock, cut, className = '', frameClass = '', reveal = true, children }) => {
  const { ref, inView } = useReveal<HTMLDivElement>(0.12);
  return (
    <section className={`sheet ${className}`} id={id}>
      <div ref={ref} className={`frame ${frameClass} ${reveal ? 'rvl' : ''} ${inView || !reveal ? 'in' : ''}`}>
        <div className="rt" /><div className="rl" />
        <div className="zt">{Z.map(z => <span key={z}>{z}</span>)}</div>
        <div className="zl">{[1, 2, 3, 4].map(n => <span key={n}>{n}</span>)}</div>
        <div className="reg a"><i /></div><div className="reg b"><i /></div>
        <i className="c tl" /><i className="c tr" /><i className="c bl" /><i className="c br" />
        <span className="shn">{label}</span>
        {children}
        <div className="tbk">{titleBlock.map(([k, v]) => <div key={k}>{k}<b>{v}</b></div>)}</div>
      </div>
      {cut && <div className="cut"><span className="l">{cut}</span><span className="r">{cut}</span></div>}
    </section>
  );
};
