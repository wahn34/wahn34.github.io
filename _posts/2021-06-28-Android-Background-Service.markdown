---
title: Android Background Service
author: wahn
date:   2021-06-28 21:30:00 +0900
categories: [Android]
tags: [Android]
pin: true
---
## Service  
앱을 실행하지 않아도 백그라운드에서 실행이 가능하다. 이는 다른 애플리케이션으로 전환하더라도 지속적으로 백그라운드에서 실행이 될 수 있고, 구성 요소를 서비스에 바인딩하여 상호작용시킬 수 있다.
  
Service는 백그라운드에서 수행되며 사용자 인터페이스를 제공하지 않지만, 사용자 인터페이스를 제공하는 Activity처럼 사용자 Application 등급의 구성 요소로 동작하며 프로세스간 통신을 수행할 수 있다. startService를 통한 Intent 전달도 가능하다.   

서비스는 네트워크 트랜잭션을 처리하고 음악을 재생하거나 파일 IO를 수행할 수 있다. 

서비스는 포그라운드, 백그라운드, 바인드로 3가지 유형이 존재한다.  


### Foreground     
NotificationManager을 통해 컨트롤 패널을 알림 센터에 등록하는 오디오 앱과 같이 음악을 제어할 때 사용한다. Foreground Service는 알림을 표시한다는 점, 사용자가 앱과 상호작용을 하지 않을 때도 계속 실행된다는 점이 특징이다.  


### Background     
사용자 인터페이스를 제공하지 않는다. 말 그대로 백그라운드에서 실행된다.  
 
 
### Bind  
Application의 구성 요소에서 bindService()를 통해 사용한다. 서비스가 바인딩되면 클라이언트-서버 인터페이스를 제공하며 상호 작용할 수 있다. 바인딩된 서비스는 또 다른 Application 구성 요소가 이와 같이 바인딩 되어있는 경우에만 실행될 수 있다. 여러 서비스가 동시에 바인딩 될 수 있지만 해제되는 순간 서비스는 소멸한다.


아래와 같이 작동 방식을 설계했을 때, 사용 방법은 아래와 같다.
![service1](/images/service1.png)


## 사용 
```java
Intent intent = new Intent(this, SmsService.class);  
startService(intent);
```

### 예시  
```java
if (isServiceRunning("com.wahn.sample.SmsService")) {  
    //서비스가 실행 중  
}  
else{  
	Intent intent = new Intent(this, SmsService.class);  
	startService(intent);  
}
```

