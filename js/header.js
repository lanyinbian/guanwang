$(function(){
	$("h1").hover(function(){ //鼠标移入移出时
		$(this).find("ul").stop(true,true).slideDown(500,"elasticIn")//加一个动态效果
	},
	function(){
		$(this).find("ul").stop(true,true).slideUp(500)
	})
	
})
