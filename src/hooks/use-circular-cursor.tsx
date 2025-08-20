import { useEffect, useRef, useState } from 'react';

export const useCircularCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMouseInViewport, setIsMouseInViewport] = useState(true);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let scrollTimeout: NodeJS.Timeout;
    let animationFrameId: number;

    const updateCursorPosition = (x: number, y: number) => {
      // Simply set the cursor position to follow the mouse exactly
      setCursorPosition({ x, y });
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Cancel any pending animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      // Use requestAnimationFrame for smooth updates
      animationFrameId = requestAnimationFrame(() => {
        updateCursorPosition(e.clientX, e.clientY);
      });
    };

    const handleMouseLeave = () => {
      setIsMouseInViewport(false);
      // Reset cursor to center when mouse leaves viewport
      updateCursorPosition(window.innerWidth / 2, window.innerHeight / 2);
    };

    const handleMouseEnter = () => {
      setIsMouseInViewport(true);
    };

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Use a simpler approach - check if we're over any clickable element
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      const cursor = computedStyle.cursor;
      
      // Check if the element has a pointer cursor (indicating it's clickable)
      if (cursor === 'pointer' || target.onclick || target.tagName === 'BUTTON' || target.tagName === 'A') {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    // Initialize cursor position at center of screen
    updateCursorPosition(window.innerWidth / 2, window.innerHeight / 2);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const CursorComponent = () => (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 w-[200px] h-[200px] rounded-full border-2 transition-all duration-300 ease-out ${
        !isMouseInViewport 
          ? 'opacity-0 scale-75'
          : isHovering 
          ? 'border-cyan-400/80 scale-125 shadow-[0_0_40px_rgba(34,211,238,0.6)]' 
          : isScrolling
          ? 'border-cyan-400/70 scale-110 shadow-[0_0_30px_rgba(34,211,238,0.5)]'
          : 'border-white/50 scale-100 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
      }`}
      style={{
        left: `${cursorPosition.x - 100}px`,
        top: `${cursorPosition.y - 100}px`,
        background: !isMouseInViewport
          ? 'transparent'
          : isHovering 
          ? 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(34,211,238,0.05) 50%, transparent 70%)'
          : isScrolling
          ? 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0.04) 50%, transparent 70%)'
          : 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 50%, transparent 70%)',
        mixBlendMode: !isMouseInViewport ? 'normal' : isHovering ? 'screen' : isScrolling ? 'screen' : 'difference'
      }}
    />
  );

  return { CursorComponent };
};
