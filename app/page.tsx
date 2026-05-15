import Home from "./sections/Home";
import Contact from "./sections/Contact";
import { Resume } from "./sections/Resume";
import { Services } from "./sections/Services";
import { Work } from "./sections/Work";
export default function App() {
  return (
    <main>
      <Home />
      <Services />
      <Resume/>
      <Work/>
      <Contact />
    </main>
  );
};
