const _            = require( 'lodash' );
const timeZoneList = require( './list' );

const timeZoneManager = ( function () {
const getTimeZoneByAbbreviation = abbreviation => _.find( timeZoneList, timeZone => timeZone.Abbreviation == abbreviation );
const getTimeZoneByName         = name => _.find( timeZoneList, timeZone => timeZone.Name == name );
const getAll                    = () => timeZoneList;

	return {
		getTimeZoneByAbbreviation : getTimeZoneByAbbreviation,
		getTimeZoneByName         : getTimeZoneByName,
		getAll                    : getAll,
	};
} )()

module.exports = timeZoneManager;
