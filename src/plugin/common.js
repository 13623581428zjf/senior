//是否手机
export const isMobile =  () => {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    return true
  } else {
    return false
  }
}
//存
export const setlocalStorage = (keys, value) => {
  if (localStorage) {
    var jsom = localStorage['jsom'];
    var mp = {};
    if (jsom && jsom != '') {
      mp = JSON.parse(jsom);
    }
    mp[keys] = value;
    jsom = JSON.stringify(mp);
    localStorage['jsom'] = jsom;
  } else {
    /*不支持sessionStorage*/
  }

}
//删除
export const removelocalStorage = (keys) => {
if (localStorage && localStorage['jsom'] != undefined) {
  var jsom = localStorage['jsom'];
  if (jsom && jsom != '') {
    var a = {};
    var mp = JSON.parse(jsom);
    for (var i in mp) {
      if (i != keys) {
        a[i] = mp[i];
      }
    }
    //mp[keys] = '';
    jsom = JSON.stringify(a);
    localStorage['jsom'] = jsom;
  }
}
}
//获取
export const getlocalStorage = (keys) => {
if (localStorage && localStorage['jsom'] != undefined) {
    var jsom = localStorage['jsom'];
    if (jsom && jsom != '') {
      var mp = JSON.parse(jsom);
      if (mp[keys] && mp[keys] != '') {
        return mp[keys];
      } else {
        return "";
      }
    }
  } else {
    return "";
  }
}
/*设置储存的值*/
export const setsessionStorage = (keys, value) => {
	if(sessionStorage) {
		var jsom = sessionStorage['jsom'];
		var mp = {};
		if(jsom && jsom != '') {
			mp = JSON.parse(jsom);
		}
		mp[keys] = value;
		jsom = JSON.stringify(mp);
		sessionStorage['jsom'] = jsom;
	}
	return '';
}
/*获取储存的值*/
export const getsessionStorage = (keys) => {
	if(sessionStorage && sessionStorage['jsom'] != undefined) {
		var jsom = sessionStorage['jsom'];
		if(jsom && jsom != '') {
			var mp = JSON.parse(jsom);
			if(mp[keys] && mp[keys] != '') {
				return mp[keys];
			} else {
				return "";
			}
		}
	} else {
		return "";
	}
}
/*删除储存的值*/
export const removesessionStorage = (keys) => {
	if(sessionStorage) {
		var jsom = sessionStorage['jsom'];
		if(jsom && jsom != '') {
			var mp = JSON.parse(jsom);
			var _mp = {};
			if(keys === undefined) {
				for(var i in mp) {
					if(i === '_key' || i === 'uname') {
						_mp[i] = mp[i];
					}
				}
			} else {
				for(var i in mp) {
					if(i !== keys) {
						_mp[i] = mp[i];
					}
				}
			}

			_mp = JSON.stringify(_mp);
			sessionStorage['jsom'] = _mp;
		}
		return '';
	}
}
/*防止多次点击*/
var isclick = false;
export const isClick = (callBack) =>{
	if(isclick == false) {
		isclick = true;
		setTimeout(() => {
			isclick = false;
		}, 2000);
		callBack && callBack();
	}
}
export const formatJSON = (str) => {
  var stack = []; //栈-用于括号匹配
  var tmpStr = '';    //新格式化JSON字符串
  var len = str.length;   //原始JSON长度

  //遍历每一个字符
  for (let i = 0; i < len; i++) {

      //当遇到结构块起始结构
      if (str[i] == '{' || str[i] === '[') {

          //起始结构后面直接换行
          tmpStr += str[i] + "\n";

          //入栈
          stack.push(str[i]);

          //这里的意思是结构块起始的下一行开始就会有一个缩进，缩进量与遇到的结构块起始符个数成正比1:1
          tmpStr += "\t".repeat(stack.length);
      }
      //当遇到结构块结束符
      else if (str[i] == ']' || str[i] === '}') {

          //因为本身JSON格式是固定的，所以括号一定是成对的，这里先不考虑错误的json数据
          //遇到结束符就退栈，
          stack.pop();

          //结束符本身输出到下一行，并减少一个缩进
          tmpStr += "\n"+"\t".repeat(stack.length) + str[i];
      }
      //当遇到逗号的时候
      else if (str[i] == ',') {
          //逗号后方直接换行，以及下一行的缩进处理
          tmpStr += str[i] + "\n" + "\t".repeat(stack.length);
      }
      else {
          //其他字符直接复制
          tmpStr += str[i];
      }
  }
  return tmpStr;
}

  //javascript精度除法处理
  //除法函数，用来得到精确的除法结果
  //说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
  //调用：accDiv(arg1,arg2)
  //返回值：arg1除以arg2的精确结果
  export const accDiv = (arg1, arg2) => {    
  var t1 = 0,
    t2 = 0,
    r1, r2;
  try {
    t1 = arg1.toString().split(".")[1].length
  } catch(e) {}
  try {
    t2 = arg2.toString().split(".")[1].length
  } catch(e) {}
  r1 = Number(arg1.toString().replace(".", ""))
  r2 = Number(arg2.toString().replace(".", ""))
  return(r1 / r2) * Math.pow(10, t2 - t1);
  }
  /*
  javascript精度乘法处理
  乘法函数，用来得到精确的乘法结果
  说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
  调用：accMul(arg1,arg2)
  返回值：arg1乘以arg2的精确结果
  */

  export const accMul = (arg1, arg2) => {     
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();     
  try {
    m += s1.split(".")[1].length
  } catch(e) {}     
  try {
    m += s2.split(".")[1].length
  } catch(e) {}     
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
  }
  //javascript精度加法处理
  //加法函数，用来得到精确的加法结果
  //说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
  //调用：accAdd(arg1,arg2)
  //返回值：arg1加上arg2的精确结果

  export const accAdd = (arg1, arg2) => {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length
  } catch(e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split(".")[1].length
  } catch(e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return(arg1 * m + arg2 * m) / m
  };
  //添加class
  export const addClass = (el, className)=>{
    if (hasClass(el, className)) {
      return
    }
  
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
  }
  //移除class
  export const removeClass = (el, className)=>{
    if (!hasClass(el, className)) {
      return
    }
  
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
    el.className = el.className.replace(reg, ' ')
  }

  /*
 *获取url参数信息
 *name:参数名称
 */
export const getQueryString = (name) => {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) {
		return unescape(r[2]);
	}
	return null;
}
export const Format = (time, fmt) => { //author: meizz
	var o = {
		"M+": time.getMonth() + 1, //月份
		"d+": time.getDate(), //日
		"h+": time.getHours(), //小时
		"m+": time.getMinutes(), //分
		"s+": time.getSeconds(), //秒
		"q+": Math.floor((time.getMonth() + 3) / 3), //季度
		"S": time.getMilliseconds() //毫秒
	};
	if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;

}

function two(n) {
	return n < 10 ? '0' + n : '' + n;
}

export const getTime = (time, sp, istrue, isweek) => {
	var b;
	if(time==null){
		return '';
	}
	if(time.length == 10) {
		time = time + "000";
	}
	var a = parseInt(time);
	if(time == '') {
		b = new Date();
	} else {
		b = new Date(a);
	}
	var year = b.getFullYear();
	var mouth = b.getMonth() + 1;
	var day = b.getDate();
	var h = b.getHours();
	var m = b.getMinutes();
	var s = b.getSeconds();
	var c = year + sp + two(mouth) + sp + two(day);
	var w = b.getDay();
	var weeks = {
		"1" : "周一",
		"2" : "周二",
		"3" : "周三",
		"4" : "周四",
		"5" : "周五",
		"6" : "周六",
		"0" : "周日"
		};
	if(istrue) {
		c = c + " " + two(h) + ":" + two(m) + ":" + two(s);
		c = isweek ? c + ' '+ weeks[w]:c
		return c;
	} else {
		c = isweek ? c + ' '+ weeks[w]:c
		return c;
	}
}
export const VueDebounce = (func, wait = 200, immediate = true) => {
  let timeout = null;  // 定时器
  return function () {
      let that = this, // this对象
          args = arguments; // 参数
      if (timeout) clearTimeout(timeout);
      if (immediate === true) { // 立即执行
          var callNow = !timeout;
          timeout = setTimeout(() => {
              timeout = null;
          }, wait)
          if (callNow) {
              // func.apply(that, args); // 普通用法
              that[func](...args); // vue用法
          }
      }
      else { // 非立即执行
          timeout = setTimeout(() => {
              // func.apply(this, args); // 普通用法
              that[func](...args); // vue用法
          }, wait);
      }
  }
}
export const VueThrottle = (func, wait=200)=>{
  let previous= 0;
  return function() {
      let that= this;
      let args = arguments;
      let now = Date.now();
      if (now - previous > wait) {
              that[func](...args); // vue用法
              previous = now;
          }
  }
}

/**
* @param len 长度
* @param radix 基数
* @returns {string}
*/
export const uuid = function(len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [], i;
  radix = radix || chars.length;

  if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
  } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
              r = 0 | Math.random()*16;
              uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
          }
      }
  }
  return uuid.join('');
}
