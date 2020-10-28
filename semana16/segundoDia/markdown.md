### Exercício 1
a) A resposta da pergunta é: Exclui uma coluna.
b) A resposta é: altera o nome do coluna gender para sex
C) A resposta é : altera a quantidade de caracteres do gender

ALTER TABLE Actor CHANGE gender gender VARCHAR(255);


### Exercício 2

a) A resposta é:
```
 UPDATE Actor
SET 
	name = "Solange Frazão",
	birth_date = "1950-10-19"
WHERE id = "003";
```

b) A resposta é:
```
UPDATE Actor 
SET name = UPPER("juliana paes")
WHERE id = "005";

UPDATE Actor 
SET name = "Juliana Paes"
WHERE id = "005";
```

c) A resposta é:

```
UPDATE Actor 
SET 
name = "sandy",
salary = 500000,
birth_date = "2000-10-20",
gender = "female"
WHERE id = "005";
```

D) deu como válido, mas nada foi adicionado a tabela.

### Exercício 3
a) a Resposta é:
```
DELETE FROM Actor WHERE name = "daniel"
```
b) a resposta é: ninguém será deletado pq ninguém recebe esse valor.

```
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
```
### Exercício 4

a) a resposta é:
```
SELECT MAX(salary) FROM Actor;
```
b) a resposta é:
```
SELECT MIN(salary) FROM Actor
WHERE gender = "female";
```
c) a resposta é:
```
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```
d) a resposta é:
```
SELECT SUM(salary) FROM Actor;
```
### Exercício 5

a) a resposta é:
 ele conta a quantidades de females e males.

 b) a resposta é:
 ```
 SELECT id, name FROM Actor
ORDER BY name DESC;
```
c) a resposta é:
```
SELECT * FROM Actor
ORDER BY salary ASC;
```
 d) a resposta é:
 ```
 SELECT * FROM Actor
ORDER BY MAX(salary) 
LIMIT 3;
```
e) a resposta é:
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6

a) a resposta é:
```
ALTER TABLE movies
ADD playing_limit_date DATE;
```
b) a resposta é:
```
ALTER TABLE movies CHANGE avaliation avaliation FLOAT;

```
c) a resposta é:
```
UPDATE movies
SET
	playing_limit_date = "2020-12-20"
WHERE id = "003";

UPDATE movies
SET
	playing_limit_date = "2019-12-20"
WHERE id = "004"
```
d) a resposta é:
```
 UPDATE movies 
 SET sinopse = "qualquer coisa"
 WHERE id = "002";
 ```
 ### Exercício 7

 a)a resposta é:
 ```
  SELECT * FROM movies
 WHERE avaliation > 7.5 ;
 ```
 B) A RESPOSTA É:
 ```
  SELECT AVG(avaliation)
 FROM movies;
 ```
 C ) A RESPOSTA É:
 ```
  SELECT COUNT(*)
 FROM movies
 WHERE playing_limit_date > curdate();
 ```
 d) a resposte é:
 ```
  SELECT COUNT(*)
 FROM movies
 WHERE lauch_date < curdate()
 ```
 e) a resposta é:
 ```
 SELECT MAX(avaliation)
FROM movies
```
 f) a resposta é:
 ```
 SELECT MIN(avaliation)
FROM movies
```

 ### Exercício 7
 a)
 ```
 SELECT * FROM movies ORDER BY name;
 ```
 b)
 ```
 SELECT * FROM movies ORDER BY name LIMIT 2;
 ```
 c)
 ```
 SELECT * FROM movies
WHERE lauch_date < CURDATE() 
ORDER BY lauch_date DESC 
LIMIT 2;

```
d) 
```
SELECT * FROM movies
WHERE avaliation 
ORDER BY avaliation  DESC
LIMIT 2;
```