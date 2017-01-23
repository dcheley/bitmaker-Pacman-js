# Pac-Man JS

In this assignment, you'll be creating Pac-Man in the terminal. We've provided a barebones JavaScript program to help you get started.

Currently `pacman.js` has the following functionality:

- keep a score
- displays a screen with stats, menu, and prompt
- processes seven commands:
  - (d) Eat Dot
  - (1) Eat Inky Edible
  - (2) Eat Blinky Invulnerable
  - (3) Eat Pinky Invulnerable
  - (4) Eat Clyde Invulnerable
  - (p) Eat Powerpellet
  - (q) Quit

# Play the game!

Try playing the game by typing the following into your CLI:

```shell
$ node pacman.js
```
When you're finished, press `q` to quit.

This game loop processes whatever key is entered, and then draws the screen again.

# Stretch Goal: Keep track of dots

The maze has 240 small dots in total. Add options for Pac-Man to eat:

- 10 dots at a time
- 100 dots at a time
- all remaining dots

Display the remaining dots left, similar to how you display the remaining Power-Pellets. Only display the 'eat 10 dots' and 'eat 100 dots' options if there are enough dots to eat.

# Stretch Goal: Properly score eating ghosts

The main assignment only had you scoring 200 points per ghost eaten, but the real Pac-Man game actually scores more points each time he eats a ghost:

1. 200 points for the first ghost eaten
2. 400 points for the second ghost eaten
3. 800 points for the third ghost eaten
4. 1,600 points for the fourth ghost eaten

Adjust your program to properly reflect the ghost eating scoring.

# Stretch Goal: Keep track of level and add fruits

After Pac-Man has eaten all 4 power pellets and all 240 dots in the maze, he advances to the next level and the dots and pellets are reset.  The ghosts should also be reset to inedible.  There are 256 levels. Add the appropriate fruits. Make the fruit option randomly appear in the menu after the player eats some dots.

- Level 1: Cherry / 100 points
- Level 2: Strawberry / 300 points
- Level 3 & 4: Orange / 500 points
- Level 5 & 6: Apple / 700 points
- Level 7 & 8: Pineapple / 1,000 points
- Level 9 & 10: Galaxian Spaceship / 2,000 points
- Level 11 & 12: Bell / 3,000 points
- Level 13+: Key / 5,000

# Stretch Goal: High Score

Add a high score stat on the top of the screen.

- figure out how to let the user input 3 characters for their initials
- save the high score to disk so that when you play Pac-Man again, it will read the high score and display it

# Stretch Goal: Eat all four ghosts first before eating a new power pellet

Prevent Pac-Man from eating a power-pellet if one has already been consumed and there are edible ghosts remaining.

# Stretch Goal: Make Pac-Man Real-Time

Integrate `setTimeout()` into `eatPowerPellet()` so that all ghosts return to `edible: false` after 10 seconds.

# Submit Your Work

Remember to submit your assignment after you've finished.
