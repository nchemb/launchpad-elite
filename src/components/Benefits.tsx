import { motion } from "framer-motion";
import { Zap, Shield, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Get results in seconds, not hours. Built for speed without compromising quality.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Enterprise-grade security baked in from day one. Your data stays yours.",
  },
  {
    icon: BarChart3,
    title: "Actionable Insights",
    description:
      "Turn raw data into clear decisions with intelligent analytics and reporting.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why people are switching
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Everything you need, nothing you don't.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
