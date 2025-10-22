import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImg from "@/assets/profile3.jpg";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    { name: "Full Stack Development", level: 90, icon: Code2 },
    { name: "Problem Solving", level: 85, icon: Lightbulb },
    { name: "AI/ML Integration", level: 80, icon: Rocket },
    { name: "Team Leadership", level: 88, icon: Users },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-glow-pulse" />
              <img
                src={profileImg}
                alt="Kapileswar Patra"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/50 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Full Stack Developer & AI/ML Enthusiast
            </h3>
         <p className="text-foreground/80 mb-6 leading-relaxed text-justify text-center">
  Motivated and detail-oriented Software Developer with strong foundations in
  Full-Stack Development, adept at building scalable, user-friendly applications
  and integrating Machine Learning solutions for real-world impact.
</p>

            <p className="text-foreground/80 mb-8 leading-relaxed">
              Passionate about creating innovative software that aligns with business goals and
              delivers measurable outcomes. I thrive in collaborative environments and am always
              eager to learn new technologies.
            </p>

            {/* Skill Bars */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="text-primary" size={20} />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
