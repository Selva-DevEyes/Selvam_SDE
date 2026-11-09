'use client';
import { useEffect, useState } from 'react';
const roles = ['WordPress Developer', 'Web Developer', 'Full Stack Engineer'];
export function TypingRole() {
  const [text, setText] = useState(roles[0]);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setTimeout>;
    let role = 0, position = roles[0].length, deleting = true;
    function tick() {
      if (preference.matches) { setText(roles[0]); return; }
      const current = roles[role];
      position += deleting ? -1 : 1;
      setText(current.slice(0, position));
      let delay = deleting ? 45 : 85;
      if (position === 0) { role = (role + 1) % roles.length; deleting = false; delay = 300; }
      else if (position === current.length && !deleting) { deleting = true; delay = 2200; }
      timer = setTimeout(tick, delay);
    }
    function start() {
      clearTimeout(timer);
      if (preference.matches) { setText(roles[0]); return; }
      role = 0; position = roles[0].length; deleting = true;
      setText(roles[0]); timer = setTimeout(tick, 2200);
    }
    preference.addEventListener('change', start); start();
    return () => { clearTimeout(timer); preference.removeEventListener('change', start); };
  }, []);
  return <span className="typing-role"><span className="sr-only">WordPress Developer, Web Developer, Full Stack Engineer</span><span aria-hidden="true">{text}<span className="typing-caret">|</span></span></span>;
}
