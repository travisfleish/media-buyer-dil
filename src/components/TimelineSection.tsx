import { motion } from "framer-motion";
import { TimelineSection as TimelineSectionType } from "@/data/timelineData";
import { CheckCircle2, TrendingUp } from "lucide-react";
import geniusMarque from "@/assets/genius-marque.png";

interface Props {
  section: TimelineSectionType;
  index: number;
  isLast: boolean;
}

const TimelineSection = ({ section, index, isLast }: Props) => {
  return (
    <div className="relative flex gap-6 md:gap-12">
      {/* Timeline rail */}
      <div className="hidden md:flex flex-col items-center pt-2">
        <motion.div
          className="genius-timeline-dot flex-shrink-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
        {!isLast && <div className="genius-timeline-line mt-2" />}
      </div>

      {/* Content */}
      <motion.div
        className="flex-1 pb-10 md:pb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="genius-time-badge mb-3">{section.time}</div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
          {section.title}
        </h2>

        <div className="genius-section-card space-y-3">
          {section.paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {p}
            </p>
          ))}

          {section.bullets && (
            <div className="space-y-3 pt-2">
              {section.bullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  className="genius-bullet-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-genius-lime flex-shrink-0 mt-0.5" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }} />
                  <span className="text-foreground text-sm md:text-base">{bullet}</span>
                </motion.div>
              ))}
            </div>
          )}

          {section.highlight && (
            <motion.div
              className="genius-highlight-box mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base">
                {section.highlight}
              </p>
            </motion.div>
          )}

          {section.marketScale && (
            <motion.div
              className="mt-4 rounded-xl border border-accent/20 bg-accent/5 p-4 flex items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">Market Scale</span>
                <p className="text-foreground font-semibold text-sm md:text-base mt-0.5">{section.marketScale}</p>
              </div>
            </motion.div>
          )}

          {section.geniusMoment && (
            <motion.div
              className="genius-moment-box mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <img src={geniusMarque} alt="Genius" className="w-6 h-6 flex-shrink-0 object-contain" />
                <span className="text-xs font-bold uppercase tracking-wider text-genius-blue">Genius Touchpoint</span>
              </div>
              <p className="text-foreground font-medium leading-relaxed text-sm md:text-base">
                {section.geniusMoment}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineSection;
