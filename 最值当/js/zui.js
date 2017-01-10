// 图书轮播
$(".btn ul li").eq(0).css('backgroundColor','#333');
var n=0;
$(".btn ul li").click(function(){
	var index=$(this).index();
	 	n=index;
		lunbo();
})

function lunbo(){
	$(".btn ul li").eq(n).css('backgroundColor','#333');
	$(".btn ul li").eq(n).siblings().css('backgroundColor','#fff');
	$('.img img').eq(n).fadeIn(1000);
	$('.img img').eq(n).siblings().fadeOut(1000);
}

var timer = setInterval(function(){
	n++;
	lunbo();
	if(n>3){
		n=-1;
	}
},2000);

$(".lunbo").mouseover(function(){
	$(".jiao").css('display','block');
	clearInterval(timer);
})
$(".lunbo").mouseout(function(){
	$(".jiao").css('display','none');
	timer = setInterval(function(){
	n++;
	lunbo();
	if(n>3){
		n=-1;
	}
},2000);
})

$(".z-jiao").click(function(){
	n--;
	lunbo();
	if(n<0){
		n=4;
	}
})
$(".y-jiao").click(function(){
	n++;
	lunbo();
	if(n>3){
		n=-1;
	}
})


// tab切换
$('.tab li').eq(0).css({'border':'3px solid #000','border-bottom':'0','margin-top':'1px','backgroundColor':'#fff','font-weight':'bold'});
$('.tab li').mouseover(function(){
	a = $(this).index();
	tab();
})
function tab(){
	$('.tab li').eq(a).css({'border':'3px solid #000','border-bottom':'0','margin-top':'1px','backgroundColor':'#fff','font-weight':'bold'});
	$('.tab li').eq(a).siblings().css({'border': '1px solid #ccc','backgroundColor':'#F5F5F5','margin-top':'0'});
	$('.book-info').eq(a).show().siblings().hide();
}

