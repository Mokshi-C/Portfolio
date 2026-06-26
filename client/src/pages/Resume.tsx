import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export default function Resume() {
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

  const handleDownload = () => {
    // Create a sample PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <div className="relative min-h-screen w-full bg-background pt-24 pb-12 px-4">
      {/* Gradient Blur Effects */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-cyan-400">My</span>
            <span className="text-white"> Resume</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-magenta-500" />
        </motion.div>

        {/* Resume Preview Card */}
        <motion.div
          className="card-neon mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <motion.div
                className="text-cyan-400"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FileText size={48} />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-white">Resume.pdf</h2>
                <p className="text-gray-400 text-sm">Last updated: June 2024</p>
              </div>
            </div>
            <motion.button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-magenta-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download
            </motion.button>
          </div>

          {/* Resume Preview */}
          <div className="bg-background rounded-lg p-8 border border-cyan-500/20 space-y-6">
            <section>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">PROFESSIONAL SUMMARY</h3>
              <p className="text-gray-300 leading-relaxed">
               I'm an AI & Machine Learning Engineering student passionate about creating intelligent solutions that bridge technology and real-world challenges. With experience in machine learning, full-stack development, and modern web technologies, I enjoy transforming ideas into impactful applications.

I believe great technology is built through creativity, collaboration, and effective communication. From developing AI-powered solutions to participating in hackathons and presenting innovative ideas, I'm constantly exploring new ways to learn, grow, and make an impact.

🚀 Building intelligent systems. Solving meaningful problems. Growing every day.

              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">EXPERIENCE & ACHIEVEMENTS</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'NIT Trichy Hackathon Finalist',
                    company: 'National Level Hackathon',
                    period: '2023',
                    description: 'Shortlisted as a Finalist, competing against teams from top engineering institutions across India.',
                  },
                  {
                    title: 'Asymmetric Club Core Member',
                    company: 'Chennai Institute of Technology',
                    period: '2022 - Present',
                    description: 'Organized a 48-hour Hackathon, coordinating technical events and managing participant engagement.',
                  },
                  {
                    title: 'Competitive Programmer',
                    company: 'LeetCode & Skillrack',
                    period: '2022 - Present',
                    description: 'Solved 230+ LeetCode problems and 100+ Skillrack programming challenges, demonstrating strong DSA and problem-solving proficiency.',
                  },
                ].map((job, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white">{job.title}</h4>
                      <span className="text-sm text-gray-400">{job.period}</span>
                    </div>
                    <p className="text-cyan-400 text-sm mb-1">{job.company}</p>
                    <p className="text-gray-400 text-sm">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">EDUCATION</h3>
              <div className="space-y-4">
                {[
                  {
                    degree: 'Bachelor of Engineering – Computer Science (AI & ML)',
                    school: 'Chennai Institute of Technology',
                    year: '2022 – 2026',
                    grade: 'CGPA: 8.77/10',
                  },
                ].map((edu, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-white">{edu.degree}</h4>
                      <span className="text-sm text-gray-400">{edu.year}</span>
                    </div>
                    <p className="text-cyan-400 text-sm mb-1">{edu.school}</p>
                    <p className="text-gray-400 text-sm">{edu.grade}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">TECHNICAL SKILLS</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Python',
                  'C++',
                  'C',
                  'JavaScript',
                  'TypeScript',
                  'SQL',
                  'React.js',
                  'Vite',
                  'Tailwind CSS',
                  'FastAPI',
                  'Flask',
                  'Node.js',
                  'Express.js',
                  'Scikit-learn',
                  'TensorFlow',
                  'Pandas',
                  'NumPy',
                  'Hugging Face',
                  'NLP',
                  'Explainable AI',
                  'Google Gemini API',
                  'Groq API',
                  'Docker',
                  'SQLite',
                  'MongoDB',
                  'Supabase',
                ].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/30 text-sm font-medium text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {[
            {
              title: 'Certifications',
              items: ['Python Essentials I & II – Cisco Networking Academy'],
            },
            {
              title: 'Languages',
              items: ['Tamil (Native)', 'English (Fluent)'],
            },
          ].map((section, idx) => (
            <motion.div key={idx} className="card-neon" variants={itemVariants}>
              <h3 className="text-lg font-bold text-cyan-400 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <motion.li
                    key={itemIdx}
                    className="text-gray-300 flex items-center gap-2"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-magenta-500">▸</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
