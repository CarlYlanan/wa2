import { useState } from "react";

function TextHighlight({ text }: { text: string }) {
  const [isHovered, setHovered] = useState(false);
  const handleMouse = () => setHovered(!isHovered);

  return (
    <button
      className={`w-72 h-11 ${
        isHovered ? "text-[#333333]" : "text-[#F5D04E]"
      } rounded-xl font-extrabold text-start text-xl`}
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
    >
      {text}
    </button>
  );
}

export default TextHighlight;
