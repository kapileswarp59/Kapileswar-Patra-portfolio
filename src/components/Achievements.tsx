import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Award, Medal, Star, Code, Database } from "lucide-react";

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "1st Place - Debugging Challenge",
      description: "Secured first position in competitive debugging challenge",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "31st/400 - Smart India Hackathon",
      description: "Ranked 31st out of 400 participants in Internal Hackathon selection",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Silver Badge - Data Analytics",
      description: "Achieved Silver Badge in NPTEL Data Analytics certification",
      icon: Medal,
      color: "from-gray-400 to-gray-600",
    },
    {
      title: "3rd Place - Academic Presentation",
      description: "Secured third position in academic presentation competition",
      icon: Award,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "HackerRank SQL Certified",
      description: "Intermediate SQL certification from HackerRank",
      icon: Database,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "The Joy Of computing Python Certification",
      description: "NPTEL Python completions",
      icon: Star,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Recognition and accomplishments throughout my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:glow-border transition-all duration-300 group"
              whileHover={{ y: -10, scale: 1.05 }}
            >
              {/* Icon Header */}
              <div
                className={`p-6 bg-gradient-to-br ${achievement.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <motion.div
                  className="relative z-10 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                    <achievement.icon className="text-white" size={40} />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-center group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-foreground/70 text-center text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Certifications List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-card rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">Professional Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Technical Leader at TECH HUB",
              "The Joy Of Computing Python by NPTEL",
              "HackerRank Certified Intermediate SQL",
              "Data Analytics Using Python - NPTEL",
              "AI Tools and ChatGPT Certification by bel0X",
              "Java Certification - Complete Coding",
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground/80">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
