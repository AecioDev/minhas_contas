export function Spinner({ size = "4", color = "blue" }) {
  const spinnerSize = `h-${size} w-${size}`;
  const spinnerColor = `border-t-${color}-500`;

  return (
    <div
      className={`border-4 border-slate-300 ${spinnerColor} ${spinnerSize} rounded-full animate-spin`}
    ></div>
  );
}
