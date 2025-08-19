import dayjs from 'dayjs';

// Format the time to match Gov UK style guide
// https://www.gov.uk/guidance/style-guide/a-to-z#times
export const formatTime = (timeToFormat: string): string => {
  const dayJsInstance = dayjs(timeToFormat);
  if (dayJsInstance.format('HH:mm') === '00:00') {
    return 'midnight';
  }

  if (dayJsInstance.format('HH:mm') === '12:00') {
    return 'midday';
  }

  if (dayJsInstance.format('mm') === '00') {
    return dayJsInstance.format('ha');
  } else {
    return dayJsInstance.format('h:mma');
  }
};

// Format the date to match the Gov UK style guide
// https://www.gov.uk/guidance/style-guide/a-to-z#dates
export const formatDate = (dateToFormat: string): string => {
  let dateObject = null;
  try {
    dateObject = dayjs(dateToFormat);
  } catch (error) {
    return '';
  }

  return dateObject.format('dddd D MMMM YYYY');
};

// Format the date and time to match the Gov UK style guide
// https://www.gov.uk/guidance/style-guide/a-to-z#dates
export const formatDateTime = (dateToFormat: string): string => {
  try {
    return formatDate(dateToFormat) + ' at ' + formatTime(dateToFormat);
  } catch (error) {
    return '';
  }
};

// Format a date range to match the Gov UK style guide,
// with optional end date
export const formatDateRange = (startDate: string, endDate?: string): string => {
  if (!endDate) {
    return formatDateTime(startDate);
  }

  try {
    const endDateObject = dayjs(endDate);
    const startDateObject = dayjs(startDate);

    if (startDateObject.format('YYYY-MM-DD') === endDateObject.format('YYYY-MM-DD')) {
      if (startDateObject.format('HH:mm') === '00:00' && endDateObject.format('HH:mm') === '23:59') {
        return `${formatDate(startDate)} - all day`;
      }
      return `${formatDate(startDate)} at ${formatTime(startDate)} to ${formatTime(endDate)}`;
    } else {
      return `${formatDate(startDate)} at ${formatTime(startDate)} to ${formatDate(endDate)} at ${formatTime(endDate)}`;
    }
  } catch (error) {
    return '';
  }
};
