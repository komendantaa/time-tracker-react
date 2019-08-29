import moment from 'moment';

export const getFormattedDate = (date: string, format: string): string => {
  return moment(new Date(date).toISOString()).format(format);
};
