import SvgIcon from "./Svg/SvgIcon";

const FooterNav = () => {
  const navData = [
    { key: 1, iconName: "nav-help" },
    { key: 1, iconName: "nav-trade" },
    { key: 1, iconName: "nav-profile" },
    { key: 1, iconName: "nav-settings" },
    { key: 1, iconName: "nav-more" },
  ];

  return (
    <div className="h-40 flex flex-row bg-[#1c1f2d] sm:hidden">
      {navData.map((nav) => (
        <button
          key={nav.key}
          className="h-40 flex-1 flex justify-center items-center transition-opacity duration-300 opacity-[0.3] hover:opacity-[1]"
        >
          <SvgIcon name={nav.iconName} width="18px" height="18px" />
        </button>
      ))}
    </div>
  );
};

export default FooterNav;
