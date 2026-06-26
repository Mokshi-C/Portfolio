import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Database } from 'lucide-react';

const skillCategories = [
  {
    title: 'Machine Learning & AI',
    icon: Zap,
    skills: [
      { name: 'Scikit-learn & TensorFlow', level: 90 },
      { name: 'Pandas & NumPy', level: 92 },
      { name: 'Hugging Face Transformers & NLP', level: 88 },
      { name: 'Explainable AI', level: 85 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Palette,
    skills: [
      { name: 'React.js & Vite', level: 93 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'TypeScript & JavaScript', level: 88 },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: Database,
    skills: [
      { name: 'FastAPI & Flask', level: 90 },
      { name: 'Node.js & Express.js', level: 85 },
      { name: 'SQLite & MongoDB', level: 88 },
      { name: 'Supabase (PostgreSQL)', level: 87 },
    ],
  },
  {
    title: 'Tools & Languages',
    icon: Code2,
    skills: [
      { name: 'Python / C++ / C', level: 92 },
      { name: 'Google Gemini & Groq APIs', level: 90 },
      { name: 'Tesseract OCR', level: 85 },
      { name: 'Docker & Git/GitHub', level: 86 },
    ],
  },
];

export default function Skills() {
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

  const barVariants = {
    hidden: { scaleX: 0 },
    visible: (level: number) => ({
      scaleX: level / 100,
      transition: { duration: 1.2, delay: 0.3 },
    }),
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
            <span className="text-cyan-400">My</span>
            <span className="text-white"> Skills</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-magenta-500" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12" variants={containerVariants}>
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div key={idx} className="card-neon" variants={itemVariants}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className="text-cyan-400"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={32} />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div key={skillIdx} variants={itemVariants}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <motion.span
                          className="text-cyan-400 font-bold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-400 to-magenta-500"
                          custom={skill.level}
                          variants={barVariants}
                          initial="hidden"
                          animate="visible"
                          style={{ originX: 0 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 pt-16 border-t border-cyan-500/20"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold mb-6">
            <span className="text-cyan-400">Continuous</span>
            <span className="text-white"> Learning</span>
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-2xl">
            I'm constantly exploring new technologies and improving my craft. Currently diving deep into AI/ML integration. Always excited to learn and apply cutting-edge solutions to real-world problems.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
