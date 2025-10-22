import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Database,
  Layout,
  Server,
  GitBranch,
  Brain,
  Smartphone,
  Box,
} from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS","Thymeleaf"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Spring Boot", "Node.js", "Express.js", "RESTful APIs", "Microservices","DBMS"],
    },
    {
      title: "Languages",
      icon: Code2,
      skills: ["Java", "Python", "Kotlin", "JavaScript", "TypeScript"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Oracle", "SQLite"],
    },
    {
      title: "AI/ML",
      icon: Brain,
      skills: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "VGG16", "NLP","MediaPipe"],
    },
    {
      title: "Tools and Vesion-Control",
      icon: GitBranch,
      skills: ["Git/GitHub", "VS Code", "Jupyter", "Google Colab", "Eclipse", "NetBeans"],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "Android", "Kotlin Basics"],
    },
    {
      title: "AI Tools",
      icon: Box,
      skills: ["ChatGPT", "Claude", "NotebookLM", "Grok", "Merlin", "Napkin","Julious","Genspark"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:glow-border transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/80 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Communication",
              "Problem Solving",
              "Time Management",
              "Adaptability",
              "Critical Thinking",
              "Leadership",
              "Teamwork",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="px-6 py-3 glass-card rounded-full font-medium hover:glow-border transition-all cursor-default"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
