type ResultProps = {
  result: {
    rank: string;
    message: string;
  } | null;
  isAnimating: boolean;
  isFirst: boolean;
};

const Result = ({ result, isAnimating, isFirst }: ResultProps) => {
  return (
    <div className="w-60 flex flex-col items-center justify-center mt-20">
      {/* カプセル */}
      <div className="w-full flex justify-center">
        <div
          className={`${
            isFirst
              ? ''
              : isAnimating
              ? 'animate-spinDrop'
              : 'animate-fadeOut hidden'
          } relative w-48 h-48`}
        >
          {/* 下半分のカプセル */}
          <div className="absolute bottom-0 w-full h-1/2 bg-yellow-300 rounded-b-full border-2 border-gray-500 shadow-md" />
          {/* 上半分のカプセル */}
          <div className="absolute top-0 w-full h-1/2 bg-cyan-200 rounded-t-full border-2 border-gray-500 shadow-md z-0" />
          <div className="absolute top-0 w-full h-1/2 bg-white/30 rounded-t-full border-2 border-white/40 shadow-inner backdrop-blur-sm z-10" />
          <div className="absolute top-5 left-5 w-16 h-7 bg-white/80 rounded-full blur-[1px] opacity-80 rotate-[-35deg] z-0 pointer-events-none" />
        </div>
      </div>

      {/* メッセージ */}
      {result && (
        <div className="w-full bg-white/90 bg-gradient-to-br border-4 border-gray-500 shadow-xl flex flex-col items-center text-center p-1 animate-slideFadeIn">
          <div className="w-full h-14 flex justify-center items-center border-x-4 border-t-4 border-red-500">
            <p className="text-xl tracking-widest">おみくじ</p>
          </div>
          <div className="w-full h-24 flex justify-center items-center border-x-4 border-t-4 border-red-500">
            <p className="text-3xl font-bold  text-red-600 ">{result.rank}</p>
          </div>
          <div className="w-full h-64 flex justify-center items-center p-1 border-4 border-red-500">
            <p className="text-xl font-medium tracking-wider whitespace-pre-wrap writihg-vertical text-start">
              {result.message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
