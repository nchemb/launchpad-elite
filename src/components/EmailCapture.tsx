import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

export const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    // Replace with actual API call
    setSubmitted(true);
    toast.success("You're on the list!");
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">
        <Check className="w-5 h-5" />
        You're on the waitlist!
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
      />
      <button
        type="submit"
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
      >
        Get Early Access
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};
