export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};

export const slideInFromRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 100 }
};

export const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 0 rgba(255, 60, 56, 0)",
      "0 0 20px rgba(255, 60, 56, 0.3)",
      "0 0 0 rgba(255, 60, 56, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const floatingAnimation = {
  animate: {
    y: ["0px", "-10px", "0px"],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const navbarAnimation = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.3 }
};

export const menuItemHover = {
  hover: {
    color: "#FF3C38",
    transition: { duration: 0.2 }
  }
};

export const introAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};
