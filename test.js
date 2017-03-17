const chai            = require( 'chai' );
const expect          = chai.expect;
const timeZoneManager = require( './index' );

describe ( "Tests", () => {

	it ( "Test getTimeZoneByName( 'Pacific Standard Time' )", doneCallback => {
		var timezone = timeZoneManager.getTimeZoneByName( 'Pacific Standard Time' );

		expect( timezone ).to.not.be.null;
		expect( timezone ).to.be.an( 'object' );
		expect( timezone.Name ).to.be.equal( 'Pacific Standard Time' );
		expect( timezone.Abbreviation ).to.be.equal( 'PST' );

		doneCallback();
	} );

	it ( "Test getTimeZonesByAbbreviation( 'CST' )", doneCallback => {
		var timezones = timeZoneManager.getTimeZonesByAbbreviation( 'CST' );

		expect( timezones ).to.not.be.null;
		expect( timezones ).to.be.instanceof( Array );
		expect( timezones ).to.not.to.be.empty;
		expect( timezones[ 1 ].Name ).to.be.equal( 'Central Standard Time' );
		expect( timezones[ 1 ].Abbreviation ).to.be.equal( 'CST' );

		doneCallback();
	} );

	it ( "Test getAll()", doneCallback => {
		var timezones = timeZoneManager.getAll();

		expect( timezones ).to.not.be.null;
		expect( timezones ).to.be.instanceof( Array );
		expect( timezones ).to.not.to.be.empty;

		doneCallback();
	} );

} );
