function Input({
  label,
  ...props
}) {
  return (
    <div className="mb-4">

      <label className="block mb-2 text-sm font-medium">

        {label}

      </label>

      <input
        {...props}
        className="w-full border border-gray-300 rounded-md px-3 py-2"
      />

    </div>
  );
}

export default Input;