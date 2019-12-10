---
title: DB 제작 - DB 트랜잭션
subTitle: prj016
menuTitle: Project
date: "2019-12-10 00:00:00"
category: "Project"
cover: prj.jpg
---

## 트랜젝션(transaction)

### 	트랜젝션란?

- 트랜젝션은 작업의 완전성을 보장해주는 것입니다. 
- 로직을 처리하는 도중 에러가 발생한다면 진행되던 로직 전체를 취소하고 다시 처음부터 시작하도록 합니다.
- 즉 트랜젝션은 하나의 로직이 완전히 처리가 되도록 하는 것입니다.
- 사용자의 입장에서 작업의 논리적 단위로 이해 가능하고, 시스템 입장에서는 데이터들을 접근 또는 변경하는 프로그램의 단위가 됩니다.

### 트랜젝션 적용

- 트랜젝션을 적용하고 싶은 로직을 START TRANSACTION과 COMMIT 구문으로 감싸줍니다.

```sql
CREATE DEFINER=`sariputa`@`%` PROCEDURE `info_saver`(
	IN `in_bj_num` INT,
	IN `in_bj_name` VARCHAR(50),
	IN `in_bj_img_url` VARCHAR(50),
	IN `in_bj_cre_date` DATE,
	IN `in_bj_platform` INT,
	IN `in_bj_url` VARCHAR(50)

)
BEGIN
	DECLARE bj_num int(11);

	DECLARE result varchar(20) default 'Save';
	DECLARE exist_bj_num int(3);

	SET exist_bj_num = (SELECT bj_num
								FROM info
								WHERE bj_num = in_bj_num);

	IF exist_bj_num != 0
	THEN SET result = 'Aleady exist';
	END IF;

	IF result = in_bj_name THEN
		START TRANSACTION; /* 트랜젝션이 실행되도록 한다. COMMIT까지의 로직의 완전성이 보장. */
		INSERT INTO info VALUES (in_bj_num, in_bj_name, in_bj_img_url, in_bj_cre_date, in_bj_platform, in_bj_url);
		COMMIT; /* COMMIT은 정상적으로 처리되어 확정 한다는 것, COMMIT을 하게 되면 트랜젝션의 처리과정이 모두 반영되어 하나의 트랜젝션과정이 종료 됨.*/
	END IF;

	SELECT result;
```



### 참고 사이트

[트랜젝션 이란](https://k39335.tistory.com/28)

[트랜젝션 이란](https://gh0stsp1der.tistory.com/25)