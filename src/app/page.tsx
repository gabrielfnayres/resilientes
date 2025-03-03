import {Hero} from "@/app/_components/Hero";
import {About} from "@/app/_components/About";
import {MentalSupport} from "@/app/_components/MentalSupport";
import {WorkFlow} from "@/app/_components/WorkFlow";
import {ContactUs} from "@/app/_components/ContactUs";
import {Footer} from "./_components/Footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MentalSupport />
      <WorkFlow />
      <ContactUs />
      <Footer backgroundColor="#FFCF40"/>
    </main>
  );
}
