$(function(){
	
	
	
	!(function(){
	
	$(window).scroll(function () {

            if($(window).scrollTop()>500){
                $(".scroll_top").fadeIn();
            }else {
                $(".scroll_top").fadeOut();
            }

        })



        var  $top=$(".scroll_top .top");

        $top.click(function () {

            $top.parent().animate({"bottom":"1000px"},1000,function () {
                $top.parent().css({"bottom":"156px","display":"none"})
            })

            $("body,html").scrollTop(0)

        })
	
	$(".scroll_top .bottom").click(function(){
		window.location.href="aboutxiaoniao.html#4"
	})
	
	
})()

	
	
	
})
