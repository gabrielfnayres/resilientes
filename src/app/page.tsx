import Image from "next/image";
import {Hero} from "@/app/_components/Hero";
import {About} from "@/app/_components/About";
import {MentalSupport} from "@/app/_components/MentalSupport";
import {WorkFlow} from "@/app/_components/WorkFlow";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MentalSupport />
      <WorkFlow />
    </main>
  );
}
