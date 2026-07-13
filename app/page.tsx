import Home from "./sections/Home";
import Contact from "./sections/Contact";
import { Resume } from "./sections/Resume";
import { Services } from "./sections/Services";
import { WorkingProcess } from "./sections/WorkingProcess";
import { Work } from "./sections/Work";
export default function App() {
  return (
    <main>
      <Home />
      <Services />
      <WorkingProcess />
      <Resume/>
      <Work/>
      <Contact />
    </main>
  );
};
