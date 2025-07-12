import React from 'react';

type SmoothScrollLinkProps = {
  to: string;
  children: React.ReactNode;
};

export const SmoothScrollLink = ({ to, children }: SmoothScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(to);
    if (target) {
      // Optional delay
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 100); // 100ms delay
    }
  };

  return (
    <a href={to} onClick={handleClick} className="cursor-pointer">
      {children}
    </a>
  );
};
