# THE FLAGS MEMORY GAME

It's a memory game that offers the user the possibility to play the game with or without the timer.
When you click on the first card, the timer will start, but the user have the posibility to pause or reset.

The timer is in seconds.

It's based on 6 pairs of card, 12 in total.
It does not have a targeted age group, it's universal.

<img width="794" alt="Screenshot 2022-01-15 at 19 11 42" src="https://user-images.githubusercontent.com/91877102/149633118-40ab2190-e827-4f95-985e-d88593c291b3.png">

When chosing the main contrast of colors I used the websites:

https://mycolor.space/ 
https://material.io/resources/color/#!/?view.left=0&view.right=0

**Section 1: Timer** 

There is the timer that counts seconds, with three buttons: Start, Stop (it can also act as Pause) and Reset.

**Section 2: Game Area** 

There are 12 cards of countries from around the world.
The main card is a planet

**Testing**: 

* I've tested to see if the page it's working in different browsers: Firefox, Chrome, Edge, Safari.
* I've confirm that the page is responsive using the Dev Tools.
* I confirm that all the navigation and content are easy readable and have a balance of contrast.

**Validator testing**

1. W3C is checked an there are no errors

![Screenshot 2022-01-15 at 19 23 58](https://user-images.githubusercontent.com/91877102/149633830-bd8db45e-f5fe-434f-9485-6400e6c0d3fc.png)


2. CSS is checked an there are no errors

![Screenshot 2022-01-01 at 20 12 24](https://user-images.githubusercontent.com/91877102/147878902-5dcb6aa6-3dfd-40a7-b7a9-fb0151424064.png)

3. Accesability with lighthouse is checked:

![Screenshot 2022-01-15 at 19 31 17](https://user-images.githubusercontent.com/91877102/149633634-34e294cf-5b7f-4ea6-9854-3db263053e66.png)

4. JSHint in verified and there are no errors

### BUGS

If you clicked to fast on the cards, the code would break, and some cards would not get flipped back.
**Fix**: Had to add a Javascript function to lock the game while 2 cards where selected, and the checking function was running.

### DEPLOYMENT

The link to the page can be found here : https://georgianf.github.io/Memory-game-P2/


### CREDITS

+ The box shadow effect I took them from the website: https://getcssscan.com/css-box-shadow-examples
+ The images are found searching on google with the key word "country flag"
+ To make the JavaScript functions I have gone through the following material:
- https://www.youtube.com/watch?v=tjyDOHzKN0w
- https://www.youtube.com/watch?v=ZniVgo8U7ek
+ Also visited the sites for JS functions:
- https://marina-ferreira.github.io/
- https://mikkegoes.com/javascript-projects-for-beginners/
- https://codepen.io/cathydutton/pen/avYKeM
- https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
- https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae
- https://devsnap.me/javascript-memory-games
- https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
