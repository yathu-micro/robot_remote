radio.setGroup(154)
basic.forever(function () {
    while (true) {
        if (input.isGesture(Gesture.LogoUp)) {
            radio.sendNumber(1)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else if (input.isGesture(Gesture.LogoDown)) {
            radio.sendNumber(2)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else if (input.isGesture(Gesture.Shake)) {
            radio.sendNumber(3)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        } else if (input.isGesture(Gesture.TiltRight)) {
            radio.sendNumber(4)
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else if (input.isGesture(Gesture.TiltLeft)) {
            radio.sendNumber(5)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else {
            radio.sendNumber(3)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
})
