export const soundEffests = () => {
  const play = (path: string) => {
    const audio = new Audio(path);
    audio.play();
  };

  return {
    playClickSound: () => play('/sound/click.mp3'),
    playResultSound: () => play('/sound/result.mp3'),
    playbellSound: () => play('/sound/bell.mp3'),
  };
};
