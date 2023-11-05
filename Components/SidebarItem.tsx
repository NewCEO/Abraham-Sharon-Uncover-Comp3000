import Link from "next/link";
import { twMerge } from "tailwind-merge";



interface SidebarItemProps {
  icon: React.ReactElement;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active,
  href
}) => {
  return (
    <div>
      <Link
        href={href}
        className={twMerge(
          "flex flex-row h-auto items-center w-max gap-x-4 text-md cursor-pointer font-h1-weight px-2  ",
          active
            ? "bg-[#104b53] text-white  px-5 p-3  rounded-[4px]"
            : "bg-transparent text-[#104b53]"
        )} 
      >
        <div className="text-2xl">{icon}</div>
        <p className="truncate">{label}</p>
      </Link>
    </div>
  );
};

export default SidebarItem;
