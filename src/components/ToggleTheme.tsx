import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const ToggleTheme = () => {
  const darkThemePreference = window.matchMedia("(prefers-color-scheme: dark)");
  const pageClasses = document.documentElement.classList;

  useEffect(() => darkThemePreference && pageClasses.add("dark"));

  const toggle = () => pageClasses.toggle("dark");

  return (
    <div className="hidden sm:block">
      <MoonIcon
        className="h-8 text-gray-100 cursor-pointer dark:hidden sm:hover:scale-150 transition-all"
        onClick={toggle}
      />
      <SunIcon
        className="h-8 text-gray-100 cursor-pointer hidden dark:block sm:hover:scale-150 transition-all"
        onClick={toggle}
      />
    </div>
  );
};

export default ToggleTheme;
