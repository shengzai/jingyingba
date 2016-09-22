$(function(){
	//***********hover效果
	var activeFlas = false;
	$(".land_register>div:nth-child(1) span").hover(function(){
		if($(this).attr("class") != "active"){
			$(this).addClass("active");
			activeFlas = true;
		}
	},function(){
		if(activeFlas){
			$(this).removeClass("active");
			activeFlas = false;
		}
	})
	//*********点击登陆
	$("#left_land").on("click",function(){
		$(".main_land").css("display","block").siblings(".main_register").css("display","none");
		$(this).addClass("active").siblings().removeClass("active");
		activeFlas = false;
	})
	//*********点击注册
	$("#left_register").on("click",function(){
		$(".main_register").css("display","block").siblings(".main_land").css("display","none");
		$(this).addClass("active").siblings().removeClass("active");
		activeFlas = false;
	})
	
	//var reg = /\b\d\b/
})
