scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    game.over(true)
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    info.changeLifeBy(-1)
})
let cute_monkey = sprites.create(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .............................................................eeeeeeeeee.........................................................................................
    ............................................................eeeeeeeeeeee........................................................................................
    ............................................................eeeeeeeeeeee........................................................................................
    ...........................................................eeeeeeeeeeeeee.......................................................................................
    ...........................................................eedddeeeeeeddde......................................................................................
    ..........................................................dedddddeeeedddded.....................................................................................
    ..........................................................deddfdddddddfdded.....................................................................................
    ..........................................................deddfdddddddfdded.....................................................................................
    ...........................................................eddddddfffdddde......................................................................................
    ............................................................eddddddddddde.......................................................................................
    .............................................................eddddddddde........................................................................................
    ........................................................33......eeeeeee.........................................................................................
    .......................................................3..3....eeeeeeee.........................................................................................
    .......................................................3......eeeeeeeee.........................................................................................
    .......................................................3.....eeeeeeeeeee........................................................................................
    .......................................................3.....eeeddddeeee........................................................................................
    ........................................................3...eeeddddddeee........................................................................................
    .........................................................333eeeddddddeee........................................................................................
    ............................................................eeeddddddeee........................................................................................
    ..............................................................eeddddeee.........................................................................................
    ..............................................................ee....eee.........................................................................................
    ..............................................................e.......e.........................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.Player)
scene.setTileMap(img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . 3 . . . . . . . . 
    8 2 . . . . 3 2 3 7 
    . . 3 3 2 3 . . . . 
    . . . . 3 . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, TileScale.Sixteen)
scene.setTile(3, img`
    d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d d 1 d d d d d d d 
    b b b b b b d e b b b b b b d e 
    d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d b 1 d d d d d d b 
    1 d d d d d d d 1 d d d d d d d 
    b b b b b b d e d b b b b b b e 
    `, true)
scene.setTile(2, img`
    5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4 
    4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5 
    4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5 
    2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4 
    2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4 
    4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2 
    2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2 
    4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4 
    5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4 
    4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5 
    4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5 
    5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5 
    5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4 
    4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4 
    4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4 
    4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4 
    `, true)
scene.setTile(7, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 5 5 5 5 5 5 5 7 7 7 7 7 
    7 7 7 7 5 5 5 5 5 5 5 7 7 7 7 7 
    7 7 7 7 5 5 5 5 5 5 5 7 7 7 7 7 
    7 7 7 7 7 5 5 5 5 5 7 7 7 7 7 7 
    7 7 7 7 7 7 5 5 5 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 5 5 5 7 7 7 7 7 7 7 
    7 7 7 7 7 5 5 5 5 5 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, true)
scene.setTile(8, img`
    5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 1 7 7 
    7 7 7 1 1 7 7 7 7 7 7 7 1 7 1 7 
    7 7 3 1 1 3 7 7 7 5 7 7 6 1 6 7 
    7 1 1 6 6 1 1 7 7 5 7 7 7 7 7 7 
    7 d 1 7 7 1 d 7 7 6 7 7 7 7 7 7 
    7 6 3 1 1 3 6 7 7 7 7 5 7 7 7 7 
    7 7 6 d d 6 7 7 7 7 5 5 6 7 7 7 
    7 7 7 7 7 7 7 1 7 7 5 6 7 7 7 7 
    7 7 7 7 7 7 1 7 1 7 7 7 1 1 7 7 
    7 7 1 7 7 7 6 1 6 7 7 3 1 1 3 7 
    7 1 7 1 7 7 7 7 7 7 1 1 6 6 1 1 
    7 6 1 6 7 7 7 7 7 7 d 1 7 7 1 d 
    7 7 7 7 7 7 7 7 7 7 6 3 1 1 3 6 
    7 7 7 7 7 7 7 7 7 7 7 6 d d 6 7 
    7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, true)
controller.moveSprite(cute_monkey)
cute_monkey.ay = 200
info.setLife(3)
tiles.placeOnTile(cute_monkey, tiles.getTileLocation(0, 0))
