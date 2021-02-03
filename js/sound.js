// SOUND TEXT TOGGLE
$(".sound .equalizer").on('click', function(e) {
    $(".sound b").text(function(i, v) {
        return v === 'Sound on' ? 'Sound off' : 'Sound on'
    })
});

var source = "audio/audio01.mp3";
    var audio = new Audio(); // use the constructor in JavaScript, just easier that way
    audio.addEventListener("load", function() {
        audio.play();
    }, true);
    audio.src = source;
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.2;

    $('.equalizer').click();
    var playing = false;
    $('.equalizer').on('click', function(e) {
        if (playing == false) {
            audio.play();
            playing = true;

        } else {
            audio.pause();
            playing = false;
        }
    });
