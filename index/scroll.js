
$(document).scroll(()=>{
	var top=parseInt($(window).scrollTop());
	var headerHeight=parseInt($(".head").css("height"));
	console.log($(".head").css("opacity"));
	if(top>headerHeight&&$(".head").css("opacity")==1){
		$(".head").css({
			"position":"fixed",
			"z-index":10,
			"opacity":0,
			"top":"-100px",
		})
		
		$(".head").stop().animate({
			"top":"0px",
			"opacity":0.99,
		},1000);
    }
	if(top<=headerHeight){
		$(".head").css({
			"position":"static",
		})
		$(".head").stop().animate({
			"opacity":1,
		},1000);
	}
});

