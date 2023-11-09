def on_button_a():
    spritedown.change(LedSpriteProperty.Y, -1)
    spriteup.change(LedSpriteProperty.Y, -1)
    basic.pause(550)
    spritedown.change(LedSpriteProperty.Y, 1)
    spriteup.change(LedSpriteProperty.Y, 1)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    spriteup.change(LedSpriteProperty.X, 1)
    spriteup.change(LedSpriteProperty.Y, 1)
    basic.pause(600)
    spriteup.change(LedSpriteProperty.X, -1)
    spriteup.change(LedSpriteProperty.Y, -1)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

Ouch: game.LedSprite = None
floor: game.LedSprite = None
spriteup: game.LedSprite = None
spritedown: game.LedSprite = None
spritedown = game.create_sprite(1, 3)
spriteup = game.create_sprite(1, 2)
floor2 = 0
for index in range(5):
    floor = game.create_sprite(floor2, 4)
    floor2 += 1
while game.is_running():
    Ouch = game.create_sprite(4, randint(2, 3))
    basic.pause(250)
    for index2 in range(4):
        Ouch.change(LedSpriteProperty.X, -1)
        basic.pause(250)
        if Ouch.get(LedSpriteProperty.X) == 0:
            Ouch.delete()
        if Ouch.get(LedSpriteProperty.X) == 1 and Ouch.get(LedSpriteProperty.Y) == 3:
            if Ouch.is_touching(spritedown):
                game.game_over()
        if Ouch.get(LedSpriteProperty.X) == 1 and Ouch.get(LedSpriteProperty.Y) == 2:
            if Ouch.is_touching(spriteup):
                game.game_over()

def on_forever():
    pass
basic.forever(on_forever)
