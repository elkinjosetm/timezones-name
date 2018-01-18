const chai = require('chai');
const timeZoneManager = require('./index');
const expect = chai.expect;

describe ("Tests", () => {
	it ("Test getTimeZoneByName('Pacific Standard Time')", doneCallback => {
		var timezone = timeZoneManager.getTimeZoneByName('Pacific Standard Time');

		expect(timezone).to.not.be.undefined;
		expect(timezone).to.be.an('object');
		expect(timezone.Name).to.be.equal('Pacific Standard Time');
		expect(timezone.Abbreviation).to.be.equal('PST');

		doneCallback();
	});

	it ("Test getTimeZoneByAbbreviation('CST')", doneCallback => {
		var timezone = timeZoneManager.getTimeZoneByAbbreviation('CST');

		expect(timezone).to.not.be.undefined;
		expect(timezone).to.be.an('object');
		expect(timezone.Name).to.be.equal('Central Standard Time');
		expect(timezone.Abbreviation).to.be.equal('CST');

		doneCallback();
	});

	it ("Test getAll()", doneCallback => {
		var timeZones = timeZoneManager.getAll();

		expect(timeZones).to.not.be.null;
		expect(timeZones).to.not.be.undefined;
		expect(timeZones).to.be.instanceof(Array);
		expect(timeZones).to.not.to.be.empty;

		doneCallback();
	});
});
