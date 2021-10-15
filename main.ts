input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    doSomething2()
})
function doSomething () {
    images.createBigImage(`
        . . # # # # # # . .
        . # . . . . . . # .
        # . . # . . # . . #
        . # . . . . . . # .
        . . # # # # # # . .
        `).scrollImage(1, 200)
    basic.clearScreen()
}
function doSomething2 () {
    images.createBigImage(`
        . # # . . # # # . #
        # . . # . # . # . #
        # . . # . # . # . #
        # . . # . # . # . .
        . # # . . # . # . #
        `).scrollImage(1, 100)
    basic.pause(1000)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # . # #
        # # . # #
        # # . # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . # #
        # # . # #
        # # . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . # #
        # # . # #
        # # . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # . .
        . . . # #
        # # . # #
        # # . . .
        . . # # #
        `)
    basic.showLeds(`
        # # # . .
        . . . # .
        # # . # #
        . # . . .
        . . # # #
        `)
    basic.showLeds(`
        # # # . .
        . . . # .
        # . . . #
        . # . . .
        . . # # #
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        # . . . #
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        # . . . #
        . . . . .
        . . # . .
        `)
    basic.clearScreen()
    doSomething()
}
