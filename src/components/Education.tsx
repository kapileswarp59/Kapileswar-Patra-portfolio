import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, Star } from "lucide-react";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Gandhi Institute of Engineering and Technology University, Gunupur",
      board: "GIET UNIVERSITY",
      year: "2020 - 2024",
      score: "9.19 CGPA",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      degree: "+2 Science",
      institution: "Pragati Science Higher Secondary School, Bhawanipatna",
      board: "CHSE",
      year: "2022",
      score: "84.66%",
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
    {
      degree: "10th Grade",
      institution: "Swami Chetanananda Saraswat Vidhya Mandir, Ganjam",
      board: "CHSE",
      year: "2020",
      score: "72.33%",
      icon: Star,
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Academic achievements and qualifications
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden hover:glow-border transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Icon Section */}
                <div
                  className={`md:w-48 p-6 bg-gradient-to-br ${edu.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="p-4 bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      <edu.icon className="text-white" size={48} />
                    </motion.div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-primary font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-foreground/60">{edu.board}</p>
                    </div>
                    <div className="text-right">
                      <div className="px-4 py-2 bg-primary/20 rounded-lg">
                        <p className="text-2xl font-bold text-primary">{edu.score}</p>
                      </div>
                      <p className="text-sm text-foreground/60 mt-2">{edu.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
