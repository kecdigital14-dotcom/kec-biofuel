'use client';

import React, { useEffect, useState, useRef } from 'react';

const ROI_URL = process.env.NEXT_PUBLIC_BASE_URL
  ? `${process.env.NEXT_PUBLIC_BASE_URL}/roi`
  : 'https://www.kecbiofuel.com/roi';

/* ── tiny floating particle ── */
function Particle({ style }) {
  return <div style={style} />;
}

const QrScreen = () => {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pulseRing, setPulseRing] = useState(0);
  const [scanLine, setScanLine] = useState(false);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);

  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(ROI_URL)}&bgcolor=ffffff&color=1a6b2e&margin=12&qzone=2`;

  /* mount animation */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* pulse ring counter */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPulseRing(p => p + 1);
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, []);

  /* scan line loop */
  useEffect(() => {
    const toggle = () => setScanLine(s => !s);
    const t = setInterval(toggle, 2400);
    return () => clearInterval(t);
  }, []);

  /* canvas particles */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const W = canvas.width = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;
    const particles = Array.from({ length: 34 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 1 + Math.random() * 2.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -0.18 - Math.random() * 0.35,
      alpha: 0.12 + Math.random() * 0.28,
      color: Math.random() > 0.55 ? '#16a34a' : '#ea580c',
    }));
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
        if (p.x < -4) p.x = W + 4;
        if (p.x > W + 4) p.x = -4;
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleCopy = () => {
    navigator.clipboard?.writeText(ROI_URL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  /* ── styles ── */
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .qr-page {
      min-height: 100vh;
      background: #0c1a0e;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      position: relative;
      overflow: hidden;
      font-family: 'DM Sans', sans-serif;
    }

    /* background mesh */
    .qr-mesh {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 80% 50% at 20% 20%, rgba(22,163,74,0.18) 0%, transparent 65%),
        radial-gradient(ellipse 60% 40% at 80% 80%, rgba(234,88,12,0.13) 0%, transparent 60%),
        radial-gradient(ellipse 50% 60% at 50% 50%, rgba(22,163,74,0.07) 0%, transparent 70%);
      pointer-events: none;
    }

    /* grid lines */
    .qr-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(22,163,74,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(22,163,74,0.06) 1px, transparent 1px);
      background-size: 48px 48px;
      pointer-events: none;
    }

    /* canvas particles */
    .qr-canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    /* main card */
    .qr-card {
      position: relative;
      z-index: 10;
      width: 100%;
      max-width: 440px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(22,163,74,0.25);
      border-radius: 2rem;
      padding: 2.5rem 2rem;
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      box-shadow:
        0 0 0 1px rgba(22,163,74,0.08),
        0 32px 80px rgba(0,0,0,0.55),
        inset 0 1px 0 rgba(255,255,255,0.08);
      text-align: center;
      transform: translateY(32px);
      opacity: 0;
      transition: transform 0.72s cubic-bezier(.16,1,.3,1), opacity 0.72s ease;
    }
    .qr-card.in {
      transform: translateY(0);
      opacity: 1;
    }

    /* top badge */
    .qr-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      background: rgba(22,163,74,0.15);
      border: 1px solid rgba(22,163,74,0.35);
      color: #4ade80;
      padding: 0.35rem 1rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 1.4rem;
    }
    .qr-badge-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #4ade80;
      box-shadow: 0 0 8px #4ade80;
      animation: blink 2s ease-in-out infinite;
    }
    @keyframes blink {
      0%,100% { opacity:1; transform:scale(1); }
      50%      { opacity:0.5; transform:scale(1.4); }
    }

    /* headline */
    .qr-headline {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2rem, 6vw, 2.6rem);
      font-weight: 800;
      color: #ffffff;
      line-height: 1.05;
      letter-spacing: -0.03em;
      margin-bottom: 0.4rem;
    }
    .qr-headline span { color: #4ade80; }

    .qr-sub {
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #ea580c;
      margin-bottom: 0.2rem;
    }
    .qr-tagline {
      font-size: 0.82rem;
      font-weight: 400;
      color: rgba(255,255,255,0.42);
      margin-bottom: 1.8rem;
    }

    /* divider */
    .qr-divider {
      width: 48px;
      height: 2px;
      background: linear-gradient(90deg, #16a34a, #ea580c);
      border-radius: 2px;
      margin: 0 auto 1.8rem;
    }

    /* QR wrapper */
    .qr-wrapper {
      position: relative;
      display: inline-block;
      margin-bottom: 1.8rem;
    }

    /* corner accents */
    .qr-corner {
      position: absolute;
      width: 22px; height: 22px;
      border-color: #16a34a;
      border-style: solid;
      border-width: 0;
    }
    .qr-corner.tl { top: -2px; left: -2px; border-top-width: 3px; border-left-width: 3px; border-top-left-radius: 6px; }
    .qr-corner.tr { top: -2px; right: -2px; border-top-width: 3px; border-right-width: 3px; border-top-right-radius: 6px; }
    .qr-corner.bl { bottom: -2px; left: -2px; border-bottom-width: 3px; border-left-width: 3px; border-bottom-left-radius: 6px; }
    .qr-corner.br { bottom: -2px; right: -2px; border-bottom-width: 3px; border-right-width: 3px; border-bottom-right-radius: 6px; }

    /* pulse rings */
    .qr-pulse {
      position: absolute;
      inset: -16px;
      border-radius: 1.25rem;
      border: 1.5px solid rgba(22,163,74,0.35);
      animation: pulseRing 2s ease-out forwards;
      pointer-events: none;
    }
    @keyframes pulseRing {
      0%   { opacity:0.7; transform:scale(1); }
      100% { opacity:0;   transform:scale(1.18); }
    }

    /* scan line */
    .qr-scan {
      position: absolute;
      left: 6px; right: 6px;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(74,222,128,0.8), transparent);
      border-radius: 2px;
      pointer-events: none;
      transition: top 2.4s ease-in-out;
      box-shadow: 0 0 8px rgba(74,222,128,0.6);
    }

    /* QR image container */
    .qr-img-box {
      background: #ffffff;
      border-radius: 1rem;
      padding: 0.9rem;
      display: inline-block;
      position: relative;
      overflow: hidden;
    }
    .qr-img-box img {
      display: block;
      border-radius: 0.5rem;
      width: 200px;
      height: 200px;
    }

    /* stats row */
    .qr-stats {
      display: flex;
      gap: 1px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 0.9rem;
      overflow: hidden;
      margin-bottom: 1.4rem;
    }
    .qr-stat {
      flex: 1;
      padding: 0.75rem 0.5rem;
      position: relative;
    }
    .qr-stat + .qr-stat::before {
      content: '';
      position: absolute;
      left: 0; top: 15%; bottom: 15%;
      width: 1px;
      background: rgba(255,255,255,0.08);
    }
    .qr-stat-val {
      font-family: 'Syne', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: #4ade80;
      line-height: 1;
      margin-bottom: 2px;
    }
    .qr-stat-lbl {
      font-size: 0.68rem;
      font-weight: 500;
      color: rgba(255,255,255,0.38);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    /* instruction */
    .qr-instruction {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      background: rgba(22,163,74,0.08);
      border: 1px solid rgba(22,163,74,0.15);
      border-radius: 0.75rem;
      padding: 0.7rem 1rem;
      margin-bottom: 1rem;
    }
    .qr-instruction-icon {
      font-size: 1.2rem;
      flex-shrink: 0;
    }
    .qr-instruction-text {
      text-align: left;
    }
    .qr-instruction-text strong {
      display: block;
      font-size: 0.82rem;
      font-weight: 600;
      color: #86efac;
      margin-bottom: 1px;
    }
    .qr-instruction-text span {
      font-size: 0.73rem;
      color: rgba(255,255,255,0.38);
    }

    /* copy button */
    .qr-copy-btn {
      width: 100%;
      padding: 0.85rem 1.2rem;
      background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
      color: #ffffff;
      border: none;
      border-radius: 0.85rem;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.88rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: all 0.22s ease;
      box-shadow: 0 4px 20px rgba(22,163,74,0.35);
      position: relative;
      overflow: hidden;
    }
    .qr-copy-btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
      opacity: 0;
      transition: opacity 0.2s;
    }
    .qr-copy-btn:hover::before { opacity: 1; }
    .qr-copy-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 28px rgba(22,163,74,0.45); }
    .qr-copy-btn:active { transform: translateY(0); }
    .qr-copy-btn.copied {
      background: linear-gradient(135deg, #ea580c 0%, #c2410c 100%);
      box-shadow: 0 4px 20px rgba(234,88,12,0.40);
    }

    /* url pill */
    .qr-url-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: 0.85rem;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 9999px;
      padding: 0.3rem 0.9rem;
      font-size: 0.72rem;
      color: rgba(255,255,255,0.28);
      font-family: 'DM Mono', monospace;
      word-break: break-all;
    }
    .qr-url-dot {
      width: 5px; height: 5px;
      border-radius: 50%;
      background: #16a34a;
      flex-shrink: 0;
    }

    @media (max-width: 400px) {
      .qr-card { padding: 2rem 1.25rem; }
      .qr-img-box img { width: 170px; height: 170px; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="qr-page">
        {/* bg layers */}
        <div className="qr-mesh" />
        <div className="qr-grid" />
        <canvas ref={canvasRef} className="qr-canvas" />

        {/* card */}
        <div className={`qr-card${mounted ? ' in' : ''}`}>

          {/* badge */}
          <div className="qr-badge">
            <span className="qr-badge-dot" />
            KEC Biofuel &nbsp;·&nbsp; Live
          </div>

          {/* headline */}
          <h1 className="qr-headline">
            KEC <span>Bio</span>Pulse<br />AI
          </h1>
          <p className="qr-sub">AI Feasibility Engine</p>
          <p className="qr-tagline">Investor Intelligence Tool</p>

          <div className="qr-divider" />

          {/* QR code */}
          <div className="qr-wrapper">
            {/* animated pulse rings */}
            {[0, 1].map(i => (
              <div
                key={`${pulseRing}-${i}`}
                className="qr-pulse"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
            ))}

            {/* scan line */}
            <div
              className="qr-scan"
              style={{ top: scanLine ? 'calc(100% - 4px)' : '4px' }}
            />

            {/* corner accents */}
            <div className="qr-corner tl" />
            <div className="qr-corner tr" />
            <div className="qr-corner bl" />
            <div className="qr-corner br" />

            <div className="qr-img-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qrSrc} alt="QR Code — KEC BioPulse AI ROI Tool" />
            </div>
          </div>

          {/* stats */}
          <div className="qr-stats">
            {[
              { val: 'AI', lbl: 'Powered' },
              { val: '30s', lbl: 'Report Time' },
              { val: 'CBG', lbl: 'Optimised' },
            ].map(s => (
              <div key={s.lbl} className="qr-stat">
                <div className="qr-stat-val">{s.val}</div>
                <div className="qr-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* instruction */}
          <div className="qr-instruction">
            <span className="qr-instruction-icon">📱</span>
            <div className="qr-instruction-text">
              <strong>Point your camera at the QR code</strong>
              <span>Works with any smartphone or QR scanner app</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default QrScreen;