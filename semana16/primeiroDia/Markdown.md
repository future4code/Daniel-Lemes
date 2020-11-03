### EXERCÍCO 1

*a. Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*

RESPOSTA: VARCHAR É COMO UMA STRING ;DATE É PRA DATA E NOT NULL NÃO PODE SER NULO

*b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*
RESPOSTA: DATABASES MOSTRA AS DATABASES DISPONIVEIS E SHOW TABLES MOSTRA TODAS AS TABELAS

*c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando `DESCRIBE Actor` e explique os resultados.* 
RESPOSTA: MOSTRA TODAS AS RESPOSTAS


### EXERCÍCIO 2
A=>
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
 1200000,
  "1963-08-23", 
  "female"
);
B=> key PRIMARY é uma chave primária.só pode ter uma

C=> está faltando birth_date e gender

d=> estava faltando o campo name

e=>  o campo de birth_date estava errado

### EXERCÍCIO 3

A=> 
002	Glória Pires	1200000	1963-08-23	female
003	Fernanda Montenegro	300000	1929-10-19	female
005	Juliana Paes	719333	1979-03-26	female
007	Joyce	4000200	1986-05-05	female

B=>
salary 4000000

c=>
não retorna nada, porque não temos genders inavalid
d=> 
SELECT id, name, salary from Actor WHERE salary < 500000

E=>
SELECT id, name from Actor WHERE id = "002"
R: O name estava como nome

### EXERCÍCIO 4

A =>
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
O AND atendende as duas solicitações, ou seja, só vai aparecer as pessoas que tenham em seus nomes as letras A ou J e salary maior que 300000

B=>
WHERE name NOT LIKE "J%" AND name NOT LIKE "T%" AND salary > 350000;

c=>
WHERE name LIKE "%g%"

D=>
WHERE (name LIKE "%A%" OR name LIKE "%G%") AND  salary BETWEEN  350000 AND 900000;

### EXERCÍCIO 6

A=>
SELECT  id, name , avaliation  FROM movies
WHERE id = "004";

B=>
SELECT * FROM movies
WHERE name = "Tropa de Elite";

c =>
SELECT id, name, sinopse FROM movies
WHERE avaliation >= 7;

### EXERCÍCIO 7
A =>
SELECT *FROM movies
WHERE name LIKE "%vida%";

B => 
SELECT * FROM movies
WHERE (name LIKE "%flor%") OR sinopse LIKE "%flor%";
c =>
SELECT * FROM movies
WHERE lauch_date < "2020-10-26"

				


