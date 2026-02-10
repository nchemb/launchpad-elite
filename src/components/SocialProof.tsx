import { motion } from "framer-motion";

const logos = ["Acme Co", "Globex", "Soylent", "Initech", "Umbrella"];

export const SocialProof = () => {
  return (
    <section className="py-16 px-6 border-y border-border">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {logos.map((name) => (
            <span
              key={name}
              className="text-xl font-semibold text-muted-foreground/40 select-none"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
