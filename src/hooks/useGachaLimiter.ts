import { useEffect, useState } from 'react';
import { getToday } from '../utils/date';

export const useGachaLimiter = (): [boolean, () => void] => {
  const [alreadyDrawn, setAlreadyDrawn] = useState<boolean>(false);

  useEffect(() => {
    const savedDate = localStorage.getItem('lastDrawDate');
    if (savedDate === getToday()) {
      setAlreadyDrawn(true);
    }
  }, []);

  const markAsDrawn = () => {
    localStorage.setItem('lastDrawDate', getToday());
    setAlreadyDrawn(true);
  };

  return [alreadyDrawn, markAsDrawn];
};
