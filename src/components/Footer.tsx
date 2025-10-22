import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-foreground/60 flex items-center justify-center gap-2">
            Built with <Heart className="text-red-500" size={16} fill="currentColor" /> by{" "}
            <span className="text-primary font-medium">Kapileswar Patra</span>
          </p>
          <p className="text-sm text-foreground/40 mt-2">
            © 2024 All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
