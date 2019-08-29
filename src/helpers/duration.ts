import { SecondsIn } from '../constants/duration';

export const getFormattedCounter = (value: number): string => {
  let val = value;
  let str = '';

  const prepareDuration = (secondsIn: number, timeType: string) => {
    if (val >= secondsIn) {
      const duration = Math.floor(val / secondsIn);
      val = val - duration * secondsIn;

      const durationName = duration === 1 ? timeType : `${timeType}s`;
      str = `${str + duration} ${durationName} `;
    }
  };

  prepareDuration(SecondsIn.WEEK, 'week');
  prepareDuration(SecondsIn.DAY, 'day');
  prepareDuration(SecondsIn.HOUR, 'hour');
  prepareDuration(SecondsIn.MINUTE, 'min');
  if (val >= 0) str = `${str + val} sec`;

  return str;
};
