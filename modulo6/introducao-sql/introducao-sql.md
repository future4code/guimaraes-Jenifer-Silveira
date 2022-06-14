USE `guimaraes-4211274-jenifer-silveira`;

# Exercicio 1
# a) VARCHAR indica que irá receber uma string, PRIMARY KEY é a chave primaria, chave única na tabela, NOT NULL indica que a coluna nao pode ser nula
#DATE indica que irá receber uma data (YYYY-MM-DD)
# b) SHOW DATABASES mostra todos os banco de dados de temos no workbenck e SHOW TABLES mostra todas as tabelas criadas
# c) DESCRIBE Actor mostra os tipos e restrições que existem nos valores da tabela.

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
values(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);
#Exercicio 2
# a)
INSERT INTO Actor(id, name, salary, birth_date, gender)
values(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

# b)
#Acusou erro de Primary Key duplicada
INSERT INTO Actor(id, name, salary, birth_date, gender)
values (
"002",
"Grazi Massafera",
5000000,
"1982-06-28",
"female"
);

# c) O numero de coluna não é o mesmo que o de valores
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

# d) O numero de valores é maior que o de colunas e o campo nome nao possue um valor padrao

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

# e) Valor da data incorreto, deveria esta com "" por ser varchar(string)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

# f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT * FROM Actor;

SELECT id, salary from Actor;

SELECT id, name from Actor WHERE gender = "female";

SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

SELECT name, salary from Actor WHERE name = "Tony Ramos";

##Retornou na tabela o gender vazio, pois nao possue nenhuma query com esse valor
SELECT gender from Actor WHERE gender = "invalid";

SELECT id, name, salary from Actor WHERE salary > 500000;

# A coluna nome não existe na tabela
SELECT id, nome from Actor WHERE id = "002";

SELECT id, name from Actor WHERE id = "002";

# DESAFIOS

# Seleciona os atores que começam com a letra a ou j com um salario maior que 300000
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE ( name NOT LIKE "A%" OR name NOT LIKE "J%") AND salary >350000;

SELECT * FROM Actor 
WHERE ( name LIKE "%G%"OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

CREATE TABLE filmes (
	id INT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    sinopse VARCHAR(255) NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao INT
);

INSERT INTO filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(001, "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos 
anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um
 fenômeno inexplicável e trocam de corpos", "2006-01-06", 7);
 
INSERT INTO filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(002, "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, 
sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre
uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia
 que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);
 
INSERT INTO filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(003, "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada
 com Vadinho, que só quer saber de farras e jogatina nas boates.
 A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 08);
 
INSERT INTO filmes (id, titulo,sinopse, data_lancamento, avaliacao)
VALUES (004, "Tropa de Elite", "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, 
 é designado para chefiar uma das equipes que tem como missão apaziguar
 o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por 
 um substituto para ficar em seu lugar.", "2007-10-05", 09);
 
SELECT id, titulo, avaliacao FROM filmes WHERE id = "03";

SELECT id, titulo,sinopse, data_lancamento, avaliacao FROM filmes WHERE titulo = "Tropa de Elite";

SELECT id, titulo, sinopse FROM filmes WHERE avaliacao >= 7;

SELECT * FROM filmes WHERE titulo LIKE "%vida%";

SELECT * FROM filmes WHERE sinopse LIKE "%feliz%";

SELECT * FROM filmes WHERE sinopse LIKE "%saber%";

SELECT * FROM filmes WHERE data_lancamento < "2022-06-14";
 
SELECT * FROM filmes WHERE data_lancamento < "2022-06-14" AND (titulo LIKE "%Tropa%" OR sinopse LIKE "%capitão%") AND avaliacao > 7;
 
SELECT * FROM filmes WHERE DATA_LANCAMENTO < curdate();

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;