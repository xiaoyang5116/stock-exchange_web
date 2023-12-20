import {
  Box,
  Menu,
  MenuButton,
  Button,
  HStack,
  Text,
  Flex,
  Switch,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import FlagsIcon from "./Svg/FlagsIcon";

const StockSidebar = () => {
  return (
    <Box className="mt-10 px-10">
      <Flex className="justify-between items-center">
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            height="24px"
            padding="5px"
          >
            <HStack spacing={0}>
              <FlagsIcon name="usd" className="w-14 h-14" />
              <FlagsIcon name="try" className="w-14 h-14 ml-[-4px]" />
              <Text className="text-[12px] font-[900] mx-8">USD/TRY (OTC)</Text>
              <Text className="text-[12px] font-[900] text-[#ff8a00]">92%</Text>
            </HStack>
          </MenuButton>
        </Menu>
        <HStack>
          <Text className="text-[10px] leading-[12px] text-[#2b99ff] font-[900] uppercase tracking-tighter">
            pending trade
          </Text>
          <Switch size="sm" color="#2b99ff" />
        </HStack>
      </Flex>
    </Box>
  );
};

export default StockSidebar;
