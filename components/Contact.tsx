import React from 'react';
import { Sheet } from './Sheet';
import { profile } from '../data';

export const Contact: React.FC = () => (
  <Sheet id="contact" frameClass="contact" label="SHEET 12 / 12 — SIGN-OFF" titleBlock={[['APPROVED', '________'], ['DATE', '2026'], ['SHEET', '12 / 12']]}>
    <h2>LET'S BUILD<br />SOMETHING.</h2>
    <span className="hand">open to AI/ML roles &amp; interesting problems →</span>
    <div className="links">
      <a className="btn f" href={`mailto:${profile.email}`}>EMAIL ME</a>
      <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GITHUB</a>
      <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
      <a className="btn" href={profile.resume} download>RESUME.PDF</a>
    </div>
    <div className="cinfo">
      <a href={`mailto:${profile.email}`}>✉ {profile.email}</a>
      <a href={profile.phoneHref}>☏ {profile.phone}</a>
      <span>⌖ {profile.location}</span>
    </div>
  </Sheet>
);
