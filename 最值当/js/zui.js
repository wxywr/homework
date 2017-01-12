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
	if(n>=3){
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
	if(n>=3){
		n=-1;
	}
},2000);
})

$(".z-jiao").click(function(){
	n--;
	lunbo();
	if(n<=0){
		n=4;
	}
})
$(".y-jiao").click(function(){
	n++;
	lunbo();
	if(n>=3){
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



// 服装tab切换
$('.dress-top li').eq(0).css({'border':'3px solid #000','border-bottom':'0','margin-top':'1px','backgroundColor':'#fff','font-weight':'bold'});
$('.dress-top li').mouseover(function(){
	c = $(this).index();
	$('.dress-top li').eq(c).css({'border':'3px solid #000','border-bottom':'0','margin-top':'1px','backgroundColor':'#fff','font-weight':'bold'});
	$('.dress-top li').eq(c).siblings().css({'border': '1px solid #ccc','backgroundColor':'#F5F5F5','margin-top':'0','font-weight':'normal'});		
	$('.change').eq(c).show().siblings().hide();
})


// 服装无缝轮播	
//自动轮播
function dress(){
	var a = $('.lunboimg img').eq(0);
	$('.lunboimg').animate({'left':'-383px'},1500,function(){
		$('.lunboimg img').eq(0).remove();
		$('.lunboimg').append(a);
		$('.lunboimg').css('left','0px');
	})
}
var y = 0;
var tm=setInterval(function(){
	dress();
	y++;
	left();
	if(y>=3){
		y=-1;
	}
},3000);

//鼠标经过显示箭头并清除定时器
$('.m-lunbo').mouseover(function(){
	// $('.zy').css('display','block');
	$('.zy').show();
	clearInterval(tm);
})
//鼠标离开隐藏箭头并调用定时器
$('.m-lunbo').mouseout(function(){
	// $('.zy').css('display','none');
	$('.zy').hide();
	tm=setInterval(function(){
	dress();
	y++;
	left();
	if(y>=3){
		y=-1;
	}
},3000);
})

$('.lunbo_btn li').eq(0).css({'backgroundColor':'#333'});
// var y = 0;
$('.lunbo_btn li').click(function(){
	var z = $(this).index();
	y=z;
	left();
})
function left(){
	$('.lunbo_btn li').eq(y).css({'backgroundColor':'#333'});
	$('.lunbo_btn li').eq(y).siblings().css({'backgroundColor':'#fff'});
}
// var r = setInterval(function(){
// 	y++;
// 	left();
// 	if(y>=3){
// 		y=-1;
// 	}
// },3000)


// 底部无缝轮播
function scroll(){
	var a = $('.zulunbo').eq(0);
	$('.zu-btm').animate({'left':'-1198px'},1500,function(){
		$('.zulunbo').eq(0).remove();
		$('.zu-btm').append(a);
		$('.zu-btm').css('left','1px');
	})
}
var time=setInterval(scroll,3000);//计时器

//鼠标经过显示箭头并清除定时器
$('.dress-bottom').mouseover(function(){
	$('.arrow').css('display','block');
	clearInterval(time);
})
//鼠标经过隐藏箭头并调用定时器
$('.dress-bottom').mouseout(function(){
	$('.arrow').css('display','none');
	time=setInterval(scroll,3000);
})
//点击左右箭头切换图片
$('.arrowLeft').click(function(){
	scroll();
})
$('.arrowRight').click(function(){
	var a = $('.zulunbo').eq(2);
	$('.zulunbo').eq(2).remove();
	$('.zu-btm').prepend(a);
	$('.zu-btm').css('left','-1198px');
	$('.zu-btm').stop().animate({'left':'0px'},1500);
})