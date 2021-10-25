-- Draft schema 
--Draft schema for week 1

CREATE TABLE olympic_athletes (
	athlete_url TEXT,
    athlete_full_name TEXT NOT NULL,
	first_game TEXT,
	athlete_year_birth DECIMAL,
	athlete_medals TEXT, 
	games_participations DECIMAL,
	bio TEXT
);

CREATE TABLE olympic_hosts (
	slug_game VARCHAR PRIMARY KEY, 
	game_end_date VARCHAR NOT NULL,
	game_start_date VARCHAR NOT NULL,
	game_location VARCHAR NOT NULL,
	game_name VARCHAR NOT NULL, 
	game_season VARCHAR NOT NULL,
	game_year INT

);

CREATE TABLE olympic_results (
	discipline_title VARCHAR,
	event_title VARCHAR,
	slug_game VARCHAR,
	participant_type VARCHAR,
	medal_type VARCHAR, 
	athletes VARCHAR,
	rank_equal VARCHAR,
	rank_position VARCHAR,
	country_name VARCHAR PRIMARY KEY, 
	country_code VARCHAR,
	country_3_letter_code VARCHAR,
	athlete_url VARCHAR, 
	athlete_full_name VARCHAR,
	value_unit VARCHAR, 
	value_type VARCHAR,
	FOREIGN KEY (athlete_full_name) REFERENCES olympic_athletes (athlete_full_name),
	FOREIGN KEY (slug_game) REFERENCES olympic_hosts (slug_game)
);

CREATE TABLE olympic_medals (
	discipline_title TEXT,
	slug_game TEXT,
	event_title TEXT,
	event_gender TEXT,
	medal_type TEXT PRIMARY KEY, 
	participant_type TEXT,
	participant_title TEXT,
	athlete_url TEXT,
	athlete_full_name TEXT, 
	country_name TEXT,
	country_code TEXT,
	country_3_letter_code TEXT, 
	FOREIGN KEY (athlete_full_name) REFERENCES olympic_athletes (athlete_full_name),
	FOREIGN KEY (country_name) REFERENCES olympic_results (country_name),
	FOREIGN KEY (slug_game) REFERENCES olympic_hosts (slug_game)
);


