import { find } from 'lodash';
import timeZoneList from './list';

export default (() => {
	const getTimeZoneByAbbreviation = abbreviation => (find(timeZoneList, ['Abbreviation', abbreviation]))

	const getTimeZoneByName = name => (find(timeZoneList, ['Name', name]))

	const getAll = () => (timeZoneList)

	return {
		getTimeZoneByAbbreviation,
		getTimeZoneByName,
		getAll,
	};
})();
