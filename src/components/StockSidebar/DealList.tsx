import { useState } from "react";
import SvgIcon from "../Svg/SvgIcon";
import { Badge } from "@chakra-ui/react";

const DealList = () => {
  const [active, setActive] = useState("Trading");

  const activeCss = `w-full border-t-[#2a99ff] border-solid border-t-[2px] rounded-[4px] text-[12px] font-[700] flex flex-row justify-center items-center`;
  const notActiveCss =
    "w-64 bg-[#303440] flex flex-row px-11 text-[10px] items-center";

  return (
    <div className="h-100 hidden rounded bg-[#2b3040] sm:block xl:w-200 xl:ml-10">
      <div className="h-42 w-full flex flex-row">
        <button
          className={`transition-all ${
            active === "Trading" ? activeCss : notActiveCss
          }`}
          onClick={() => setActive("Trading")}
        >
          {active === "Trading" ? (
            <span className="mr-5">交易</span>
          ) : (
            <SvgIcon name="deal-list-trades" width="16p" height="16px" />
          )}

          <Badge>0</Badge>
        </button>
        <button
          className={`transition-all ${
            active === "Order" ? activeCss : notActiveCss
          }`}
          onClick={() => setActive("Order")}
        >
          {active === "Order" ? (
            <span className="mr-5">Order</span>
          ) : (
            <SvgIcon name="deal-list-trades" width="16p" height="16px" />
          )}
          <Badge>0</Badge>
        </button>
      </div>
    </div>
  );
};

export default DealList;
