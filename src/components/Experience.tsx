import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Award, Users, Code } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Technical Lead",
      organization: "TECH HUB Student Club",
      period: "2022 - 2024",
      type: "Leadership",
      icon: Users,
      description:
        "Led the development and execution of technical workshops, coding contests, and hackathons.",
      highlights: [
        "Guided students in Web Development and Competitive Programming",
        "Mentored teams in project development and debugging",
        "Implemented Core & Advanced Java, React.js, MySQL projects",
        "Developed strong Communication, Leadership, and Teamwork skills",
      ],
    },
    {
      title: "AI/ML Intern",
      organization: "THE WEBSITE MAKER",
      period: "Summer 2023",
      type: "Internship",
      icon: Code,
      description:
        "Developed an AI-Powered Chatbot to enhance user engagement on client websites.",
      highlights: [
        "Implemented Natural Language Processing techniques",
        "Integrated ML frameworks for chatbot intelligence",
        "Enhanced web integration for seamless user experience",
        "Improved client website engagement metrics",
      ],
    },
    {
      title: "Data Analyst Intern",
      organization: "COINCENT",
      period: "2023",
      type: "Internship",
      icon: Briefcase,
      description:
        "Developed a Machine Learning Model to identify and filter offensive content on social media.",
      highlights: [
        "Applied Python and Machine Learning algorithms",
        "Performed comprehensive Data Analysis",
        "Created content filtering models",
        "Improved social media content moderation",
      ],
    },
    {
      title: "Event Organizer",
      organization: "Bug Busters Competition",
      period: "2023",
      type: "Leadership",
      icon: Award,
      description: "Successfully organized a University-level Error Detection competition.",
      highlights: [
        "Managed event logistics and coordination",
        "Designed challenging debugging problems",
        "Coordinated with university administration",
        "Attracted 100+ participants",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Professional journey and leadership positions
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 flex items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } flex-col md:flex-row`}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                <motion.div
                  className="glass-card p-6 rounded-2xl hover:glow-border transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <exp.icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                        <span className="text-sm text-foreground/60">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium mb-3">{exp.organization}</p>
                      <p className="text-foreground/80 text-sm mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                            <span className="text-primary mt-1">→</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block relative w-2/12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="w-6 h-6 bg-primary rounded-full border-4 border-background mx-auto relative z-10"
                >
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                </motion.div>
              </div>

              {/* Spacer */}
              <div className="w-full md:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
