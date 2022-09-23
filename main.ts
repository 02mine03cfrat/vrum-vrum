let P2 = 0
let P1 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Simbora!")
    basic.pause(randint(1000, 5000))
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    P2 += 1
    basic.showString("2")
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    P1 += 1
    basic.showString("1")
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
