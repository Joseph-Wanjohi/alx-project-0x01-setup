import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-blue-500 
        text-white 
        font-medium 
        py-2 
        px-4 
        rounded-lg 
        shadow 
        hover:bg-blue-600 
        disabled:opacity-50 
        transition-colors 
        duration-200
      `}
    >
      {label}
    </button>
  );
};

export default Button;
