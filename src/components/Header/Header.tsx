import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import Reward from "./Reward";
import FeatureButtons from "./FeatureButtons";

const Header = () => {
  return (
    <Flex
      as="header"
      mt={["6px", "15px"]}
      mb="10px"
      px="10px"
      height={["24px", "38px"]}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Logo />
      <Reward />
      <FeatureButtons />
    </Flex>
  );
};

export default Header;
