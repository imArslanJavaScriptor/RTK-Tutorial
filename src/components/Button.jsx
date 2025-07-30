import React from "react";

function Button({ cickEvent, text, seprateStyles, isSubmit }) {
  return (
    <button
      onClick={cickEvent}
      className={`px-5 py-2.5 rounded-[4px] font-medium text-sm  cursor-pointer ${seprateStyles}`}
      type={isSubmit ? "submit" : "button"}
    >
      {text}
    </button>
  );
}

export default Button;
