function FormFooter() {
  return (
    <div className="flex">
      <button className="text-neutral-lightGray">Go Back</button>
      <button
        type="submit"
        className="ml-auto bg-primary-marine-blue text-neutral-white px-3 py-1 rounded"
      >
        Next Step
      </button>
    </div>
  );
}

export default FormFooter;
