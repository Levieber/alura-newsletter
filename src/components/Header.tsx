import { User } from "../App";
import ToggleTheme from "./ToggleTheme";

const Header = ({ user }: { user: User | null }) => {
  return (
    <header className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      <span className="text-gray-100 capitalize">Olá, {user?.name || "usuário"}!</span>
      <h1 className="text-gray-100 text-xl">Alura Newsletter</h1>
      <ToggleTheme />
    </header>
  );
};

export default Header;
