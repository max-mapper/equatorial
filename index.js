module.exports.raDeg2Hms = function(ra, round) {
  var prefix = ''
  var deg = +ra
  if (deg < 0) {
    prefix = '-'
    deg = Math.abs(deg)
  }
  var hour = Math.floor(deg / 15)
  var min = Math.floor(((deg / 15) - hour) * 60)
  var sec = ((((deg / 15) - hour) * 60) - min) * 60
  if (round) sec = Math.floor(sec)
  return prefix + [hour, min, sec].join(':')  
}

module.exports.decDeg2Hms = function(dec, round) {
  var prefix = ''
  var deg = +dec
  if (deg < 0) {
    prefix = '-'
    deg = Math.abs(deg)
  }
  var hour = Math.floor(deg)
  var min = Math.abs(Math.floor((deg - hour) * 60))
  var sec = (Math.abs((deg - hour) * 60) - min) * 60
  if (round) sec = Math.floor(sec)
  return prefix + [hour, min, sec].join(':')
}

module.exports.raHms2Deg = function(ra, round) {
  var parts = ra.split(':')
  var sign = 1
  var h = parseFloat(parts[0])
  var m = parseFloat(parts[1])
  var s = parseFloat(parts[2])
  if (h.toString()[0] === '-') {
    sign = -1
    h = Math.abs(h)
  }
  var sDeg = (s / 240)
  if (round) sDeg = Math.floor(sDeg)
  deg = (h * 15) + (m / 4) + sDeg
  return deg * sign
}

module.exports.decHms2Deg = function(dec, round) {
  var parts = dec.split(':')
  var sign = 1
  var d = parseFloat(parts[0])
  var m = parseFloat(parts[1])
  var s = parseFloat(parts[2])
  if (d.toString()[0] === '-') {
    sign = -1
    d = Math.abs(d)
  }
  var sDeg = (s / 3600)
  if (round) sDeg = Math.floor(sDeg)
  var deg = d + (m / 60) + sDeg
  return deg * sign
}