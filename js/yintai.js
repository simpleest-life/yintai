$(function(){
//微信
	var topleft2=$(".topleft2")[0];
	var erwei=$(".erwei")[0];
    	topleft2.onmouseover=function(){
    		erwei.style.display="block";
        }
        erwei.onmouseover=function(){
        	erwei.style.display="block";
        }
        erwei.onmouseout=function(){
        	erwei.style.display="none";
        }
    	topleft2.onmouseout=function(){
    		erwei.style.display="none";
    	}
//手机银泰
    var topleft3=$(".topleft3")[0];
	var erwei2=$(".erwei2")[0];
    	topleft3.onmouseover=function(){
    		erwei2.style.display="block";
        }
        erwei2.onmouseover=function(){
        	erwei2.style.display="block";
        }
        erwei2.onmouseout=function(){
        	erwei2.style.display="none";
        }
    	topleft3.onmouseout=function(){
    		erwei2.style.display="none";
    	}
//我的银泰
    var topr3=$(".topr3")[1];
	var topr3b=$(".topr3b")[0];
    	topr3.onmouseover=function(){
    		topr3b.style.display="block";
        }
        topr3b.onmouseover=function(){
        	topr3b.style.display="block";
        }
        topr3b.onmouseout=function(){
        	topr3b.style.display="none";
        }
    	topr3.onmouseout=function(){
    		topr3b.style.display="none";
    	}
//左侧
    var  daoleftt=$(".daoleftt");
    var  lisr=$(".lisr");
    for(var i=0;i<daoleftt.length;i++){
        daoleftt[i].index=i;
        daoleftt[i].onmouseover=function(){
            for(i=0;i<lisr.length;i++){
            lisr[i].style.display="none";
        }
            lisr[this.index].style.display="block"
            daoleftt[this.index].style.display="block";
        
    }
         daoleftt[i].onmouseout=function(){
         lisr[this.index].style.display="none";

        }
    }


   //大banner的轮播
        var bannermore=$(".bannermore")[0];
        var bannerright=$(".bannerright")[0];
        var bannerleft=$(".bannerleft")[0];
        var bannerz = $(".bannerz");
        var yuan = $(".yuan");
        var t = setInterval(move, 2000);
        var n = 0;
        var next = 0;
        var flag = true;
        var width = parseInt(getStyle(bannerz[0], "width"));
       
        function move() {
            if (!flag) {
                return;
            }
            flag = false;
            next = n + 1;
            if (next >= bannerz.length) {
                next = 0;
            }
            for (var i = 0; i < bannerz.length; i++) {
                yuan[i].style.background = "#3E3E3E";
                bannerz[i].style.zIndex = 0;
            }
            bannerz[n].style.opacity = 1;
            bannerz[next].style.opacity = 0;
            yuan[next].style.background = "#E5004F";
            bannerz[next].style.zIndex = 7;
            animate(bannerz[n], {
                opacity:0
            }, 500);
            animate(bannerz[next], {
                opacity:1
            }, 500, function() {
                flag = true
            })
            n = next;
        }

        function move1() {
            if (!flag) {
                return;
            }
            flag = false;
            next = n - 1;
            if (next < 0) {
                next = 0;
            }
            for (var i = 0; i < bannerz.length; i++) {
                yuan[i].style.background = "#211616";
                bannerz[i].style.zIndex = 0;
            }
            bannerz[n].style.opacity = 1;
            bannerz[next].style.opacity = 0;
            yuan[next].style.background = "#E5004F";
            bannerz[next].style.zIndex = 7;
            animate(bannerz[n], {
                opacity:0
            }, 500);
            animate(bannerz[next], {
                opacity:1
            }, 500, function() {
                flag = true
            })
            n = next;
        }
        for (var i = 0; i < yuan.length; i++) {
            yuan[i].index = i;
            yuan[i].onclick = function() {
                for (var i = 0; i < bannerz.length; i++) {
                    yuan[i].style.background = "#211616";
                    bannerz[i].style.zIndex = 0;
                }
                bannerz[n].style.opacity = 1;
                bannerz[next].style.opacity = 0;
                yuan[this.index].style.background = "#E5004F";
                bannerz[this.index].style.zIndex = 7;
                animate(bannerz[n], {
                    opacity:0
                }, 500);
                animate(bannerz[this.index], {
                    opacity:1
                }, 500, function() {
                    flag = true;
                });
                next=this.index;
                n = this.index;
            }
        }
        bannermore.onmouseover=function(){
            bannerleft.style.display="block";
            bannerright.style.display="block";
            clearInterval(t);
           
        }
        bannermore.onmouseout=function(){
            bannerleft.style.display="none";
            bannerright.style.display="none";
            t = setInterval(move, 2000);
            
        }
        bannerleft.onclick = function() {
            move1();
        }
        bannerright.onclick = function() {
            move();
        }
//大banner图;
      
//时尚名品
  

  var box=$(".centerimg");
  for(var i=0;i<box.length;i++){
    shuang(box[i]);
  }
//小轮播
var box1=$(".");
  for(var i=0;i<box1.length;i++){
    jiedian(box1[i]);
  }

//按需加载
var lunbo1=$(".lunbo1");
var shishangtop=$(".shishangtop");
    for(var i=0;i<shishangtop.length;i++){
      shishangtop[i].index=i;
      shishangtop[i].onmouseover=function(){
        for(var j=0;j<lunbo1.length;j++){
          lunbo1[j].style.zIndex=0;
          shishangtop[j].style.borderBottom="none";
        }
        lunbo1[this.index].style.zIndex=1;
        shishangtop[this.index].style.borderBottom="4px solid #E5004F";

      }
    }
// 按需加载第二个
var sameAddrtl=$(".same-addrtl");
var sameand1=$(".sameand1");

      for(var i=0;i<sameAddrtl.length;i++){
      sameAddrtl[i].index=i;
      sameAddrtl[i].onmouseover=function(){
        for(var j=0;j<sameand1.length;j++){
          sameand1[j].style.zIndex=0;
          sameAddrtl[j].style.borderBottom="none";
        }
        sameand1[this.index].style.zIndex=1;
        sameAddrtl[this.index].style.borderBottom="3px solid #E5004F";

      }
    }

//楼层跳转


    var floor = $(".popular");//获取楼层
    var lis = $(".liz");//获取右边浮动表
    var boxx = $(".box")[0];//获取右边浮动表框
    var cw = document.documentElement.clientWidth;//获取浏览器宽度
    var ch = document.documentElement.clientHeight;//获取浏览器高度
    var bh = boxx.offsetHeight;//获取左边浮动表框高度
    boxx.style.top = (ch - bh) / 2 + "px";//设置左边浮动表框高度
    var flagt=true;
    var flag1=true;
    var sign=true;
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;//给浮动表每一个按钮进行编号
        lis[i].onclick = function() {
            sign=false;
            // var obj = document.documentElement.scrollTop ? document.documentElement : document.body;//处理兼容性问题
            var top = floor[this.index].offsetTop;//获取所要出现楼层到body顶部的距离
            // obj.scrollTop = top;
            animate(document.documentElement,{scrollTop:top},300,function () {
                sign=true;
            })//设置滚动条到顶部距离
            animate(document.body,{scrollTop:top},300,function () {
                sign=true;
            })//设置滚动条到顶部距离
            for (var i = 0; i < lis.length; i++) {//设置按钮的颜色和文字颜色
                lis[i].style.background = "#fff"
                lis[i].style.color = "#666"
                lis[i].innerHTML=i+1+"F";
            }
            lis[this.index].style.color = "#fff" //按钮变色，文字变色
            lis[this.index].style.background = "#B61B1F"
            var aa = lis[this.index].getAttribute("aa");
            lis[this.index].innerHTML=aa;
        }
    }
    
    window.onscroll=function(){//滚动条事件
        if(!sign){
            return
        }
        var obj = document.documentElement.scrollTop ? document.documentElement : document.body;
        for (var i = 0; i < floor.length; i++) {
            if (obj.scrollTop >= (floor[i].offsetTop-ch+300)) {//按钮变色，文字变色
                for (var j = 0; j < lis.length; j++) {
                    lis[j].style.background = "#fff"
                    lis[j].style.color = "#666"
                    lis[j].innerHTML=j+1+"F";
                }
                var aa = lis[i].getAttribute("aa");
                lis[i].innerHTML=aa;
                lis[i].style.color = "#fff"//按钮变色，文字变色
                lis[i].style.background = "#B61B1F"
                // var imgss = $("img", floor[i]);
                // for (var k = 0; k < imgss.length; k++) {
                //     var aa = imgss[k].getAttribute("aa");
                //     imgss[k].src = aa;
                // }
            }   
        }
        if (obj.scrollTop >= (floor[0].offsetTop - ch)) {//开关控制
            if (flagt) {
                flagt = false;
                animate(boxx, {opacity: 1}, 300, function() {flag1 = true;})
            } 
        }else {
                if (flag1) {
                flag1 = false;
                animate(boxx, {opacity: 0}, 300, function() {flagt = true;})
            } 
        }
    } 
})