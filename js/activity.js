define(function (require) {
    var activity = require("sugar-web/activity/activity");

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        activity.setup();

        palette = require("sugar-web/graphics/palette")
        var infoBtn = document.getElementById("info-button");
        var infoPalette = new palette.Palette(infoBtn, "Help");

        var content = document.createElement("SPAN");
        content.innerHTML = '<p class="game-explanation">' +
      '<strong class="important">How to play:</strong> Use your <strong>arrow keys</strong><br/> (or click in the direction) to move the tiles.<br/>' +
      'When two tiles with the same number<br/> touch, they <strong>merge into one!</strong>' +
      '</p>' +
      '<hr>' +
      '<p>' +
      'Created by <a href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli.</a><br/>' +
      'Ported to Sugar by <a href="https://www.github.com/SAMdroid-apps" traget="_blank">Sam Parkinson.</a><br/>' +
      'Based on <a href="https://itunes.apple.com/us/app/1024!/id823499224" target="_blank">1024 by Veewo Studio</a><br/>and conceptually similar to <a href="http://asherv.com/threes/" target="_blank">Threes.</a>' +
      '</p>';
        infoPalette.setContent([content]);
    });

});