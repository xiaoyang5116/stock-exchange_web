import { Box, Flex, HStack, Hide, Text } from "@chakra-ui/react";
import SvgIcon from "../SvgIcon";

const FeatureButtons = () => {
  return (
    <HStack spacing={"20px"}>
      <Box
        height={["24px", "38px"]}
        padding={["5px", "11px"]}
        bg="header.btnBg"
        borderRadius="4px"
        _hover={{ bg: "header.btnHover" }}
        cursor="pointer"
        order={[1, 0]}
      >
        <SvgIcon name="notification" width="16px" height="16px" color="#fff" />
      </Box>

      <Flex
        height={["24px", "38px"]}
        px="12px"
        py="4px"
        bg="header.btnBg"
        borderRadius="4px"
        justifyContent="center"
        alignItems="center"
        _hover={{ bg: "header.btnHover" }}
        cursor="pointer"
        order={[0, 1]}
      >
        <SvgIcon name="profile-level-standart" />
        <Flex
          gap={[2, 0]}
          marginLeft="14px"
          mr="10px"
          direction={["row", "column"]}
          justify={"center"}
          alignItems="center"
        >
          <Text
            fontSize="10px"
            fontWeight="900"
            color="#9a9da6"
            textTransform="uppercase"
          >
            真实账户
          </Text>
          <Text
            color="#fff"
            whiteSpace="nowrap"
            fontSize="13px"
            lineHeight="18px"
            fontWeight="700"
          >
            $0.00
          </Text>
        </Flex>
        <SvgIcon name="caret" width="11px" height="11px" color="#fff" />
      </Flex>

      <HStack order={[3, 3]}>
        <HStack
          height="38px"
          padding="10px 12px"
          cursor="pointer"
          alignItems="center"
          // minWidth="125px"
          sx={{
            "@media (max-width: 1023px)": {
              minWidth: "125px",
            },
          }}
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

        <Hide breakpoint="(max-width: 1023px)">
          <HStack
            height="38px"
            padding="10px 12px"
            bg="header.btnBg"
            alignItems="center"
            justify="center"
            borderRadius="4px"
            _hover={{ bg: "header.btnHover" }}
            cursor="pointer"
          >
            <Text fontSize="14px" fontWeight="700">
              取款
            </Text>
          </HStack>
        </Hide>
      </HStack>
    </HStack>
  );
};

export default FeatureButtons;
