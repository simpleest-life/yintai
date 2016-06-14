  function getInner(obj,value){
    // 判断是否有该方法
     if(obj.textContent){
      // 判断value是否赋值
         if(value==undefined){
          // 如果没有赋值获取内容
            return obj.textContent;
         }else{
          // 如果赋值显示输入内容
           obj.textContent=value;
         }
     }else{
      // IE浏览器
           if(value==undefined){
            return obj.innerText;
           }else{
           obj.innerText=value;
         }
     }
}





function getStyle(obj,style){
  if(obj.currentStyle){
    return obj.currentStyle[style];
  }else{
    return getComputedStyle(obj,null)[style];
  }

}




function $(search,obj){
  var obj=obj||document;
  // 如果要寻找的第一个字符是#，通过Id获取
  // 判断第一个字符
  if(typeof(search)=="string"){
      if(search.charAt(0)=="#"){
    // 截取除第一个字符之外的所有
    return document.getElementById(search.substr(1));
    // 第一个字符为.则是类名
  }else if(search.charAt(0)=="."){
    // 截取除第一个字符之外的所有
        return getClass(search.substr(1),obj);
  }else{
    // 其余情况为通过标签名来获取所需元素
    return obj.getElementsByTagName(search);
  }
}else if(typeof(search)=="function"){
  window.onload=function(){
    search();
  }
}

}

function addEvent(obj,event,fun){
    if(obj.attachEvent){
       obj.attachEvent("on"+event,fun);
    }else if(obj.addEventListener){
      obj.addEventListener(event,fun,false)
    }
}

function removeEvent(obj,event,fun){
     if(obj.detachEvent){
       obj.detachEvent("on"+event,fun);
    }else if(obj.removeEventListener){
       obj.removeEventListener(event,fun,false)
      }
}




// 创建函数  需要获取的类名 方法
function getClass(className,obj){
  // 方法若传入obj参数则为输入值，否则为document
     var obj=obj||document;  
     // 判断是否有获取方法      
     if(obj.getElementsByClassName){
      // 若有则返回该方法
      return obj.getElementsByClassName(className);
     }else{
      // 获取所有的对象 建立空数组
      var arr=[];
      var alls=obj.getElementsByTagName("*"); 
        // 类数组形式           
        for(var i=0;i<alls.length;i++){
          // 判断alls中的类名是否和所需相等 
          // 调用checkClass函数判断是否相等  
          if(checkClass(alls[i].className,className)){
            // 若等放入空数组当中
            arr.push(alls[i]);
          }
        }
        return arr;
     }
}





// 类名可能有多个，需要将类名都放入数组当中与所需类名进行逐个比较
function checkClass(search,match){
  // 将类名以空格分割成数组
       var brr=search.split(" ");
       // 进行比较
       for(var i=0;i<brr.length;i++){
        if(brr[i]==match){
          return true;
        }
       }
       return false;
}



//a 只元素   b 文本和元素
function getChilds(obj,type){
     var type=type||"a";
     var arr=[];
     var all=obj.childNodes;
     for(var i=0;i<all.length;i++){
          if(type=="a"){
            if(all[i].nodeType==1){
                arr.push(all[i]);
            }
          }else if(type=="b"){
            if(all[i].nodeType==1||(all[i].nodeType==3&&all[i].nodeValue.replace(/^\s*|\s*$/g)))
            {
              arr.push(all[i]);
            }

           }
     }
   return arr;
}


// 获取第一个
function  getFirst(obj){
  return getChilds(obj)[0];
}


//获取最后一个
function getLast(obj){
  var nub=getChilds(obj);
  return getChilds(obj)[nub.length-1];
}



// 获取下一个兄弟元素
 function getNext(obj){
  var type=type||"a"
  var next=obj.nextSibling;
  if(next==null){
    return false;
  }
    else if(type=="b"){
  while(next.nodeType==3||next.nodeType==8){
    next=next.nextSibling;
    if(next==null){
      return false;
    }
  }
     return next;
    }
 }



 // 获取上一个兄弟元素  
 function  getPrevious(obj){
     var previous=obj.previousSibling;
     if(previous=="null"){
      return false;
     }
     while(previous.nodeType==3||previous.nodeType==8){
      previous=previous.previousSibling;
      if(previous==null){
        return false;
      }
     }
     return   previous;
 }

 //插入到队形元素之前
 function  innertBefore(obj,before){
  var parent = before.parentNode;
  parent.insertBefore(obj,before);

 }


 //插入到对象之后
 function insertAfter(obj,after){
  var next = getNext(obj,"b");
  var parent=after.parentNode;
  if(next){     //真
    insertBefore(obj,next);
  }else{
    parent.appendChild(obj);
  }

 }


// 鼠标的滚动调用
 function mouseWheel(obj,funUp,funDown){
    if(obj.attachEvent){
      obj.attachEvent("onmouseWheel",scroll);
    }else if(obj.addEventListener){
      obj.addEventListener("mousewheel",scroll,false);
      obj.addEventListener("DOMMouseScroll",scroll,false);
    }
    function scroll(e){
            var ev=e||window.event;
            var d=ev.wheelDelta||ev.detail;
            if(obj.attachEvent){
              ev.returnValue=false;
            }else if(obj.addEventListener){
              ev.preventDefault();
            }

            if(d==-120||d==3){
              if(funUp){
                funUp();
              }
              
            }else if(d==120||d==-3){
              if(funDown){
                  funDown();
              }
            
            }
    }

 }
