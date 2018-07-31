# Okkhor 3
# Memory Tile Game
# Bengali Alphabets

# Author
# Turzo Ahsan 
# ahsanturzo.uphero.com


```language-markup
<div id="okkhor-3"></div>

<script src="path/to/memory.js"></script>
<script>
  var myMem = new Memory({
    wrapperID : "my-memory-game",
  });
</script>
```

## Options

Memory ships with 4 options. They are:

1. `wrapperID` - the ID of the div you want to attach Memory to
2. `cards` - the array of cards to use during Memory. More on this below.
3. `onGameStart` - a callback function that runs once the game starts, i.e. once a user clicks on a level.
4. `onGameEnd` - a callback function that runs once the game ends. More on this below.

## Defaults

The default options for Memory are as follows:

```language-javascript
wrapperID : "my-memory-game",
cards : [
  {
    id : 1,
    img: "img/default/monsters-01.png"
  },
  {
    id : 2,
    img: "img/default/monsters-02.png"
  },
  {
    id : 3,
    img: "img/default/monsters-03.png"
  },
  {
    id : 4,
    img: "img/default/monsters-04.png"
  },
  {
    id : 5,
    img: "img/default/monsters-05.png"
  },
  {
    id : 6,
    img: "img/default/monsters-06.png"
  },
  {
    id : 7,
    img: "img/default/monsters-07.png"
  },
  {
    id : 8,
    img: "img/default/monsters-08.png"
  },
  {
    id : 9,
    img: "img/default/monsters-09.png"
  },
  {
    id : 10,
    img: "img/default/monsters-10.png"
  },
  {
    id : 11,
    img: "img/default/monsters-11.png"
  },
  {
    id : 12,
    img: "img/default/monsters-12.png"
  },
  {
    id : 13,
    img: "img/default/monsters-13.png"
  },
  {
    id : 14,
    img: "img/default/monsters-14.png"
  },
  {
    id : 15,
    img: "img/default/monsters-15.png"
  },
  {
    id : 16,
    img: "img/default/monsters-16.png"
  }
],
onGameStart : function() { return false; },
onGameEnd : function() { return false; }
```

## The Cards

Right now, Memory's biggest game size is a 8 x 4 grid, meaning 32 cards. Therefore, users must specify 16 cards with unique id's and image paths in order for Memory to run at all three levels. If you don't specify any cards in the new instance of Memory, the default set will be used.

## onGameEnd Callback

The `onGameEnd` callback gets triggered when the game has ended. If you don't specify a callback (i.e. the callback defaults to returns `false`), then when the game has ended, a default operation occurs. The board is cleared, and the user is presented with a "win" screen showing how many moves they completed the game in, and a button to start over.

## Public Functions

There is one "public" function available for you to use, and that is `resetGame`. It basically clears the board and resets all variables, taking you back to the start screen. You can use it like this:

```language-javascript
var myMem = new Memory;
myMem.resetGame();
```

## Sass

Sass was used quite a lot, as well as some related libraries like Auto Prefixer and Sassy Math. I also use Compass. In order for the Sass files to run as is, take a look at the compass config.rb file and make sure you have everything set up! Otherwise, plain old CSS for you.

## Support

Memory has been tested in the following browsers:
* Chrome - 37
* Firefox - 32
* Safari - 7