$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.bottomMenu').fadeIn();
  } else {
    $('.bottomMenu').fadeOut();
  }

	// Chat bubble code

	function fadein_chat_bubbles() {
		// Fade in the div with ID chat_bubble
		$( "#chat_bubble" ).fadeIn( "slow", function() {
	  		console.log("Chat bubble faded in");
		});

		// Settimeout delays second fade-in by 2000 ms
		setTimeout(function() {$( "#chat_bubble_2" ).fadeIn( "slow", function() {
	  		console.log("Chat bubble faded in");
		})}, 2000);

		setTimeout(function() {$( "#chat_bubble_3" ).fadeIn( "slow", function() {
				console.log("Chat bubble faded in");
		})}, 3000);
	}


	// fadein_chat_bubbles();

	// Uncomment below when waypoint is included

	var waypoint = new Waypoint({
	  element: document.getElementById('chat_bubble'),
	  handler: function(direction) {
	  	fadein_chat_bubbles();
	  }
	});

	// All other functions go in here

});

/* Helpful Links */

/*

- http://jonathannicol.com/blog/2011/08/06/build-a-parallax-scrolling-website-interface-with-jquery-and-css/
- http://imakewebthings.com/waypoints/
- http://api.jquery.com/fadein/
- https://www.sitepoint.com/jquery-settimeout-function-examples/

*/
