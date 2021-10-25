Soco Hernandez-Serrano 
# **Team NaN: Olympic Athletes**

# **Presentation**

## Overview of the analysis:

 - **Selected topic**: Olympic Athletes
 
 - **Reason they selected the topic**: Through this analysis the team seeks to determine if it is possible to predict an athlete performance based on public data. 
 
 - **Description of the source of data**: The data was source from Kaggle from an articule of Olympic Games that duelves on data from 1986 - 2021. The selected tables have data with more than 1,000 data points. 

 We are starting the project with four tables: 
 
 [Athletes](https://github.com/xenia-e/capstone/blob/SocoH/olympic_athletes.csv)

 ![Athletes](https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/athletes_data.png)

 [Hosts](https://github.com/xenia-e/capstone/blob/SocoH/olympic_hosts.csv) 

 ![Hosts](https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/host_data.png)

 [Medals](https://github.com/xenia-e/capstone/blob/SocoH/olympic_medals.csv)
 
 ![Medals](https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/medals_data.png)

 [Results](https://github.com/xenia-e/capstone/blob/SocoH/olympic_results.csv)
 
 ![Results](https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/results_data.png)
 
 
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

![Team roles](https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/Team_roles.png)

### Communication protocol

To accomplish the goals of this project, the Nan team has placed a communication protocol to promote effective communication within the team. As follow:
- **Rapid communication channel**: The first step was to create a Slack group for the team members. Through this  group we have daily check-ins and we follow up questions or emergency comments regarding the progress of the project. 

- **Zoom meetings**: The team has agreed to meet based on the availability and the required tasks for each role. Currently we have met five times to discuss the requirements of Segment #1. 

- **Team meeting notes**: We decided to record the team meeting highlights and next steps to stay on the same understanding of the project’ progress. 

- **Github**: The team has agreed to use Git as the platform to record the individual and team progress on the project. 

# Database provisional outline 


![Insert provisional schema here](https://github.com/xenia-e/capstone/blob/main/Database%20Schema/Provisional_ERD.png)



# Machine Learning Model Outline

We have built a basic machine learning model to take in sample data and test accuracy using a Random Forest Classifier. Please find the code [here](https://github.com/xenia-e/capstone/blob/main/MachineLearning/Olympics_Machine_Learning_Model.ipynb).

### Questions about the model:

**Which model did you choose and why?** 
* We chose the Random Forest Classifier, a supervised ensemble learning method for classification and regression that takes in many small decision trees for training for a more accurate input. 

* We chose this model because we have structured tabular data and because we know what we are predicting, we can use a supervised learning model.

* We are also working on testing and training a neural network model. We are still in the process of execution here.

**How are you training your model?**
* X: Year, Reaction Time, Conditions, Country, Rank
* y: World Record Acheived

* After choosing our features, we have split to training and testing sets, then scaled the data for the model

#### What is the model's accuracy? 
* Using the Balanced Random Forest Classifier, we received a balanced accuracy score of 1.0



# capstone
final project of group 4 - to change this
