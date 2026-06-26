import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CTA() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="relative min-h-screen w-full bg-background pt-24 pb-12 px-4 flex items-center">
      {/* Gradient Blur Effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-magenta-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto w-full relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-cyan-400">Ready to</span>
            <br />
            <span className="text-white">Work Together?</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Let's create something amazing. Whether you have a project in mind or just want to chat, I'm always excited to collaborate and bring ideas to life.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          variants={itemVariants}
        >
          <Link href="/contact">
            <motion.a
              className="group relative px-8 py-4 text-lg font-bold uppercase tracking-wider text-white border-2 border-cyan-400 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-magenta-500 -z-10"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
              <div className="flex items-center justify-center gap-2 relative z-10">
                <Sparkles size={20} />
                <span>Hire Me</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </div>
            </motion.a>
          </Link>

          <Link href="/projects">
            <motion.a
              className="px-8 py-4 text-lg font-bold uppercase tracking-wider text-cyan-400 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-cyan-500/20"
          variants={containerVariants}
        >
          {[
            {
              icon: '⚡',
              title: 'Fast Turnaround',
              description: 'Quick delivery without compromising quality',
            },
            {
              icon: '🎯',
              title: 'Precision Focus',
              description: 'Tailored solutions for your specific needs',
            },
            {
              icon: '🚀',
              title: 'Innovation First',
              description: 'Cutting-edge tech and creative solutions',
            },
          ].map((feature, idx) => (
            <motion.div key={idx} className="card-neon" variants={itemVariants}>
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div className="mt-16 flex justify-center gap-6" variants={itemVariants}>
          {[
            { name: 'LinkedIn', icon: '💼', link: '#' },
            { name: 'GitHub', icon: '🐙', link: '#' },
            { name: 'Twitter', icon: '𝕏', link: '#' },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center text-2xl hover:bg-cyan-400/10 transition-all"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
