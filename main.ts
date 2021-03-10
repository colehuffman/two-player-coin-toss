let Coin_1 = 0
let Heads = 0
let Tails = 0
let Coin_2 = 0
let Player_1 = 0
let Player_2 = 0
input.onButtonPressed(Button.A, function () {
    // Picks a number between 1 and 2
    Coin_1 = randint(1, 2)
    if (Coin_1 == 1) {
        // If the number is 1 the Heads variable will increase by 1
        Heads += 1
        basic.showString("H")
        basic.pause(200)
        basic.clearScreen()
    } else {
        // If the number picked is not 1 the Tails variable will increase by 1
        Tails += 1
        basic.showString("T")
        basic.pause(200)
        basic.clearScreen()
    }
    Coin_2 = randint(1, 2)
    if (Coin_2 == 1) {
        // If the number picked is 1 the Heads variable will increase by 1
        Heads += 1
        basic.showString("H")
        basic.pause(200)
        basic.clearScreen()
    } else {
        // If the number picked is not 1 the Tails variable will increase by 1
        Tails += 1
        basic.showString("T")
        basic.pause(200)
        basic.clearScreen()
    }
    // Awards points depending on heads and tails variables
    if (Heads == 2 || Tails == 2) {
        Player_1 += 1
    } else if (Heads == 1 && Tails == 1) {
        Player_2 += 1
    }
    // Sets variables to 0 to be ready for the next button press
    Coin_1 = 0
    Coin_2 = 0
    Heads = 0
    Tails = 0
})
// Resets variables to 0
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
// when button B is pressed the players scores are shown
input.onButtonPressed(Button.B, function () {
    basic.showString("P1")
    basic.showString("" + (Player_1))
    basic.showString("P2")
    basic.showString("" + (Player_2))
    basic.clearScreen()
})
