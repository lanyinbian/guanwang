$(function() {
	//起始页面高度的设置
	function docHeight() {
		$(".main_wrap,.wrap_block").css("height", $(window).height() - 50 + "px");
        
        $(".welcame_wrap.donghua").css("height", $(window).height() + "px")
        $(".welcame_wrap.donghua").css("width", $(window).width() + "px")
	}
	docHeight();
	$(window).resize(function() {
		docHeight()
	})

	//判断鼠标是否滚动
	if(document.addEventListener) {
		document.addEventListener("DOMMouseScroll", scrollrun)
	}
	window.onmousewheel = document.onmousewheel = scrollrun;

	//判断鼠标滚动的方向

	function scrollrun(e) {
		var e = e || window.event;
		if(e.wheelDelta) {
			if(e.wheelDelta > 0) {
				scrollup()
			}
			if(e.wheelDelta < 0) {
				scrolldown()
			}
		} else if(e.detail) {
			if(e.detail < 0) {
				scrollup()
			}
			if(e.detail > 0) {
				scrolldown()
			}
		}

	}

	var scrollnum = 0; //滚动的次数
	var sliderindex = 0; //滚动到第几屏
	var settime = null;
	var scrollif = false; //还没有滚动为false，滚动中为true
    hashmove();
	function scrollup() {
		if(scrollnum < 1) {
			clearTimeout(settime);
			settime = setTimeout(function() {
				scrollnum++
			}, 100)

		} else if(!scrollif) {
			scrollif = true;
			sliderindex--;
			if(sliderindex < 0) {
				sliderindex = 0;
			}
			scrollgo();
		}
	}

	function scrolldown() {
		if(scrollnum < 1) {
			clearTimeout(settime);
			settime = setTimeout(function() {
				scrollnum++
			}, 100)

		} else if(!scrollif) {
			scrollif = true;
			sliderindex++;
			if(sliderindex > 4) {
				sliderindex = 4;
			}
			scrollgo();
		}
	}

	function scrollgo() {
		$(".main_slide_wrap").animate({
			"top": -($(window).height() - 50) * sliderindex + "px"
		}, 1000, function() {
			scrollif = false;
			scrollnum = 0;
			
			
            //每滚动一屏其对应导航位置上面的小圆点也要变化
			var $nav_piece_now = $(".header_wrap .nav_wrap .nav_piece");
			if(sliderindex == 0 || sliderindex == 1) {
				$nav_piece_now.removeClass("now").eq(0).addClass("now");
			} else if(sliderindex ==2) {
				$nav_piece_now.removeClass("now").eq(1).addClass("now");
			} else if(sliderindex == 3) {
				$nav_piece_now.removeClass("now").eq(2).addClass("now");
			} else if(sliderindex == 4) {
				$nav_piece_now.removeClass("now").eq(3).addClass("now");
				$nav_piece_now.eq(4).addClass("now");
			}

		})

	}
	var $img_bottom=$(".kaitou .welcome_wrap .img_bottom");
	
	$img_bottom.click(function(){
		$(".main_slide_wrap").animate({"top": -($(window).height() - 50) + "px"})
	})

	//点击操作
    var $nav_piece_now = $(".header_wrap .nav_wrap .nav_piece ");
    
	$nav_piece_now.click(function() {
		sliderindex=$(this).index()+1;
		if(sliderindex==5){
			sliderindex=4
		}
		console.log(sliderindex)

		scrollgo()
	})
	
	
	//hash跳转
	function hashmove(){
		var hash=window.location.hash.slice(1);
		
		if(hash===0||hash==1||hash==2||hash==3||hash==4){
			sliderindex=hash;
			if(hash!=0){
                $(".welcame_wrap").css("display","none");

            }
			
		}else{
			window.location.hash="";
			
			 welcomeannimate()
		}
		scrollgo()
		
	}
	
	
	
	//启动动画
	
	function welcomeannimate(){
	
		var $welcomeIconimg=$(".welcame_wrap #welcomeIconimg");
		console.log($welcomeIconimg)
		var $welcome_animate=$(".welcame_wrap .welcome_animate_wrap")
		
		$welcomeIconimg.delay(6000).animate({"marginTop":"-200px"},2000,function () {
                
                    $welcome_animate.fadeIn(1000);
                
            })


		setTimeout(function(){
			$(".welcame_wrap").css("display","none")
		},10000)
	
	}
	
	//概述
	!(function(){
	    var $gaishu=$(".main_wrap .main_slide_wrap .gaishu .gaishu_block");
	    $gaishu.css({"height":$(window).height() - 50})
	    
	    var $goleft=$(".main_wrap .main_slide_wrap .gaishu .leftRight .goleft");
	    var $goright=$(".main_wrap .main_slide_wrap .gaishu .leftRight .goright");
		
		var index=0;
		$goright.click(function(){
			
			
			index++;
			
			if(index>2){
				index=2
			}
			
			scrollRunning()
			
		})
		
		$goleft.click(function(){
			
			index--;
			
			if(index<=0){
				index=0
			}
			
			scrollRunning()
		})
		
		
		function scrollRunning(i){
			i=index
			console.log(index)
			
			$gaishu.eq(i).fadeIn().siblings().fadeOut();
			
			if(index==2){
				$goright.addClass("now")
			}else{
				$goright.removeClass("now")
			}
			
			if(index==0){
				$goleft.addClass("now")
				
			}else{
				$goleft.removeClass("now")
			}
		}
		
		
	})()
	
	//对企业的价值
	!(function(){
		var $blink=$(".main_wrap .jiazhi_block .jiazhi_content .jiazhi_shineimg")
		setInterval(function(){
			$blink.fadeIn(1500).delay(100).fadeOut(1500)
		},3100)
		
	})()
	
	//小鸟掌云
	!(function(){
		var $xiaoniaoyun=$(".main_wrap .main_slide_wrap .xiaoniaoyun .yun_slider>div");
	    $xiaoniaoyun.css({"height":$(window).height() - 255+"px"})
	    
	    var $btn_left=$(".main_wrap .xiaoniaoyun .btn_box .yunmove_btn_left")
	    var $btn_right=$(".main_wrap .xiaoniaoyun .btn_box .yunmove_btn_right")
	    
	    $btn_right.click(function(){
	    	$(".main_wrap .xiaoniaoyun .yun_content .yun_slidebox .yun_slider .num2").fadeIn(500)
	    	$(".main_wrap .xiaoniaoyun .yun_content .yun_slidebox .yun_slider .num1").fadeOut()
	    	$btn_right.addClass("blue")
	    	$btn_left.removeClass("blue")
	    })
	    
	    $btn_left.click(function(){
	    	$(".main_wrap .xiaoniaoyun .yun_content .yun_slidebox .yun_slider .num1").fadeIn(500)
	    	$(".main_wrap .xiaoniaoyun .yun_content .yun_slidebox .yun_slider .num2").fadeOut()
	    	$btn_left.addClass("blue")
	    	$btn_right.removeClass("blue")
	    })
	    
	})()

})