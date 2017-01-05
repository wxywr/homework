var mail1 = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var alert = document.getElementsByClassName('alert')[0];
console.log(alert);
var focus = document.getElementsByClassName('em')[0];
console.log(focus);
form.onsubmit = function(){
	var mail2 = form.email.value;
	var mail3 = mail1.test(mail2);
	console.log(mail3);
	if(mail2==""){
		alert.style.border="1px solid #333";
		alert.style.backgroundColor="#FDF4D5";
		alert.style.color="red";
		alert.style.width="230px";
		alert.innerHTML="电子邮件是必填项,请输入您的Email地址";
		return false;
	}
	if(!mail3){
		alert.style.width="200px";
		alert.style.color="red";
		alert.style.border="1px solid #333";
		alert.style.backgroundColor="#FDF4D5";
		alert.innerHTML="电子邮件格式不正确,请重新输入";
		return false;
	}
	if(mail3==true){
		alert.style.backgroundImage="images/register_write_ok.gif";
	}
}
focus.onfocus = function(){
	alert.style.width="300px";
	alert.style.border="none";
	alert.style.color="gray";
	alert.innerHTML="此邮箱将是您登录当当网的账号,并将用来接收验证邮件";
}