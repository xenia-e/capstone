--Schema for the Athletes table (final_athlete_clean_data)

CREATE TABLE athletes(
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
	Medal VARCHAR
);



--schema for games table (Olypic_games_clean)

CREATE TABLE Games(
	ID INT,
	Games VARCHAR,
	Year INT,
	Season VARCHAR, 
	City VARCHAR
);

-- you can use this query to import the csv file to your DB. it wont be affected by quatations and commas
COPY athletes FROM '/Users/xenia/Data Bootcamp/Analysis_Projects/capstone/Resources/athletes_data_clean.csv' WITH DELIMITER ',' CSV HEADER;