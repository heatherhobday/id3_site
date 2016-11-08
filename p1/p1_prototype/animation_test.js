$(document).ready(function() {

  function push_down() {
    setTimeout(function() {
      $('#hero').fadeOut("slow", function() {})
      , function() {
          $.scrollTo('#chat', 800, {})
        }
      }, 6500);
  }
  push_down();

  function fadein_chat_bubbles() {
    // Fade in the div with ID chat_bubble
    $( "#chat_bubble" ).fadeIn( "slow", function() {

    });

    // Settimeout delays second fade-in by 2000 ms
    setTimeout(function() {$( "#chat_bubble_2" ).fadeIn( "slow", function() {

    })}, 2000);

    setTimeout(function() {$( "#chat_bubble_3" ).fadeIn( "slow", function() {

    })}, 3000);
  }

  $('#chat').hover(function() {
    fadein_chat_bubbles();
  })


  function fade_out_everything() {
    $( "#content" ).fadeOut( "slow", function() {

		});
    $( "#hero" ).fadeOut( "slow", function() {

		});
    $( "#chat" ).fadeOut( "slow", function() {

		});
  }

  $('#final_div').hover(function() {
    fade_out_everything();
  })

});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.bottomMenu').fadeIn();
  } else {
    $('.bottomMenu').fadeOut();
  }

  function fadein_chat_bubbles() {
    // Fade in the div with ID chat_bubble
    $( "#chat_bubble" ).fadeIn( "slow", function() {

    });

    // Settimeout delays second fade-in by 2000 ms
    setTimeout(function() {$( "#chat_bubble_2" ).fadeIn( "slow", function() {

    })}, 2000);

    setTimeout(function() {$( "#chat_bubble_3" ).fadeIn( "slow", function() {

    })}, 3000);
  }

})

function startTimer(duration, display) {
var timer = duration, minutes, seconds;
setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    seconds = seconds < 10 ? + seconds : seconds;

    display.textContent = seconds;

    if (--timer < 0) {
        timer = duration;
    }
}, 1000);
}

window.onload = function () {
var fiveMinutes = 5 * 1,
    display = document.querySelector('#time');
startTimer(fiveMinutes, display);
};
