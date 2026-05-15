import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-muted/20 border-t border-border mt-20 md:mt-32 pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center text-center mb-16">
          <a href="#home" className="text-4xl font-mono tracking-tight font-bold mb-4">
            Darrell.
          </a>
          <p className="text-muted-foreground">
            Building beautiful, performant web experiences.
          </p>
        </div>

        <div className="h-px w-full bg-border mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
            <li><a href="#home" className="hover:text-foreground transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
            <li><a href="#resume" className="hover:text-foreground transition-colors">Resume</a></li>
            <li><a href="#work" className="hover:text-foreground transition-colors">Work</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>

          <ul className="flex items-center gap-4">
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-colors">
                <FaGithub className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-colors">
                <FaLinkedin className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-colors">
                <FaTwitter className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground tracking-wide">
            &copy; {new Date().getFullYear()} Darrell Rafa Alamsyah. Crafted with ♥ using React.
          </p>
        </div>
      </div>
    </footer>
  );
}
