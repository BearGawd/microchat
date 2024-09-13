function forward_index_list () {
    if (index_list.length >= 1) {
        for (let value of index_list) {
            letter_list.push(Alphabet[value])
        }
        index_list = []
        console.log("Index skickad")
    }
}
function makeLetterList (array: any[]) {
	
}
input.onButtonPressed(Button.A, function () {
    A_pressed = true
    led.plot(x, y)
    find_index()
    move_marker()
})
function show_marker () {
    led.plot(x_marker, y1_marker)
    led.plot(x_marker, y2_marker)
    basic.pause(500)
    led.unplot(x_marker, y1_marker)
    led.unplot(x_marker, y2_marker)
    basic.pause(500)
}
input.onButtonPressed(Button.AB, function () {
    forward_index_list()
})
input.onButtonPressed(Button.B, function () {
    A_pressed = false
    find_index()
    move_marker()
})
function backspace () {
    backspace_pressed = true
    decrease_index()
    move_marker()
}
function find_index () {
    if (x <= 4) {
        if (A_pressed == true) {
            if (x == 0) {
                index += 1
            } else if (x == 1) {
                index += 2
            } else if (x == 2) {
                index += 4
            } else if (x == 3) {
                index += 8
            } else if (x == 4) {
                index += 16
            }
        } else if (A_pressed == false) {
            index += 0
        }
        x += 1
    } else {
        basic.clearScreen()
        index_list.push(index)
        index = 0
        x = 0
    }
    console.log("Index: " + index)
console.log(index_list)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    backspace()
})
function decrease_index () {
    if (x > 0) {
        if (led.point(x - 1, y) == true) {
            if (x == 0) {
                index += 0
            } else if (x == 1) {
                index += -1
            } else if (x == 2) {
                index += -2
            } else if (x == 3) {
                index += -4
            } else if (x == 4) {
                index += -8
            } else if (x == 5) {
                index += -16
            }
        } else {
            index += 0
        }
        led.unplot(x - 1, y)
        x += -1
    }
}
function move_marker () {
    if (backspace_pressed == false) {
        led.unplot(x_marker, y1_marker)
        led.unplot(x_marker, y2_marker)
        if (x_marker <= 4) {
            x_marker += 1
        } else {
            x_marker = 0
        }
        led.plot(x_marker, y1_marker)
        led.plot(x_marker, y2_marker)
    } else if (backspace_pressed == true) {
        led.unplot(x_marker, y1_marker)
        led.unplot(x_marker, y2_marker)
        if (x_marker > 0) {
            x_marker += -1
        } else {
            x_marker = 0
        }
        led.plot(x_marker, y1_marker)
        led.plot(x_marker, y2_marker)
        backspace_pressed = false
    }
}
let letter_list: string[] = []
let Alphabet: string[] = []
let backspace_pressed = false
let A_pressed = false
let y2_marker = 0
let y1_marker = 0
let x_marker = 0
let y = 0
let x = 0
let index = 0
let index_list: number[] = []
x = 0
y = 2
x_marker = 0
y1_marker = y - 1
y2_marker = y + 1
A_pressed = true
backspace_pressed = false
index = 0
index_list = []
Alphabet = [
"_",
"a",
"B",
"C",
"D",
"E",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
"Å",
"Ä",
"Ö",
":)",
":("
]
letter_list = []
loops.everyInterval(500, function () {
    show_marker()
})
