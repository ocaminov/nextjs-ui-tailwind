import React from "react";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ children, ...props }: Props) {
  return (
    <label
      className="block text-xs leading-6 text-gray-500 font-bold"
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;
