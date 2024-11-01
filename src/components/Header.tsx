import Logo from "./Logo";
import MainMenu from "./MainMenu";
import SideMenu from "./SideMenu";

function Header() {
  return (
    <div className="px-10 py-5 h-[80px] w-full flex  bg-alkahfi-base/30 backdrop-blur-sm justify-between items-center
    ">
      <Logo />
      <MainMenu />
      <SideMenu />
    </div>
  );
}

export default Header;
