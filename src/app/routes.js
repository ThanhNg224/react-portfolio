import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Resume } from "../pages/resume";
import { Socialicons } from "../components/socialicons";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: 100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -100 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

const reducedPageVariants = {
  initial: { opacity: 1, x: 0 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 1, x: 0 },
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? reducedPageVariants : pageVariants;
  const transition = prefersReducedMotion ? { duration: 0 } : pageTransition;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={variants}
              transition={transition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={variants}
              transition={transition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={variants}
              transition={transition}
            >
              <Portfolio />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={variants}
              transition={transition}
            >
              <ContactUs />
            </motion.div>
          }
        />
        <Route
          path="/resume"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={variants}
              transition={transition}
            >
              <Resume />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={variants}
              transition={transition}
            >
              <Home />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function AppRoutes() {
  return (
    <main className="s_c" id="main-content" tabIndex="-1">
      <AnimatedRoutes />
      <Socialicons />
    </main>
  );
}

export default AppRoutes;
