//轮播图
window.onload = function () {
			var oLi1 = document.querySelectorAll(".imgs li")
			var oLi2 = document.querySelectorAll(".nums li")
			var index = 0;
			var timer;
			function autoPlay (num) {
				index = num;
				for (var i = 0; i < oLi1.length; i++) {
					oLi1[i].className = ""
					oLi2[i].className =""
				}
				oLi1[index].className = "current"
				oLi2[index].className ="active"
			}
			function play () {
			    timer = setInterval(function  () {
				index++
				if (index == oLi1.length) {
					index = 0
				}
				autoPlay(index)
			},2000)
		}
			play()
			for (var j = 0; j < oLi2.length; j++) {
				oLi2[j].index = j
				oLi2[j].onmouseover = function () {
					clearInterval(timer)
					autoPlay(this.index)
				}
				oLi2[j].onmouseout =function  () {
					play()
				}
			}
		}
//滚动图
var oUl = document.getElementById("run")
var t, o;
var speed = 0;
var funny = function() {
	t && clearInterval(t);
	t = setInterval(function() {
		speed -= 200 / 11;
		if(speed < -200) {
			speed = 0;
			oUl.appendChild(oUl.children[0]);
			t && clearInterval(t);
			t = null;
			o && clearTimeout(o);
			o = setTimeout(funny, 500);
		}
		oUl.style.left = speed + "px";
	}, 60);
}
funny();