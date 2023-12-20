import { Text } from "@chakra-ui/react";
import SvgIcon from "../SvgIcon";

const FeatureButtons = () => {
  return (
    <div className="w-full flex flex-row justify-between sm:w-auto">
      {/* 账户 */}
      <div className="px-5 bg-[#2b3040] flex items-center rounded-[4px] hover:bg-[#000] cursor-pointer sm:order-2 sm:px-12 sm:py-4 sm:h-38">
        <SvgIcon
          name="profile-level-standart"
          className="h-14 w-14 sm:h-20 sm:w-20"
        />

        <div className="flex items-center ml-6 sm:ml-14 sm:flex-col ">
          <Text className="text-[10px] font-[900] text-[#9a9da6] uppercase">
            真实账户
          </Text>
          <Text className="text-[12px] text-[#fff] font-[900] ml-10 leading-[16px] sm:ml-0 sm:text-[14px] sm:font-[700] sm:leading-[18px]">
            $0.00
          </Text>
        </div>
        <SvgIcon
          name="caret"
          width="11px"
          height="11px"
          color="#fff"
          className="ml-10"
        />
      </div>

      {/* 通知 */}
      <div className="rounded-[4px] bg-[#2b3040] p-5 ml-5 flex justify-center items-center hover:bg-[#000] sm:order-1 sm:w-38 sm:h-38 sm:ml-0 sm:mr-20">
        <SvgIcon
          name="notification"
          className="h-14 w-14 sm:h-16 sm:w-16"
          color="#fff"
        />
      </div>

      {/* 存款 */}
      <div className="h-full flex ml-auto sm:order-3">
        <div
          className="h-full flex justify-center items-center 
      cursor-pointer bg-[#0faf59] hover:bg-[#05c65e] 
      rounded-[4px] px-12 py-3  shadow-[0_4px_10px_rgba(53,183,113,.25)] 
       sm:ml-20 sm:w-125 sm:h-38 lg:w-auto"
        >
          <SvgIcon
            name="plus"
            width="12px"
            height="12px"
            className="hidden sm:block sm:mr-10"
          />
          <Text fontSize="14px" fontWeight="700">
            存款
          </Text>
        </div>
        <div className="hidden h-38 px-12 py-10 ml-10 bg-[#2b3040] hover:bg-[#000] rounded-[4px] cursor-pointer items-center lg:flex ">
          <Text fontSize="14px" fontWeight="700">
            取款
          </Text>
        </div>
      </div>
    </div>
  );
};

export default FeatureButtons;
