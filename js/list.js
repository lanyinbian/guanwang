$(function() {

	$("#head").load("header.html");
	$("#footer").load("footer.html");

	!(function(){
		
		
		
		var $h3 = $(".list_wrap").find(".title")
		var $pen = $(".list_wrap .title span")

		$pen.click(function() {
			$h3.animate({
				"width": "130px",
				"backgroundPositionX": "-960px"
			}, 0, function() {
				$h3.delay(600).animate({
					"width": "100%",
					"backgroundPositionX": "0"
				}, 2000, "easeIn")
			})
		})
		
		
	})()

})