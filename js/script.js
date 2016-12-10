$(document).ready(function() {		
	$("#screen4slider").owlCarousel({				 
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		dots:true,
		items : 1			 
	});	
	$("#screen5slider").owlCarousel({				 
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		items : 1, 
		itemsDesktop : false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false				 
	});	

	var width = $('#iframe').width();
	var width2 = width / 1.8;
	$('#iframe', top.document).height(width2);
					
});		