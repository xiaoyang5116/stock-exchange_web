import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import SvgIcon from "../SvgIcon";

const FeatureButtons = () => {
  return (
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
  );
};

export default FeatureButtons;
