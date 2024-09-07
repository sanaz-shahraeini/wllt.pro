

const WelcomeFrame = () => {
  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
    <div className="flex flex-col items-center justify-between min-h-screen w-full gr-bg" >
      {/* Card Image */}
      <div className="w-[258px] mt-32">
        <img src="/card light.png" alt="Mastercard" className="w-full" />
      </div>

      {/* Text */}
      <p className="text-white text-[28px] font-medium leading-[36px] px-28 text-left">
        Mastercard Linked to the Crypto Network!
      </p>

      {/* Button at Bottom */}
      <div className="w-full flex justify-center mb-8">
        <button className="w-5/6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 rounded-md text-lg">
          Let's go!
        </button>
      </div>
    </div>
    </div>
  );
};

export default WelcomeFrame;