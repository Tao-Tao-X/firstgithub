
window.addEventListener('load',fn1)
function fn1(){
	//日期
	var Dates=new Date()
	var mon=Dates.getMonth()+1;
	var dt=Dates.getDate();
	var da=Dates.getDay();
	var y=Dates.getFullYear();
	var sh=Dates.getHours();
	var sm=Dates.getMinutes();
	var day=['星期天','星期一','星期二','星期三','星期四','星期五','星期六'];
	var ae=document.querySelector('aside');
	var h2=ae.querySelector('h2');
	var pp=ae.querySelector('p');
	var h3=ae.querySelector('h3')
	pp.innerHTML='今天'+y+'年'+mon+'月'+dt+'日'+day[da];
 	h2.innerHTML=sh+':'+sm;
 	//问好
 	if(sh<12){
 		 h3.innerHTML='上午好~';
 		 ae.style.background="url(images/2XaPcg.jpg)";
 	}else if(sh<20){
 		h3.innerHTML='下午好~';
 		 ae.style.background="url(images/2hw3qF.jpg)";
 		 ae.style.backgroundSize="100% 100%"
 	}else{
 		h3.innerHTML='晚上好~';
 		 ae.style.background="url(images/8wajYI.jpg)";
 		 ae.style.backgroundSize="200%"
 	}
	//点击nav
		var ul=document.querySelector('ul');
		var lis=ul.querySelectorAll('li');
		for(i=0;i<lis.length;i++){
			lis[i].onclick=function(){
			for(i=0;i<lis.length;i++) {
				lis[i].style.backgroundColor=''
			}
			this.style.backgroundColor='lavender'
			}
		}
		fn2();
		setInterval(fn2,1000);
}
//倒计时
function fn2(){
		var ae=document.querySelector('aside');
		var h4=ae.querySelector('h4');
		var newTime=Date.now();
		var willTime=+new Date("2021-2-12 00:00:00");
		var chaTime=willTime-newTime;
		var d=Math.floor(chaTime/1000/60/60/24);
		d=d<10?'0'+d:d;
		var h=Math.floor(chaTime/1000/60/60%24);
		h=h<10?'0'+h:h;
		var m=Math.floor(chaTime/1000/60%60);
		m=m<10?'0'+m:m;
		var s=Math.floor(chaTime/1000%60);
		s=s<10?'0'+s:s;
		return  h4.innerHTML='距离秒杀还有'+'<br />'+'<mark>'+d+'</mark>'+'天'+'<mark>'+h+'</mark>'+'时'
		+'<mark>'+m+'</mark>'+'分'+'<mark>'+s+'</mark>'+'秒';
//console.log(mon)
}

//商品经过
//function fn3(){
//	var sp=document.getElementById('sp').querySelectorAll('li');	
//		for(i=0;i<sp.length;i++){
//			sp[i].addEventListener('mouseover',function(){
//				this.style.backgroundColor='rgb(97,225,234)';
//			 })
//			sp[i].addEventListener('mouseout',function(){
//			  this.style.backgroundColor='';
//			})
//		}
//}

