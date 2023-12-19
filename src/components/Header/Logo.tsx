import { Box, HStack, Text } from "@chakra-ui/react";
import SvgIcon from "../SvgIcon";

const Logo = () => {
  return (
    <HStack gap={0}>
      <Box style={{ position: "relative", top: "-5px" }}>
        <SvgIcon name="logo-dark-ny" width="113px" height="34px" />
      </Box>
      <Text
        color="hsla(0,0%,100%,0.3)"
        fontSize="14px"
        fontWeight={"700"}
        letterSpacing=".5px"
        textTransform="uppercase"
        _before={{
          position: "relative",
          content: "''",
          display: "inline-block",
          margin: "-3px 15px 0",
          height: "4px",
          width: "4px",
          backgroundColor: "hsla(0,0%,100%,0.1)",
          borderRadius: "50%",
          verticalAlign: "middle",
        }}
      >
        Web Trading Platform
      </Text>
    </HStack>
  );
};

export default Logo;
