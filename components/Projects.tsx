import React from 'react';
import { Sheet } from './Sheet';
import { systems, archive, Item, profile } from '../data';

const delay = (i: number) => ({ transitionDelay: `${(i * 0.1).toFixed(2)}s` });

/** Renders a blueprint diagram from the compact item list in data.ts */
const Diagram: React.FC<{ items: Item[]; uid: string }> = ({ items, uid }) => {
  let k = 0;
  const out: React.ReactNode[] = [];
  items.forEach((it, idx) => {
    const [t, ...v] = it as any[];
    const d = delay(idx);
    if (t === 'hbox') { const [x, y, w, h] = v; out.push(<rect key={k++} x={x + 6} y={y + 6} width={w - 12} height={h - 12} className="hb" style={{ fill: `url(#hp-${uid})` }} />); }
    else if (t === 'box') {
      const [x, y, w, h, l, s] = v;
      out.push(<rect key={k++} x={x} y={y} width={w} height={h} rx={3} className="d" pathLength={1} style={d} />);
      if (l) out.push(<text key={k++} x={x + w / 2} y={y + h / 2 + (s ? -3 : 4)} textAnchor="middle" className="lab" style={d}>{l}</text>);
      if (s) out.push(<text key={k++} x={x + w / 2} y={y + h / 2 + 14} textAnchor="middle" className="sub" style={d}>{s}</text>);
    } else if (t === 'dia') {
      const [cx, cy, w, h, l] = v;
      out.push(<path key={k++} d={`M${cx - w / 2} ${cy}L${cx} ${cy - h / 2}L${cx + w / 2} ${cy}L${cx} ${cy + h / 2}Z`} className="d" pathLength={1} style={d} />);
      out.push(<text key={k++} x={cx} y={cy + 4} textAnchor="middle" className="lab" style={d}>{l}</text>);
    } else if (t === 'circ') {
      const [cx, cy, r, l] = v;
      out.push(<circle key={k++} cx={cx} cy={cy} r={r} className="d" pathLength={1} style={d} />);
      if (l) out.push(<text key={k++} x={cx} y={cy + r + 16} textAnchor="middle" className="sub" style={d}>{l}</text>);
    } else if (t === 'ln') {
      out.push(<path key={k++} d={v[0]} className="d" pathLength={1} markerEnd={v[1] === false ? undefined : `url(#ar-${uid})`} style={d} />);
    } else if (t === 'dash') {
      out.push(<path key={k++} d={v[0]} className="dm" strokeDasharray="5 4" markerEnd={`url(#ar2-${uid})`} style={d} />);
    } else if (t === 'dim') {
      const [x1, x2, y, l] = v;
      out.push(<path key={k++} d={`M${x1} ${y - 8}V${y + 8}M${x2} ${y - 8}V${y + 8}M${x1} ${y}H${x2}`} className="dm" />);
      out.push(<text key={k++} x={(x1 + x2) / 2} y={y - 6} textAnchor="middle" className="sub">{l}</text>);
    } else if (t === 'txt') {
      out.push(<text key={k++} x={v[0]} y={v[1]} textAnchor={v[3] || 'start'} className="sub" style={d}>{v[2]}</text>);
    } else if (t === 'ltxt') {
      out.push(<text key={k++} x={v[0]} y={v[1]} textAnchor="middle" className="lab" style={d}>{v[2]}</text>);
    } else if (t === 'note') {
      const [x, y, s, p] = v;
      out.push(<text key={k++} x={x} y={y} className="hn" style={{ transitionDelay: '1.6s' }}>{s}</text>);
      if (p) out.push(<path key={k++} d={p} className="hp" pathLength={1} style={{ transitionDelay: '1.8s' }} />);
    }
  });
  return (
    <svg viewBox="0 0 1000 370" role="img">
      <defs>
        <pattern id={`hp-${uid}`} width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#eaf2ff" strokeOpacity=".28" strokeWidth="1.2" />
        </pattern>
        <marker id={`ar-${uid}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#eaf2ff" /></marker>
        <marker id={`ar2-${uid}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8fb9ff" /></marker>
      </defs>
      {out}
    </svg>
  );
};

export const Projects: React.FC = () => (
  <div id="systems">
    {systems.map((s, i) => {
      const n = String(i + 4).padStart(2, '0');
      return (
        <Sheet key={s.title} id={`sys-${n}`} label={`SHEET ${n} / 12 — SYSTEM DRAWING`} cut={String.fromCharCode(68 + i)}
          titleBlock={[['SHEET', n], ['TYPE', 'SYSTEM'], ['STATUS', s.status]]}>
          <h2>{s.title}<small>{s.sub}</small></h2>
          <span className="org">{s.org.toUpperCase()}</span>
          <p style={{ maxWidth: 820, marginTop: 14 }}>{s.desc}</p>
          <div className="dgw"><Diagram items={s.items} uid={n} /></div>
          <div className="pmeta">{s.meta.map(([k, v]) => <div key={k}><span>{k}</span>{v}</div>)}</div>
        </Sheet>
      );
    })}
    <Sheet id="archive" label="SHEET 10 / 12 — ARCHIVE" cut="J" titleBlock={[['SHEET', '10'], ['TYPE', 'ARCHIVE'], ['ITEMS', String(archive.length).padStart(2, '0')]]}>
      <h2>EARLIER BUILDS<small>ARCHIVED DRAWINGS · PREVIOUS PROJECTS</small></h2>
      <div className="arch">
        {archive.map((a, i) => (
          <a className="arc" key={a.title} href={profile.github} target="_blank" rel="noreferrer">
            <span className="no">DWG-{String(i + 1).padStart(3, '0')}</span>
            <h3>{a.title}</h3>
            <div className="t">{a.tech}</div>
            <p>{a.desc}</p>
          </a>
        ))}
      </div>
    </Sheet>
  </div>
);
