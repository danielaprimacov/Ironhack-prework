// creating a 2-dimensioanl array
// Board coordinates example
const board = [
  [ { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 } ],
  [ { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 } ],
  [ { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 } ]
];

const player = {
  x: 1,
  y: 1,
  path: [{ x: 1, y: 1 }]
};


// 1. Move the player horizontally
function placeHorizontal(thePlayer, command) {  
  if (command === 'l' && thePlayer.y > 0) {
    thePlayer.y--;
  }
  else if (command === 'r' && thePlayer.y < 2) {
    thePlayer.y++;
  }
  else {
    console.log("You can't place the player outside of the board!");
    return;
  }

  const newPosition = {
    x: thePlayer.x,
    y: thePlayer.y
  };
  
  console.log(`\n --> command: ${command}`);
  console.log(`Position of the player: x=${thePlayer.x}, y=${thePlayer.y}`);  

  thePlayer.path.push(newPosition);
}

// Invoke function
placeHorizontal(player, 'l');
// --> command: l
// => Position of the player: x=1, y=0

// we'll use for loop to loop through the array of paths to see where our player goes:

for (let i = 0; i < player.path.length; i++) {
  console.log(`Path ${i} ==> x=${player.path[i].x}, y=${player.path[i].y}`);
}

// Path 0 ==> x=1, y=1
// Path 1 ==> x=1, y=0

function placeVertical(thePlayer, command) {
  if (command === 'u' && thePlayer.x > 0) {
    thePlayer.x--;
  }
  else if (command === 'd' && thePlayer.x < 2) {
    thePlayer.x++;
  }
  else {
    console.log("You can't place the player outside of the board!");
    return;
  }

  const newPosition = {
    x: thePlayer.x,
    y: thePlayer.y
  };
  
  console.log(`\n --> command: ${command}`);
  console.log(`Position of the player: x=${thePlayer.x}, y=${thePlayer.y}`);

  thePlayer.path.push(newPosition);
}

placeVertical(player, 'u');
// --> command: u
// Position of the player: x=0, y=1

placeVertical(player, 'u');
// --> command: u
// You can't place the player outside of the board!

placeVertical(player, 'u');
// --> command: u
// You can't place the player outside of the board!

placeVertical(player, 'd');
// --> command: d
// Position of the player: x=1, y=1

function command(thePlayer, orders) {
  for (let i = 0; i < orders.length; i++) {
    
    const order = orders[i];
    
    switch (order) {
      case 'l': // left
        placeHorizontal(thePlayer, order);
        break;
      case 'r': // right
        placeHorizontal(thePlayer, order);
        break;
      case 'u': // up
        placeVertical(thePlayer, order);
        break;
      case 'd': // down
        placeVertical(thePlayer, order);
        break;
    }
    
  }
  
  console.log(thePlayer.path);
}

command(player, 'lurrddd');
