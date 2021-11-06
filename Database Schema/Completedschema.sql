--Schema for the Athletes table (final_athlete_clean_data)

CREATE TABLE athletes_medals(
 	ID INT,
	Name VARCHAR,
	Sex VARCHAR,
	Age INT,
	Height DECIMAL,
	Weight DECIMAL,
	Team VARCHAR,
	NOC VARCHAR,
	Games VARCHAR,
	Sport VARCHAR,
	Event VARCHAR,
	Medal VARCHAR,
	Win INT,
	BMI FLOAT,
	Team_wins INT,
	Win_per_member FLOAT
);


--schema for games table (Olypic_games_clean)

CREATE TABLE Games(
	ID INT,
	Games VARCHAR,
	Year INT,
	Season VARCHAR,
	City VARCHAR
);

-- join the tables using PgAdmin 
SELECT * from athletes as a
INNER JOIN games as g on g.games = a.games;

