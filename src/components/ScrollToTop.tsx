import { useState, useEffect } from "react";
import { arrowRight } from "../assets/icons";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 bg-coral-red p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Scroll to top"
    >
      <img src={arrowRight} alt="scroll to top" width={20} height={20} className="-rotate-90" />
    </button>
  );
};

export default ScrollToTop;
