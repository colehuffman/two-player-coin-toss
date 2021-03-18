let Heads = 0
let Tails = 0
let P1 = 0
let P2 = 0
let Coin_1 = 0
let Coin_2 = 0
/**
 * <---- all coin variables are set to 0 to be ready for next button press
 */
input.onButtonPressed(Button.A, function () {
    // loops inside code twice increasing the index variable by 1 each time
    for (let index = 0; index <= 1; index++) {
        // if index variable is 0 the microbit runs the "First Coin" function
        // if index variable is 1 the microbit runs the "Second Coin" function
        if (index == 0) {
            First_Coin()
        } else if (index == 1) {
            Second_Coin()
        }
    }
    if (Heads == 2 || Tails == 2) {
        // If both coins roll the same, P1's score increases by 1
        P1 += 1
    } else if (Heads == 1 && Tails == 1) {
        // if the coins roll opposite, P2's score increases by 1
        P2 += 1
    }
    Coin_1 = 0
    Coin_2 = 0
    Heads = 0
    Tails = 0
})
function Second_Coin () {
    // sets Coin 2 to 0 or 1
    Coin_2 = randint(0, 1)
    // If Coin 2 equals 0 the Heads variable increases by 1 and an H is displayed
    // If Coin 2 ≠ 0 the Tails variable increases by 1 and a T is displayed
    if (Coin_2 == 0) {
        Heads += 1
        basic.showString("H")
    } else if (Coin_1 != 0) {
        Tails += 1
        basic.showString("T")
    }
    // clears screen
    basic.clearScreen()
    // pauses for 200 ms
    basic.pause(200)
}
// when button B is pressed the players scores are shown
input.onButtonPressed(Button.B, function () {
    basic.showString("P1")
    basic.showString("" + (P1))
    basic.showString("P2")
    basic.showString("" + (P2))
    basic.clearScreen()
})
function First_Coin () {
    // Sets Coin 1 to 0 or 1
    Coin_1 = randint(0, 1)
    // If Coin 1 equals 0 the Heads variable increases by 1 and an H is displayed
    // If Coin 1 ≠ 0 the Tails variable increases by 1 and a T is displayed
    if (Coin_1 == 0) {
        Heads += 1
        basic.showString("H")
    } else if (Coin_1 != 0) {
        Tails += 1
        basic.showString("T")
    }
    // clears screen
    basic.clearScreen()
    // pauses for 200 ms
    basic.pause(200)
}
basic.forever(function () {
    // If P1 reaches a score of 3 the microbit displays that "P1 Wins" and resets
    // if P2 reaches a score of 3 the microbit displays "P2 Wins" and resets
    if (P1 == 3) {
        basic.showString("P1 Wins")
        control.reset()
    } else if (P2 == 3) {
        basic.showString("P2 Wins")
        control.reset()
    }
})
