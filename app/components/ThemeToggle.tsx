import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-muted transition-colors relative h-10 w-10 flex items-center justify-center overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Sun className={`w-5 h-5 absolute transition-all duration-300 ${theme === 'dark' ? '-translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`} />
        <Moon className={`w-5 h-5 absolute transition-all duration-300 ${theme === 'dark' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} />
      </div>
    </motion.button>
  );
}
