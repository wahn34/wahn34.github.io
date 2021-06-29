---
title: JavaScript setTimeout 반복
author: wahn
date:   2021-06-29 20:30:00 +0900
categories: [JavaScript]
tags: [JavaScript]
pin: true
---
## setTimeout    
일정 시간 이후에 해당 function을 호출하고 싶을 때, setTimeout을 사용할 수 있다.  

### 사용  
```js
setTimeout(function, delay);
```
   
1초 후 실행되는 예시  
```js
setTimeout(function() {  
	console.log('hi');  
}, 1000);
```
   
### 반복 조건

이 setTimeout을 사용해서 텍스트가 점점 더 빠르게 변화되게 구현할 수도 있다.  
기본 delay는 0.5초를 주었고, 이를 반복할 때 마다 delay를 줄이도록 했다.  
```js
delay = delay - (delay/10);
```

반복으로 사용할 때는 종료 시킬 조건 또는 재호출할 조건이 필요하다.  
1밑으로 떨어지면 호출이 되지 않도록 했다.  

```js
if(delay>1) {
	...
	timer = setTimeout(viewForkUsTitle, delay);
	...
}
else {...}
```
  
### 반복 사용
```js
var delay = 500;
let timer = setTimeout(viewForkUsTitle, delay);
function viewForkUsTitle() {
	if(delay>1) {
		delay -= delay/10; 
		$('.head1').text(arrTitle[i]);
		
		timer = setTimeout(viewForkUsTitle, delay);
		if(i > arrTitle.length-1) i = 0;
		else i++;
	}
	else {
		$('.head1').text("모든 것을 하나로");
		$('.body1').fadeIn(1000, function() {
			$('.body1').show();
	    });
		
		$('.set1').fadeIn(3000, function() {
			$('.set1').show();
			
	    });
		
	}
}
```

![animation](/images/animation.gif)

