import React, { useMemo } from 'react';

function gearPath(cx: number, cy: number, r: number, teeth: number, depth: number) {
  let d = '';
  const n = teeth * 4;
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    const rr = i % 4 < 2 ? r : r - depth;
    d += (i ? 'L' : 'M') + (cx + rr * Math.cos(a)).toFixed(1) + ' ' + (cy + rr * Math.sin(a)).toFixed(1);
  }
  return d + 'Z';
}

const S = { fill: 'none', stroke: '#eaf2ff', strokeWidth: 1 } as const;

/** Fixed technical drawings behind the page. */
export const Background: React.FC = () => {
  const net = useMemo(() => {
    const Lx = [0, 90, 180, 270], Ly = [[40, 100, 160], [10, 70, 130, 190], [10, 70, 130, 190], [70, 130]];
    const lines: React.ReactElement[] = [], nodes: React.ReactElement[] = [];
    for (let a = 0; a < 3; a++) for (const y1 of Ly[a]) for (const y2 of Ly[a + 1])
      lines.push(<line key={`${a}-${y1}-${y2}`} x1={Lx[a] + 20} y1={y1 + 20} x2={Lx[a + 1] + 20} y2={y2 + 20} {...S} strokeOpacity={0.5} />);
    Ly.forEach((ys, a) => ys.forEach(y => nodes.push(<circle key={`n${a}-${y}`} cx={Lx[a] + 20} cy={y + 20} r={9} {...S} fill="#0b3a8a" />)));
    return [...lines, ...nodes];
  }, []);

  const ticks = useMemo(() => Array.from({ length: 72 }, (_, i) => {
    const a = (i * 5 * Math.PI) / 180, r1 = i % 6 ? 142 : 132;
    return <line key={i} x1={150 + r1 * Math.cos(a)} y1={150 + r1 * Math.sin(a)} x2={150 + 150 * Math.cos(a)} y2={150 + 150 * Math.sin(a)} {...S} />;
  }), []);

  return (
    <>
      <div className="bgdraw" aria-hidden>
        <svg style={{ right: -140, top: '12vh' }} width="460" height="460" viewBox="0 0 460 460">
          <g className="gear">
            <path d={gearPath(230, 230, 200, 24, 18)} {...S} strokeWidth={1.4} />
            <circle cx="230" cy="230" r="150" {...S} /><circle cx="230" cy="230" r="46" {...S} />
            {[0, 1, 2, 3, 4, 5].map(i => <circle key={i} cx={230 + 100 * Math.cos((i * Math.PI) / 3)} cy={230 + 100 * Math.sin((i * Math.PI) / 3)} r="22" {...S} />)}
          </g>
          <line x1="0" y1="230" x2="460" y2="230" {...S} strokeDasharray="20 4 3 4" />
          <line x1="230" y1="0" x2="230" y2="460" {...S} strokeDasharray="20 4 3 4" />
        </svg>
        <svg style={{ right: 250, top: 'calc(12vh + 330px)' }} width="250" height="250" viewBox="0 0 250 250">
          <g className="gear2"><path d={gearPath(125, 125, 105, 14, 14)} {...S} strokeWidth={1.4} /><circle cx="125" cy="125" r="30" {...S} /></g>
        </svg>
        <svg style={{ left: -60, bottom: '6vh' }} width="300" height="300" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="150" {...S} /><circle cx="150" cy="150" r="110" {...S} strokeDasharray="4 4" />{ticks}
          <path d="M150 20 L165 150 L150 280 L135 150Z" {...S} /><path d="M20 150 L150 140 L280 150 L150 160Z" {...S} />
          <text x="146" y="14" fill="#eaf2ff" fontSize="12" fontFamily="JetBrains Mono">N</text>
        </svg>
        <svg style={{ left: '3vw', top: '16vh' }} width="320" height="260" viewBox="0 0 320 260">
          {net}<text x="20" y="250" fill="#eaf2ff" fontSize="11" fontFamily="JetBrains Mono">FIG. 1 — NEURAL NET, 4-LAYER</text>
        </svg>
        <svg style={{ left: '44vw', bottom: -40 }} width="260" height="260" viewBox="0 0 260 260">
          <path d="M130 30 L220 80 L220 180 L130 230 L40 180 L40 80Z M130 30 L130 130 M40 80 L130 130 L220 80 M130 130 L130 230" {...S} strokeWidth={1.3} />
          <path d="M85 55 L175 105 L175 205 M175 105 L220 80" {...S} strokeDasharray="4 4" />
          <text x="60" y="252" fill="#eaf2ff" fontSize="11" fontFamily="JetBrains Mono">ISO VIEW — DATA CUBE</text>
        </svg>
      </div>
    </>
  );
};
