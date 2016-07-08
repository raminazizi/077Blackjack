console.log("JS is loaded")


// -----------Card constructor--------
function CardConstructor (a, b){
    this.mathvalue = a;
    this.name = b;
}
var SAce = new CardConstructor (11, "SAce");
var DAce = new CardConstructor (11, "DAce");
var HAce = new CardConstructor (11, "HAce");
var CAce = new CardConstructor (11, "CAce");
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
var cellOne;
var cellTwo;
var cellThree;
var cellFour;
// Defining a 5-hand deck of cards (104 cards)
var mainDeck = [SAce, DAce, HAce, CAce, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, C2, C3, C4, C5, C6, C7, C8, C9,C10, CJ, CQ, CK, SAce, DAce, HAce, CAce, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, C2, C3, C4, C5, C6, C7, C8, C9,C10, CJ, CQ, CK, SAce, DAce, HAce, CAce, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, C2, C3, C4, C5, C6, C7, C8, C9,C10, CJ, CQ, CK, SAce, DAce, HAce, CAce, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, C2, C3, C4, C5, C6, C7, C8, C9,C10, CJ, CQ, CK, SAce, DAce, HAce, CAce, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, C2, C3, C4, C5, C6, C7, C8, C9,C10, CJ, CQ, CK]
// Pick a random card in the mainDeck
function dealOneCard (){
    var oneCard = mainDeck[Math.floor(Math.random() * mainDeck.length)];
    // console.log(mainDeck.indexOf(oneCard))
    var removeCard = mainDeck.splice(mainDeck.indexOf(oneCard), 1);
    var selectedCardArray = [oneCard.mathvalue, oneCard.name]
    return selectedCardArray
}
//Player's hand math total
function aceCheckDealer() {
    var hasAce = false;
    for (var i = 0; i < dealerHandArray.length; i++) {
      if (dealerHandArray[i] === 11) {
          hasAce = true;
      }

    }
    return hasAce;
}
var playerHandAceIndex =[]
var playerHandArray = []
  function aceCheckPlayer() {
    var hasAce = false;
    for (var i = 0; i < playerHandArray.length; i++) {
        if (playerHandArray[i] === 11) {
        // playerHandAceIndex.push(playerHandArray.indexOf(i))
        hasAce = true;
        }
     }
    return hasAce;
}
function countPlayerTotal(){
  var playerHandTotal = 0;
  if(aceCheckPlayer()){
    var hardHandTotal = 0
    $.each(playerHandArray,function() {
    hardHandTotal += this;
    // copy/paste $.each from web:http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
    });
    if(hardHandTotal > 21){
      playerHandArray[playerHandArray.indexOf(11)] = 1
      playerHandTotal= countPlayerTotal();
     }
     else {
       playerHandTotal = hardHandTotal
    }
  }
  else {
    $.each(playerHandArray,function() {
      playerHandTotal += this;
    });
        // copy/paste $.each from web:http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
  }
  return (playerHandTotal);
 }

var dealerHandArray = []
function countDealerTotal(){
  var dealerHandTotal = 0;
  if(aceCheckDealer()){
    var hardHandTotal = 0
    $.each(dealerHandArray,function() {
      hardHandTotal += this;
    // copy/paste $.each from web:http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
    });
    if(hardHandTotal > 21){
        dealerHandArray[dealerHandArray.indexOf(11)] = 1
        dealerHandTotal= countDealerTotal();
     }
     else {
      dealerHandTotal = hardHandTotal
    }
  }
  else {
    $.each(dealerHandArray,function() {
      dealerHandTotal += this;
    });
        // copy/paste $.each from web:http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
  }
  return (dealerHandTotal);
 }
// Win Logic
function playerBust (){
  if(countPlayerTotal() > 21){
    $('#numbers').append('<div id="whoWon">"Player bust"</div>')
    currentBalance = currentBalance - handWager
    $('#totalMoney').html("Current Balance= "+" $"+ currentBalance)
    resetAfterHand()
    return true
  } else {
    return false
  }
}
function decideWinner(){
  if(countDealerTotal() > countPlayerTotal() && countDealerTotal() <= 21){
    $('#numbers').append('<div id="whoWon">"Dealer Wins"</div>')
    currentBalance = currentBalance - handWager
    $('#totalMoney').html("Current Balance= "+" $"+ currentBalance)
    resetAfterHand()
  }
  else if(countDealerTotal() < countPlayerTotal() && countPlayerTotal() <= 21){
    $('#numbers').append('<div id="whoWon">"Player Wins"</div>')
    currentBalance = currentBalance + handWager
    $('#totalMoney').html("Current Balance= "+" $"+ currentBalance)
    resetAfterHand()
  }
  else if(countDealerTotal() === countPlayerTotal()){
    $('#numbers').append('<div id="whoWon">"Tie Game"</div>')
    $('#totalMoney').html("Current Balance= "+" $"+ currentBalance)
    resetAfterHand()
  }
  if(countDealerTotal() > 21){
    $('#numbers').append('<div id="whoWon">"Dealer Bust"</div>')
    currentBalance = currentBalance + handWager
    $('#totalMoney').html("Current Balance= "+" $"+ currentBalance)
    resetAfterHand()
  }
}
function resetAfterHand(){
  setTimeout(function() {
  $('.cardTile').remove();

  playerHandArray = playerHandArray.splice(0,playerHandArray.lenght)
  dealerHandArray = dealerHandArray.splice(0,dealerHandArray.lenght)
  $('#playerTotalDisplay').html("");
  $('#dealerTotalDisplay').html("");
  $('#wagerSubmitButton').show();
  $('#wagerInput').show();
  $('#dealButton').removeClass("hidden")
  $('#hitButton').addClass("hidden")
  $('#standButton').addClass("hidden")
  $('#doubleDownButton').addClass("hidden")
  $('#whoWon').remove();


  if (currentBalance < missionObjective){
    console.log("hello")
  }
  if (currentBalance > missionObjective){
    alert ("Congratulations Mr. Bond")
  window.location.href='https://i.kinja-img.com/gawker-media/image/upload/s--hQsEFj_T--/c_scale,fl_progressive,q_80,w_800/1496005773134353702.jpg'
  }
  if (currentBalance <= 0){
    alert ("Mission Failed")
   window.location.href='http://i.imgur.com/De5bVCu.jpg';
    currentBalance = 2000000;
  }
  hitCount = 1;
  // var handWager = 500000
  console.log("reset working")
}, 3000)
}
// Button Listeners
var missionObjective = 4000000;
var currentBalance = 2000000;
var handWager = 500000;
$('#wagerSubmitButton').click(function(){
  var newWager = $('#wagerInput').val()
  $('#wagerDisplay').html("Current Wager= $"+newWager);
  handWager = parseInt(newWager)
})
// Deal button functionalities
$('#dealButton').click(function(){
  var cellOne = dealOneCard()
  $('#playerRow').append('<div class="cardTile" id="cell1"></div>')
  $('#cell1').attr('id', cellOne[1])
  playerHandArray.push(cellOne[0]);
  var cellTwo = dealOneCard()
  $('#dealerRow').append('<div class="cardTile" id="cell2"></div>')
  $('#cell2').attr('id', cellTwo[1])
  dealerHandArray.push(cellTwo[0]);
  var cellThree = dealOneCard()
  $('#playerRow').append('<div class="cardTile" id="cell3"></div>')
  $('#cell3').attr('id', cellThree[1])
  playerHandArray.push(cellThree[0]);
  cellFour = dealOneCard()
  $('#dealerRow').append('<div class="cardTile turned" ></div>')
  $('#cell4').attr('id', cellFour[1])
  dealerHandArray.push(cellFour[0]);
  $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
  countPlayerTotal();
  countDealerTotal();
  playerBust();
  $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
  $('.hidden').removeClass("hidden")
  $('#dealButton').addClass("hidden")

})
var hitCount = 1;
$('#hitButton').click(function(){
    $('#doubleDownButton').addClass("hidden")
    if(hitCount === 1){
    var cellFive = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell5"></div>')
    $('#cell5').attr('id', cellFive[1])
    playerHandArray.push(cellFive[0]);
    countPlayerTotal()
    $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
    playerBust ()
    }
    else if(hitCount === 2){
    var cellSix = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell6"></div>')
    $('#cell6').attr('id', cellSix[1])
    playerHandArray.push(cellSix[0]);
    countPlayerTotal()
    $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
    playerBust ()
    }
    else if(hitCount === 3){
    var cellSeven = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell7"></div>')
    $('#cell7').attr('id', cellSeven[1])
    playerHandArray.push(cellSeven[0]);
    countPlayerTotal()
    $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
    playerBust ()
    }
    else if(hitCount === 4){
    var cellEight = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell8"></div>')
    $('#cell8').attr('id', cellEight[1])
    playerHandArray.push(cellEight[0]);
    countPlayerTotal()
    $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
    playerBust ()
    }
    else if(hitCount === 5){
    var cellNine = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell9"></div>')
    $('#cell9').attr('id', cellNine[1])
    playerHandArray.push(cellNine[0]);
    countPlayerTotal()
    $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
    playerBust ()
    }
    else if(hitCount < 6){
    var cellFourteen = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell14"></div>')
    $('#cell14').attr('id', cellFourteen[1])
    playerHandArray.push(cellFourteen[0]);
    countPlayerTotal()
    $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
    playerBust ()
    }
    else if(hitCount < 7){
    var cellFifteen = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell15"></div>')
    $('#cell15').attr('id', cellFidteen[1])
    playerHandArray.push(cellFifteen[0]);
    countPlayerTotal()
    $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())
    playerBust ()
    }
    else if(hitCount < 8){
    var cellSixteen = dealOneCard()
    $('#playerRow').append('<div class="cardTile" id="cell16"></div>')
    $('#cell16').attr('id', cellSixteen[1])
    playerHandArray.push(cellSixteen[0]);
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

  $('#cell4').removeClass("turned");
  $('.turned').attr('id', cellFour[1])
  $('#doubleDownButton').addClass("hidden")
  $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())

  if (countDealerTotal() < 17){
    var cellTen = dealOneCard()
    console.log(cellTen)
    $('#dealerRow').append('<div class="cardTile" id="cell10"><p id=cell10Display></p></div>')
    $('#cell10').attr('id', cellTen[1])
    dealerHandArray.push(cellTen[0]);
    countDealerTotal()
    $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())
    if (countDealerTotal() < 17){
      var cellEleven = dealOneCard()
      console.log(cellEleven)
      $('#dealerRow').append('<div class="cardTile" id="cell11"><p id=cell11Display></p></div>')
      $('#cell11').attr('id', cellEleven[1])
      dealerHandArray.push(cellEleven[0]);
      countDealerTotal()
      $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())
      console.log(countDealerTotal())
      if(countDealerTotal() < 17){
        var cellTwelve = dealOneCard()
        console.log(cellTwelve)
        $('#dealerRow').append('<div class="cardTile" id="cell12"><p id=cell12Display></p></div>')
        $('#cell12').attr('id', cellTwelve[1])
        dealerHandArray.push(cellTwelve[0]);
        countDealerTotal()
        $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())
        if(countDealerTotal() < 17){
          var cellThirteen = dealOneCard()
          console.log(cellThirteen)
          $('#dealerRow').append('<div class="cardTile" id="cell13"><p id=cell13Display></p></div>')
          $('#cell13').attr('id', cellThirteen[1])
          dealerHandArray.push(cellThirteen[0]);
          countDealerTotal()
          $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())
        }
      }
    }
    decideWinner()
  }
  else {

    decideWinner()
  }
})

// Double Down button functionalities
$('#doubleDownButton').click(function(){
  var cellFive = dealOneCard()
  $('#playerRow').append('<div class="cardTile" id="cell5"></div>')
  $('#cell5').attr('id', cellFive[1])
  playerHandArray.push(cellFive[0]);
  countPlayerTotal()
  $('#playerTotalDisplay').html("Player Total= "+ countPlayerTotal())

  handWager = handWager * 2;
  $('#wagerDisplay').html("Current Wager= "+" $"+ handWager)
  $('.turned').attr('id', cellFour[1])
  $('#cell4').removeClass("turned");

if (!playerBust()){
  if (countDealerTotal() < 17){
    var cellTen = dealOneCard()
    console.log(cellTen)
    $('#dealerRow').append('<div class="cardTile" id="cell10"><p id=cell10Display></p></div>')
    $('#cell10').attr('id', cellTen[1])
    dealerHandArray.push(cellTen[0]);
    countDealerTotal()
    $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())
    if (countDealerTotal() < 17){
      var cellEleven = dealOneCard()
      console.log(cellEleven)
      $('#dealerRow').append('<div class="cardTile" id="cell11"><p id=cell11Display></p></div>')
      $('#cell11').attr('id', cellEleven[1])
      dealerHandArray.push(cellEleven[0]);
      countDealerTotal()
      $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())
      console.log(countDealerTotal())
      if(countDealerTotal() < 17){
        var cellTwelve = dealOneCard()
        console.log(cellTwelve)
        $('#dealerRow').append('<div class="cardTile" id="cell12"><p id=cell12Display></p></div>')
        $('#cell12').attr('id', cellTwelve[1])
        dealerHandArray.push(cellTwelve[0]);
        countDealerTotal()
        $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())
        if(countDealerTotal() < 17){
          var cellThirteen = dealOneCard()
          console.log(cellThirteen)
          $('#dealerRow').append('<div class="cardTile" id="cell13"><p id=cell13Display></p></div>')
          $('#cell13').attr('id', cellThirteen[1])
          dealerHandArray.push(cellThirteen[0]);
          countDealerTotal()
          $('#dealerTotalDisplay').html("Dealer's Total= "+ countDealerTotal())
        }
      }
    }
    decideWinner()
  }
  else {

    decideWinner()
  }
  }
})
