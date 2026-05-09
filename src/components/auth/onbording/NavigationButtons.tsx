const NavigationButtons = ({
  step,
  prevStep,
  nextStep,
  handleSubmit,
}: any) => {
  return (
    <div className="flex items-center justify-between mt-10">
      <button
        onClick={prevStep}
        disabled={step === 1}
        className="px-6 py-3 rounded-xl bg-white/5 border border-white/10"
      >
        Back
      </button>

      {step < 4 ? (
        <button
          onClick={nextStep}
          className="px-8 py-3 rounded-xl bg-sky-500"
        >
          Continue
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          className="px-8 py-3 rounded-xl bg-green-500"
        >
          Finish Setup
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;