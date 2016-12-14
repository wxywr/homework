var a = document.getElementsByClassName('more')[0];
var b = document.getElementsByClassName('net')[0];
var c = document.getElementsByClassName('corner')[0];

var d = document.getElementsByClassName('one')[0];

//更多
a.onclick=function(){
	if(b.style.display=="block"){
		b.style.display="none";
		c.style.borderTop='8px solid #333';
		c.style.borderBottom='none';
	}
	else{
		b.style.display="block";
		c.style.borderBottom='8px solid red';
		c.style.borderTop='none';
	}
}

//鼠标经过改变背景图片
d.onmouseover = function(){
	this.style.backgroundPosition='3px 27px';
}
d.onmouseout = function(){
	this.style.backgroundPosition='-26px -55px';
}

//验证邮箱，手机号，QQ号
