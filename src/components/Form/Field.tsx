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
      <input
        className="dark:bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full py-1 pl-5 outline-none placeholder:text-gray-400 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 focus:invalid:border-2 focus:invalid:border-red-700 focus:invalid:dark:border-red-700"
        id={id}
        {...rest}
      />
    </div>
  );
};

export default Field;
