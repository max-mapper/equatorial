var eq = require('./')
var test = require('tape')

test('decDeg2Hms', function(t) {
  t.equal(eq.decDeg2Hms(24.622590), '24:37:21.32399999999592')
  t.equal(eq.decDeg2Hms(-24.622590), '-24:37:21.32399999999592')
  t.end()
})

test('decHms2Deg', function(t) {
  t.equal(eq.decHms2Deg('24:37:21.324'), 24.62259)
  t.equal(eq.decHms2Deg('-24:37:21.324'), -24.62259)
  t.end()
})

test('raDeg2Hms', function(t) {
  t.equal(eq.raDeg2Hms(66.918277), '4:27:40.386480000000375')
  t.equal(eq.raDeg2Hms(-66.918277), '-4:27:40.386480000000375')
  t.end()  
})

test('raHms2Deg', function(t) {
  t.equal(eq.raHms2Deg('4:27:40.386'), 66.918275)
  t.equal(eq.raHms2Deg('-4:27:40.386'), -66.918275)
  t.end()  
})



