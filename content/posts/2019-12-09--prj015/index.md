---
title: DB 제작 - DB 프로시저
subTitle: prj015
menuTitle: Project
date: "2019-12-09 00:00:00"
category: "Project"
cover: prj.jpg
---

## 프로시저

### 	프로시저란?

- 프로시저에 대해 잘 몰랐으므로 프로시저에 대한 간단한 개념 이해부터 하고 시작하였다.
- 저장 프로시저란: 여러 SQL문을 하나의 SQL 문처럼 정리하여 'CALL X X'라는 명령으로 실행할 수 있게 만든 것을 저장 프로시저라고 합니다. 
- 함수처럼 사전에 준비 해둔 많은 명령들을 자동으로 실행할 수 있기 때문에, 작업의 효율을 높일 수 있습니다.

### 프로시저 만들기

- 프로시저를 작성할 때는 다음과 같이 CREATE PROCEDURE 명령을 사용합니다.
- 다음은 제가 간단히 만들어본 프로시저 입니다.
- 함수의 생성과 거의 비슷했습니다.

```mysql
 CREATE PROCEDURE `info_saver`( /* 프로시저명을 정의 합니다. 여기선 info_saver 입니다. */
	IN `in_bj_num` INT,		/* 프로시저에서 사용될 인자들을 정의 합니다. */
	IN `in_bj_name` VARCHAR,
	IN `in_bj_img_url` VARCHAR,
	IN `in_bj_cre_date` DATE,
	IN `in_bj_platform` INT,
	IN `in_bj_url` VARCHAR
)

BEGIN	/* 프로시저에서 사용될 로직입니다. */
	DECLARE bj_num int;	/* bj_num라는 변수를 사용 */
	DECLARE result varchar default 'Save';	/* default로 'Save'를 사용 */
	DECLARE exist_bj_num int;

	SET exist_bj_num = (SELECT bj_num FROM info WHERE bj_num = in_bj_num); /* SET은 변수를 정의할 때 사용 */

	IF exist_bj_num != 0	/* if문도 동일하게 사용가능 */
	THEN SET result = 'Aleady exist';
	END IF; /* if문이 끝남을 의미 */

	IF result = in_bj_name THEN
		START TRANSACTION; /* 트랜젝션 사용 */
			INSERT INTO info VALUES (in_bj_num, in_bj_name, in_bj_img_url, in_bj_cre_date, in_bj_platform, in_bj_url); /* 인자들을 받아서 저장 */
		COMMIT; /* 트랜젝션이 끝남을 의미 */
	END IF;

	SELECT result; /* 프로시저가 끝나면 result를 반환 */
```

- 다음 블로깅에서는 트랜잭션에 대해 알아보겠습니다.



### 참고 사이트

[프로시저 만들기](https://zorba91.tistory.com/29)

[프로시저의 장단점](https://12bme.tistory.com/54)

[저장 프로시저의 의미와 작성 방법 상세한 설명 장황하게](http://webs.co.kr/index.php?mid=DBProgramming&document_srl=3312981)