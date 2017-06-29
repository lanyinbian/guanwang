/*
 *文章列表页 
 * */
var GLOBAL=GLOBAL||{};


$(function() {

	$("#head").load("header.html");
	$("#footer").load("footer.html");

	!(function(){
		
		
		
		var $h3 = $(".list_wrap .content_list>h2")
		var $pen = $(".list_wrap .content_list>h2 span")

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
	
	
	/*获取当前文章类型*/
	function geturl(){
		var type=window.location.search.split("=");
		console.log(type)
		if(type){
			return type[1]
		}else{
			return "";
		}
		
	}
	
	/*点击加载更多*/
	
	$(".more").click(function(){
		getListData()
	})
	
	getListData()
	
	/*委托事件，一般委托给它的父元素*/
	$("#content").on("click",".list_one",function(){
		
		window.open("article.html?type="+geturl()+"&ArticleID="+$(this).attr("ArticleID"))
		
	})
	
	/*加载数据*/
	function getListData(){
		if(GLOBAL.pageStart==null){
			//GLOBAL.pageStart表示当前页面上渲染的是第几页的数据
			GLOBAL.pageStart=0;
			$("#content").html("");
		}
		var listdate=listData["listData0"+GLOBAL.pageStart].data
//		console.log(listData)
		var lists=listdate.list;
		if(lists.length==0){
			$("#content").html("<h1 style='text-align: center'>暂无数据,持续更新中</h1>");
		}else{
			var itemHtml=$("#itemHtml").html();
			var lisnum=lists.length
			for(var i=0;i<lisnum;i++){
				var list=lists[i]
				var itemHTML =itemHtml.replace("img/list_gomore_bg.jpg",list.coverImg)
                    .replace("$title$",list.title)
                    .replace("$creatAt$",list.creatAt)
                    .replace("$describe$",list.describe)
                    .replace("$sysID$",list.sysId)
                    
                    
                    $("#content").append(itemHTML);
			}
			
			GLOBAL.pageStart=GLOBAL.pageStart+1;
			GLOBAL.pagecount=Math.ceil(listdate.count/listdate.pageSize);
			if(GLOBAL.pageStart>GLOBAL.pagecount-1){
				/*get()  把jq元素转换成js原生元素
                 * 把原生的元素转换成jq元素就直接把这个元素放到$()就可以啦
                 
                 * eq: 筛选元素
                 *$("div")获取到的是所有的div
                 * $("div").eq(3)  代表所有div里面的第四个
                 * $([1]).get(0)     //1
                 *$([1]).get()    // [1]
                 */
				
				
//				$(".more").css("display","none")
//				          .Siblings().get(0)
//				          .src="./img/list_gomore_bg_nomore.jpg"
                 $(".more").css("display","none")
                           .siblings()
                           .attr("src","./img/list_gomore_bg_nomore.jpg");
			}
			
			
		}
		
		
	}
	
	
	
	

})