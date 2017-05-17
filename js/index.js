var timer;
var onnum;
$(function(){
	//数字点变动
	onnum = setInterval(testnum,3000);
	function testnum(){
		var numlen = $("#asi").children().length;
		for(let i=0;i<numlen;i++){
			if($("#asi").children().eq(i).hasClass("dian")){
				if(i==numlen-1){
					i=-1;
				}  $("#asi").children().eq(i+1).addClass("dian").siblings().removeClass("dian");
				return;
			}
		}
	}
	//图片变化
	timer = setInterval(testimg,3000);
	function testimg(){
		$(".img").children().eq(0).css("margin-left","-100%");
		setTimeout(roadimg,1000);


	}
	//销毁生成图片
	function roadimg(){	$(".img").children("div:first").insertAfter($(".img").children("div:last"));
					   $(".img").children().css("margin-left","0px");
					  }0
	//点击下标
	$("#asi").children().click(function(){
		clearInterval(timer);
		clearInterval(onnum);
		var str1=$(".dian").text();
		$(this).addClass("dian").siblings().removeClass("dian");
		var str2 =$(".dian").text();
		if(str2>str1){
			p=str2-str1;
			for(var l=0;l<p;l++){
				roadimg();
			}
		}
		else{
			p=4-Number(str1-str2);
			for(var l=0;l<p;l++){
				roadimg();
			}
		}
		timer = setInterval(testimg,3000);
		onnum = setInterval(testnum,3000);
	})
	//鼠标悬浮事件
	$(".img").mouseenter(function(){
		clearInterval(timer);
		clearInterval(onnum);
	})
	$(".img").mouseleave(function(){
						 timer = setInterval(testimg,3000);
	onnum = setInterval(testnum,3000);
})
  })



