
;(function( window ) {

  'use strict';



  function extend( a, b ) {
    for( var key in b ) { 
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }



  function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

 

  function Memory( options ) {
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this._init();
  }


  Memory.prototype.options = {
    wrapperID : "container",
    cards : [
          {
            id : 1,
            img: "img/shoroborno/s1.png"
          },
          {
            id : 2,
            img: "img/shoroborno/s2.png"
          },
          {
            id : 3,
            img: "img/shoroborno/s3.png"
          },
          {
            id : 4,
            img: "img/shoroborno/s4.png"
          },
          {
            id : 5,
            img: "img/shoroborno/s5.png"
          },
          {
            id : 6,
            img: "img/shoroborno/s6.png"
          },
          {
            id : 7,
            img: "img/shoroborno/s7.png"
          },
          {
            id : 8,
            img: "img/shoroborno/s8.png"
          },
          {
            id : 9,
            img: "img/shoroborno/s9.png"
          },
          {
            id : 10,
            img: "img/shoroborno/s10.png"
          },
          {
            id : 11,
            img: "img/shoroborno/s11.png"
          },

          // banjonborno
          // {
          //   id : 12,
          //   img: "img/banjonborbo/b1.png"
          // },
          // {
          //   id : 13,
          //   img: "img/banjonborbo/b2.png"
          // },
          // {
          //   id : 14,
          //   img: "img/banjonborbo/b3.png"
          // },
          // {
          //   id : 15,
          //   img: "img/banjonborno/b4.png"
          // },
          // {
          //   id : 16,
          //   img: "img/banjonborno/b5.png"
          // },
          // {
          //   id : 17,
          //   img: "img/banjonborno/b6.png"
          // },
          // {
          //   id : 18,
          //   img: "img/banjonborno/b7.png"
          // },
          // {
          //   id : 19,
          //   img: "img/banjonborno/b8.png"
          // },
          // {
          //   id : 20,
          //   img: "img/banjonborno/b9.png"
          // },
          // {
          //   id : 21,
          //   img: "img/banjonborno/b10.png"
          // },
          // {
          //   id : 22,
          //   img: "img/banjonborno/b11.png"
          // }, 
          // {
          //   id : 23,
          //   img: "img/banjonborbo/b12.png"
          // },
          // {
          //   id : 24,
          //   img: "img/banjonborbo/b13.png"
          // },
          // {
          //   id : 25,
          //   img: "img/banjonborbo/b14.png"
          // },
          // {
          //   id : 26,
          //   img: "img/banjonborno/b15.png"
          // }
          // {
          //   id : 27,
          //   img: "img/banjonborno/b16.png"
          // },
          // {
          //   id : 28,
          //   img: "img/banjonborno/b17.png"
          // },
          // {
          //   id : 29,
          //   img: "img/banjonborno/b18.png"
          // },
          // {
          //   id : 30,
          //   img: "img/banjonborno/b19.png"
          // },
          // {
          //   id : 31,
          //   img: "img/banjonborno/b20.png"
          // },
          // {
          //   id : 32,
          //   img: "img/banjonborno/b21.png"
          // },
          // {
          //   id : 33,
          //   img: "img/banjonborno/b22.png"
          // },
          // {
          //   id : 34,
          //   img: "img/banjonborno/b23.png"
          // }, 
          // {
          //   id : 35,
          //   img: "img/banjonborno/b24.png"
          // },
          // {
          //   id : 36,
          //   img: "img/banjonborno/b25.png"
          // },
          // {
          //   id : 37,
          //   img: "img/banjonborno/b26.png"
          // },
          // {
          //   id : 38,
          //   img: "img/banjonborno/b27.png"
          // },
          // {
          //   id : 39,
          //   img: "img/banjonborno/b28.png"
          // },
          // {
          //   id : 40,
          //   img: "img/banjonborno/b29.png"
          // },
          // {
          //   id : 41,
          //   img: "img/banjonborno/b30.png"
          // },
          // {
          //   id : 42,
          //   img: "img/banjonborno/b31.png"
          // },
          // {
          //   id : 43,
          //   img: "img/banjonborno/b32.png"
          // },
          // {
          //   id : 44,
          //   img: "img/banjonborno/b33.png"
          // },
          // {
          //   id : 45,
          //   img: "img/banjonborno/b34.png"
          // },
          // {
          //   id : 46,
          //   img: "img/banjonborno/b35.png"
          // },
          // {
          //   id : 47,
          //   img: "img/banjonborno/b36.png"
          // },
          // {
          //   id : 48,
          //   img: "img/banjonborno/b37.png"
          // },
          // {
          //   id : 49,
          //   img: "img/banjonborno/b38.png"
          // },
          // {
          //   id : 50,
          //   img: "img/banjonborno/b39.png"
          // }
        ],
    onGameStart : function() { return false; },
    onGameEnd : function() { return false; }
  }

 

  Memory.prototype._init = function() {
    this.game = document.createElement("div");
    this.game.id = "mg";
    this.game.className = "mg";
    document.getElementById(this.options.wrapperID).appendChild(this.game);

    this.gameMeta = document.createElement("div");
    this.gameMeta.className = "mg__meta clearfix";

    this.gameStartScreen = document.createElement("div");
    this.gameStartScreen.id = "mg__start-screen";
    this.gameStartScreen.className = "mg__start-screen";

    this.gameWrapper = document.createElement("div");
    this.gameWrapper.id = "mg__wrapper";
    this.gameWrapper.className = "mg__wrapper";
    this.gameContents = document.createElement("div");
    this.gameContents.id = "mg__contents";
    this.gameWrapper.appendChild(this.gameContents);

    this.gameMessages = document.createElement("div");
    this.gameMessages.id = "mg__onend";
    this.gameMessages.className = "mg__onend";

    this._setupGame();
  };

 

  Memory.prototype._setupGame = function() {
    var self = this;
    this.gameState = 1;
    this.cards = shuffle(this.options.cards);
    this.card1 = "";
    this.card2 = "";
    this.card1id = "";
    this.card2id = "";
    this.card1flipped = false;
    this.card2flipped = false;
    this.flippedTiles = 0;
    this.chosenLevel = "";
    this.numMoves = 0;

    this.gameMetaHTML = '<div class="mg__meta--left">\
      <span class="mg__meta--level">লেভেল: \
      <span id="mg__meta--level">' + this.chosenLevel + '</span>\
      </span>\
      <span class="mg__meta--moves">খেলার দানের সংখ্যা: \
      <span id="mg__meta--moves">' + this.numMoves + '</span>\
      </span>\
      </div>\
      <div class="mg__meta--right">\
      <button id="mg__button--restart" class="mg__button">শুরু করুন</button>\
      </div>';
    this.gameMeta.innerHTML = this.gameMetaHTML;
    this.game.appendChild(this.gameMeta);

    this.gameStartScreenHTML = '<h2 class="mg__start-screen--heading"></h2>\
      <p class="mg__start-screen--text">স্বরবর্ণের চিত্র সম্বলিত টাইলগুলো উলটে দিন এবং একই অক্ষরযুক্ত টাইল জোড়া বানান। বোর্ডে উপস্থিত সকল টাইল জোড়া হিসেবে উপস্থাপিত হলে খেলা সমাপ্ত হবে। যত কম সংখ্যক খেলার দানের মাধ্যমে সম্ভব খেলা সমাপ্ত করুন।</p>\
      <h3 class="mg__start-screen--sub-heading">লেভেল সিলেক্ট করুন</h3>\
      <ul class="mg__start-screen--level-select">\
      <li><span data-level="1">১ম লেভেল - (৪ x ২)</span></li>\
      <li><span data-level="2">২য় লেভেল - (৬ x ৩)</span></li>\
      <li><span data-level="3"></span></li>\
      </ul>';
    this.gameStartScreen.innerHTML = this.gameStartScreenHTML;
    this.game.appendChild(this.gameStartScreen);

    document.getElementById("mg__button--restart").addEventListener( "click", function(e) {
      self.resetGame();
    });

    this._startScreenEvents();
  }



  Memory.prototype._startScreenEvents = function() {
    var levelsNodes = this.gameStartScreen.querySelectorAll("ul.mg__start-screen--level-select span");
    for ( var i = 0, len = levelsNodes.length; i < len; i++ ) {
      var levelNode = levelsNodes[i];
      this._startScreenEventsHandler(levelNode);
    }
  };



  Memory.prototype._startScreenEventsHandler = function(levelNode) {
    var self = this;
    levelNode.addEventListener( "click", function(e) {
      if (self.gameState === 1) {
        self._setupGameWrapper(this);
      }
    });
  }



  Memory.prototype._setupGameWrapper = function(levelNode) {
    this.level = levelNode.getAttribute("data-level");
    this.gameStartScreen.parentNode.removeChild(this.gameStartScreen);
    this.gameContents.className = "mg__contents mg__level-"+this.level;
    this.game.appendChild(this.gameWrapper);

    this.chosenLevel = this.level;
    document.getElementById("mg__meta--level").innerHTML = this.chosenLevel;

    this._renderTiles();
  };




  Memory.prototype._renderTiles = function() {
    this.gridX = this.level * 2 + 2;
    this.gridY = this.gridX / 2;
    this.numTiles = this.gridX * this.gridY;
    this.halfNumTiles = this.numTiles/2;
    this.newCards = [];
    for ( var i = 0; i < this.halfNumTiles; i++ ) {
      this.newCards.push(this.cards[i], this.cards[i]);
    }
    this.newCards = shuffle(this.newCards);
    this.tilesHTML = '';
    for ( var i = 0; i < this.numTiles; i++  ) {
      var n = i + 1;
      this.tilesHTML += '<div class="mg__tile mg__tile-' + n + '">\
        <div class="mg__tile--inner" data-id="' + this.newCards[i]["id"] + '">\
        <span class="mg__tile--outside"></span>\
        <span class="mg__tile--inside"><img src="' + this.newCards[i]["img"] + '"></span>\
        </div>\
        </div>';
    }
    this.gameContents.innerHTML = this.tilesHTML;
    this.gameState = 2;
    this.options.onGameStart();
    this._gamePlay();
  }



  Memory.prototype._gamePlay = function() {
    var tiles = document.querySelectorAll(".mg__tile--inner");
    for (var i = 0, len = tiles.length; i < len; i++) {
      var tile = tiles[i];
      this._gamePlayEvents(tile);
    };
  };



  Memory.prototype._gamePlayEvents = function(tile) {
    var self = this;
    tile.addEventListener( "click", function(e) {
      if (!this.classList.contains("flipped")) {
        if (self.card1flipped === false && self.card2flipped === false) {
          this.classList.add("flipped");
          self.card1 = this;
          self.card1id = this.getAttribute("data-id");
          self.card1flipped = true;
        } else if( self.card1flipped === true && self.card2flipped === false ) {
          this.classList.add("flipped");
          self.card2 = this;
          self.card2id = this.getAttribute("data-id");
          self.card2flipped = true;
          if ( self.card1id == self.card2id ) {
            self._gameCardsMatch();
          } else {
            self._gameCardsMismatch();
          }
        }
      }
    });
  }



  Memory.prototype._gameCardsMatch = function() {
    // cache this
    var self = this;

    // add correct class
    window.setTimeout( function(){
      self.card1.classList.add("correct");
      self.card2.classList.add("correct");
    }, 300 );

    // remove correct class and reset vars
    window.setTimeout( function(){
      self.card1.classList.remove("correct");
      self.card2.classList.remove("correct");
      self._gameResetVars();
      self.flippedTiles = self.flippedTiles + 2;
      if (self.flippedTiles == self.numTiles) {
        self._winGame();
      }
    }, 1500 );

    // plus one on the move counter
    this._gameCounterPlusOne();
  };


  Memory.prototype._gameCardsMismatch = function() {
    // cache this
    var self = this;

    // remove "flipped" class and reset vars
    window.setTimeout( function(){
      self.card1.classList.remove("flipped");
      self.card2.classList.remove("flipped");
      self._gameResetVars();
    }, 900 );

    // plus one on the move counter
    this._gameCounterPlusOne();
  };



  Memory.prototype._gameResetVars = function() {
    this.card1 = "";
    this.card2 = "";
    this.card1id = "";
    this.card2id = "";
    this.card1flipped = false;
    this.card2flipped = false;
  }



  Memory.prototype._gameCounterPlusOne = function() {
    this.numMoves = this.numMoves + 1;
    this.moveCounterUpdate = document.getElementById("mg__meta--moves").innerHTML = this.numMoves;
  };



  Memory.prototype._clearGame = function() {
    if (this.gameMeta.parentNode !== null) this.game.removeChild(this.gameMeta);
    if (this.gameStartScreen.parentNode !== null) this.game.removeChild(this.gameStartScreen);
    if (this.gameWrapper.parentNode !== null) this.game.removeChild(this.gameWrapper);
    if (this.gameMessages.parentNode !== null) this.game.removeChild(this.gameMessages);
  }



  Memory.prototype._winGame = function() {
    var self = this;
    if (this.options.onGameEnd() === false) {
      this._clearGame();
      this.gameMessages.innerHTML = '<h2 class="mg__onend--heading">অসাধারণ</h2>\
        <p class="mg__onend--message">আপনি খেলাটি শেষ করেছেন ' + this.numMoves + ' দানের মাধ্যমে।</p>\
        <button id="mg__onend--restart" class="mg__button">আবার খেলুন</button>';
      this.game.appendChild(this.gameMessages);
      document.getElementById("mg__onend--restart").addEventListener( "click", function(e) {
        self.resetGame();
      });
    } else {
      // run callback
      this.options.onGameEnd();
    }
  }



  Memory.prototype.resetGame = function() {
    this._clearGame();
    this._setupGame();
  };



  window.Memory = Memory;

})( window );