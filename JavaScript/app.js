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
var S10 = new CardConstructor (10, "S10");
var D10 = new CardConstructor (10, "D10");
var H10 = new CardConstructor (10, "H10");
var C10 = new CardConstructor (10, "C10");
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

// Defining a 5-hand deck of cards (104 cards)
var mainDeck = [SAce, DAce, HAce, CAce, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, C2, C3, C4, C5, C6, C7, C8, C9,C10, CJ, CQ, CK, SAce, DAce, HAce, CAce, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, C2, C3, C4, C5, C6, C7, C8, C9,C10, CJ, CQ, CK, SAce, DAce, HAce, CAce, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, C2, C3, C4, C5, C6, C7, C8, C9,C10, CJ, CQ, CK, SAce, DAce, HAce, CAce, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, C2, C3, C4, C5, C6, C7, C8, C9,C10, CJ, CQ, CK, SAce, DAce, HAce, CAce, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, C2, C3, C4, C5, C6, C7, C8, C9,C10, CJ, CQ, CK]

// Pick a random card in the mainDeck
function dealOneCard (){
    var oneCard = mainDeck[Math.floor(Math.random() * mainDeck.length)];
    // console.log(mainDeck.indexOf(oneCard))
    var removeCard = mainDeck.splice(mainDeck.indexOf(oneCard), 1);
    // var removeOneCard = mainDeck.splice(Math.floor(Math.random() * mainDeck.length),1);
    // console.log(oneCard)
    // var selectedCardValue = oneCard.mathvalue
    // // console.log(selectedCardValue)
    // var selectedCardId = oneCard.name
    // console.log(selectedCArdId)
    var selectedCardArray = [oneCard.mathvalue, oneCard.name]
    return selectedCardArray
}


//Player's hand math total
var playerHandArray = []
function countPlayerTotal(){
  var playerHandTotal = 0;
  $.each(playerHandArray,function() {
    playerHandTotal += this;
  });
  // copy/paste $.each from web:http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
return playerHandTotal;
}
//Dealer's hand math total
var dealerHandArray = []
function countDealerTotal(){
  var dealerHandTotal = 0;
  $.each(dealerHandArray,function() {
    dealerHandTotal += this;
  });
return dealerHandTotal;
}
  // copy/paste $.each from web:http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers


// Win Logic
function playerBust (){
  if(countPlayerTotal() > 21){
    alert("Player Bust")
    resetAfterHand()
    // location.reload()
}}
function dealerBust (){
    if(countDealerTotal() > 21){
      alert("Dealer Bust")
      resetAfterHand()
  }}
function decideWinner(){
  if(countDealerTotal() >= countPlayerTotal() && countDealerTotal() < 21){
    alert("Dealer Wins !")
    resetAfterHand()
  }
  else if(countDealerTotal() <= countPlayerTotal() && countPlayerTotal() < 21){
    alert("Player Wins !")
    resetAfterHand()
  }
  else if(countDealerTotal()=== 21){
    alert("Dealer Wins !")
    resetAfterHand()
  }
  if(countDealerTotal() > 21){
    alert("Dealer Bust")
    resetAfterHand()
  }
}

function resetAfterHand(){
  $('#cell5').remove();
  $('#cell6').remove();
  $('#cell7').remove();
  $('#cell8').remove();
  $('#cell9').remove();
  $('#cell10').remove();
  $('#cell11').remove();
  $('#cell1Display').html("");
  $('#cell2Display').html("");
  $('#cell3Display').html("");
  $('#cell4Display').html("");
  $('#revealCard').attr('id','turned')
  playerHandArray = playerHandArray.splice(0,playerHandArray.lenght)
  dealerHandArray = dealerHandArray.splice(0,dealerHandArray.lenght)
  $('#playerTotalDisplay').html("");
  $('#dealerTotalDisplay').html("");
}



// Button Listeners
var handwager = 5000000
$('#wagerSubmitButton').click(function(){
  var newWager = $('#wagerInput'). val()
  $('#wagerDisplay').html("Current Wager: "+" $"+ newWager )
})

// Deal button functionalities
$('#dealButton').click(function(){
  var cellOne = dealOneCard()
  console.log(cellOne)
  $('#cell1Display').html(cellOne[0]+ " "+ cellOne[1])
  playerHandArray.push(cellOne[0]);
  var cellTwo = dealOneCard()
  $('#cell2Display').html(cellTwo[0]+ " "+ cellTwo[1])
  dealerHandArray.push(cellTwo[0]);
  var cellThree = dealOneCard()
  $('#cell3Display').html(cellThree[0]+ " "+ cellThree[1])
  playerHandArray.push(cellThree[0]);
  var cellFour = dealOneCard()
  $('#cell4Display').html(cellFour[0]+ " "+ cellFour[1])
  dealerHandArray.push(cellFour[0]);

  $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
  $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())

  countPlayerTotal();
  countDealerTotal();
  playerBust();

  $('#wagerSubmitButton').hide();
  $('#wagerInput').hide();
})

// hit button functionalities
var hitCount = 1;
$('#hitButton').click(function(){

    if(hitCount === 1){
    var cellFive = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell5"><p id=cell5Display></p></div>')
    $('#cell5Display').html(cellFive[0]+ " "+ cellFive[1])
    playerHandArray.push(cellFive[0]);
    countPlayerTotal()
    $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
    playerBust ()
    // console.log()
    }
    else if(hitCount === 2){
    var cellSix = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell6"><p id=cell6Display></p></div>')
    $('#cell6Display').append(cellSix[0]+ " "+ cellSix[1])
    playerHandArray.push(cellSix[0]);
    countPlayerTotal()
    $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
    playerBust ()
    }

    else if(hitCount === 3){
    var cellSeven = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell7"><p id=cell7Display></p></div>')
    $('#cell7Display').append(cellSeven[0]+ " "+ cellSeven[1])
    playerHandArray.push(cellSeven[0]);
    countPlayerTotal()
    $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
    playerBust ()
    }
    else if(hitCount === 4){
    var cellEight = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell8"><p id=cell8Display></p></div>')
    $('#cell8Display').append(cellEight[0]+ " "+ cellEight[1])
    playerHandArray.push(cellEight[0]);
    countPlayerTotal()
    $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
    playerBust ()
    }
    else if(hitCount === 5){
    var cellNine = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell9"><p id=cell9Display></p></div>')
    $('#cell9Display').html(cellNine[0]+ " "+ cellNine[1])
    playerHandArray.push(cellNine[0]);
    countPlayerTotal()
    $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
    playerBust ()
    }
    else {
      console.log("else hit")
    }
hitCount++
})

// Stand button functionalities
$('#standButton').click(function(){
  // Turn the hidden card
  $('#turned').attr('id','revealCard')
  // make other buttons hidden
  if (countDealerTotal() < 17){
    var cellTen = dealOneCard()
    console.log(cellTen)
    $('#dealerRow').append('<div class="cardTile" id="cell10"><p id=cell10Display></p></div>')
    $('#cell10Display').append(cellTen[0]+ " "+ cellTen[1])
    dealerHandArray.push(cellTen[0]);
    countDealerTotal()
    $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())
      if (countDealerTotal()< 17){
        var cellEleven = dealOneCard()
        console.log(cellEleven)
        $('#dealerRow').append('<div class="cardTile" id="cell11"><p id=cell11Display></p></div>')
        $('#cell11Display').append(cellEleven[0]+ " "+ cellEleven[1])
        dealerHandArray.push(cellEleven[0]);
        countDealerTotal()
        $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())
          if (countDealerTotal()< 17){
            var cellTwelve = dealOneCard()
            console.log(cellTwelve)
            $('#dealerRow').append('<div class="cardTile" id="cell12"><p id=cell12Display></p></div>')
            $('#cell12Display').append(cellTwelve[0]+ " "+ cellTwelve[1])
            dealerHandArray.push(cellTwelve[0]);
            $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())
            countDealerTotal()
            }
              if (countDealerTotal()< 17){
                var cellThirteen = dealOneCard()
                // console.log(cellTwelve)
                $('#dealerRow').append('<div class="cardTile" id="cell13"><p id=cell13Display></p></div>')
                $('#cell13Display').append(cellThirteen[0]+ " "+ cellTwelve[1])
                dealerHandArray.push(cellThirteen[0]);
                $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())
                countDealerTotal()
              }
        }
    countDealerTotal()
    }
decideWinner();
})
