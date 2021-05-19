---
layout: post
title:  "SQL SELECT"
description: 프로그래머스 코딩테스트 연습 SELECT
date:   2021-05-19 18:22:00 +0900
categories: SQL MySQL
---
모든 레코드 조회하기

조건1 ANIMAL_ID순으로 조회

```
SELECT * FROM ANIMAL_INS
ORDER BY ANIMAL_ID;
```

역순 정렬하기

조건1 NAME, DATETIME컬럼으로 출력
조건2 ANIMAL_ID의 역순

```
SELECT NAME, DATETIME
FROM ANIMAL_INS
ORDER BY ANIMAL_ID DESC
```

아픈 동물 찾기

조건1 아픈동물만
조건2 아이디 순으로 조회
조건3 ANIMAL_ID, NAME만

```
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION = 'Sick';
```

어린 동물 찾기

조건1 동물 보호소에 들어온 동물 중 젊은 동물
조건2 아이디와 이름을 조회
조건3 아이디 순으로 조회

```
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION != 'Aged' -- WHERE INTAKE_CONDITION <> 'Aged'
ORDER BY ANIMAL_ID
```