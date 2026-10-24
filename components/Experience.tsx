import React, { useState } from 'react';
import { Sheet } from './Sheet';
import { jobs } from '../data';

const Job: React.FC<{ j: typeof jobs[number] }> = ({ j }) => {
  const [open, setOpen] = useState(false);
  const pts = open ? j.points : j.points.slice(0, 3);
  return (
    <div className="job">
      <div className="rv"><b>{j.rev}</b><span>REV</span></div>
      <div className="bd">
        <div className="hd"><h3>{j.role} <em>@ {j.org}</em></h3><span className="pd">{j.period.toUpperCase()}</span></div>
        {j.context && <div className="cx">{j.context}</div>}
        <ul>{pts.map((p, i) => <li key={i}>{p}</li>)}</ul>
        {j.points.length > 3 && <button className="more" onClick={() => setOpen(o => !o)}>{open ? '− show less' : `+ ${j.points.length - 3} more details`}</button>}
        <div className="tags">{j.tags.map(t => <span key={t}>{t}</span>)}</div>
      </div>
    </div>
  );
};

export const Experience: React.FC = () => (
  <Sheet id="revisions" label="SHEET 11 / 12 — REVISION HISTORY" cut="K" titleBlock={[['SHEET', '11'], ['TYPE', 'LOG'], ['LATEST', `REV ${jobs[0].rev}`]]}>
    <h2>REVISION HISTORY<small>WORK EXPERIENCE · LATEST FIRST</small></h2>
    <div className="jobs">{jobs.map(j => <Job key={j.org} j={j} />)}</div>
  </Sheet>
);
