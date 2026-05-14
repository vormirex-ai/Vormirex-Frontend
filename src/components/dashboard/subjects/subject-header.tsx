import { Search } from "lucide-react";

export const SubjectHeader = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="sm:text-xl  text-3xl font-bold  flex items-center gap-2">
            📚 Subjects
          </h1>
          <p className="text-textColor mt-1">Explore and continue your learning journey across all subjects.</p>
        </div>

        <div className="flex bg-card p-1 rounded-lg border border-cyan-500/10">
          {["All Subjects", "In Progress", "Completed"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-1.5 text-sm rounded-md transition-all ${tab === "All Subjects" ? "bg-border" : "text-textColor hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-textColor" size={18} />
        <input
          type="text"
          placeholder="Search subjects, topics..."
          className="w-full bg-card border border-cyan-500/10 rounded-xl py-3 pl-12 pr-4  focus:outline-none focus:border-primary/50 transition-all"
        />
      </div>
    </div>
  );
};