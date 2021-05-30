---
layout: post
title:  "Github blog 생성"
description: jekyll theme를 이용한 Github Blog 생성
date:   2021-05-19 18:16:36 +0900
tags: Blog jekyll
categories: Blog jekyll
---

깃허브 블로그를 생성할 때 이것저것 눌러보면서 알게 된 내용들..

## Repository 생성
Create a new repository 를 클릭하여 새로운 Repository를 생성
블로그의 주소는 [자신의 아이디].github.io이 되고, Repository name 또한 동일해야 함





## 원하는 테마 찾기
http://jekyllthemes.org/ 에서 원하는 테마를 찾아 fork하거나 다운로드 받은 후 git push를 통해 블로그를 빠르게 생성 할 수 있습니다.


현재 이 블로그에 적용되어있는 테마는  [tale]  테마입니다  

[tale]:https://github.com/chesterhow/tale   


git clone을 먼저 수행한 후, 해당 디렉토리에 다운 받은 테마 파일을 넣습니다.  
_config.yml에서 baseurl을 공백으로 (''), 나머지 기본 정보는 자신에게 맞게 수정합니다.  

[tale] 의 readme.md 를 참고하여 수정하는 것이 제일 좋습니다.

이후 git push를 하면 약 1분 후 자신의이름.github.io에서 블로그를 볼 수 있습니다.  


