---
layout: post
title:  "SQL SUM, MAX, MIN"
description: 프로그래머스 코딩테스트 연습 SUM, MAX, MIN
date:   2021-05-29 23:40:00 +0900
categories: SQL MySQL
---

#### 문제 설명  (공통)
`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.
  
|NAME|TYPE|NULLABLE|
|---|---|---|
|ANIMAL_ID|VARCHAR(N)|FALSE|
|ANIMAL_TYPE|VARCHAR(N)|FALSE|
|DATETIME|DATETIME|FALSE|
|INTAKE_CONDITION|VARCHAR(N)|FALSE|
|NAME|VARCHAR(N)|TRUE|
|SEX_UPON_INTAKE|VARCHAR(N)|FALSE|

  
## 최댓값 구하기


가장 최근에 들어온 동물은 언제 들어왔는지 조회하는 SQL 문을 작성해주세요.

##### 예시

예를 들어  `ANIMAL_INS`  테이블이 다음과 같다면
  
|ANIMAL_ID|ANIMAL_TYPE|DATETIME|INTAKE_CONDITION|NAME|SEX_UPON_INTAKE|
|---|---|---|---|---|---|
|A399552|Dog|2013-10-14 15:38:00|Normal|Jack|Neutered Male|
|A379998|Dog|2013-10-23 11:42:00|Normal|Disciple|Intact Male|
|A370852|Dog|2013-11-03 15:04:00|Normal|Katie|Spayed Female|
|A403564|Dog|2013-11-18 17:03:00|Normal|Anna|Spayed Female|


가장 늦게 들어온 동물은 Anna이고, Anna는 2013-11-18 17:03:00에 들어왔습니다. 따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.

|시간|
|---|
|2013-11-18 17:03:00|

※ 컬럼 이름(위 예제에서는 "시간")은 일치하지 않아도 됩니다.




### 풀이  

조건1 가장 최근에 들어온 동물은 언제 들어왔는지 조회  

```
SELECT MAX(DATETIME) AS '시간'
FROM ANIMAL_INS
LIMIT 1
```
* 어차피 MAX로 1개만 반환하기 때문에 LIMIT 1 옵션은 의미가 없습니다.  



문제 출처 [최댓값 구하기]  

[최댓값 구하기]:https://programmers.co.kr/learn/courses/30/lessons/59415  



## 최솟값 구하기  

동물 보호소에 가장 먼저 들어온 동물은 언제 들어왔는지 조회하는 SQL 문을 작성해주세요.


##### 예시

예를 들어  `ANIMAL_INS`  테이블이 다음과 같다면  
  
|ANIMAL_ID|ANIMAL_TYPE|DATETIME|INTAKE_CONDITION|NAME|SEX_UPON_INTAKE|
|---|---|---|---|---|---|
|A399552|Dog|2013-10-14 15:38:00|Normal|Jack|Neutered Male|
|A379998|Dog|2013-10-23 11:42:00|Normal|Disciple|Intact Male|
|A370852|Dog|2013-11-03 15:04:00|Normal|Katie|Spayed Female|
|A403564|Dog|2013-11-18 17:03:00|Normal|Anna|Spayed Female|



가장 먼저 들어온 동물은 Jack이고, Jack은 2013-10-14 15:38:00에 들어왔습니다. 따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.

|시간|
|---|
|2013-10-14 15:38:00|


※ 컬럼 이름(위 예제에서는 "시간")은 일치하지 않아도 됩니다.




### 풀이  


조건1 동물 보호소에 가장 먼저 들어온 동물은 언제 들어왔는지 조회  

```
SELECT MIN(DATETIME) AS '시간'
FROM ANIMAL_INS
```


문제 출처 [최솟값 구하기]  

[최솟값 구하기]: https://programmers.co.kr/learn/courses/30/lessons/59038  

 
 
## 동물 수 구하기


동물 보호소에 동물이 몇 마리 들어왔는지 조회하는 SQL 문을 작성해주세요.

##### 예시

예를 들어  `ANIMAL_INS`  테이블이 다음과 같다면

|ANIMAL_ID|ANIMAL_TYPE|DATETIME|INTAKE_CONDITION|NAME|SEX_UPON_INTAKE|
|---|---|---|---|---|---|
|A399552|Dog|2013-10-14 15:38:00|Normal|Jack|Neutered Male|
|A379998|Dog|2013-10-23 11:42:00|Normal|Disciple|Intact Male|
|A370852|Dog|2013-11-03 15:04:00|Normal|Katie|Spayed Female|
|A403564|Dog|2013-11-18 17:03:00|Normal|Anna|Spayed Female|

  

동물 보호소에 들어온 동물은 4마리입니다. 따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.


|count|
|---|
|4|

※ 컬럼 이름(위 예제에서는 count)은 일치하지 않아도 됩니다.

  
### 풀이  


조건1 동물 보호소에 동물이 몇 마리 들어왔는지 조회  

```
SELECT COUNT(1)
FROM ANIMAL_INS
```
  
COUNT(*)과 COUNT(1)은 같음  
COUNT(컬럼)은 NULL을 제외하고 COUNT
이 문제에서 NULL은 없으므로 COUNT(컬럼)해도 무관  


문제 출처 [동물 수 구하기]  

[동물 수 구하기]: https://programmers.co.kr/learn/courses/30/lessons/59406  

 

## 중복 제거하기

동물 보호소에 들어온 동물의 이름은 몇 개인지 조회하는 SQL 문을 작성해주세요. 이때 이름이 NULL인 경우는 집계하지 않으며 중복되는 이름은 하나로 칩니다.  


##### 예시

예를 들어  `ANIMAL_INS`  테이블이 다음과 같다면
|ANIMAL_ID|ANIMAL_TYPE|DATETIME|INTAKE_CONDITION|NAME|SEX_UPON_INTAKE|
|---|---|---|---|---|---|
|A562649|Dog|2014-03-20 18:06:00|Sick|NULL|Spayed Female|
|A412626|Dog|2016-03-13 11:17:00|Normal|*Sam|Neutered Male|
|A563492|Dog|2014-10-24 14:45:00|Normal|*Sam|Neutered Male|
|A513956|Dog|2017-06-14 11:54:00|Normal|*Sweetie|Spayed Female|


보호소에 들어온 동물의 이름은 NULL(없음),  `*Sam`,  `*Sam`,  `*Sweetie`입니다. 이 중 NULL과 중복되는 이름을 고려하면, 보호소에 들어온 동물 이름의 수는 2입니다. 따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.
|count|
|---|
|2|

※ 컬럼 이름(위 예제에서는 count)은 일치하지 않아도 됩니다.


  
### 풀이  


조건1 동물 보호소에 들어온 동물의 이름은 몇 개인지 조회   
조건2 이때 이름이 NULL인 경우는 집계 제외
조건3 중복되는 이름은 하나로 계산  

```
SELECT COUNT(DISTINCT NAME) FROM ANIMAL_INS
```


문제 출처 [중복 제거하기]  

[중복 제거하기]: https://programmers.co.kr/learn/courses/30/lessons/59408

 
 