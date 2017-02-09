// banner上下同时轮播
$('.banner-m ul li').eq(0).css('backgroundColor','red');
var n = 0;
$('.banner-m ul li').hover(function(){
	var a = $(this).index();
	n = a;
	banner();
	small();
});
function banner(){
	$('.banner-m ul li').eq(n).css('backgroundColor','red').siblings().css('backgroundColor','#646464');
	$('.banner-m .ban_top img').eq(n).fadeIn(1000).siblings().fadeOut(1000);
}
var m = 0;
function small(){
	$('.banner-m .ban_btm div').eq(m).fadeIn(1000).siblings().fadeOut(1000);
}
//设置计时器
var times = setInterval(function(){
	n++;
	banner();
	if (n>=6) {
		n=-1;
	};
	small();
	m++;
	if (m>=1) {
		m=-1;
	}
},3000)

$('.banner-m .ban_top').hover(
	function(){
		$('.banner-m .ban_jt .ban_zjt').animate({'width':'32px'},300);
		$('.banner-m .ban_jt .ban_yjt').animate({'width':'32px','left':'764px'},300);
		clearInterval(times);
	},
	function(){
		$('.banner-m .ban_jt .ban_zjt').animate({'width':'0px'},300);
		$('.banner-m .ban_jt .ban_yjt').animate({'left':'796px','width':'0'},300);
	    times = setInterval(function(){
			n++;
			banner();
			if (n>=6) {
				n=-1;
			};
			small();
			m++;
			if (m>=1) {
				m=-1;
			}
		},3000)
	}
)

// banner右边的tab切换
$('.banner-r .ad div').eq(1).css({'backgroundColor':'#F6F6F6','border':'1px solid #ccc'});
var q = 0;
$('.banner-r .ad div').mouseover(function(){
	var p = $(this).index();
	q=p;
	change();
})
function change(){
	$('.banner-r .ad div').eq(q).css({'backgroundColor':'#FFF','border':'0'}).siblings().css({'backgroundColor':'#f6f6f6','border':'1px solid #ccc'});
	$('.banner-r .zy ul').eq(q).show().siblings().hide();
}
var tim = setInterval(function(){
	change();
	q++;
	if (q>=1) {
		q=-1;
	}
},6000)

// 聚焦/失焦文本框
$('#input .shang input').focus(function(){
	 $(this).val("");
})
$('#input .shang input').blur(function(){
	 $(this).val("吉年吉货");
})

// 选择送达城市
$('.menu .city').hover(
	function(){
		$('.menu .song').css({'backgroundColor':'#F9F9F9','border':'0'});
	},
	function(){
		$('.menu .song').css({'backgroundColor':'#FFF'});
	}
)