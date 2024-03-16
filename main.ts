input.onButtonPressed(Button.A, function () {
    rocket_sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    rocket_sprite.change(LedSpriteProperty.X, 1)
})
function restartEnemyLocation () {
    enemy_sprite.set(LedSpriteProperty.Y, 0)
    enemy_sprite.set(LedSpriteProperty.X, randint(0, 4))
}
let enemy_sprite: game.LedSprite = null
let rocket_sprite: game.LedSprite = null
let speed = 1000
game.setLife(3)
game.setScore(0)
rocket_sprite = game.createSprite(2, 4)
enemy_sprite = game.createSprite(2, 0)
basic.forever(function () {
    basic.pause(speed)
    enemy_sprite.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    if (enemy_sprite.isTouching(rocket_sprite)) {
        game.removeLife(1)
        restartEnemyLocation()
    } else if (enemy_sprite.get(LedSpriteProperty.Y) == 4) {
        speed += -50
        game.addScore(1)
        restartEnemyLocation()
    }
})
