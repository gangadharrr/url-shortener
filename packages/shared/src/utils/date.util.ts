import dayjs from 'dayjs';
import dayjsTimezone from 'dayjs/plugin/timezone.js';
import dayjsUTC from 'dayjs/plugin/utc.js';

dayjs.extend(dayjsUTC);
dayjs.extend(dayjsTimezone);

export const now = ({ utc }: { utc?: boolean } = { utc: true }) => {
	if (utc) {
		// return utc time
		return dayjs.utc().toDate();
	}

	return dayjs().toDate();
};
