//绑定加减事件
bindFun();
total();
function bindFun(){
	var p = document.getElementsByClassName('p');
	var s = document.getElementsByClassName('s');
	var del = document.getElementsByClassName('del');
	var listContent = document.getElementsByClassName('list-content')[0];
	var add = document.getElementsByClassName('addRow')[0];
	add.onclick = addRow;
	for(var i = 0;i<p.length;i++){
		p[i].index = i;
		s[i].index = i;
		p[i].onclick = function(){
			
			var num = Number(this.previousElementSibling.value)+1;
			this.previousElementSibling.value = num;
			subtotal(this.index);
		}
		s[i].onclick = function(){
			
			var num = Number(this.nextElementSibling.value)-1;
			if(num<=0){
				return;
			}
			this.nextElementSibling.value = num;
			subtotal(this.index);
		}
		del[i].onclick = function(){
			var removeObj = this.parentNode.parentNode;
			listContent.removeChild(removeObj);
			total();
		}

	}
}

//小计函数
function subtotal(index){
	var row = document.getElementsByClassName('sp-list');
	var dj = Number(row[index].getElementsByClassName('dj')[0].innerText);
	var sl = Number(row[index].getElementsByTagName('input')[0].value);
	var num = dj*sl;
	row[index].getElementsByClassName('xj')[0].innerText = num.toFixed(1);
	total();
}

//合计函数
function total(){
	var xj = document.getElementsByClassName('list-content')[0].getElementsByClassName('xj');
	var hj = document.getElementsByClassName('hj')[0];
	var num = 0;
	for(var i =0;i<xj.length;i++){
		num += Number(xj[i].innerText);
	}
	hj.getElementsByTagName('strong')[0].innerText = num.toFixed(1);

}

//添加一行函数
function addRow(){
	var ul = document.createElement('ul');
	// var img = document.createElement('img');
	// img.setAttribute('src','img/5.jpg');
	// var span = document.createElement('span');
	// var div = document.createElement('div');
	// var input = document.createElement('input');
	// input.type = 'text';
	// input.setAttribute('value','1');
	// input.setAttribute('readonly','readonly');
	// div.appendChild(document.createElement('span'));
	// div.appendChild(input);
	// div.appendChild(document.createElement('span'));
	// div.lastChild.className = 'p';
	// div.lastChild.innerText = '+';
	// div.firstChild.className = 's';
	// div.firstChild.innerText = '-';
	ul.className = 'sp-list'; 
	// var li = [];
	// var cn = ['sp','dj','sl','xj','cz']
	// for(var i =0;i<5;i++){
	// 	li[i] = document.createElement('li');
	// 	li[i].className = cn[i];
	// 	ul.appendChild(li[i]);
	// }
	
	// li[0].appendChild(img);
	// li[0].appendChild(span);
	// li[0].lastChild.innerText = 'Casio/卡西欧 EX-TR350';
	// li[1].innerText = '1000';
	// li[2].appendChild(div);
	// li[3].className = 'xj redColor fontBold';
	// li[3].innerText = '1000';
	// li[4].appendChild(document.createElement('span'));
	// li[4].firstChild.className = 'del';
	// li[4].firstChild.innerText = '删除';
	ul.innerHTML = '<li class="sp"><img src="img/5.jpg"><span>Casio/卡西欧 EX-TR350</span></li><li class="dj">2000</li><li class="sl"><div><span class="s">-</span><input type="text" value="1" readonly="readonly"><span class="p">+</span></div></li><li class="xj redColor fontBold">2000</li><li class="cz"><span class="del">删除</span></li>'
	console.log(ul);
	document.getElementsByClassName('list-content')[0].appendChild(ul);
	total();
	bindFun();

}

