// components/TelegramContact.jsx
import React from 'react';

// Make sure you have a telegram-icon.svg file in a /public folder
const telegramIconUrl = '/telegram-icon.svg';

export function TelegramContact() {
  return (
    <>
      <style jsx>{`
        .telegram-link {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          border: 1px solid #0088cc;
          background-color: #eaf6fb;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: background-color 0.2s ease;
        }
        .telegram-link:hover {
          background-color: #dcf0fa;
        }
        .icon-container {
          background-color: #0088cc;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon {
          width: 28px;
          height: 28px;
          filter: brightness(0) invert(1);
        }
        .text-content {
          display: flex;
          flex-direction: column;
        }
        .title {
          font-weight: 600;
          font-size: 16px;
          color: #222;
        }
        .subtitle {
          font-size: 14px;
          color: #555;
        }
      `}</style>
      <a href="https://https://t.me/Apptics" target="_blank" rel="noopener noreferrer" className="telegram-link">
        <div className="icon-container">
          <img src={telegramIconUrl} alt="Telegram" className="icon" />
        </div>
        <div className="text-content">
          <span className="title">Contact us on telegram</span>
          <span className="subtitle">Our associate will reply within 24h</span>
        </div>
      </a>
    </>
  );
}