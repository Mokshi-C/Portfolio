import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Trophy } from 'lucide-react';

const profiles = [
  {
    id: 1,
    name: 'GitHub',
    icon: Github,
    description: 'Check out my open-source projects and contributions',
    stats: '10+ Repositories',
    link: 'https://github.com/Mokshi-C',
    color: 'from-gray-400 to-gray-600',
  },
  {
    id: 2,
    name: 'LeetCode',
    icon: Trophy,
    description: 'Competitive programming and algorithm solutions',
    stats: '230+ Problems Solved',
    link: 'https://leetcode.com/u/Mokshitha_C/',
    color: 'from-yellow-400 to-yellow-600',
  },
  
  {
    id: 3,
    name: 'SkillRack',
    icon: Code2,
    description: 'Technical assessments and coding challenges',
    stats: '130+ Challenges Completed',
    link: 'https://www.skillrack.com/faces/resume.xhtml?id=553159&key=806a3df92cb3a0a28b49fa30e4f4eea28ab6600a',
    color: 'from-purple-400 to-purple-600',
  },
 
];

export default function CodingProfiles() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
            <span className="text-cyan-400">Coding</span>
            <span className="text-white"> Profiles</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-magenta-500" />
          <p className="text-gray-300 mt-4 text-lg">
            Connect with me on various coding platforms
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <motion.a
                key={profile.id}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-neon group cursor-pointer block"
                variants={itemVariants}
                whileHover={{ y: -20, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-4 text-cyan-400"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={48} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {profile.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {profile.description}
                  </p>

                  {/* Stats */}
                  <motion.div
                    className="mb-6 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg text-sm font-medium text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {profile.stats}
                  </motion.div>

                  {/* Link */}
                  <motion.div
                    className="flex items-center gap-2 text-cyan-400 font-medium group-hover:text-magenta-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Visit Profile</span>
                    <ExternalLink size={18} />
                  </motion.div>
                </div>

                {/* Hover Border Animation */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none"
                  whileHover={{ borderColor: 'rgba(0, 217, 255, 0.5)' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          className="mt-20 pt-16 border-t border-cyan-500/20"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-cyan-400">Connect</span>
            <span className="text-white"> With Me</span>
          </h2>

          <div className="flex flex-wrap gap-6">
            {[
              { name: 'LinkedIn', icon: '💼', link: 'https://www.linkedin.com/in/mokshithac/' },
              { name: 'Email', icon: '✉️', link: 'mailto:mokshithac.edu@gmail.com' },
              
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                className="flex items-center gap-3 px-6 py-3 card-neon hover:border-cyan-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{social.icon}</span>
                <span className="font-medium text-white">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
