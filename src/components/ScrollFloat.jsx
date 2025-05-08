import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloatSection = ({
  children,
  scrollContainerRef,
  className = "",
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'top bottom',
  scrollEnd = 'top 30%',
  yOffset = 100
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        y: yOffset,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: animationDuration,
        ease: ease,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, yOffset]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollFloatSection;
