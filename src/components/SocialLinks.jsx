import React from 'react';

export default function SocialLinks() {
  const iconStyle = {
    margin: '0 15px',
    fontSize: '28px',
    color: '#4CAF50',
    textDecoration: 'none'
  };

  return (
    <div>
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/yourgithub"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        GitHub
      </a>
      <a
        href="https://yourwebsite.com"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        Website
      </a>
    </div>
  );
}
