# equatorial

convert right ascension/declination values from the [equatorial coordinate system](http://en.wikipedia.org/wiki/Equatorial_coordinate_system) (used in astronomy) between the HMS/DMS and Degrees formats

## installation

```
npm install equatorial
```

## usage

use in the browser with [browserify](http://browserify.org)

```js
var eq = require('equatorial')
eq.decDeg2Hms(24.622590) // '24:37:21.32399999999592'
eq.decDeg2Hms(-24.622590) // '-24:37:21.32399999999592'
eq.decHms2Deg('24:37:21.324') // 24.62259
eq.decHms2Deg('-24:37:21.324') // -24.62259
eq.raDeg2Hms(66.918277) // '4:27:40.386480000000375'
eq.raDeg2Hms(-66.918277) // '-4:27:40.386480000000375'
eq.raHms2Deg('4:27:40.386') // 66.918275
eq.raHms2Deg('-4:27:40.386') // -66.918275
```
