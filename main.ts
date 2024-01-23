input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setPixelColor(count, 0x000000)
    count += -1
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    count += 1
    light.setPixelColor(count, 0xff0080)
})
let count = 0
count = 0
light.setPixelColor(count, 0xffff00)
