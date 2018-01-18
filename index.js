const _ = require('lodash');
const timeZoneList = require('./list');

const timeZoneManager = (function () {
	function getTimeZoneByAbbreviation (abbreviation) {
		return _.find(timeZoneList, timeZone => timeZone.Abbreviation == abbreviation);
	}

	function getTimeZoneByName (name){
		return _.find(timeZoneList, timeZone => timeZone.Name == name);
	}

	function getAll () {
		return timeZoneList;
	}

	return {
		getTimeZoneByAbbreviation,
		getTimeZoneByName,
		getAll,
	};
})()

module.exports = timeZoneManager;
