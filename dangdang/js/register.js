//验证邮箱
var focus = document.getElementsByClassName('em')[0];
var p = document.getElementsByClassName('warning1')[0];
focus.onfocus=function(){
	p.innerHTML="此邮箱将是您登录当当网的账号,并将用来接收验证邮件";
	p.className="onfocus";
	p.style.background="";
}
focus.onblur=function(){
	var mail1 = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(focus.value==""){
		p.innerHTML="电子邮件是必填项,请输入您的Email地址";
		p.className="error";
		focus.style.background="#FEF4D0";
		return false;
	}else if(!mail1.test(focus.value)){
		p.innerHTML="电子邮件格式不正确,请重新输入";
		p.className="error";
		focus.style.background="#FEF4D0";
		return false;
	}else{
		p.innerHTML="";
		p.className="right";
		focus.style.background="";
		return true;
	}
}

//验证用户名
var p1 = document.getElementsByClassName('warning2')[0];
var nick = document.getElementsByClassName('nick')[0];
nick.onfocus=function(){
	p1.innerHTML="此昵称将是您登录当当网的昵称";
	p1.className="onfocus";
	p1.style.background="";
}
nick.onblur=function(){
	var name=/^[\u4e00-\u9fa5]{2,4}$/; 
	if(nick.value==""){
		p1.innerHTML="昵称是必填项,请输入您的昵称";
		p1.className="error";
		nick.style.background="#FEF4D0";
		return false;
	}else if(!name.test(nick.value)){
		p1.innerHTML="请正确填写昵称,昵称为2~4个汉字";
		p1.className="error";
		nick.style.background="#FEF4D0";
		return false;
	}else{
		p1.innerHTML="";
		p1.className="right";
		nick.style.background="";
		return true;
	}
}

//验证密码
var p2 = document.getElementsByClassName('warning3')[0];
var password = document.getElementsByClassName('pw')[0];
password.onfocus = function(){
	p2.innerHTML="密码为6~18个字符,字母开头，包含字母数字下划线";
	p2.className="onfocus";
	p2.style.background="";
}
password.onblur=function(){
	var mima=/^[a-zA-Z]\w{5,17}$/; 
	if(password.value==""){
		p2.innerHTML="密码是必填项,请输入您的密码";
		p2.className="error";
		password.style.background="#FEF4D0";
		return false;
	}else if(!mima.test(password.value)){
		p2.innerHTML="密码格式不正确,请重新输入";
		p2.className="error";
		password.style.background="#FEF4D0";
		return false;
	}else{
		p2.innerHTML="";
		p2.className="right";
		password.style.background="";
		return true;
	}
}

//验证再次输入密码是否一致
var p3 = document.getElementsByClassName('warning4')[0];
var same = document.getElementsByClassName('pws')[0];
same.onfocus = function(){
	p3.innerHTML="请再次输入密码";
	p3.className="onfocus";
	p3.style.background="";
}
same.onblur = function(){
	if(same.value==""){
		p3.innerHTML="再次输入密码是必填项,请输入密码";
		p3.className="error";
		same.style.background="#FEF4D0";
		return false;
	 }else if(same.value!=password.value) {
		p3.innerHTML="两次密码不一致,请重新输入";
		p3.className="error";
		same.style.background="#FEF4D0";
		return false;
	}else{
		p3.innerHTML="";
		p3.className="right";
		same.style.background="";
		return true;
	}
}

// form.onsubmit = function(){
// 	if ( && && &&) {
// 		return true;
// 	}
// }