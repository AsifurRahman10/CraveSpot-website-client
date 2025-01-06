export const Button = ({ text, color }) => {
  return (
    <button
      className={`btn block btn-outline border-0 border-b-4 px-8 border-${color} text-${color} text-lg font-medium`}
    >
      {text}
    </button>
  );
};
