// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010202020202020202020202020202030407070707000c00000e0e0e0e0e0e090407000000000d0d000d0d000d0d0d090a00000707070d0d000d0d000d0d0d090407000700000b00000e0e000e0e0e090407000700070707070707000707070904070007000e0e00000000000e0e000f0407000e000e0e000e0e000e0e0e00090400000e000000000e0e000e0e0e0009040e0e0e000e0e000e0e000e0e0e0009040e0e0e000e0e000e0e000000000009040e0000000e0e000e0e0e000e0e0e09040e0e0e0e0e0e000e0e0e000e0e0e09040e0e0e0e0e0e000e0e0e000e0e0009040e0e0e0e0e0e0e0e0e0e000000000905060606060606060606060606060608`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . 2 2 2 2 2 2 2 
2 2 . . . . 2 2 . 2 2 . 2 2 2 2 
. . . 2 2 2 2 2 . 2 2 . 2 2 2 2 
2 2 . 2 . . . . . 2 2 . 2 2 2 2 
2 2 . 2 . 2 2 2 2 2 2 . 2 2 2 2 
2 2 . 2 . 2 2 . . . . . 2 2 . . 
2 2 . 2 . 2 2 . 2 2 . 2 2 2 . 2 
2 . . 2 . . . . 2 2 . 2 2 2 . 2 
2 2 2 2 . 2 2 . 2 2 . 2 2 2 . 2 
2 2 2 2 . 2 2 . 2 2 . . . . . 2 
2 2 . . . 2 2 . 2 2 2 . 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 . 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 . 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.chestOpen,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
