// Setup initial game stats
var score = 0;
var lives = 2;
var powerPellets = 4;
var dots = 240;

// Define your ghosts here
var inky = {
  menu_option: '1',
  name: 'Inky',
  color: 'Red',
  character: 'Shadow',
  edible: false
};

var blinky = {
  menu_option: '2',
  name: 'Blinky',
  color: 'Cyan',
  character: 'Speedy',
  edible: false
};

var pinky = {
  menu_option: '3',
  name: 'Pinky',
  color: 'Pink',
  character: 'Bashful',
  edible: false
};

var clyde = {
  menu_option: '4',
  name: 'Clyde',
  color: 'Orange',
  character: 'Pokey',
  edible: false
};

var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

// replace this comment with your four ghosts setup as objects


// Draw the screen functionality
function drawScreen() {
  clearScreen();
  setTimeout(function() {
    displayStats();
    displayMenu();
    displayPrompt();
  }, 10);
}

function clearScreen() {
  console.log('\x1Bc');
}

function displayStats() {
  console.log('Score: ' + score + '     Lives: ' + lives + '     Powerpellets: ' + powerPellets + '     Remaining Dots: ' + dots);
}

function displayStatus(ghost) {
  if (ghost.edible === true) {
    return ('edible');
  }
    else {
    return ('invulnerable');
  }
}

function displayMenu() {
  console.log('\n\nSelect Option:\n');  // each \n creates a new line
  console.log('(d) Eat Dot');
  console.log('(1) Eat Inky ' + displayStatus(inky));
  console.log('(2) Eat Blinky ' + displayStatus(blinky));
  console.log('(3) Eat Pinky ' + displayStatus(pinky));
  console.log('(4) Eat Clyde ' + displayStatus(clyde));
  console.log('(p) Eat Powerpellet');
  console.log('(q) Quit');
}

function displayPrompt() {
  // process.stdout.write is similar to console.log except it doesn't add a new line after the text
  process.stdout.write('\n(Q**)==Q :v \n'); // :v is the Pac-Man emoji.
}


// Menu Options
function eatDot() {
  console.log('\nNom!');
  score += 10;
  dots -= 1;
}

function eatGhost(ghost) {
  if (ghost.edible === false) {
    lives -= 1;
    console.log('\nNom!');
    console.log('\nPac-Man has been killed by the ' + ghost.color + ' coloured ghost named ' + ghost.name + '!');
  } else if (ghost.edible === true) {
    console.log('\nNom!');
    console.log('\nPac-Man has eaten the ' + ghost.color + ' ghost named ' + ghost.name + '!');
    score += 200;
    ghost.edible = false;
  }
}

function gameOver() {
  if (lives === 0) {
    process.exit()
  }
}

function makeEdible() {
  for (i = 0; i < ghosts.length; i++) {
    ghosts[i].edible = true;
  }
}

function eatPellet() {
  powerPellets -= 1;
  score += 50;
  makeEdible();
  console.log('\nPOWERED UP!!');
}
// function eatPellet() {
// ghosts.forEach(function(ghost) {
//   ghost.edible = true
//   });
//   score += 50;
//   powerPellets -= 1;
//   console.log('\nPOWERED UP!!');
// }

function noPellets() {
  if (powerPellets === 0) {
    console.log('\n0 Pellets Left!')
  }
}

function validatePellets() {
  if (powerPellets > 0) {
    eatPellet()
  }
  else if (powerPellets === 0) {
    noPellets()
  }
}
// Process Player's Input
function processInput(key) {
  switch(key) {
    case '\u0003': // This makes it so CTRL-C will quit the program
    case 'q':
      process.exit();
      break;
    case 'd':
      eatDot();
      break;
    case '1':
      eatGhost(inky);
      gameOver();
      break;
    case '2':
      eatGhost(blinky);
      gameOver();
      break;
    case '3':
      eatGhost(pinky);
      gameOver();
      break;
    case '4':
      eatGhost(clyde);
      gameOver();
      break;
    case 'p':
      validatePellets();
      gameOver();
      break;
    default:
      console.log('\nInvalid Command!');
  }
}


//
// YOU PROBABLY DON'T WANT TO CHANGE CODE BELOW THIS LINE
//

// Setup Input and Output to work nicely in our Terminal
var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

// Draw screen when game first starts
drawScreen();

// Process input and draw screen each time player enters a key
stdin.on('data', function(key) {
  process.stdout.write(key);
  processInput(key);
  setTimeout(drawScreen, 300); // The command prompt will flash a message for 300 milliseoncds before it re-draws the screen. You can adjust the 300 number to increase this.
});

// Player Quits
process.on('exit', function() {
  console.log('\n\nGame Over!\n');
});
