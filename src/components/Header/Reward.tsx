import { Flex, Image, Text, Box } from "@chakra-ui/react";
import rewards_bg from "../../images/rewards_bg.png";
import rocket from "../../images/rocket.png";

const Reward = () => {
  return (
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
  );
};

export default Reward;
