import { Flex, Stack } from "@chakra-ui/react";
import SvgIcon from "./Svg/SvgIcon";

const navData = [
  { key: 1, icon: "help", title: "客服" },
  { key: 2, icon: "trade", title: "客服" },
  { key: 3, icon: "academic", title: "客服" },
  { key: 4, icon: "profile", title: "客服" },
  { key: 5, icon: "analytics", title: "客服" },
  { key: 6, icon: "top", title: "客服" },
  { key: 7, icon: "trading-signals", title: "客服" },
  { key: 8, icon: "market", title: "客服" },
];

const Nav = () => {
  return (
    <Stack
      spacing="0"
      as={"nav"}
      minH="100vh"
      justify="start"
      alignItems={"center"}
    >
      <Flex height={["58px"]} justify={"center"} alignItems={"center"}>
        <SvgIcon name={"burger-dark"} color="#fff" />
      </Flex>
      {navData.map((item) => (
        <Flex
          key={item.key}
          className="w-50 h-36 justify-center items-center mb-10 transition-colors duration-300 hover:bg-[#026fd3] rounded-[4px]"
        >
          <SvgIcon name={item.icon} key={item.key} color="#fff" />
        </Flex>
      ))}
    </Stack>
  );
};

export default Nav;
