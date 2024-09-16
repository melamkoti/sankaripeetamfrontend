import React, { useRef, ChangeEvent } from "react";

interface OTPInputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ onChange = () => {} }) => {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (value.length > 1) {
      e.target.value = value.slice(0, 1);
    }

    if (index < inputs.current.length - 1 && value) {
      inputs.current[index + 1]?.focus();
    } else if (value === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }

    onChange(e);
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputs.current[index] = el)}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
          className="w-12 h-12 border-2 border-[#FFA12B] rounded-lg text-center text-lg outline-none focus:border-[#FFA12B] focus:bg-orange-100"
        />
      ))}
    </div>
  );
};

export default OTPInput;
