console.log("JS is loaded")


// -----------Card constructor--------
function CardConstructor (a, b){

    this.mathvalue = a;
    this.name = b;

}
var SAce = new CardConstructor (1, "SAce");
var DAce = new CardConstructor (1, "DAce");
var HAce = new CardConstructor (1, "HAce");
var CAce = new CardConstructor (1, "CAce");

var S2 = new CardConstructor (2, "S2");
var D2 = new CardConstructor (2, "D2");
var H2 = new CardConstructor (2, "H2");
var C2 = new CardConstructor (2, "C2");

var S3 = new CardConstructor (3, "S3");
var D3 = new CardConstructor (3, "D3");
var H3 = new CardConstructor (3, "H3");
var C3 = new CardConstructor (3, "C3");

var S4 = new CardConstructor (4, "S4");
var D4 = new CardConstructor (4, "D4");
var H4 = new CardConstructor (4, "H4");
var C4 = new CardConstructor (4, "C4");

var S5 = new CardConstructor (5, "S5");
var D5 = new CardConstructor (5, "D5");
var H5 = new CardConstructor (5, "H5");
var C5 = new CardConstructor (5, "C5");

var S6 = new CardConstructor (6, "S6");
var D6 = new CardConstructor (6, "D6");
var H6 = new CardConstructor (6, "H6");
var C6 = new CardConstructor (6, "C6");

var S7 = new CardConstructor (7, "S7");
var D7 = new CardConstructor (7, "D7");
var H7 = new CardConstructor (7, "H7");
var C7 = new CardConstructor (7, "C7");

var S8 = new CardConstructor (8, "S8");
var D8 = new CardConstructor (8, "D8");
var H8 = new CardConstructor (8, "H8");
var C8 = new CardConstructor (8, "C8");

var S9 = new CardConstructor (9, "S9");
var D9 = new CardConstructor (9, "D9");
var H9 = new CardConstructor (9, "H9");
var C9 = new CardConstructor (9, "C9");

var S10 = new CardConstructor (8, "S10");
var D10 = new CardConstructor (8, "D10");
var H10 = new CardConstructor (8, "H10");
var C10 = new CardConstructor (8, "C10");

var SJ = new CardConstructor (10, "SJ");
var DJ = new CardConstructor (10, "DJ");
var HJ = new CardConstructor (10, "HJ");
var CJ = new CardConstructor (10, "CJ");

var SQ = new CardConstructor (10, "SQ");
var DQ = new CardConstructor (10, "DQ");
var HQ = new CardConstructor (10, "HQ");
var CQ = new CardConstructor (10, "CQ");

var SK = new CardConstructor (10, "SK");
var DK = new CardConstructor (10, "DK");
var HK = new CardConstructor (10, "HK");
var CK = new CardConstructor (10, "CK");

// Defining a 2-hand deck of cards (104 cards)
var mainDeck = [SAce, DAce, HAce, CAce, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, C2, C3, C4, C5, C6, C7, C8, C9,C10, CJ, CQ, CK, SAce, DAce, HAce, CAce, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, C2, C3, C4, C5, C6, C7, C8, C9,C10, CJ, CQ, CK]

// Pick a random card in the mainDeck
function dealOneCard (){
    var oneCard = mainDeck[Math.floor(Math.random() * mainDeck.length)];
    // var removeOneCard = mainDeck.splice(Math.floor(Math.random() * mainDeck.length),1);
    console.log(oneCard)
    // var selectedCardValue = oneCard.mathvalue
    // // console.log(selectedCardValue)
    // var selectedCardId = oneCard.name
    // console.log(selectedCArdId)
    var selectedCardArray = [oneCard.mathvalue, oneCard.name]
    return selectedCardArray
    // return selectedCardArray
}

var cellOne = dealOneCard()
var cellTwo = dealOneCard()
var cellThree = dealOneCard()
var cellFour = dealOneCard()

//Player's hand math total
var playerHandArray = [cellOne[0], cellThree[0]]

function countPlayerTotal(){
var playerHandTotal = 0;
$.each(playerHandArray,function() {
    playerHandTotal += this;
    $('#playerTotalDisplay').html("Player Total= "+ playerHandTotal)
});
return playerHandTotal;
}
//Dealer's hand math total
var dealerHandArray = [cellTwo[0], cellFour[0]]

function countDealerTotal(){
var dealerHandTotal = 0;
$.each(dealerHandArray,function() {
    dealerHandTotal += this;
    $('#dealerTotalDisplay').html("Dealer's Total= "+ dealerHandTotal)
});
return dealerHandTotal;
}
// Win Logic
function winnerDecide (){
  if(countPlayerTotal() > 21){
    alert("Player Bust")
  }
  if(countPlayerTotal() === 21 && countPlayerTotal()!= countDealerTotal()){
    alert("Player Wins !")
  }

  if(countDealerTotal() > 21){
    alert("Dealer Bust")
  }
}


// Button Listeners
$('#wagerSubmitButton').click(function(){
  var newWager = $('#wagerInput'). val()
  $('#wagerDisplay').html("Current Wager: "+" $"+ newWager )
})

// Deal button functionalities
$('#dealButton').click(function(){
  $('#cell1Display').html(cellOne[0]+ " "+ cellOne[1])
  $('#cell2Display').html(cellTwo[0]+ " "+ cellTwo[1])
  $('#cell3Display').html(cellThree[0]+ " "+ cellThree[1])
  $('#cell4Display').html(cellFour[0]+ " "+ cellFour[1])
  countPlayerTotal()
  countDealerTotal()
})

// hit button functionalities
var hitCount = 1;
$('#hitButton').click(function(){

    if(hitCount === 1){
    var cellFive = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell5"><p id=cell5Display></p></div>')
    $('#cell5Display').html(cellFive[0]+ ""+ cellFive[1])
    playerHandArray.push(cellFive[0]);
    countPlayerTotal()
    winnerDecide ()
    // console.log()
    }
    else if(hitCount === 2){
    var cellSix = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell6"><p id=cell6Display></p></div>')
    $('#cell6Display').append(cellSix[0]+ " "+ cellSix[1])
    playerHandArray.push(cellSix[0]);
    countPlayerTotal()
    winnerDecide ()
    }

    else if(hitCount === 3){
    var cellSeven = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell7"><p id=cell7Display></p></div>')
    $('#cell7Display').append(cellSeven[0]+ " "+ cellSeven[1])
    playerHandArray.push(cellSeven[0]);
    countPlayerTotal()
    winnerDecide ()
    }
    else if(hitCount === 4){
    var cellEight = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell8"><p id=cell8Display></p></div>')
    $('#cell8Display').append(cellEight[0]+ " "+ cellEight[1])
    playerHandArray.push(cellEight[0]);
    countPlayerTotal()
    winnerDecide ()
    }
    else if(hitCount === 5){
    var cellNine = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell9"><p id=cell9Display></p></div>')
    $('#cell9Display').html(cellNine[0]+ " "+ cellNine[1])
    playerHandArray.push(cellNine[0]);
    countPlayerTotal()
    winnerDecide ()
    }
    else {
      console.log("else hit")
    }
hitCount++
})

// Stand button functionalities
$('#standButton').click(function(){
  $('#cell4').attr('id','cell1')
  // make other buttons hidden
  winnerDecide ()
  // get dealer total and pull cards if less than 17

})
