import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import AboutUsSection from "@/components/sections/aboutus";
import AISection from "@/components/sections/ai";
import FeaturesSection from "@/components/sections/features";
import FindingsSection from "@/components/sections/findings";
import HeroSection from "@/components/sections/hero";
import HowItWorksSection from "@/components/sections/howitworks";
import IntroductionSection from "@/components/sections/introduction";
import PromiseSection from "@/components/sections/promise";
import StatsSection from "@/components/sections/stats";
import StruggleSection from "@/components/sections/struggle";
import SuggestionsSection from "@/components/sections/suggestions";
import ToolsSection from "@/components/sections/tools";
import WhyChooseUsSection from "@/components/sections/whychooseus";


export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FindingsSection />
      <IntroductionSection />
      <WhyChooseUsSection />
      <AISection />
      <ToolsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PromiseSection />
      <StruggleSection />
      <AboutUsSection />
      <StatsSection />
      <SuggestionsSection />
      <Footer />
    </main>
  );
}
