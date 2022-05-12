import moment from 'moment';

export const trimLongName = (
  string: string | undefined,
  limit: number = 20
) => {
  if (!string) {
    return '';
  }
  if (string.length >= limit) {
    return string.slice(0, limit) + '...';
  }
  return string;
};

export const dateToString = (date: string, time: string) => {
  if (!date || !time) {
    return '';
  }
  return `${moment(date).format('DD/MM/YY')}, ${moment(time).format('HH:mm')}`;
};

export const getDaysArray = (month: number, year: number) => {
  const result = new Array(moment().month(month).year(year)
    .daysInMonth())
    .fill(null)
    .map((x, i) => moment().month(month).year(year).startOf('month').add(i, 'days').format('dddd MMM D, YYYY'));
  return result;
};

export   const numberWithSpaces = (amount: number) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};