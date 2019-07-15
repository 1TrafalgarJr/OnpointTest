/*new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});*/


new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', '3rdPage'],
	navigation: true,
    navigationPosition: 'right',
    autoScrolling:true,

	afterLoad: function(origin){
		var loadedSection = this;

		if(origin.index == 2){
			//alert("Section 3 ended loading");
		}

		if(origin.anchor == 'secondPage'){
			//alert("Section 2 ended loading");
		}
	}
});

new WOW().init();