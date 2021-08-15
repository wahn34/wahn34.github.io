---
title:  Git upload-pack not permitted on 오류
author: wahn
date:   2021-08-16 03:30:00 +0900
categories: [Git]
tags: [private project]
pin: false
---
## 오류 발생
평소 잘 사용하고 있던 Eclipse의 Git 기능이 어제부터 말썽이었다.  
upload-pack not permitted on 오류로 인해 pull, push가 되지 않았다.  
처음에는 Repository를 새로 추가한 것이 문제가 되었나 싶었는데 아니었고 http.sslVerify/false 옵션도 해결 방법이 아니었다.  


## 원인
Git의 비밀번호 인증 지원의 종료 (2021년 8월 13일 09:00 PST)  
참고 : [github 블로그]( https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/#background)   


## 해결 방법  

### Personal access tokens 생성
[github](https://github.com/settings/tokens) 에서 Generate new token 클릭 > 권한 부여 후 생성  
* 생성되는 Key는 다시 확인할 수 없으니 바로 사용해야 함

### Eclipse의 ID/PW 변경
ID는 기존 그대로 (계정) 사용
PW는 새로 생성된 Personal access tokens를 입력

#### 방법1 
Git Repositories > Remotes > origin > pull / push 우클릭 > Change Credentials > 비밀번호를 새로 생성한 token으로 변경  

#### 방법2 
Eclipse > Window > Preferences > General > Security > Secure Storage > Contents 탭 > [Default Secure Storage] > GIT > ... 부분을 삭제 > Apply and Close > pull 또는 push > ID/Token으로 로그인

