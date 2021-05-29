---
layout: post
title:  "SQL IS NULL"
description: 프로그래머스 코딩테스트 연습 GROUP BY
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

  
## 고양이와 개는 몇 마리 있을까


동물 보호소에 들어온 동물 중 고양이와 개가 각각 몇 마리인지 조회하는 SQL문을 작성해주세요. 이때 고양이를 개보다 먼저 조회해주세요.

##### 예시

예를 들어  `ANIMAL_INS`  테이블이 다음과 같다면  

|ANIMAL_ID|ANIMAL_TYPE|DATETIME|INTAKE_CONDITION|NAME|SEX_UPON_INTAKE|
|---|---|---|---|---|---|
|A373219|Cat|2014-07-29 11:43:00|Normal|Ella|Spayed Female|
|A377750|Dog|2017-10-25 17:17:00|Normal|Lucy|Intact Female|
|A354540|Cat|2014-12-11 11:48:00|Normal|Tux|Neutered Male|

고양이는 2마리, 개는 1마리 들어왔습니다. 따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.

|ANIMAL_ID|count|
|---|---|
|Cat|2|
|Dog|1|





### 풀이  


조건1 동물 중 고양이와 개가 각각 몇 마리  
조건2 고양이를 개보다 먼저 조회  

```
SELECT ANIMAL_TYPE, COUNT(ANIMAL_TYPE)
FROM ANIMAL_INS
GROUP BY ANIMAL_TYPE
ORDER BY ANIMAL_TYPE
```


문제 출처 [고양이와 개는 몇 마리 있을까]  

[고양이와 개는 몇 마리 있을까]:https://programmers.co.kr/learn/courses/30/lessons/59040    



## 동명 동물 수 찾기  

동물 보호소에 들어온 동물 이름 중 두 번 이상 쓰인 이름과 해당 이름이 쓰인 횟수를 조회하는 SQL문을 작성해주세요. 이때 결과는 이름이 없는 동물은 집계에서 제외하며, 결과는 이름 순으로 조회해주세요.  


##### 예시

예를 들어  `ANIMAL_INS`  테이블이 다음과 같다면  

|ANIMAL_ID|ANIMAL_TYPE|DATETIME|INTAKE_CONDITION|NAME|SEX_UPON_INTAKE|
|---|---|---|---|---|---|
|A396810|Dog|2016-08-22 16:13:00|Injured|Raven|Spayed Female|
|A377750|Dog|2017-10-25 17:17:00|Normal|Lucy|Spayed Female|
|A355688|Dog|2014-01-26 13:48:00|Normal|Shadow|Neutered Male|
|A399421|Dog|2015-08-25 14:08:00|Normal|Lucy|Spayed Female|
|A400680|Dog|2017-06-17 13:29:00|Normal|Lucy|Spayed Female|
|A410668|Cat|2015-11-19 13:41:00|Normal|Raven|Spayed Female|

-   Raven 이름은 2번 쓰였습니다.
-   Lucy 이름은 3번 쓰였습니다
-   Shadow 이름은 1번 쓰였습니다.  

따라서 SQL문을 실행하면 다음과 같이 나와야 합니다.
|NAME|COUNT|Lucy|
|---|---|---|
|3|Raven|2|


### 풀이  


조건1 동물 이름 중 두 번 이상 쓰인 이름  
조건2 해당 이름이 쓰인 횟수를 조회  
조건3 이름이 없는 동물은 집계에서 제외  
조건4 이름 순으로 조회  

```
SELECT NAME, COUNT(NAME) AS 'COUNT'
FROM ANIMAL_INS
GROUP BY NAME
HAVING COUNT(NAME) > 1
ORDER BY NAME
```


문제 출처 [동명 동물 수 찾기]  

[동명 동물 수 찾기]: https://programmers.co.kr/learn/courses/30/lessons/59041  

 
 
## 입양 시각 구하기(1)

보호소에서는 몇 시에 입양이 가장 활발하게 일어나는지 알아보려 합니다. 09:00부터 19:59까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요. 이때 결과는 시간대 순으로 정렬해야 합니다.

##### 예시

SQL문을 실행하면 다음과 같이 나와야 합니다.
|HOUR|COUNT|
|---|---|
|9|1|
|10|2|
|11|13|
|12|10|
|13|14|
|14|9|
|15|7|
|16|10|
|17|12|
|18|16|
|19|2|

  
### 풀이  


조건1 09:00부터 19:59까지  
조건2 각 시간대별로 입양이 몇 건이나 발생했는지 조회 
조건3 시간대 순으로 정렬

```
SELECT HOUR(DATETIME) AS 'HOUR', COUNT(DATETIME) AS 'COUNT'
FROM ANIMAL_OUTS
GROUP BY HOUR(DATETIME)

HAVING HOUR >= 9 AND HOUR <= 19
ORDER BY HOUR(DATETIME)
```


문제 출처 [입양 시각 구하기1]  

[입양 시각 구하기1]: https://programmers.co.kr/learn/courses/30/lessons/59412

 

## 입양 시각 구하기(2)

보호소에서는 몇 시에 입양이 가장 활발하게 일어나는지 알아보려 합니다. 09:00부터 19:59까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요. 이때 결과는 시간대 순으로 정렬해야 합니다.

##### 예시

SQL문을 실행하면 다음과 같이 나와야 합니다.
|HOUR|COUNT|
|---|---|
|0|0|
|1|0|
|2|0|
|3|0|
|4|0|
|5|0|
|6|0|
|7|3|
|8|1|
|9|1|
|10|2|
|11|13|
|12|10|
|13|14|
|14|9|
|15|7|
|16|10|
|17|12|
|18|16|
|19|2|
|20|0|
|21|0|
|22|0|
|23|0|

  
### 풀이  


조건1 09:00부터 19:59까지  
조건2 각 시간대별로 입양이 몇 건이나 발생했는지 조회 
조건3 시간대 순으로 정렬

```
SET @hour := -1; -- 0부터
SELECT (@hour := @hour + 1) as HOUR,
(SELECT COUNT(*) FROM ANIMAL_OUTS WHERE HOUR(DATETIME) = @hour) as COUNT
FROM ANIMAL_OUTS
WHERE @hour < 23
```


문제 출처 [입양 시각 구하기2]  

[입양 시각 구하기2]: https://programmers.co.kr/learn/courses/30/lessons/59413

 