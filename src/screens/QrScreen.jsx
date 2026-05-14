'use client';

import React from 'react';
import Image from 'next/image';

const ROI_URL = process.env.NEXT_PUBLIC_BASE_URL
  ? `${process.env.NEXT_PUBLIC_BASE_URL}/roi`
  : 'https://www.kecbiofuel.com/roi';

const QrScreen = () => {
  // QR image generated via qr-server.com (open API, no key needed)
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(ROI_URL)}&bgcolor=ffffff&color=1a6b2e&margin=10`;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          background: '#ffffff',
          borderRadius: '2rem',
          boxShadow: '0 25px 60px rgba(0,0,0,0.12)',
          padding: '3rem 2.5rem',
          maxWidth: '480px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#dcfce7',
              color: '#166534',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            <span>🌿</span> KEC Biofuel
          </div>
          <h1
            style={{
              fontSize: '1.8rem',
              fontWeight: 800,
              color: '#14532d',
              margin: '0 0 0.5rem 0',
              lineHeight: 1.2,
            }}
          >
            CBG ROI Calculator
          </h1>
          <p style={{ color: '#4b7a5e', fontSize: '0.95rem', margin: 0 }}>
            Scan the QR code to calculate your Compressed Bio-Gas plant Return on Investment
          </p>
        </div>

        {/* QR Code */}
        <div
          style={{
            display: 'inline-block',
            background: '#f0fdf4',
            border: '3px solid #86efac',
            borderRadius: '1.25rem',
            padding: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          {/* Using next/image via img tag for external URL compatibility */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={qrSrc}
            alt="QR Code for ROI Calculator"
            width={240}
            height={240}
            style={{ display: 'block', borderRadius: '0.5rem' }}
          />
        </div>

        {/* Instruction */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: '#166534', fontWeight: 600, fontSize: '0.95rem', margin: '0 0 0.3rem 0' }}>
            📱 Point your camera at the QR code
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: 0 }}>
            Works with any smartphone camera or QR scanner app
          </p>
        </div>


      </div>
    </div>
  );
};

export default QrScreen;
