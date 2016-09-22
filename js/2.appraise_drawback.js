$(function(){
	var index = 0;
	
	
	$(".list li").on("click",function(){//选择类型
		index = $(this).index()
		$(this).addClass("active_list").siblings().removeClass("active_list");
		$("#cyan").stop().animate({
			left:index * $(".list li").eq(0).width(),
		})
		
		
		for(var i = 0,len = $(".status").length;i < len; i++){//tab切换
			if($(".status").eq(i).text() == "付款" && index == 1){
					$(".content_bottom li").eq(i).css("display","block").siblings().css("display","none");
			} 
			if($(".status").eq(i).text() == "退款" && index == 2){
					$(".content_bottom li").eq(i).css("display","block").siblings().css("display","none");
			}
			if($(".status").eq(i).text() == "评价" && index == 3){
					$(".content_bottom li").eq(i).css("display","block").siblings().css("display","none");
			}
			if($(".status").eq(i).text() == "已评价" && index == 4){
					$(".content_bottom li").eq(i).css("display","block").siblings().css("display","none");
			}
			if($(".status").eq(i).text() == "已退款" && index == 5){
					$(".content_bottom li").eq(i).css("display","block").siblings().css("display","none");
			}
		}
		if(index == 0){
			$(".content_bottom li").css("display","block");
		}
	})
	
	$(".pay_orange").on("click",function(){//展开
		$(this).parents(".show").siblings(".hide").slideToggle();
	})
	
	
	$("#cyan").on("click",function(e){
		e.stopPropagation();
	});
	$("#delete").on("click",function(e){
		e.stopPropagation();
		for(var i = 0,len = $(".show>input").length;i < len; i++){
			if($(".show>input").eq(i).prop("checked")){
				$(".show>input").eq(i).parents("li").slideUp();
			}
		}
	});
	
	
	//var listLen = 0;
	$(".show>input").on("click",function(){//选择
		for(var i = 0,len = $(".show>input").length;i < len; i++){
			if(!($(".show>input").eq(i).prop("checked"))){
				break;
			}
		}
		if(i == $(".show>input").length){
			$("#all").prop("checked",true);
		}else{
			$("#all").prop("checked",false);
		}
	})
	$("#all").on("click",function(){//全选
		if($(this).prop("checked")){
			for(var i = 0,len = $(".show>input").length;i < len; i++){
				$(".show>input").eq(i).prop("checked",true);
			}
		}else{
			for(var i = 0,len = $(".show>input").length;i < len; i++){
				$(".show>input").eq(i).prop("checked",false);
			}
		}
	})
})
