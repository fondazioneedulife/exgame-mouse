import React, { useState } from "react";

interface QuestionProps {
  text: string;
  options: string[];
  name: string;
}

export const Question: React.FC<QuestionProps> = ({ text, options, name }) => {
  const [selected, setSelected] = useState<string>("");

  const handleChange = (value: string) => {
    setSelected(value);
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <p>{text}</p>
      {options.map((option) => (
        <label key={option} style={{ display: "block", margin: "5px 0" }}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={selected === option}
            onChange={() => handleChange(option)}
          />
          {" "}{option}
        </label>
      ))}
    </div>
  );
};