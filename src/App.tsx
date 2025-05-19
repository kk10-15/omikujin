import { useState } from 'react';
import { fortunes, type Fortune } from './constants/fortunes';

import Gacha from './components/Gacha';
import Result from './components/Result';
import { soundEffests } from './utils/soundEffects';
import { assetPath } from './utils/assetPath';

type Result = {
  rank: Fortune['rank'];
  message: string;
};

export const App = () => {
  const [result, setResult] = useState<Result | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const { playClickSound, playResultSound, playbellSound } = soundEffests();

  const handleGacha = (): void => {
    if (isAnimating) return;

    setIsFirst(false); // 初回アクセス制御解除

    playClickSound(); // クリック音
    setTimeout(playbellSound, 400); // 回転音

    setResult(null); // おみくじ結果初期化
    setIsAnimating(true); // アニメーション開始

    setTimeout(() => {
      // ランク抽選
      const randomFortune =
        fortunes[Math.floor(Math.random() * fortunes.length)];
      // メッセージ抽選
      const randomMessage =
        randomFortune.messages[
          Math.floor(Math.random() * randomFortune.messages.length)
        ];
      // おみくじ結果設定
      setResult({ rank: randomFortune.rank, message: randomMessage });
      setIsAnimating(false); // アニメーション終了
      playResultSound(); // 結果音
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center px-4 text-[#2F4F4F] font-kaiseiDecol">
      <header className="fixed top-0 w-full text-center bg-white/80 backdrop-blur-md shadow-md py-4 z-50">
        <div className="flex justify-center items-center gap-5">
          <img
            src={assetPath('icon/gacha.png')}
            alt="ガチャアイコン"
            className="w-8 h-8 -rotate-12"
          />
          <h1 className="text-2xl font-bold tracking-wide">
            まわして！おみくじん
          </h1>
          <img
            src={assetPath('icon/omikuji.png')}
            alt="おみくじアイコン"
            className="w-9 h-9 rotate-6"
          />
        </div>
      </header>

      <main className="mt-32 flex flex-col items-center">
        <Gacha onClick={handleGacha} isAnimating={isAnimating} />
        <Result result={result} isAnimating={isAnimating} isFirst={isFirst} />
      </main>
    </div>
  );
};
