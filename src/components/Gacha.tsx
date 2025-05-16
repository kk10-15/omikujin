type GachaProps = {
  onClick: () => void;
  isAnimating: boolean;
};

const Gacha = ({ onClick }: GachaProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-gradient-to-b from-[#5F9EA0] to-cyan-400 text-white px-10 py-6 rounded-full shadow-lg relative overflow-hidden hover:brightness-110 transition duration-300 hover:animate-wiggle"
      >
        <span className="absolute top-0 left-2 w-6 h-4 bg-white rounded-full opacity-60 blur-sm" />
        まわす
      </button>
    </>
  );
};

export default Gacha;
