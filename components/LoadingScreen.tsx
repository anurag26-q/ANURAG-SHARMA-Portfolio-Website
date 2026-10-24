import React, { useEffect, useState } from 'react';

const steps = ['LOADING SHEET SET…', 'CALIBRATING GRID…', 'PLOTTING SYSTEMS…', 'READY.'];

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [p, setP] = useState(0);
  const [out, setOut] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setP(v => Math.min(100, v + 4)), 40);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (p < 100) return;
    const a = setTimeout(() => setOut(true), 250);
    const b = setTimeout(onComplete, 850);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, [p, onComplete]);
  return (
    <div className={`loader ${out ? 'out' : ''}`}>
      <div className="box">
        <div className="ttl">A. SHARMA · DWG SET</div>
        <div>{steps[Math.min(3, Math.floor(p / 34))]}</div>
        <div className="bar2"><i style={{ width: `${p}%` }} /></div>
        <div className="ln2">{String(p).padStart(3, '0')}%</div>
      </div>
    </div>
  );
};
