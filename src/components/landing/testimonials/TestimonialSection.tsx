import TestimonialCard from "./TestimonialsCard";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Computer Science Student",
    content: "AI Tutor completely changed how I study. The instant explanations are like having a professor available 24/7.",
    initials: "S",
    avatarColor: "bg-blue-600"
  },
  {
    name: "Rahul M.",
    role: "Engineering Student",
    content: "The personalized roadmap feature is incredible. It created a study plan perfectly tailored to my weak spots.",
    initials: "R",
    avatarColor: "bg-purple-600"
  },
  {
    name: "Emily J.",
    role: "Medical Student",
    content: "The video + AI chat split screen is genius! I can watch a lecture and ask questions simultaneously.",
    initials: "E",
    avatarColor: "bg-cyan-600"
  }
];

export default function TestimonialSection() {
  return (

    <section className="py-24 px-4 relative max-w-7xl mx-auto">

      <div className="text-center mb-16">

        <div className="z-10 mb-6 px-4 py-1 w-40 m-auto rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-2">
          <span className="text-xs text-blue-400">💬</span>
          <span className="text-xs font-medium text-gray-300">Testimonials</span>
        </div>

        <h2 className="z-10 text-4xl md:text-5xl font-bold text-center mb-16 text-white tracking-tight">
          Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Students Worldwide</span>
        </h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}