const HeaderBanner = () => {
  return (
    <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="flex flex-col items-center justify-start gap-[12px]">
        <div className="relative leading-[72px] font-semibold">Properties</div>
        <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-large-400">
          <span>{`Home / `}</span>
          <span className="font-medium text-gray-white">Properties</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
