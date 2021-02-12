# CNY Mini Sic Bo

## Date: 2/12/2021 

### By: Andrew Liu 
#### [Trello](https://trello.com/b/ldaqHj36/cny-mini-sic-bo)
***

### **Description**

My Dice roll game is a simple take on of a casino game called Sic Bo. The game has 3 dice that will produce a random # for the player to bet against. In this simple version the player only has  9 choices they could place their bet on. The reason I chose this game because Chinese New Year is right around the corner. When I was a kid, I use to play a lot of casino game with my cousins during Chinese New Year because that's when we gather around and celebrate. With the pandemic going on right now I wanted to create something that could remind of my childhood. 

### **Rules** 
* **Bet** = Choose what you want to bet on
* **Small** = 4 to 10 When the sum of the 3 dice equals to a random value between 4 to 10. Winning ratio is 1 to 1
* **Big** = 11 to 17 When the sum of the 3 dice equals to random value between 11 to 17. Winning ratio is 1 to 1
* **Three of a kind = High Risk High Reward** Instead of big or small your choosing if the dice is three of a kind. Three of a kind isn't count towards big or small. Winning ratio is 1 to 150   
* **Any Three of a kind** = This bet wins if the three dice land on the same number. Winning ratio is 1:30.

***

### **Technologies**

![Javascript, HTML, CSS](images/Coding%20Icon.png)


### **Getting Started**

To get started with this project the first thing I need to do is to create and format the HTML page of the game. Creating sections, class and input to know where each and every one of the event listener is going to be. After setting up the HTML I would use simple CSS to setup the game to look like the diagram below and then we are going to move onto the javascript. 

* **Random # function and Reduce Method** : Create a random function for each die and and use the reduce method to determine the sum of the dices. Random function value for each die would be min. 1 and max 6 and the sum would be min. 3 and max 18
* **Rolling Dice Function**: This is the function that display the 3 random # img onto the game table.  
* **Function for Big and Small** : Start with creating a function that would be able to compare sum of the 3 dices to big and small. 
* **Function for Three of a kind** : creating a function that would compare the dice to 3 of kind for the dice. 3 of a kind are not consider small or big. 
* **Select Function/Event Listener**: Create function that will allow us to select our big, small, or 3 of a kind
* **Bet Function** : Main function button that activates random function, compare function, rolling dice function and a else if statement to prevent game from being able to play.
* **Conditions to meet**: In order to start the game the player has to input a bet amount, then they have to make a selection of either Big, Small, or Specific 3 of a kind. Cannot input value more then bank. 
*  **Game Inactive**: Once player bank reach $0, the game will show message of bankrupt and will be allow to bet anymore. 
* **Create Homepage**: Creating start page that will lead to game page. The start page will also have  the rules to the game. 
* **Play Again**: button to reload the page to start the game again. 

***

### **Screenshots**

#### Game Format

![Starting Concept](./Dice%20Format%20Final%20Diagram.png)
![Game Homeage](./images/Screen%20Shot%202021-02-11%20at%209.15.15%20PM.png)
![Game page](images/Screen%20Shot%202021-02-11%20at%209.15.39%20PM.png)


***

### **Feature Updates**

- [X] ~~Adding Animation to message~~
- [X] ~~Adding at least one more additional bet selection~~
- [ ] Adding Animation to Dice Roll
- [ ] Adding Sound Effect to Dice Roll
- [ ] Expanding Bet Selections 


### Credits: 

Cow Cursor Img: [EmojisWiki](https://emojis.wiki/cow-face/)

Homepage Banner Art: [UClipArt@RosaLee](https://www.uclipart.com/user/@Rosalee.html)

Background Img for Game: [CleanPNG](https://www.cleanpng.com/png-iloilo-city-china-macro-store-future-time-chinese-694217/preview.html) 

Animation used in both Game: [Animate.Style](https://animate.style/)

Rules and Format for the Table: [World Casino Index](https://www.worldcasinoindex.com/table-games/sic-bo/)

Various CSS Tricks: [CSS Tricks](https://css-tricks.com)

Fonts: [Google Fonts](https://fonts.google.com/specimen/ZCOOL+XiaoWei?subset=chinese-simplified&preview.text=%E4%BB%96%E4%BB%AC%E6%89%80%E6%9C%89%E7%9A%84%E8%AE%BE%E5%A4%87%E5%92%8C%E4%BB%AA%E5%99%A8%E5%BD%B7%E4%BD%9B%E9%83%BD%E6%98%AF%E6%9C%89%E7%94%9F%E5%91%BD%E7%9A%84%E3%80%82&preview.text_type=custom)

Techologies Icon: [Github](https://github.com/FortAwesome/Font-Awesome/issues/11419)


