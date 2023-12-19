import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import SvgIcon from "./SvgIcon";
import rewards_bg from "../images/rewards_bg.png";
import rocket from "../images/rocket.png";

const Header = () => {
  return (
    <Flex
      mt="15px"
      mb="10px"
      paddingRight="10px"
      direction="row"
      justifyContent="space-between"
      align="center"
      height="38px"
    >
      <HStack>
        <SvgIcon
          name="logo-light-ny"
          height="34px"
          width="113px"
          style={{ position: "relative", top: "-5px" }}
        />
        <Text
          color="rgba(53,58,77,0.3)"
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
            backgroundColor: "rgba(53,58,77,0.1)",
            borderRadius: "50%",
            verticalAlign: "middle",
          }}
        >
          Web Trading Platform
        </Text>
      </HStack>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        position={"relative"}
      >
        <Image
          src={rewards_bg}
          height="48px"
          position="absolute"
          objectFit="cover"
          borderRadius="25px"
          width="100%"
          zIndex={0}
        />
        <Flex
          justifyContent="space-between"
          alignItems="center"
          zIndex={1}
          cursor="pointer"
          marginLeft="16px"
          mr="8px"
        >
          <Image src={rocket} alt="rocket" width="30px" mr="8px" />
          <Text as="span" color="#fff" fontSize="12px" fontWeight="400">
            根据存款余额获得30%的奖励
          </Text>
          <Box
            style={{
              fontWeight: "700",
              padding: "9px 12px",
              marginLeft: "8px",
              background: "linear-gradient(180deg,#515976,#373d56)",
              boxShadow: " 20px 20px 80px rgba(53,58,77,.6)",
              borderRadius: "100px",
            }}
          >
            30%
          </Box>
        </Flex>
      </Flex>

      <HStack>
        <Box
          height="38px"
          padding="11px"
          bg="rgba(53,58,77,0.1)"
          borderRadius="4px"
          _hover={{ bg: "#ced2dd" }}
          cursor="pointer"
        >
          <SvgIcon name="notification" width="16px" height="16px" />
        </Box>

        <Flex
          height="38px"
          // padding="11px"
          px="12px"
          py="4px"
          bg="rgba(53,58,77,0.1)"
          borderRadius="4px"
          justifyContent="center"
          alignItems="center"
          _hover={{ bg: "#ced2dd" }}
          cursor="pointer"
        >
          <SvgIcon name="profile-level-standart" />

          <VStack gap={0} marginLeft="14px" mr="10px">
            <Text
              fontSize="10px"
              fontWeight="900"
              color="#9a9da6"
              textTransform="uppercase"
            >
              真实账户
            </Text>
            <Text
              color="#353a4d"
              whiteSpace="nowrap"
              fontSize="13px"
              lineHeight="18px"
              fontWeight="700"
            >
              $0.000
            </Text>
          </VStack>
          <SvgIcon name="caret" width="11px" height="11px" color="#353a4d" />
        </Flex>

        <HStack></HStack>
        <HStack
          height="38px"
          padding="10px 12px"
          cursor="pointer"
          alignItems="center"
          minWidth="125px"
          justify="center"
          bg="#0faf59"
          borderRadius="4px"
          boxShadow="0 4px 10px rgba(53,183,113,.25)"
          _hover={{ bg: "#05c65e" }}
        >
          <SvgIcon name="plus" width="12px" height="12px" />
          <Text fontSize="14px" fontWeight="700">
            存款
          </Text>
        </HStack>

        <HStack
          height="38px"
          padding="10px 12px"
          bg="#353a4d"
          cursor="pointer"
          alignItems="center"
          justify="center"
          borderRadius="4px"
        >
          <Text>取款</Text>
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Header;
