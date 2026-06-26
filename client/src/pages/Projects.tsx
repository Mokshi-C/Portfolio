import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Queue Cure Management System',
    description: 'A web application for managing and optimizing queue management processes',
    tags: ['React','PostgreSQL','TailwindCSS','Supabase'],
    link: 'https://queue-cure-mu.vercel.app',
    github: 'https://github.com/Mokshi-C/QUEUE-CURE',

  },
  {
    id:2 ,
    title: 'AGENTIC MEDICAL ANALYSER',
    description: 'An AI-powered medical analysis tool for accurate diagnostics and insights',
    tags: ['Python', 'React', 'Flask','AI/ML'],
    link: 'https://agentic-medical-analyser.vercel.app',
    github: 'https://github.com/Mokshi-C/Medical-Analyser-1',
  },
   {
    id: 3,
    title: 'Email Summarizer',
    description: 'A web application that summarizes lengthy emails into concise, actionable points using AI',
    tags: ['ML models', 'streamlit', 'Python'],
    link: '#',
    github: 'https://github.com/Mokshi-C/Email-summarizer',
  },
  {
    id: 4,
    title: 'TIC TAC TOE Game',
    description: 'A classic Tic Tac Toe game with a modern twist',
    tags: ['React', 'TypeScript'],
    link: '#',
    github: 'https://github.com/Mokshi-C/Tic-tac',
  },
  
 
  {
    id: 5,
    title: 'Fake News Detector',
    description: 'An AI-powered tool for identifying and flagging fake news articles',
    tags: ['Python', 'Machine Learning', 'NLP'],
    link: '#',
    github: 'https://github.com/Mokshi-C/fake-news-detector',
  },
  {
    id: 6,
    title: 'Scholarship Detector',
    description: 'A web application for identifying and recommending eligible scholarship opportunities',
    tags: ['Python', 'Flask', 'SQLiteDatabase', 'HTML/CSS'],
    link: '#',
    github: 'https://github.com/Mokshi-C/Scholarship-Detector',
  },
  
  {
    id: 7,
    title: 'E-commerce-website ',
    description: 'A visually stunning e-commerce website with 3D product views and interactive animations',
    tags: ['TypeScript', 'CSS'],
    link: '#',
    github: 'https://github.com/Mokshi-C/shopscape-swif',
  },
];

export default function Projects() {
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
      <div className="absolute top-40 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-magenta-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-cyan-400">Featured</span>
            <span className="text-white"> Projects</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-magenta-500" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="card-neon group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -20, rotateX: 5 }}
              transition={{ duration: 0.3 }}
              style={{ perspective: '1000px' }}
            >
              {/* Project Image Placeholder */}
              <motion.div
                className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg mb-6 flex items-center justify-center overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl">🎨</div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <motion.a
                  href={project.link}
                  className="flex items-center gap-2 text-cyan-400 hover:text-magenta-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <ExternalLink size={18} />
                  <span className="text-sm font-medium">View</span>
                </motion.a>
                <motion.a
                  href={project.github}
                  className="flex items-center gap-2 text-cyan-400 hover:text-magenta-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Github size={18} />
                  <span className="text-sm font-medium">Code</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
