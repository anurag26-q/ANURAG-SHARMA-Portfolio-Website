import React from 'react';
import { Sheet } from './Sheet';
import { profile, spec, skills } from '../data';

export const About: React.FC = () => (
  <>
    <Sheet id="spec" label="SHEET 02 / 12 — SPECIFICATION" cut="B" titleBlock={[['SHEET', '02'], ['TYPE', 'SPEC'], ['REV', 'D']]}>
      <h2>ENGINEER SPECIFICATION<small>GENERAL NOTES &amp; DATA</small></h2>
      <div className="two">
        <table><tbody>
          {spec.map(([k, v]) => <tr key={k}><td className="k">{k}</td><td className="pre">{v}</td></tr>)}
          <tr><td className="k">STATUS</td><td style={{ color: 'var(--ok)' }}>● OPEN TO OPPORTUNITIES</td></tr>
        </tbody></table>
        <div>
          <p><span style={{ color: 'var(--dim)' }}>NOTE 1.</span> {profile.summary}</p><br />
          {profile.notes.map((n, i) => <React.Fragment key={i}><p><span style={{ color: 'var(--dim)' }}>NOTE {i + 2}.</span> {n}</p><br /></React.Fragment>)}
          <p className="hand" style={{ fontSize: 24 }}>verified before it ships ✓</p>
        </div>
      </div>
    </Sheet>
    <Sheet id="bom" label="SHEET 03 / 12 — BILL OF MATERIALS" cut="C" titleBlock={[['SHEET', '03'], ['TYPE', 'BOM'], ['GROUPS', String(skills.length).padStart(2, '0')]]}>
      <h2>BILL OF MATERIALS<small>TECHNICAL SKILLS USED IN ASSEMBLY</small></h2>
      <table className="bom" style={{ marginTop: 28 }}><tbody>
        <tr><th>ITEM</th><th>GROUP</th><th>COMPONENTS</th></tr>
        {skills.map((s, i) => <tr key={s.cat}><td>{String(i + 1).padStart(2, '0')}</td><td>{s.cat}</td><td>{s.items}</td></tr>)}
      </tbody></table>
    </Sheet>
  </>
);
