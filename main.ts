pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.showIcon(IconNames.Yes)
/**
 * Gul     = IN1(IN2 til GND) =    Fremdrift  =  PIN1
 * 
 * Grøn  = IN3(IN4 til GND) =    Opdrift      =  PIN0
 */
basic.forever(function () {
    basic.showNumber(1)
    for (let indeks = 0; indeks <= 100; indeks++) {
        pins.analogWritePin(AnalogPin.P1, (101 - indeks) * 10)
        basic.pause(10)
    }
    basic.showNumber(0)
    for (let indeks = 0; indeks <= 100; indeks++) {
        pins.analogWritePin(AnalogPin.P0, (101 - indeks) * 10)
        basic.pause(10)
    }
})
