import { FeatureCard } from "../FeaturesCard";
import { featuresData } from "../data/featuresData";

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 relative max-w-7xl mx-auto">

      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-4">
          ✨ Core Features
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Everything You Need to <span className="text-blue-500">Master Any Subject</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          From AI-powered tutoring to smart roadmaps, we've built the complete learning ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            iconBg={feature.iconBg}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;