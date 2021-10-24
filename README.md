Soco Hernandez-Serrano 
# **Team NaN: Olympic Athletes**

## Overview of the analysis:

 - **Selected topic**: Olympic Athletes
 
 - **Reason they selected the topic**: Through this analysis the team seeks to determine if it is possible to predict an athlete performance based on public data. 
 
 - **Description of the source of data**: The data was source from Kaggle from an articule of Olympic Games that duelves on data from 1986 - 2021. The selected tables have data with more than 1,000 data points. 

 We are starting the project with four tables: 
 [Athletes](https://github.com/xenia-e/capstone/blob/SocoH/olympic_athletes.csv)

 ![Athletes](https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/athletes_data.png)

 [Hosts](https://github.com/xenia-e/capstone/blob/SocoH/olympic_hosts.csv) 

 ![Hosts](https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/host_data.png)

 [Medals] (https://github.com/xenia-e/capstone/blob/SocoH/olympic_medals.csv)

 ![Medals] (https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/medals_data.png)

 [Results] (https://github.com/xenia-e/capstone/blob/SocoH/olympic_results.csv)
 
 ! [Results] (https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/results_data.png)
 
 
 To find our datasets the team checked different sources related to the Olympic Athletes Analysis, fo example:
- Kaggle
    - https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results?select=noc_regions.csv
    - https://www.kaggle.com/samruddhim/olympics-althlete-events-analysis?select=athlete_events.csv
    - https://www.kaggle.com/piterfm/olympic-games-medals-19862018
    - https://www.kaggle.com/gregorut/videogamesales?select=vgsales.csv
    - https://www.kaggle.com/harti28/independence-and-interdependence-in-sports
    - https://www.kaggle.com/gpreda/tokyo-olympics-2020-tweets
    - https://www.kaggle.com/stpeteishii/covid19-cases-in-tokyo-2020-olympics
    - https://www.kaggle.com/ankitkalauni/tokyo-olympic-2021-clean-eda/notebook

- International Olympic Committee - Olympic World Library 
    - https://olympics.com/ioc/documents/olympic-games
    - https://library.olympics.com/Default/accueil.aspx

- Data world 
    - https://data.world/datasets/olympics
    - https://data.world/ian/olympic-medals-host-cities
    - https://data.world/sports/olympics
    - https://data.world/sports/women-in-the-olympic-games

 - **Questions the team hopes to answer with the data**:  The initial question the team has is "What goes into making the best Olympic athletes", we hope to further our analysis and find interesting correlations between the athlete's physical profile and the country's performance history.  

 - **Team role for the Asigment #1**:

 1. Square: The team member in the square role will be responsible for setting up the repository. This includes naming the repository and adding team members.

 2. Triangle: The team member in the triangle role is responsible for creating a simple machine learning model. 

 3. Circle: The team member in the circle role is in charge of the mockup database. This means you're using a SQL-based database, including an ERD of the database and a document pointing out how it is integrated into your database and how it works with the code. 

 4. X: The team member in the X role will focus on the technology side of the project. 

![https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/Team_roles.png]

### Communication protocol

To accomplish the goals of this project, the Nan team has placed a communication protocol to promote effective communication within the team. As follow:
- **Rapid communication channel**: The first step was to create a Slack group for the team members. Through this  group we have daily check-ins and we follow up questions or emergency comments regarding the progress of the project. 

- **Zoom meetings**: The team has agreed to meet based on the availability and the required tasks for each role. Currently we have met five times to discuss the requirements of Segment #1. 

- **Team meeting notes**: We decided to record the team meeting highlights and next steps to stay on the same understanding of the project’ progress. 

- **Github**: The team has agreed to use Git as the platform to record the individual and team progress on the project. 

### Database provisional outline 

![Insert provisional schema here]




CoriS
# Machine Learning Model Outline

We have built a basic machine learning model to take in sample data and test accuracy. Please find the code [here](https://github.com/xenia-e/capstone/blob/main/Olympics_Machine_Learning_Model.ipynb).

## Process:
1. Ask the question 
2. Description of column types
3. Import Libraries 
4. Load the data from the database 
5. Look at shape and summarize dataset 
6. Look at visualizations to explore the data
7. Pre-process the Data for our model
8. Encode Object Data 
9. Select features and targets
10. Scale the data
11. Split test and train 
12. Build our model (Random Forest Classifer and Neural Network)


### Questions:
What does the machine learning model look like? Supervised? Unsupervised? Is the data structred? How will you process the data for the machine learning model? What statistical test will you do? Roadmap for intentions. 

#### Which model did you choose and why? 
We need to visualize our data to explore it and determine the best statistical test and training model to use. 

We will be using a supervised machine learning model because we already know what data we are trying to predict.

If the data is structured tabular data, we would like to use a Random Forest Classifier. This is an ensemble learning method for classification and regression that take in many small decision trees for training for a more accurate output.

We would also like to use a neural network and compare the accuracy and results. 

#### How are you training your model? 
Statistical Test: TBD
X: Input Data from our DataFrame
Y: Medals

#### What is the model's accuracy? 
TBD

#### How does this model work? 
TBD

# capstone
final project of group 4 - to change this
