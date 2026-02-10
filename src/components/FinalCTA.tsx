import { motion } from "framer-motion";
import { EmailCapture } from "./EmailCapture";

export const FinalCTA = () => {
  return (
    <section className="py-24 px-6">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Be the first to know when we launch. Early members get exclusive
          perks.
        </p>
        <EmailCapture />
      </motion.div>
    </section>
  );
};
