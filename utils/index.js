import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export function Last30Days() {
  return dayjs().subtract(30, 'days').format('YYYY-MM-DD');
}

export function NumberOfDays(date) {
  dayjs.extend(relativeTime);
  return dayjs().to(date);
}

export const FormatNumber = (num) => {
  try {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } catch (error) {
    return num;
  }
};
