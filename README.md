# THE FLAGS MEMORY GAME

It's a memory game that offers the user the possibility to play the game with or without the timer.
It's based on 6 pairs of card, 12 in total.
It does not have a targeted age group, it's universal.

![Screenshot 2022-01-11 at 06 21 29](https://user-images.githubusercontent.com/91877102/148885927-02627a5c-4431-44cc-97dc-cf36f2983966.png)

When chosing the main contrast of colors I used the websites:

https://mycolor.space/ 
https://material.io/resources/color/#!/?view.left=0&view.right=0

**Section 1: Timer** 

There is the timer that counts seconds, with two buttons: Start and Reset.

**Section 2: Game Area** 

There are 12 cards of countries from around the world.
The main card is a planet

**Testing**: 

* I've tested to see if the page it's working in different browsers: Firefox, Chrome, Edge, Safari.
* I've confirm that the page is responsive using the Dev Tools.
* I confirm that all the navigation and content are easy readable and have a balance of contrast.

**Validator testing**

1. W3C is checked
2. CSS is checked:

![Screenshot 2022-01-01 at 20 12 24](https://user-images.githubusercontent.com/91877102/147878902-5dcb6aa6-3dfd-40a7-b7a9-fb0151424064.png)

3. Accesability with lighthouse is checked:

![Screenshot 2022-01-01 at 16 18 43](https://user-images.githubusercontent.com/91877102/147878917-b00145e3-ac84-4454-9207-f94006fc22a8.png)

### BUGS

If you clicked to fast on the cards, the code would break, and some cards would not get flipped back.
**Fix**: Had to add a Javascript function to lock the game while 2 cards where selected, and the checking function was running.

### DEPLOYMENT

The link to the page can be found here : https://georgianf.github.io/Memory-game-P2/


### CREDITS

+ The box shadow effect I took them from the website: https://getcssscan.com/css-box-shadow-examples
+ The images are found searching on google with the key word "country flag"
+ To make the JavaScript functions I have to through the following material:
- https://www.youtube.com/watch?v=tjyDOHzKN0w
- https://www.youtube.com/watch?v=ZniVgo8U7ek

+ Also visited the sites for JS functions:
- https://marina-ferreira.github.io/
- https://mikkegoes.com/javascript-projects-for-beginners/
- https://codepen.io/TheCodeDepository/pen/jKBaoN?page=8
- https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
- https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae
