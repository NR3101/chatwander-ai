import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";

const SideBarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <SiOpenaigym className="w-9 h-9 text-primary" />
      <h2 className="text-lg font-extrabold text-primary mr-auto">
        ChatWander AI
      </h2>
      <ThemeToggle />
    </div>
  );
};

export default SideBarHeader;
