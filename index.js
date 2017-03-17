const _            = require( 'lodash' );
const timeZoneList = require( './list' );

const timeZoneManager = ( function () {
	const getTimeZonesByAbbreviation = abbreviation => _.filter( timeZoneList, timeZone => timeZone.Abbreviation == abbreviation );
	const getTimeZoneByName          = name => _.find( timeZoneList, timeZone => timeZone.Name == name );
	const getAll                     = () => timeZoneList;

	return {
		getTimeZonesByAbbreviation : getTimeZonesByAbbreviation,
		getTimeZoneByName          : getTimeZoneByName,
		getAll                     : getAll,
	};
} )()

module.exports = timeZoneManager;
