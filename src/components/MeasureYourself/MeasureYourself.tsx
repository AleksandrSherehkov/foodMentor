export const MeasureYourself = ({ onNext, onBack, formData, setFormData }) => {
  const { height, weight } = formData;
  const isDisabled = !height || !weight;

  const handleContinue = () => {
    if (!isDisabled) {
      onNext();
    }
  };

  return (
    <div>
      <button className="p-2 bg-gray-500 text-white" onClick={onBack}>
        Back
      </button>
      <input
        className="border p-2"
        type="number"
        placeholder="Height"
        value={height}
        onChange={e => setFormData({ ...formData, height: Number(e.target.value) })}
      />
      <input
        className="border p-2"
        type="number"
        placeholder="Weight"
        value={weight}
        onChange={e => setFormData({ ...formData, weight: Number(e.target.value) })}
      />
      <button className="p-2 bg-blue-500 text-white" onClick={handleContinue} disabled={isDisabled}>
        Continue
      </button>
    </div>
  );
};
