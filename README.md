Soco Hernandez-Serrano 
# **Team NaN: Olympic Athletes**

# **Presentation**

## Overview of the analysis:

### **Selected topic**

Olympic Athletes
 
### **Reason they selected the topic**: 

Data is an important part of the sports industry. Not only can data analytics help teams win games, but these statistics can also help improve player performance, prevent injuries and encourage fans to attend games. Through this analysis, the team seeks to determine if it is possible to predict an athlete's performance based on personal features.
 
### **Description of the source of data**: 

The data was sourced from Kaggle from an article on Olympic Games that delves on data from 1986 - 2021. The selected tables have data with more than 1,000 data points. 

We are starting the project with four data sets: 
 
[Athletes](https://github.com/xenia-e/capstone/blob/SocoH/olympic_athletes.csv)

 ![Athletes](https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/athletes_data.png)

 [Hosts](https://github.com/xenia-e/capstone/blob/SocoH/olympic_hosts.csv) 

 ![Hosts](https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/host_data.png)

 [Medals](https://github.com/xenia-e/capstone/blob/SocoH/olympic_medals.csv)
 
 ![Medals](https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/medals_data.png)

 [Results](https://github.com/xenia-e/capstone/blob/SocoH/olympic_results.csv)
 
 ![Results](https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/results_data.png)
 
 
## **Questions the team hopes to answer with the data**: 

The initial question the team has is "Can we use machine leaning or model neuro net oto predict athlete’s chances of winning a medal?" We hope to further our analysis and find interesting correlations between the athlete's physical profile and the country's performance history. 

# **Team roles for First Segment**:

![Team roles](https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/Team_roles.png)

### Communication protocol

To accomplish the goals of this project, the Nan team has placed a communication protocol to promote effective communication within the team as follows:
- **Rapid communication channel**: The first step was to create a Slack group for the team members. Through this group, we have daily check-ins and we follow up questions or emergency comments regarding the progress of the project. 

- **Zoom meetings**: The team has agreed to meet based on the availability and the required tasks for each role. Currently, we have met five times to discuss the requirements of Segment #1. 

- **Team meeting notes**: We decided to record the team meeting highlights and next steps to stay on the same understanding of the project’s progress. 

- **Github**: The team has agreed to use Git as the platform to record the individual and team progress on the project. 

# Database provisional outline 

![Insert provisional schema here](https://github.com/xenia-e/capstone/blob/main/Database%20Schema/Provisional_ERD.png)



# Machine Learning Model:

Using data from the Olympic games from 1900 to 2016, we are using a Random Forest Classifier to predict if Olympic athletes will earn a medal based on their physical attributes. Please find the code [here](https://github.com/xenia-e/capstone/blob/main/MachineLearning/Olympics_Machine_Learning_Model.ipynb).

#### Pre-Processing: 
* Body types vary based on sport, so to improve our model's accuracy, we filtered our data to only look at gymnastics. 
* Binned countries with less than 100 entries to "Other" category
* Dropped Name, Team, Sport, Event and Medal columns as these are not needed for our model 
* Encoded Sex, NOC and Games as these are object data 

#### Feature Selection:
* X: Sex, Age, Height, Weight, NOC, Games, BMI, Team Wins, Wins Per Member
* y: Win (yes or no) 
* We chose these because we are looking at physical features. We kept NOC (team) and games (year) because these also determine physical attributes. 

#### Model Choice - Balanced Random Forest Classifier:
* We are using this model to classify whether or not a person will earn a medal based on their physical attributes. Due to our data's linear relationship, this model is useful for regression analysis and classification. We can also easily view the relative importance of our input features. This will help to determine the most important features in the training of our model. Lastly, the small trees prevent us from overfitting our model.  
* Limitations: If there are too many trees, it can slow the algorithm. We must check our features to ensure they are important to our model and the model runs effectively. 
* Balanced Accuracy Score: 85%


# Dashboard
* In our dashboard we feature a detailed analysis of gold medal winning teams and the association to the team’s average BMI. 

* From the pool of all Olympic Sports we follow twenty of the oldest and most popular olympic sports. From these sports we pick Gymnastics, Athletics and Swimming to compare. 

The graphs and dashboard were created in Tableau Public.
https://public.tableau.com/app/profile/ilias.rafailidis/viz/Olympians_16363169289870/Dashboard1?publish=yes

## Interactive element outline
In the next draft of our dashboard we aim to include the following **interactive element**: 

On the logo of the Olympic Games we will place an *input field* on each Olympic circle. 

One *input field* that asks for **country of birth** <br>
One *input field* that asks for your **gender**<br>
One *input field* that asks for your **age**<br>
One *input field* that ask for your **weight**<br>
One *input field* that asks for your **height**<br>

After entering the last input field the page automatically refreshes and produces a prediction on 
which sport you must practice should you choose to win a gold medal in the next Olympic Games. 

## Tools
To create the final dashboard we will work with JavaScript, CSS and Bootstrap. 
