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


--Create a new table from the joined tables--

CREATE TABLE athletes_games as
(
SELECT
    a.ID,
	a.Name,
	a.Sex,
	a.Age,
	a.Height,
	a.Weight,
	a.Team,
	a.NOC,
	a.Games,
	a.Sport,
	a.Event,
	a.Medal,
	a.Win,
	a.BMI,
	a.Team_wins,
	a.Win_per_member,
	g.Year,
	g.Season,
	g.City
FROM athletes_medals AS a
INNER JOIN Games AS g
    ON g.games = a.games
);
