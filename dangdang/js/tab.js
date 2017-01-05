var li = document.querySelectorAll(".new .title li");
var div = document.querySelectorAll(".new .list");
console.log(li);
console.log(div);
li[0].style.backgroundImage="url(images/dd_book_bg2.jpg)";
li[0].style.color="#A52D00";
for(var i = 0;i<li.length;i++){
	li[i].index = i;
	li[i].onclick = function(){
		for (var j = 0; j < div.length; j++){
			div[j].style.display = 'none';
			li[j].className='';
		}
		this.className = 'active';
		div[this.index].style.display = 'block';
	}
}