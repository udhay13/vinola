"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-5 left-4 right-4 z-50 md:hidden"
          aria-label="Mobile booking button"
        >
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-white font-bold text-base shadow-2xl"
            style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}
          >
            <Calendar className="w-5 h-5" />
            Book Now
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
