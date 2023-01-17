let distacesensor = 0
basic.forever(function () {
    distacesensor = sonar.ping(
    DigitalPin.P3,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    basic.showNumber(distacesensor)
    if (distacesensor < 5) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (distacesensor >= 5) {
        pins.analogWritePin(AnalogPin.P1, 512)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
