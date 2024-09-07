import { useState } from "react";
export const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");
  function handleColorChange(event) {
    setColor(event.target.value);
  }

  function copyHexCode() {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        alert("Hex code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
  return (
    <div>
      <h1>Color Picker</h1>
      <div style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a color </label>
      <div>
        <input type="color" value={color} onChange={handleColorChange}></input>
      </div>
      <div>
        <button onClick={copyHexCode} className="bg-blue-200 p-3">
          copyhex
        </button>
      </div>
    </div>
  );
};
