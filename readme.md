# us-timezone-names
Library to get us timezone details. Functions accept timezone names and abbreviations

## Functions

### getTimeZoneByName
Get timezone info object by timezone name.

``` js

 import tz from 'us-timezones-name';

 tz.getTimeZoneByName( 'Pacific Standard Time' );
 // Returns
 {
   Abbreviation: 'PST',  //Abbreviation for the timezone
   Name: 'Pacific Standard Time',  //Standard Name
   DisplayName: 'Pacific Standard Time(UTC - 8)',  //Display String
   Offset: '-8 hours' //Offset string
 }

```


### getTimeZoneByAbbreviation
Get timezone info object by timezone abbreviation.

``` js

 tz.getTimeZoneByAbbreviation( 'PST' );
 // Returns
 {
   Abbreviation: 'PST',  //Abbreviation for the timezone
   Name: 'Pacific Standard Time',  //Standard Name
   DisplayName: 'Pacific Standard Time(UTC - 8)',  //Display String
   Offset: '-8 hours' //Offset string
 }

```


### getAll
Get all timezones objects.

``` js

 tz.getAll();
 // Returns  Array of timezone objects
 [
 {
   Abbreviation: 'PST',  //Abbreviation for the timezone
   Name: 'Pacific Standard Time',  //Standard Name
   DisplayName: 'Pacific Standard Time(UTC - 8)',  //Display String
   Offset: '-8 hours' //Offset string
 },
 .
 .
 ]


```
