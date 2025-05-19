import { assetPath } from './assetPath';

export const soundEffests = () => {
  const play = (path: string) => {
    const audio = new Audio(path);
    audio.play();
  };

  return {
    playClickSound: () => play(assetPath('/sound/click.mp3')),
    playResultSound: () => play(assetPath('/sound/result.mp3')),
    playbellSound: () => play(assetPath('/sound/bell.mp3')),
  };
};
