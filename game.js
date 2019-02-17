var userClick = 0;
var total = 0;
var randomNumber = 0;
var wins = 0;
var losses = 0;

 
//read the documentation on the api
//this structure allows descendent elements to be added later
//https://api.jquery.com/on/#event-performance
$(document).on('click', ".jewel", function () {
    //this refers to the value of data-click which is a string
    total += parseInt($(this).attr('data-click'));//grabs the value of data-click, changes it to an Int and then adds itself to total
    console.log(total);
    $("#totalScore").text(total);//changing the DOM
    if (total === randomNumber) {
        alert("You win");
        wins++;
        total = 0;
        $("#wins").html("Wins" + " " + wins);
        $("#random-number, #totalScore").empty();
        $("#random-number").text(randomNumber);
        newGame();

    }  else if (total > randomNumber) { //simple comparison
        alert("You lose");
        losses++;
        total = 0;
        $("#losses").html("Losses" + " " + losses);
        newGame(); //starts a new game
    }
});

function newGame() { //the main guts of the program being defined

    $("#random-number, #totalScore, .jewels").empty();
    var images = ["assets/images/greenJewel2.jpg", "assets/images/blueJewel2.jpg", "assets/images/purpleJewel2.jpg", "assets/images/redJewel2.jpg"];
    randomNumber = Math.floor(Math.random() * 101) + 19;//to create numbers 120 to 19 create a max and min , 120 -19 = max, min is 19
    $("#random-number").text(randomNumber);

    for (var i = 0; i < 4; i++) {//needs for crystals so it loops 4 times
        var userClick = Math.floor(Math.random() * 11) + 1; //grabs a random number for each div that is created
        console.log(userClick);

        var jewel = $("<div>");//creates a div called jewel
        jewel.attr({//creates attributes for jewel div
            "class": 'jewel', // class jewel
            "data-click": userClick// data-click = userClick
        });
        jewel.css({//adds style to the divs and adds images from an array
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover",
            "background-repeat": "no-repeat"

        });
        $(".jewels").append(jewel);//adds the jewel div to jewels, creates 4 divs
    }

}

newGame();//calls the function newGame





