import React, { useEffect, useState } from 'react';

const links = [
  ['title', '01 TITLE'], ['spec', '02 SPEC'], ['bom', '03 BOM'], ['systems', '04–09 SYSTEMS'],
  ['archive', '10 ARCHIVE'], ['revisions', '11 REVISIONS'], ['contact', '12 CONTACT'],
];

export const Navbar: React.FC = () => {
  const [active, setActive] = useState('title');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      let a = 'title';
      for (const [id] of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) a = id;
      }
      setActive(a);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="top">
      <a className="brand" href="#title">A. SHARMA</a>
      <nav className={open ? 'open' : ''}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <span className="rev2">DWG SET · REV 2026</span>
      <button className="menu" onClick={() => setOpen(o => !o)} aria-label="Menu">{open ? 'CLOSE' : 'INDEX'}</button>
    </div>
  );
};
