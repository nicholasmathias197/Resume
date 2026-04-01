import { useState, useEffect } from 'react';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#top"
      className={`back-to-top${visible ? ' visible' : ''}`}
      aria-label="Back to top"
    >
      ↑
    </a>
  );
}

export default BackToTop;
