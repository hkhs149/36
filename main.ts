input.onGesture(Gesture.Shake, function () {
    if (randint(0, 10) > 5) {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
    } else if (randint(0, 10) < 5) {
        basic.showIcon(IconNames.No)
        basic.pause(100)
    } else if (randint(0, 10) == 5) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
    } else {
        basic.clearScreen()
    }
})
