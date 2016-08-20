var wins = 0;
var losses = 0;
var addition = 0;
var total = Math.floor((Math.random() * 100) + 19);
var crystal1 = Math.floor((Math.random() * 12) + 1);
var crystal2 = Math.floor((Math.random() * 12) + 1);
var crystal3 = Math.floor((Math.random() * 12) + 1);
var crystal4 = Math.floor((Math.random() * 12) + 1);

var updateAddition = function() {
    $('.addition').empty();
    $('.addition').append(addition);
    $('#wins').empty();
    $('#wins').append(wins);
    $('#losses').empty();
    $('#losses').append(losses);
}

var restart = function() {
    addition = 0;
    total = Math.floor((Math.random() * 100) + 19);
    $('.total').empty();
    $('.total').append(total);
    crystal1 = Math.floor((Math.random() * 12) + 1);
    crystal2 = Math.floor((Math.random() * 12) + 1);
    crystal3 = Math.floor((Math.random() * 12) + 1);
    crystal4 = Math.floor((Math.random() * 12) + 1);
    updateAddition();
}
var logic = function() {
    if (addition == total) {
        wins = wins + 1;
        restart();
    } else if (addition > total) {
        losses = losses + 1;
        restart();
    } else {
        updateAddition();
    }

}

$('.total').append(total);
$('.addition').append(addition);
$(document).ready(function() {
    $('#crystal1').click(function() {
        addition = addition + crystal1;
        logic();
    })
    $('#crystal2').click(function() {
        addition = addition + crystal2;
        logic();
    })
    $('#crystal3').click(function() {
        addition = addition + crystal3;
        logic();
    })
    $('#crystal4').click(function() {
        addition = addition + crystal4;
        logic();
    })
});
