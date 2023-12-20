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
import FlagsIcon from "../Svg/FlagsIcon";
import InputComponent from "./InputConponent";
import SvgIcon from "../Svg/SvgIcon";

const StockSidebar = () => {
  return (
    <Box className="mt-10 px-10 mb-10 sm:bg-[#2b3040] sm:p-15 sm:rounded-[8px]">
      <Flex className="justify-between items-center flex-wrap">
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
      <InputComponent />
      <div className="flex flex-row justify-between items-center mb-10">
        <div className="flex-1 text-center mr-12">
          <span className="text-[12px] text-[hsla(0,0%,100%,0.5)]">投资：</span>
          <span className="text-[12px] text-[#fff] font-[900] ml-6 ">
            85.02$
          </span>
        </div>
        <div className="flex-1 text-center">
          <span className="text-[12px] text-[hsla(0,0%,100%,0.5)]">取款：</span>
          <span className="text-[12px] text-[#fff] font-[900] ml-6 ">
            85.02$
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        <button className="flex-1 flex flex-row justify-between items-center mr-12 p-10 h-40 rounded shadow-[0_4px_10px_rgba(255,101,84,.25)] bg-[#ff6251] hover:bg-[#ff402b]">
          <span className="text-[14px] font-[700]">看跌</span>
          <SvgIcon name="arrow-down-circle" />
        </button>
        <button className="flex-1 flex flex-row justify-between items-center p-10 h-40 rounded  shadow-[0_4px_10px_rgba(5,198,94,.3)] bg-[#0faf59] hover:bg-[#05c65e]">
          <span className="text-[14px] font-[700]">看涨</span>
          <SvgIcon name="arrow-up-circle" />
        </button>
      </div>
    </Box>
  );
};

export default StockSidebar;
