$(function(){
	$("#head").load("header.html");
	
	!(function(){
		
		
		
		var i=0;

       function faIN() {
       	
           $(".banner_wrap_picture ul").eq(i).fadeIn().siblings().fadeOut();

          $(".point ._center ul li").eq(i).addClass("blue").siblings().removeClass("blue")
           
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
		
		
		
	})();
	
	
	
	
	
	
})
