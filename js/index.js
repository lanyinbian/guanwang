$(function(){
	$("#head").load("header.html");
	$("#footer").load("footer.html");
	
	!(function(){
		
		
		
		var i=0;

       function faIN() {
       	
          $(".banner_wrap_picture ul").eq(i).fadeIn().siblings().fadeOut(); //其他图淡出  选中的图淡入

          $(".point ._center ul li").eq(i).addClass("blue").siblings().removeClass("blue") //图变化时  下面的小点变蓝色
          
          imgrunning()
           
       }
       
       //给里面的图片添加动画
       function imgrunning() {
            $(".banner_wrap ul  ").eq(i).siblings().find("img").eq(0).removeClass("animated fadeInLeft")
            $(".banner_wrap ul  ").eq(i).siblings().find("img").eq(1).removeClass("animated fadeInRight")
            $(".banner_wrap ul  ").eq(i).siblings().find("img").eq(2).removeClass("animated fadeInUp")

            $(".banner_wrap ul  ").eq(i).find("img").eq(0).addClass("animated fadeInLeft")
            $(".banner_wrap ul  ").eq(i).find("img").eq(1).addClass("animated fadeInRight")
            $(".banner_wrap ul  ").eq(i).find("img").eq(2).addClass("animated fadeInUp")

        }
       
       
       
		//左按钮
		$(".point ._left").click(function () {
			

            i--;

            if(i<0){
                i=2
            }
            faIN();
        })
		
		$(".point ._left img").hover(function(){
		
			this.src="./img/prev_jiantou_hover.png";
			
			
		},function(){
			this.src="./img/prev_jiantou.png"
		})
		
		
		
        //右按钮
        $(".point ._right").click(function () {

            i++;

            if(i>2){
                i=0
            }
            faIN();
        })
        
        $(".point ._right img").hover(function(){
		
			this.src="./img/next_jiantou_hover.png";
			
		},function(){
			this.src="./img/next_jiantou.png"
		})
        
        
         //    三个小按钮

      $(".point span li").each(function (a,ele) {
          var num=a;
			
          $(this).click(function () {
          	 
              i=num;
              faIN();
          })
      })
      
      setInterval(fn,3000)
      
      
        function fn() {
            i++;
         
            if(i>2){
            	i=0;
            }
             faIN();
        }
      
		
	})()
	
	
	
	
	
	
	
	//产品模块
	!(function(){
		var $left=$(".left_right>.zuo");
		var $right=$(".left_right>.you");
		var indexNum=0;
		var $lis=$(".product_left>ul>li");
		var $product_right=$(".product_right");
//		console.log($lis)
		
//		console.log($left)
		
		$left.click(function(){
			indexNum--;
			if(indexNum<0){
				indexNum=5;
			}
			fn("fadeInRight")
		})
		
		$right.click(function(){
			
			indexNum++;
			if(indexNum>5){
				indexNum=0;
			}
			fn("fadeInLeft")
		})
		
		$lis.each(function(i){
			
			
			var num=i;
			$(this).click(function(){
			
			if(num<indexNum){
				indexNum=num;
				
				fn("fadeInRight");
			}
			if(num>indexNum){
				indexNum=num;
				
				fn("fadeInLeft");
			}
			})
			
		})
		
		function fn(a){
			$lis.eq(indexNum).addClass("now").siblings().removeClass("now")
            $product_right.eq(indexNum).addClass("now animated "+a).siblings().removeClass("now animated "+a)
		}
		
		
	})();



//业务范围
    !(function(){
    	var $img1=$(".business_wrap .img1");
    	var $img2=$(".business_wrap .img2");
    	var $img=$img1.add($img2)
    	var $business_conten=$(".business_content")
    	var $bottom=$(".business_content>.bottom")
    	
    	
    	$img.hover(function(){
    		$(this).addClass("animated tada")
    	},function(){
    		$(this).removeClass("animated tada")
    	})
    	
    	
    	$img2.each(function(i){
    		$(this).click(function(){
    			fnq(i)
    		})
    	})
    	
    	$img1.each(function(i){
    		$(this).click(function(){
    			fnq(i)
    		})
    	})
    	
    	
        function fnq(i){
        	if($img2.eq(i).hasClass("now")){ //hasClass 是用来判断某个元素是否具有某个类名
        		$bottom.eq(i).slideUp();
        		$img2.eq(i).removeClass("now");
        	}else{
        		$bottom.slideUp().delay(300).eq(i).slideDown();
        		 //没有类名我们让所有的都先关闭,然后让当前的打开
        		$img2.removeClass("now").eq(i).addClass("now");
        		 //让所有的都删除类名,然后让当前的添加类名
        	}
        }
        /*fnq这个函数
         * 判断右边图标是否有now这个类名,有的话说明相对应的slide是打开的
         *               如果是打开的,我们应该让他关闭,并且当前图标还原回去
         *
         * 没有的话说明是关闭的
         *
         *               如果是关闭的,我们应该让他相对应的打开,并且切换图片(切换图片位置通过添加类名now来控制)
         * */
    	
    	
    })()
	
	
	
	//团队介绍
	!(function(){
		var $group_content_wrap = $(".group_wrap .group_content_wrap")
        var $_prev = $(".group_wrap .point ._left")
        var $_next = $(".group_wrap .point ._right ")
        var index = 0;
        var $points = $(".group_wrap .point ._center ul li")

        /*定时器返回id*/
        var timeOut = null;

        /*节流阀*/
        var ifRun = false;

        /*向左边滚动函数*/
        function toLeft() {

            if (ifRun) {
                return;  //判断当前是什么状态,如果还没有执行完上一个动画的时候,就return,不让后续代码执行
            }
            ifRun = true;//执行到这地方说明之前的代码执行完毕啦,我们再从新开启个动画
            clearInterval(timeOut); //清除掉自动轮播的定时器

            //让 $group_content 每执行一次就往左边走-1100px,当走完后瞬间把第一个group_content放到最后面去,然后把位置改成0的位置;
            //并且关闭当前的这个动画,也将就是还原ifRun;
            $group_content_wrap.animate({"left": "-1100px"}, 1000, "backIn", function () {
                $group_content_wrap.find(".group_content").eq(0).appendTo($group_content_wrap);
          
                
                $group_content_wrap.css("left", "0");
                ifRun = false;
                fnRun();

            })

            index++;
            if (index > 2) {
                index = 0
            }
            $points.removeClass("blue").eq(index).addClass("blue")
        }
        /*向右边移动函数*/
        function toRight() {
            if (ifRun) {
                return;
            }
            ifRun = true;
            clearInterval(timeOut);
            $group_content_wrap.find(".group_content").eq(2).prependTo($group_content_wrap);
            $group_content_wrap.css("left", "-1100px")
            $group_content_wrap.stop().animate({"left": "0px"}, 1000, "backIn", function () {
                ifRun = false;
                fnRun();
            })

            index--;
            if (index < 0) {
                index = 2
            }
            $points.removeClass("now").eq(index).addClass("now")

        }

        /*点击右边按钮是*/
        $_next.click(function () {
        	
            toLeft();
        });


        //点击左边按钮时候
        $_prev.click(function () {
        	
            toRight();
        })

        /*自动轮播执行函数*/
        function fnRun() {
            timeOut = setInterval(function () {
                toLeft();
            }, 2000)
        }

        fnRun();

        /*当鼠标移动到team的时候,静止自动轮播,移出后自动轮播*/
        $group_content_wrap.find(".group_content").hover(function () {
            clearInterval(timeOut);
        }, function () {
            fnRun()
        })
	})()
	
})
