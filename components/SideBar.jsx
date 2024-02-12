import MemberProfile from "./MemberProfile";
import NavLinks from "./NavLinks";
import SideBarHeader from "./SideBarHeader";

const SideBar = () => {
  return (
    <div className="px-4 w-[24rem] min-h-full bg-base-300 py-12 grid grid-rows-[auto,1fr,auto]">
      {/* 1st row */}
      <SideBarHeader />
      {/* 2nd row */}
      <NavLinks />
      {/* 3rd row */}
      <MemberProfile />
    </div>
  );
};

export default SideBar;
