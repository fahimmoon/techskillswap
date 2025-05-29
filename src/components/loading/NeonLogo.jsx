import { motion } from 'framer-motion';

export default function NeonLogo() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-5xl font-bold mb-4 neon-text">
        Tech
        <span className="text-blue-500">Skill</span>
        Swap
      </h1>
      <style jsx>{`
        .neon-text {
          color: #fff;
          text-shadow: 0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff,
            0 0 42px #0fa,
            0 0 82px #0fa,
            0 0 92px #0fa,
            0 0 102px #0fa,
            0 0 151px #0fa;
          animation: flicker 1.5s infinite alternate;
        }
        @keyframes flicker {
          0%, 18%, 22%, 25%, 53%, 57%, 100% {
            text-shadow: 0 0 4px #fff,
              0 0 11px #fff,
              0 0 19px #fff,
              0 0 40px #0fa,
              0 0 80px #0fa,
              0 0 90px #0fa,
              0 0 100px #0fa,
              0 0 150px #0fa;
          }
          20%, 24%, 55% {
            text-shadow: none;
          }
        }
      `}</style>
    </motion.div>
  );
}
