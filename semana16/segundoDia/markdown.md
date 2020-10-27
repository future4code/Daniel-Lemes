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
