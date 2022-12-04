import { ComponentPropsWithoutRef } from "react";

interface FieldProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

const Field = ({ label, id, ...rest }: FieldProps) => {
  return (
    <div className="flex flex-col w-full max-w-lg">
      <label htmlFor={id} className="mb-3 text-dark-200 dark:text-gray-200">
        {label}
      </label>
      <input className="input" id={id} {...rest} />
    </div>
  );
};

export default Field;
