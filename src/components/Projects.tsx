import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Brain, Activity, Stethoscope } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Lung Cancer Detection System",
      description:
        "Developed a machine learning model for early lung cancer detection using medical imaging with VGG16 CNN architecture.",
      icon: Stethoscope,
      techStack: ["Python", "TensorFlow", "Keras", "VGG16", "OpenCV", "Scikit-learn", "NumPy"],
      highlights: [
        "Implemented image preprocessing and feature extraction",
        "Applied VGG16 CNN for classification",
        "Enhanced model accuracy with advanced preprocessing",
      ],
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Axis-Based Fitness Enhancement With Integrated sports and nutritional and Guidance",
      description:
        "Comprehensive fitness web application featuring BMI calculator, personalized nutrition guidance, and sport-specific workout plans.",
      icon: Activity,
      techStack: ["Python", "HTML", "CSS", "JavaScript", "Matplotlib", "SQLite", "AI Tools"],
      highlights: [
        "Gender and pregnancy-based customization",
        "Personalized nutrition guidance",
        "Sport-specific workout plans",
        "Cognitive exercises integration",
      ],
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Spring Petclinic Clone",
      description:
        "Full-stack recreation of the classic Petclinic application with modern Spring Boot architecture and MySQL integration.",
      icon: Brain,
      techStack: ["Java", "Spring Boot", "Spring MVC", "JPA", "MySQL", "Maven", "React.js"],
      highlights: [
        "Full CRUD operations for pets, owners, and visits",
        "MySQL persistent data storage",
        "Layered architecture with RESTful APIs",
        "Optimized database connectivity",
      ],
      gradient: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group hover:glow-border transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Project Header */}
              <div className={`p-6 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      <project.icon className="text-white" size={32} />
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <Github className="text-white" size={20} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="text-white" size={20} />
                      </motion.button>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-foreground/80 mb-6 leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-xs text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;
