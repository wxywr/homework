var li = document.querySelectorAll(".new .title li");
var div = document.querySelectorAll(".new .list");
// console.log(li);
// console.log(div);
for(var i = 0;i<li.length;i++){
	li[i].index = i;
	// console.log(li[i].index);
	li[i].onmouseover = function(){
		for (var j = 0; j < div.length; j++){
			li[j].style.color = '#333';
			li[j].style.backgroundImage="url(images/dd_book_bg1.jpg)";

		}
		this.style.color="#B53939";
		this.style.backgroundImage="url(images/dd_book_bg2.jpg)";
		
		for (var k = 0; k < div.length; k++){
			div[k].style.display = 'none';
			// console.log(div[k]);
		}
		div[this.index].style.display = 'block';
	}	
}