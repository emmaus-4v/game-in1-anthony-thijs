/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 159; // x-positie van speler
var spelerY = 500; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 300;   // x-positie van vijand
var vijandY = 600;   // y-positie van vijand

var score = 0; // aantal behaalde punten



var player ={
x : 100,
y: 300,
sx: 20,
sy: 20
};

 var KEY_LEFT = 37;
 var KEY_RIGHT = 39;
 var KEY_SPACEBAR = 32;
 var KEY_DOWN = 40;
 var sprongHoogte = 5;
 var speedJump = 0;
 var spelerSize = 25;
 var jumpHoogte = 8.5;
 


/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("white");
  rect(20, 20, width - 2 * 20, height - 2 * 20)
};

var tekenBorders = function() {
    fill("green")
    rect(20, 600, width - 2 * 20, height - 2 * 20 - 575);
    if (spelerY > 600 - spelerSize/2) {
        spelerY = 600 - spelerSize/2;
        jumpHoogte = 8.5 + 2.5;
        speedJump = 0;
    }
    if (spelerX > 1200 - spelerSize/2) {
        spelerX = 1200 - spelerSize/2;
        jumpHoogte = 8.5 + 2.5;
        speedJump = 0;
    }
    if (spelerX < 100 - spelerSize/2) {
        spelerX = 100 - spelerSize/2;
        jumpHoogte = 8.5 + 2.5;
        speedJump = 0;
    }
    if (spelerY > 1200 - spelerSize/2) {
        spelerY = 1200 - spelerSize/2;
        jumpHoogte = 8.5 + 2.5;
        speedJump = 0;
    }
};
var tekenPlatfrom = function() {
    var y = 0
    while (y < 1000) {
    var xPlatform = random(10, 1000);
     var yPlatform = random(10, 1000);
     fill("red")
    var speedPlatfrom = 5;
     rect(xPlatform, yPlatform, 70, 40);

     y += 1;
    }
  
};

 
    
    
/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    
};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
 noStroke();
 fill("red");
 ellipse(spelerX, spelerY, 50, 50);
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
 var beweegSpeler = function() {
    if (keyIsPressed) 
       if (keyIsDown(KEY_LEFT)) {spelerX -= 3}
       else if (keyIsDown(KEY_RIGHT)) {spelerX += 3}
       else if (keyIsDown(KEY_SPACEBAR)) {spelerY -= 5}
       else if (keyIsDown(KEY_DOWN)) {spelerY +=5}
       
   }
};

/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('Red');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
        

      }

     
      tekenVeld();
      tekenBorders();
      tekenPlatfrom();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
    }
};

