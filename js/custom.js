// JS customizations

// Scrolling lightbox with; Chopper credit and link or Jay Martin credit
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				switch(item.el.attr('credit')) {
					case 'Chopper':
						return item.el.attr('title') + '<a href="/about#Chopper"><small><i class="fa fa-camera-retro"></i>&nbsp;&nbsp;Image by Anthony “Chopper” Leone</small></a>';
						break;
					case 'Martin':
						return item.el.attr('title') + '<small><i class="fa fa-camera-retro"></i>&nbsp;&nbsp;Image by Jay Martin</small></a>';
						break;
					case 'Kubik':
						return item.el.attr('title') + '<small><i class="fa fa-camera-retro"></i>&nbsp;&nbsp;Image by Jim Kubik</small>';
						break;
					case 'Owner':
						return item.el.attr('title') + '<small><i class="fa fa-camera-retro"></i>&nbsp;&nbsp;Image by Boat Owner</small></a>';
						break;
					case 'Unknown':
						return item.el.attr('title') + '<small><i class="fa fa-camera-retro"></i>&nbsp;&nbsp;Image by unknown</small></a>';
						break;
					case 'LPBMM':
						return item.el.attr('title') + '<small><i class="fa fa-camera-retro"></i>&nbsp;&nbsp;Image by LPBMM</small></a>';
						break;
					default:
						return item.el.attr('title') + ' ';
				} 
			}
		}
	});
});
// show/hide alert when "Boarding Allowed" is selected/unselected
$(document).ready(function() {
  $(".iam-boarding").click(function(){
	  $("#alert-display").removeClass("hide-alert-display");
  }); 
  $(".hide-boarding-alert").click(function(){
	  $("#alert-display").addClass("hide-alert-display");
  }); 
});
// Notifications
/*	Positions */
var stack_bar_bottom = {"dir1": "up", "dir2": "right", "spacing1": 0, "spacing2": 0};

$('#pnotify-boarding-info').click(function() {
	var notice = new PNotify({
		title: 'Boarding Allowed',
		text: 'When boarding is allowed, <strong>permisson is always required</strong> from the owner, or his authorized agent. Please be courteous and careful while onboard the boats.',
		type: 'info',
		icon: 'fa fa-info-circle fa-2x fa-inverse',
		addclass: 'stack-bar-bottom',
		stack: stack_bar_bottom,
		width: "70%"
	});
});
