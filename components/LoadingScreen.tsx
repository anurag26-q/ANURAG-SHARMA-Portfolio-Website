import React, { useEffect, useState } from 'react';

interface Props {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<Props> = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = "<Anurag Sharma />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 text-slate-100 flex flex-col items-center justify-center font-mono">
      <div className="relative text-3xl md:text-5xl font-bold">
        <span className="text-slate-100">{text}</span>
        <span className="animate-blink ml-1 inline-block w-3 h-8 md:h-12 bg-primary-500 align-middle"></span>
      </div>
      
      <div className="mt-4 text-slate-500 text-sm animate-pulse">
          Initializing...
      </div>
    </div>
  );
};