const ProgressBar = ({ step }: any) => {
  return (
    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-500"
        style={{
          width: `${(step / 4) * 100}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;