const InputComponent = () => {
  return (
    <div className="w-full flex flex-row justify-between mt-20 mb-10 xl:flex-col xl:block">
      <div
        className="flex-1 flex flex-row justify-start items-center h-40 py-11 
      px-14 mr-12 border-[1px] border-solid border-[hsla(0,0%,100%,0.3)] rounded relative 
      hover:border-[hsla(0,0%,100%,.5)] xl:h-48 xl:mr-0"
      >
        <span className="absolute text-[12px] text-[hsla(0,0%,100%,0.3)] bg-[#1c1f2d] sm:bg-[#2b3040] top-[-10px] left-10 px-4">
          时间
        </span>
        <input
          type="text"
          disabled
          value={"12:20"}
          className="bg-transparent text-[14px] m-0 p-0 text-[#fff] absolute"
        />
        <span className="absolute text-[10px] text-[#2b99ff] bg-[#1c1f2d] sm:bg-[#2b3040] bottom-[-7px] px-4 ml-[-14px] left-[50%] cursor-pointer hidden xl:block">
          转换
        </span>
      </div>

      <div
        className="flex-1 flex flex-row justify-between items-center h-40 py-11 px-14 
      border-[1px] border-solid border-[hsla(0,0%,100%,0.3)] rounded relative hover:border-[hsla(0,0%,100%,.5)] xl:h-48 xl:mt-14"
      >
        <span className="absolute text-[12px] text-[hsla(0,0%,100%,0.3)] bg-[#1c1f2d] sm:bg-[#2b3040] top-[-10px] left-10 px-4">
          投资
        </span>
        <div className="w-24 h-24 rounded-full bg-[#676b79] text-[#fff] text-[16px] flex justify-center items-center z-[2] cursor-pointer">
          -
        </div>
        <input
          type="text"
          defaultValue={"1,220 $"}
          className="bg-transparent outline-none text-[14px] m-0 p-0 text-[#fff] absolute ml-30"
        />
        <div className="w-24 h-24  rounded-full bg-[#676b79] text-[#fff] text-[16px] flex justify-center items-center z-[2] cursor-pointer">
          +
        </div>
        <span className="absolute text-[10px] text-[#2b99ff] bg-[#1c1f2d] sm:bg-[#2b3040] bottom-[-7px] px-4 ml-[-14px] left-[50%] cursor-pointer">
          转换
        </span>
      </div>
    </div>
  );
};

export default InputComponent;
