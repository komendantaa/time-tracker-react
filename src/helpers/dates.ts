import moment from 'moment';

export const getFormattedCounter = (val: number): string => {
  let hour: string;
  let min: string;
  let sec: string;

  if (val < 10) {
    return val + ' sec';
  }
  if (val < 3600) {
    min = val / 60 >= 1 ? (val / 60).toString().split(/\./)[0] + ' min' : '';
    sec = val % 60 + ' sec';
    return min + ' ' + sec;
  }

  hour = val / 60 / 60 >= 1 ? (val / 60 / 60).toString().split(/\./)[0] + ' h' : '';
  min = val / 60 % 60 >= 1 ? (val / 60 % 60).toString().split(/\./)[0] + ' min' : '0 min';
  sec = val % 60 + ' sec';
  return hour + ' ' + min + ' ' + sec;
};

export const getFormattedDate = (date: string, format: string): string => {
  return moment(date).format(format);
};
