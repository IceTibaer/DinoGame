input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    spritedown.change(LedSpriteProperty.Y, -1)
    spriteup.change(LedSpriteProperty.Y, -1)
    basic.pause(550)
    spritedown.change(LedSpriteProperty.Y, 1)
    spriteup.change(LedSpriteProperty.Y, 1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    spriteup.change(LedSpriteProperty.X, 1)
    spriteup.change(LedSpriteProperty.Y, 1)
    basic.pause(600)
    spriteup.change(LedSpriteProperty.X, -1)
    spriteup.change(LedSpriteProperty.Y, -1)
})
let Ouch: game.LedSprite = null
let floor: game.LedSprite = null
let spriteup: game.LedSprite = null
let spritedown: game.LedSprite = null
spritedown = game.createSprite(1, 3)
spriteup = game.createSprite(1, 2)
let floor2 = 0
for (let index = 0; index < 5; index++) {
    floor = game.createSprite(floor2, 4)
    floor2 += 1
}
while (game.isRunning()) {
    Ouch = game.createSprite(4, randint(2, 3))
    basic.pause(250)
    for (let index = 0; index < 4; index++) {
        Ouch.change(LedSpriteProperty.X, -1)
        basic.pause(250)
        if (Ouch.get(LedSpriteProperty.X) == 0) {
            Ouch.delete()
        }
        if (Ouch.get(LedSpriteProperty.X) == 1 && Ouch.get(LedSpriteProperty.Y) == 3) {
            if (Ouch.isTouching(spritedown)) {
                game.gameOver()
            }
        }
        if (Ouch.get(LedSpriteProperty.X) == 1 && Ouch.get(LedSpriteProperty.Y) == 2) {
            if (Ouch.isTouching(spriteup)) {
                game.gameOver()
            }
            if (Ouch.isTouching(spritedown)) {
                game.gameOver()
            }
        }
    }
}
basic.forever(function () {
	
})
