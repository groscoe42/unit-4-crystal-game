$(document).ready(function () {

    // declare variables
    var win = 0;
    var lose = 0;
    var randNum = [Math.floor(Math.random() * 102) + 19];
    var c1 = [Math.floor(Math.random() * 12) + 1];
    var c2 = [Math.floor(Math.random() * 12) + 1];
    var c3 = [Math.floor(Math.random() * 12) + 1];
    var c4 = [Math.floor(Math.random() * 12) + 1];
    var numList = [c1, c2, c3, c4];
    var uNum = 0;


    $("#target").text(randNum);
    $(".userNum").text(uNum);
    $(".wins").text(win);
    $(".losses").text(lose);

    // create reset function
    function reset() {
        randNum = [Math.floor(Math.random() * 102) + 19];
        c1 = [Math.floor(Math.random() * 12) + 1];
        c2 = [Math.floor(Math.random() * 12) + 1];
        c3 = [Math.floor(Math.random() * 12) + 1];
        c4 = [Math.floor(Math.random() * 12) + 1];
        uNum = 0;
        $("#target").text(randNum);
        $(".userNum").text(uNum);
        $(".win-loss").text("");
    };

    //click events
    //make crystals
    for (var i = 0; i < numList.length; i++) {

        var imgArray = ["./assets/images/black.jpg", "./assets/images/blue.jpg", "./assets/images/green.jpg", "./assets/images/purple.jpg"];
        var crysPic = $("<img>");

        crysPic.addClass("crystal-image");
        crysPic.attr("src", imgArray[i]);
        crysPic.attr("data-crystalvalue", numList[i]);
        $(".crystals").append(crysPic);
    }

    //clickers
    $(".crystal-image").on("click", function () {

        var crysVal = ($(this).attr("data-crystalvalue"));
        crysVal = parseInt(crysVal);
        uNum += crysVal;
        $(".userNum").text(uNum);

        if (uNum == randNum) {
            alert("You win!");
            win++;
            $(".wins").text(win);
            reset();
        }

        else if (uNum > randNum) {
            alert("You lose!!");
            lose++;
            $(".losses").text(lose);
            reset();
        }

    });


    // win conditions

});