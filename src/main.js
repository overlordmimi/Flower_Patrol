/* Minmini Sanganathan
Flower Patrol
20-25 hours to complete this project 

Points breakdown:
Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)
Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)

Recieved help from Prof. Altice tutorial

Total: 100 */

//console.log("hello world");
let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;