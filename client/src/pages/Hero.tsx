import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronDown } from 'lucide-react';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Gradient Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-magenta-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Text Content */}
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-cyan-400">Hello!</span>
                <br />
                <span className="text-white">Welcome to My</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-500 to-purple-500">
                  Portfolio
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              I'm a 2nd-year Artificial Intelligence & Machine Learning Engineering student passionate about building intelligent systems and immersive digital experiences. Let's explore my work and collaborate on something extraordinary.
            </motion.p>

            <motion.div className="flex gap-4 pt-4" variants={itemVariants}>
              <Link href="/about">
                <motion.a
                  className="btn-neon"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore My Work
                </motion.a>
              </Link>
              <Link href="/contact">
                <motion.a
                  className="px-6 py-3 font-bold text-sm uppercase tracking-wider border-2 border-magenta-500 text-magenta-400 rounded-lg hover:bg-magenta-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Bitmoji Avatar */}
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-80 h-80 rounded-full border-2 border-cyan-400/50 flex items-center justify-center overflow-hidden glow-cyan"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Bitmoji Avatar Image */}
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663758947005/o5ZLZCXX8MuHTDjDsFEMwb/bitmoji-avatar-i49bFGUDgJhjZyxbCwLTE2.webp"
                alt="Professional Avatar"
                className="w-full h-full object-cover"
              />

              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent border-t-magenta-500 border-r-magenta-500 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-cyan-400" size={32} />
        </motion.div>
      </div>
    </div>
  );
}
