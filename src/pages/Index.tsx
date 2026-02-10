import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Benefits } from "@/components/Benefits";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <SocialProof />
      <Benefits />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
