import {
  Box,
  Menu,
  MenuButton,
  Button,
  HStack,
  Text,
  Flex,
  Switch,
  Show,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import FlagsIcon from "../Svg/FlagsIcon";
import InputComponent from "./InputConponent";
import SvgIcon from "../Svg/SvgIcon";

const StockSidebar = () => {
  return (
    <Box className="mt-10 px-10 mb-10 sm:bg-[#2b3040] sm:p-15 sm:rounded-[8px] xl:mt-0 xl:w-200 xl:ml-10">
      <Flex className="justify-between items-center flex-wrap">
        <Show below="xl">
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
                <Text className="text-[12px] font-[900] mx-8">
                  USD/TRY (OTC)
                </Text>
                <Text className="text-[12px] font-[900] text-[#ff8a00]">
                  92%
                </Text>
              </HStack>
            </MenuButton>
          </Menu>
        </Show>
        <Show above="xl">
          <HStack spacing={0}>
            <FlagsIcon name="usd" className="w-14 h-14" />
            <FlagsIcon name="try" className="w-14 h-14 ml-[-4px]" />
            <Text className="text-[13px] tracking-tighter leading-[18px] font-[900] ml-8 mr-2">
              USD/TRY (OTC)
            </Text>
            <Text className="text-[13px] tracking-tighter font-[900] text-[hsla(0,0%,100%,.3)]">
              92%
            </Text>
          </HStack>
        </Show>
        <HStack className="xl:w-full xl:mt-10 xl:justify-between ">
          <Text className="text-[10px] leading-[12px] text-[#2b99ff] font-[900] uppercase tracking-tighter">
            pending trade
          </Text>
          <Switch size="sm" color="#2b99ff" />
        </HStack>
      </Flex>
      <InputComponent />
      <div className="flex flex-row justify-between items-center mb-10 sm:hidden">
        <div className="flex-1 text-center mr-12 xl:mr-0">
          <span className="text-[12px] text-[hsla(0,0%,100%,0.5)]">投资：</span>
          <span className="text-[12px] text-[#fff] font-[900] ml-6 xl:text-[hsla(0,0%,100%,0.5)]">
            85.02$
          </span>
        </div>
        <div className="flex-1 text-center xl:hidden">
          <span className="text-[12px] text-[hsla(0,0%,100%,0.5)]">取款：</span>
          <span className="text-[12px] text-[#fff] font-[900] ml-6 ">
            85.02$
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center xl:flex-col xl:justify-stretch  xl:mt-20">
        <button className="flex-1 flex flex-row justify-between items-center mr-12 p-10 h-40 rounded shadow-[0_4px_10px_rgba(255,101,84,.25)] bg-[#ff6251] hover:bg-[#ff402b] xl:mr-0 xl:order-3 xl:w-full">
          <span className="text-[14px] font-[700]">看跌</span>
          <SvgIcon name="arrow-down-circle" />
        </button>
        <div className="hidden sm:flex sm:w-150 sm:flex-row justify-center items-center xl:mb-10 xl:block xl:order-2 xl:mt-10">
          <div className="flex-1 flex flex-col justify-center text-center xl:flex-row">
            <div className="text-[12px] text-[fff]">您的支付：</div>
            <div className="text-[12px] text-[#fff] font-[900] ml-6">
              85.02$
            </div>
          </div>
          <div className="flex-1 text-center flex flex-col justify-center mr-12 xl:mr-0 xl:flex-row">
            <div className="text-[12px] text-[hsla(0,0%,100%,0.5)]">投资：</div>
            <div className="text-[12px] text-[hsla(0,0%,100%,0.5)] font-[900] ml-6">
              85.02$
            </div>
          </div>
        </div>
        <button className="flex-1 flex flex-row justify-between items-center p-10 h-40 rounded  shadow-[0_4px_10px_rgba(5,198,94,.3)] bg-[#0faf59] hover:bg-[#05c65e] xl:order-1 xl:w-full">
          <span className="text-[14px] font-[700]">看涨</span>
          <SvgIcon name="arrow-up-circle" />
        </button>
      </div>
    </Box>
  );
};

export default StockSidebar;
