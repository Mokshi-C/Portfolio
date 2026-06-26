import { motion } from 'framer-motion';
import { Code2, Zap, Target } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const achievements = [
    {
      icon: Code2,
      title: 'Full-Stack Developer',
      description: 'Proficient in React, Node.js, Three.js, and modern web technologies',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Creating fast, optimized experiences with smooth animations',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Tackling complex challenges with creative and elegant solutions',
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-background pt-24 pb-12 px-4">
      {/* Gradient Blur Effects */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-cyan-400">About</span>
            <span className="text-white"> Me</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-magenta-500" />
        </motion.div>

        {/* Intro Section */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16" variants={itemVariants}>
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a 2nd-year Artificial Intelligence & Machine Learning Engineering student passionate about creating intelligent solutions and immersive digital experiences. I focus on developing machine learning models and combining them with modern frontend technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech is driven by curiosity, exploring the realms of AI, data analysis, and software engineering. I am constantly working to build products that solve real-world problems and push technical boundaries.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <motion.div
              className="w-64 h-64 rounded-lg border-2 border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 flex items-center justify-center glow-cyan"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-cyan-400 font-bold">AIML Engineer</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-cyan-400">Key</span>
            <span className="text-white"> Achievements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="card-neon"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mb-4 text-cyan-400"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={40} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-cyan-500/20"
          variants={itemVariants}
        >
          {[
            { label: 'Projects', value: '20+' },
            
            { label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="text-4xl font-bold text-cyan-400 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
