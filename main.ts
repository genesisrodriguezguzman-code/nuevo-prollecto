input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showNumber(input.lightLevel())
})
