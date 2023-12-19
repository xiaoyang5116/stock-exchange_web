import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import Reward from "./Reward";
import FeatureButtons from "./FeatureButtons";

const Header = () => {
  return (
    <Flex
      mt="15px"
      mb="10px"
      height="38px"
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
