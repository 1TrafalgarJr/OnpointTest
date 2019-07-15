new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', '3rdPage'],
	navigation: true,
    navigationPosition: 'right',
    autoScrolling:true,

	afterLoad: function(origin){
		var loadedSection = this;

		if(origin.index == 2){
		}

		if(origin.anchor == 'secondPage'){
		}
	}
});

$('.single-item-rtl').slick({
  rtl: true
});
