const Header = () => {
  return (
    <div className="w-full bg-sky-950 text-white text-2xl">
      <div className="h-12 bg-sky-900 text-white flex items-center  justify-between overflow-hidden relative">
        <div className="w-96 h-96 bg-amber-900 absolute top-[-60px] right-[-50px] rotate-[60deg]"></div>
        <div className="flex justify-between">
          <div>LOGO
            
          </div>
          <img src="./generic-logo.svg" alt="" />
          <div>Marcos Corazza</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
