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


// 左边tab切换
$('.tab li').eq(0).css({'border':'3px solid #000','border-bottom':'0','margin-top':'1px','backgroundColor':'#fff','font-weight':'bold'});
$('.tab li').mouseover(function(){
	a = $(this).index();
	tab();
})
function tab(){
	$('.tab li').eq(a).css({'border':'3px solid #000','border-bottom':'0','margin-top':'1px','backgroundColor':'#fff','font-weight':'bold'});
	$('.tab li').eq(a).siblings().css({'border': '1px solid #ccc','backgroundColor':'#F5F5F5','margin-top':'0','font-weight':'normal'});
	$('.book-info').eq(a).show().siblings().hide();
}


// 右边tab切换
$('.tit').eq(1).css({'backgroundColor':'#F5F5F5','border':'1px solid #ccc'});
$('.tit').mouseover(function(){
	b = $(this).index();
	tit();
})
function tit(){
	$('.tit').eq(b).css({'backgroundColor':'#F5F5F5','border':'1px solid #ccc'});
	$('.tit').eq(b).siblings().css({'backgroundColor':'#FFF','border':'0'});
	$('.book-r .r-list').eq(b).show().siblings().hide();
}

// 服装
$('.dress-top li').eq(0).css({'border':'3px solid #000','border-bottom':'0','margin-top':'1px','backgroundColor':'#fff','font-weight':'bold'});
$('.dress-top li').mouseover(function(){
	c = $(this).index();
	$('.dress-top li').eq(c).css({'border':'3px solid #000','border-bottom':'0','margin-top':'1px','backgroundColor':'#fff','font-weight':'bold'});
	$('.dress-top li').eq(c).siblings().css({'border': '1px solid #ccc','backgroundColor':'#F5F5F5','margin-top':'0','font-weight':'normal'});		
	$('.change').eq(c).show().siblings().hide();
})



// 无缝轮播
setInterval(scroll,3000);
function scroll(){
	var m = $('.m-lunbo ul li').eq(3);
	$('.m-lunbo ul li').eq(3).remove();
	$('.m-lunbo ul').prepend(m);
	$('.m-lunbo ul').css('left','-383px');
	$('.m-lunbo ul').animate({'left':'0px'},2000);
}