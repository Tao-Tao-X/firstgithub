//轮播图
						//封装缓动动画
						function animation(abj,juli,fun){
							clearInterval(abj.dsq);
							 	abj.dsq=setInterval(function(){
								abj.step=(juli-abj.offsetLeft)/10;
								abj.step>0?Math.ceil(abj.step):Math.floor(abj.step);
								abj.style.left=abj.offsetLeft+abj.step+'px';
								if(abj.offsetLeft==juli){
									clearInterval(abj.dsq);
								}
							},15);
							if(fun){
								fun;
							}
						}
						var dt=document.querySelector('#datu');
						var xiao=document.querySelector('#xiao');
						var dd=xiao.querySelectorAll('dd');
						var num=0;
						var cro=0;
						//点击小图片时使他的边框变成红色
						for(i=0;i<dd.length;i++){
							dd[i].onclick=function(){
								for(i=0;i<dd.length;i++) {
									dd[i].style.borderColor='';
								}
								this.style.borderColor='red';
								//获取自定义属性的值
								var index=this.getAttribute('index');
								num=index;
								cro=index;
//								console.log(index);
							//让整个大图片根据点击的小图片移动
							var jl2=-600*index;
							animation(dt,jl2);
							}
						}
						var left=document.querySelector('#lr1');
						var right=document.querySelector('#lr2');
//						console.log(right);
						//点击左右侧按钮时移动到指定位置并让小图片的边框颜色随大图移动的地方而变化
						right.onclick=function(){
							
							num++;
							animation(dt,-600*num);
							cro++;
							for(i=0;i<dd.length;i++) {
									dd[i].style.borderColor='';
								}
							if(num==5){
								num=0;
							}
							if(cro==5){
								cro=0;
							}
							dd[cro].style.borderColor='red';
						}
						left.onclick=function(){
							
							num--;
							animation(dt,-600*num);
							cro--;
							for(i=0;i<dd.length;i++) {
									dd[i].style.borderColor='';
								}
							if(num==0){
								num=5;
							}
							if(cro==0){
								cro=5;
							}
							dd[cro].style.borderColor='red';
						}
						var wc=setInterval(function(){
							right.click();
						},2000)
						//鼠标悬停时停止移动，离开时移动
						dt.addEventListener('mouseenter',function(){
							clearInterval(wc);
						})
						dt.addEventListener('mouseleave',function(){
							wc=setInterval(function(){
							right.click();
						},2000);
						})