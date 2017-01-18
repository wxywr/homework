tao();
function tao(){
var $li=$('.center .top li')
	$li.eq(0).css('background','red')
	$li.mouseover(function () {	
		var index=$(this).index();
			n=index;
			lunbo();
	});

	function lunbo(){
		$li.eq(n).css('background','red').siblings().css('background','#605C61');
		$('.lb img').eq(n).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
		$('.di').eq(n).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
	}
	var n=0;
var timer=setInterval(dingshi,2000)
function dingshi(){
		n++;
		lunbo();
		if(n>=8){
			n=-1;
		}
}
	$('.top').mouseover(function(){
		$('.top .jiantou').css('display','block');
		clearInterval(timer)
	})
	$('.top').mouseout(function(){
		$('.top .jiantou').css('display','none');
		timer=setInterval(dingshi,2000)
	})
	$('.jiantou .you').click(function(){
		n++;
		if(n>=7){
			n=-1;
		}
		lunbo();
	})
	$('.jiantou .zuo').click(function(){
		n--;
		if(n<0){
			n=7;
		}
		lunbo();
	});
}
wang();
function wang(){	
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

$(".btn ul li").eq(4).css('backgroundColor','#333');
var q=4;
function lunb(){
	$(".btn ul li").eq(q).css('backgroundColor','#333');
	$(".btn ul li").eq(q).siblings().css('backgroundColor','#fff');
	$('.img img').eq(q).fadeIn(1000);
	$('.img img').eq(q).siblings().fadeOut(1000);
}

$(".btn ul li").eq(8).css('backgroundColor','#333');
var p=8;
function lb(){
	$(".btn ul li").eq(p).css('backgroundColor','#333');
	$(".btn ul li").eq(p).siblings().css('backgroundColor','#fff');
	$('.img img').eq(p).fadeIn(1000);
	$('.img img').eq(p).siblings().fadeOut(1000);
}
var timer = setInterval(function(){
	n++;
	lunbo();
	if(n>=3){
		n=-1;
	}
	q++;
	lunb();
	if(q>=7){
		q=3;
	}
	p++;
	lb();
	if(p>=11){
		p=7;
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
	};
	q++;
	lunb();
	if(q>=7){
		q=3;
	};
	p++;
	lb();
	if(p>=11){
		p=7;
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
function dr(){
	var t = $('.lunbo_img img').eq(0);
	$('.lunbo_img').animate({'left':'-383px'},1500,function(){
		$('.lunbo_img img').eq(0).remove();
		$('.lunbo_img').append(t);
		$('.lunbo_img').css('left','0px');
	})
}
function drr(){
	var e = $('.lunbo_im img').eq(0);
	$('.lunbo_im').animate({'left':'-383px'},1500,function(){
		$('.lunbo_im img').eq(0).remove();
		$('.lunbo_im').append(e);
		$('.lunbo_im').css('left','0px');
	})
}
function drrr(){
	var h = $('.lunbo_i img').eq(0);
	$('.lunbo_i').animate({'left':'-383px'},1500,function(){
		$('.lunbo_i img').eq(0).remove();
		$('.lunbo_i').append(h);
		$('.lunbo_i').css('left','0px');
	})
}

var y = 0;
var yy = 4;
var yyy = 8;
var yyyy = 12;

var tm=setInterval(function(){
	dress();
	y++;
	left();
	if(y>=3){
		y=-1;
	};
	dr();
	yy++;
	lef();
	if(yy>=7){
		yy=3;
	};
	drr();
	yyy++;
	le();
	if(yyy>=11){
		yyy=7;
	};
	drrr();
	yyyy++;
	lee();
	if(yyyy>=15){
		yyyy=11;
	};
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
	};
	dr();
	yy++;
	lef();
	if(yy>=7){
		yy=3;
	};
	drr();
	yyy++;
	le();
	if(yyy>=11){
		yyy=7;
	};
	drrr();
	yyyy++;
	lee();
	if(yyyy>=15){
		yyyy=11;
	};
},3000);
})

$('.lunbo_btn li').click(function(){
	var z = $(this).index();
	y=z;
	left();
})

$('.lunbo_btn li').eq(0).css({'backgroundColor':'#333'});
function left(){
	$('.lunbo_btn li').eq(y).css({'backgroundColor':'#333'});
	$('.lunbo_btn li').eq(y).siblings().css({'backgroundColor':'#fff'});
}
$('.lunbo_btn li').eq(4).css({'backgroundColor':'#333'});
function lef(){
	$('.lunbo_btn li').eq(yy).css({'backgroundColor':'#333'});
	$('.lunbo_btn li').eq(yy).siblings().css({'backgroundColor':'#fff'});
}
$('.lunbo_btn li').eq(8).css({'backgroundColor':'#333'});
function le(){
	$('.lunbo_btn li').eq(yyy).css({'backgroundColor':'#333'});
	$('.lunbo_btn li').eq(yyy).siblings().css({'backgroundColor':'#fff'});
}
$('.lunbo_btn li').eq(12).css({'backgroundColor':'#333'});
function lee(){
	$('.lunbo_btn li').eq(yyyy).css({'backgroundColor':'#333'});
	$('.lunbo_btn li').eq(yyyy).siblings().css({'backgroundColor':'#fff'});
}
//点击左箭头图片向左切换
$('.zy .zuo').click(function(){
	dress();
	y--;
	left();
	if(y<=0){
		y=4;
	}
})
//点击右箭头图片向右切换
$('.zy .you').click(function(){
	var a = $('.lunboimg img').eq(3);
	$('.lunboimg img').eq(3).remove();
	$('.lunboimg').prepend(a);
	$('.lunboimg').css('left','-383px');
	$('.lunboimg').stop().animate({'left':'0px'},1500);
	y++;
	left();
	if(y>=3){
		y=-1;
	}
})



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

//右下角回到顶部
$('.return-top .er').mouseover(function(){
	$('.return-top .ewm').css('display','block');
})
$('.return-top .er').mouseout(function(){
	$('.return-top .ewm').css('display','none');
})
$('.return-top .re').hover(
	function(){
		$('.return-top .return').animate({'left':'-80px'},500);
		$('.return-top .corner').animate({'left':'-1px'},500);
	},
	function(){
		$('.return-top .return').animate({'left':'80px'},100);
	 	$('.return-top .corner').animate({'left':'32px'},100);
	}
);
}	
gong();
function gong(){
	// 运动器械轮播1
$('#gong .b li').eq(0).css('backgroundColor','#666');
var n=0;
function b1() {
	n++;
	$('#gong .b li').eq(n).css('backgroundColor','#666').siblings().css('backgroundColor','#fff');
	
	var a=$('.b .imgchang img').eq(0);
			
		$('.b .imgchang').animate({'left':'-393px'},1000,function(){
			$('.b .imgchang img').eq(0).remove();
			$('.b .imgchang').append(a);
			$('.b .imgchang').css('left','0px');
		})
	if (n>=1) {
		n=-1;
	}
}
setInterval(b1,2000);
// 运动器械轮播2
$('#gong .c li').eq(0).css('backgroundColor','#666');
var z=0;
function b2() {
	z++;
	$('#gong .c li').eq(z).css('backgroundColor','#666').siblings().css('backgroundColor','#fff');
	
	var a=$('.c .imgchang img').eq(0);
			
		$('.c .imgchang').animate({'left':'-393px'},1000,function(){
			$('.c .imgchang img').eq(0).remove();
			$('.c .imgchang').append(a);
			$('.c .imgchang').css('left','0px');
		})
	if (z>=3) {
		z=-1;
	}
}
setInterval(b2,2000);
// 运动器械轮播3
$('#gong .d li').eq(0).css('backgroundColor','#666');
var q=0;
function b3() {
	q++;
	$('#gong .d li').eq(q).css('backgroundColor','#666').siblings().css('backgroundColor','#fff');
	
	var a=$('.d .imgchang img').eq(0);
			
		$('.d .imgchang').animate({'left':'-393px'},1000,function(){
			$('.d .imgchang img').eq(0).remove();
			$('.d .imgchang').append(a);
			$('.d .imgchang').css('left','0px');
		})
	if (q>=3) {
		q=-1;
	}
}
setInterval(b3,2000);
// 运动器械轮播4
$('#gong .e li').eq(0).css('backgroundColor','#666');
var w=0;
function b4() {
	w++;
	$('#gong .e li').eq(w).css('backgroundColor','#666').siblings().css('backgroundColor','#fff');
	
	var a=$('.e .imgchang img').eq(0);
			
		$('.e .imgchang').animate({'left':'-393px'},1000,function(){
			$('.e .imgchang img').eq(0).remove();
			$('.e .imgchang').append(a);
			$('.e .imgchang').css('left','0px');
		})
	if (w>=3) {
		w=-1;
	}
}
setInterval(b4,2000);
// 无缝滚动
function lunbo(){
	var a=$('#gong #tz3 .ydqx_cen_bot li').eq(0);
		$('#gong #tz3 .ydqx_cen_bot ul').animate({'left':'-1198px'},1500,function(){
			$('#gong #tz3 .ydqx_cen_bot li').eq(0).remove();
			$('#gong #tz3 .ydqx_cen_bot ul').append(a);
			$('#gong #tz3 .ydqx_cen_bot ul').css('left','0px');
		});
	}
var time2=setInterval(lunbo,2000);
// 悬停暂停计时器
$('#gong .ydqx_cen_bot').mouseover(function(){
	$('#jiantou').css('display','block');
	clearInterval(time2)
})
$('#gong .ydqx_cen_bot').mouseout(function(){
	$('#jiantou').css('display','none');
	time2=setInterval(lunbo,3000)
})
// 轮播前进后退
$('#gong #jiantou .zuo').click(function(){
	var a=$('#gong #tz3 .ydqx_cen_bot li').eq(0);
	$('#gong #tz3 .ydqx_cen_bot ul').css('left','-1198px');
	$('#gong #tz3 .ydqx_cen_bot li').eq(0).remove();
	$('#gong #tz3 .ydqx_cen_bot ul').append(a);
	$('#gong #tz3 .ydqx_cen_bot ul').css('left','0px');
})
$('#gong #jiantou .you').click(function(){
	var a=$('#gong #tz3 .ydqx_cen_bot li').eq(2);
	$('#gong #tz3 .ydqx_cen_bot ul').css('left','1198px');
	$('#gong #tz3 .ydqx_cen_bot li').eq(2).remove();
	// 在ul的开头插入
	$('#gong #tz3 .ydqx_cen_bot ul').prepend(a);
	$('#gong #tz3 .ydqx_cen_bot ul').css('left','0px');
})
// tz4育婴童
var e=0;
	var r=0;
	$('#gong #tz4 .cen1_left li').eq(e).css('background','red').siblings().css('background','#666');
	var one=$('#gong #tz4 .imgchang img').eq(0).clone();//克隆第一张图片
	$('#gong #tz4 .imgchang').append(one);//把第一张图片加到最后面
	$('#gong #tz4 .imgchang').width($('#gong #tz4 .imgchang img').width()*$('#gong #tz4 .imgchang img').length);//改变imaAll的宽度=img*img的个数
	$('#gong #tz4 .you').click(function(){//右边箭头的触发点击事件
		e++;//影响无缝滚动的参数
		
		if(e==$('#gong #tz4 .imgchang img').length){ //当在最后一组图上点击时，偏移量归零，也就是7
			e=1;//跳过伪装的前1个
			$('#gong #tz4 .imgchang').css({left:0});//当最后一张出现的时候，让它的left值迅速变为0
		}
		//点击时，整个ul的偏移量向左移动i个图片的宽度
		$('#gong #tz4 .imgchang').stop().animate({left:-e*314},1000)//图片left 值改变事件
		
		if(r>=2){
			r=-1;
		}
		r++;//影响数字按钮的参数
		$('#gong #tz4 .cen1_left li').eq(r).css('background','red').siblings().css('background','#666');
	});
$('#gong #tz4 .zuo').click(function(){//左箭头
	e--;
	
	if(e==-1){
		e=$('#gong #tz4 .imgchang img').length-2;//跳过伪装的最后一个1个
		$('#gong #tz4 .imgchang').css({left:-($('#gong #tz4 .imgchang img').length-1)*314});
	}
	$('#gong #tz4 .imgchang').stop().animate({left:-e*314},1000);
	
	
		if(r<=0){
			r=3;
			}
	r--;
	$('#gong #tz4 .cen1_left li').eq(r).css('background','red').siblings().css('background','#666');	
})
//数字按钮的触发事件
	$('#gong #tz4 .cen1_left li').click(function(){
		var index=$(this).index();
		$(this).css('background','red').siblings().css('background','#666');
		$('#gong #tz4 .imgchang').stop().animate({'left':-index*314+'px'},1000);
		e=index;
		r=index;
	})
//自动轮播事件
function tz4(){
	e++;
	if(e==$('#gong #tz4 .imgchang img').length){ //当在最后一组图上点击时，偏移量归零
			e=1;//跳过伪装的前1个
			$('#gong #tz4 .imgchang').css({left:0});
		}
		//点击时，整个ul的偏移量向左移动i个图片的宽度
		$('#gong #tz4 .imgchang').stop().animate({left:-e*314},1000);
		if(r>=2){
			r=-1;
		}
		r++;
		$('#gong #tz4 .cen1_left li').eq(r).css('background','red').siblings().css('background','#666');
}

var timer=setInterval(tz4,2000);

$('#gong #tz4 .cen1_left').hover(function(){
	$('#gong #tz4 .cen1_left .an').css('display','block');
	clearInterval(timer)
},function(){
	timer=setInterval(tz4,2000);

})
}


