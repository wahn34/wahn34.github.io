---
title: SQL IS NULL
author: wahn
date:   2021-05-28 22:33:00 +0900
categories: [SQL]
tags: [coding test]
pin: false
---

## 이름이 없는 동물의 아이디  


#### 문제 설명  
`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

|NAME|TYPE|NULLABLE|
|---|---|---|
|ANIMAL_ID|VARCHAR(N)|FALSE|
|ANIMAL_TYPE|VARCHAR(N)|FALSE|
|DATETIME|DATETIME|FALSE|
|INTAKE_CONDITION|VARCHAR(N)|FALSE|
|NAME|VARCHAR(N)|TRUE|
|SEX_UPON_INTAKE|VARCHAR(N)|FALSE|

동물 보호소에 들어온 동물 중, 이름이 없는 채로 들어온 동물의 ID를 조회하는 SQL 문을 작성해주세요. 단, ID는 오름차순 정렬되어야 합니다.

##### 예시

예를 들어  `ANIMAL_INS`  테이블이 다음과 같다면  

|ANIMAL_ID|ANIMAL_TYPE|DATETIME|INTAKE_CONDITION|NAME|SEX_UPON_INTAKE|
|---|---|---|---|---|---|
|A368930|Dog|2014-06-08 13:20:00|Normal|NULL|Spayed Female|
|A524634|Dog|2015-01-02 18:54:00|Normal|*Belle|Intact Female|
|A465637|Dog|2017-06-04 08:17:00|Injured|*Commander|Neutered Male|

이름이 없는 채로 들어온 동물의 ID는 A368930입니다. 따라서 SQL을 실행하면 다음과 같이 출력되어야 합니다.

|ANIMAL_ID|
|---|
|A368930|





### 풀이  


조건1 이름이 없는 채로
조건2 동물의 ID를 조회
조건3 오름차순 정렬  

```
SELECT ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME IS NULL
ORDER BY ANIMAL_ID ASC
```


문제 출처 [이름이 없는 동물의 아이디]  

[이름이 없는 동물의 아이디]:https://programmers.co.kr/learn/courses/30/lessons/59039  



## 이름이 있는 동물의 아이디  

동물 보호소에 들어온 동물 중, 이름이 있는 동물의 ID를 조회하는 SQL 문을 작성해주세요. 단, ID는 오름차순 정렬되어야 합니다.


### 풀이  


조건1 이름이 있는 동물의 ID를 조회
조건2 ID는 오름차순 정렬

```
SELECT ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME IS NOT NULL
ORDER BY ANIMAL_ID ASC
```


문제 출처 [이름이 있는 동물의 아이디]  

[이름이 있는 동물의 아이디]: https://programmers.co.kr/learn/courses/30/lessons/59407

 
 
## NULL 처리하기  

입양 게시판에 동물 정보를 게시하려 합니다. 동물의 생물 종, 이름, 성별 및 중성화 여부를 아이디 순으로 조회하는 SQL문을 작성해주세요. 이때 프로그래밍을 모르는 사람들은 NULL이라는 기호를 모르기 때문에, 이름이 없는 동물의 이름은 "No name"으로 표시해 주세요.


### 풀이  


조건1 동물의 생물 종, 이름, 성별 및 중성화 여부
조건2 아이디 순으로 조회
조건3 이름이 없는 동물의 이름은 "No name"으로 표시

```
SELECT ANIMAL_TYPE, 
(SELECT CASE WHEN NAME IS NULL THEN 'No name' ELSE NAME END) AS 'NAME', SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID
```


문제 출처 [NULL 처리하기]  

[NULL 처리하기]: https://programmers.co.kr/learn/courses/30/lessons/59410

 