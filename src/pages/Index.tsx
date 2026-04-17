import HeroSection from "@/components/HeroSection";
import ScrollProgress from "@/components/ScrollProgress";
import TimelineSection from "@/components/TimelineSection";
import { timelineSections } from "@/data/timelineData";
import logo from "@/assets/genius-sports-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <HeroSection />

      {/* Timeline */}
      <div className="max-w-3xl mx-auto px-6 py-8 md:py-16">
        {timelineSections.map((section, i) => (
          <TimelineSection
            key={section.id}
            section={section}
            index={i}
            isLast={i === timelineSections.length - 1}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <img src={logo} alt="Genius Sports" className="h-8 object-contain opacity-50" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Genius Sports. Confidential.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
