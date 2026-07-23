function Button({
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 rounded-md transition duration-200"
    >
      {children}
    </button>
  );
}

export default Button;