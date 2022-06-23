# Exercicio 1
# a) Vai alterar a tabela Actor deletando a coluna salary.
# b) Vai alterar a tabela Actor modificando a coluna gender para no máximo seis caracteres na string.
ALTER TABLE Actor MODIFY gender VARCHAR (100);

# Exercicio 2 
# a) 
UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10" WHERE id = "003";

# b) 
UPDATE Actor SET name = "JULIANA PAES" WHERE name= "Juliana Paes";

UPDATE Actor SET name = "Juliana Paes" WHERE name= "JULIANA PAES";

# c)
UPDATE Actor SET name = "Murilo Benicio", salary = 800000, birth_date = "1971-07-13", gender = "male"
WHERE id="005";

# d) Apareceu que foi sucesso porém zero linhas foram afetadas, porque o id 7 nao existe na tabela
UPDATE Actor SET name = "TONY RAMOS" WHERE id = "007";

# Exercicio 3
# a) Fiz com o nome Moacyr Franco porque tinha deletado no exercicio anterior a Fernanda Montenegro
DELETE FROM Actor WHERE name = "Moacyr Franco";

# b) 
DELETE FROM Actor WHERE (gender="male") AND salary > 100000;

# Exercicio 4
# a) 
SELECT MAX(salary) FROM Actor;

# b)
SELECT MIN(salary) FROM Actor WHERE gender = " female";

# c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

# d)
SELECT SUM(salary) FROM Actor;


# Exercicio 6 
# a) 
ALTER TABLE filmes ADD playing_limit_date DATE;

# b) 
ALTER TABLE filmes CHANGE avaliacao avaliacao FLOAT;

# c)
UPDATE filmes SET playing_limit_date = "2022-07-20" WHERE id = "002";

UPDATE filmes SET playing_limit_date = "2022-05-30" WHERE id = "004";

# d) QUANDO TENTA ALTERAR A SINOPSE DO ID QUE FOI DELETADO ELE DA SUCESSO PORÉM NÃO AFETA NENHUMA LINHA, POIS NAO EXISTE NA TABELA
DELETE FROM filmes WHERE id="001";


