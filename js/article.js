$(function(){
	$("#head").load("header.html");
	$("#footer").load("footer.html");
	
	
	!(function(){
		 var list_text_like=["娘娘威武","皇上万岁，万万岁","爱死你啦、MUA~","再点一下试试~"];
		 
		 var iflike=false;
		 var $like_tips=$(".like_tips_wrap .like_tips")
		 console.log($like_tips)
		 
		 
		 
		 function move() {
            $like_tips.animate({"top":"0px", "opacity": 1},1000,function () {
                $like_tips.delay(500).animate({"left":"0","opacity": "0"},1000,function () {
                    $(".like_btn_wrap .like_showbox .like_btn").animate({"backgroundPositionY":"-72px"})
                    $like_tips.css({"left":"422px","top":"-300px"})
                })
            })
        }

        $(".like_btn_wrap").click(function () {
           if(!iflike) {
               iflike=true;
               $like_tips.text(list_text_like[Math.floor(Math.random()*list_text_like.length)])
              move();
           }else if(iflike &&    $like_tips.text()=="再点一下试试~" ){
               $like_tips.text("让你点你就点啊.无聊")
               move();
           }

        })

        
		 var $h3 = $(".article_all .content_wrap>h3");
		var $pen = $(".article_all .content_wrap>h3 span")

		$pen.click(function() {
			$h3.animate({
				"width": "260px",
				"backgroundPositionX": "-600px"
			}, 0, function() {
				$h3.delay(600).animate({
					"width": "100%",
					"backgroundPositionX": "0"
				}, 2000, "easeIn")
			})
		})
		 
		 
		 
	})()
	
	
	
	
	
	
})
	
	
	
	

