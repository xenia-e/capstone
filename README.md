LC 
# **Team NaN: Olympic Athletes**


## Overview of the analysis:

### **Selected topic**

Olympic Athletes

## **Questions the team hopes to answer with the data**: 

"Can we use predict an athlete’s chances of winning a medal based on their physical features?" We hope to further our analysis and find interesting correlations between the athlete's physical profile and the country's performance history. 
 

### **Reason we selected the topic**: 

Data is an important part of the sports industry. Not only can data analytics help teams win games, but these statistics can also help improve player performance, prevent injuries and encourage fans to attend games. Through this analysis, our team seeks to determine if it is possible to predict an athlete's performance based on personal features.
 

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
 
 

# **Team roles**:

![Team roles](https://github.com/xenia-e/capstone/blob/readme_proposal/Report_images/Team_roles.png)


### Communication protocol

To accomplish the goals of this project, the Nan team has placed a communication protocol to promote effective communication within the team as follows:
- **Rapid communication channel**: The first step of communication is to a Slack a message for the team members. Through this group, we have daily check-ins and we follow up questions or emergency comments regarding the progress of the project. 

- **Zoom meetings**: We host multiple team meetings each week and discuss progress and the requirements for each role. 

- **Team meeting notes**: We decided to record the team meeting highlights and next steps to stay on the same understanding of the project’s progress. 

- **Github**: Our team uses Git as the platform to record the individual and team progress on the project. 

# Database provisional outline 

![Insert provisional schema here](https://github.com/xenia-e/capstone/blob/main/Database%20Schema/Provisional_ERD.png)



# Machine Learning Model Outline

Using data from the Olympic games from 1900 to 2016, we are using a Random Forest Classifier to predict if Olympic athletes will earn a medal based on their physical attributes. Please find the code [here](https://github.com/xenia-e/capstone/blob/main/MachineLearning/Olympics_Machine_Learning_Model.ipynb).


### Questions about the model:

**Which model did you choose and why?** 
We need to visualize our data to explore it and determine the best statistical test and training model to use.

We will be using a supervised machine learning model because we already know what data we are trying to predict.

If the data is structured tabular data, we would like to use a Random Forest Classifier. This is an ensemble learning method for classification and regression that take in many small decision trees for training for a more accurate output.

We would also like to use a neural network and compare the accuracy and results.

Pre-Processing:
Body types vary based on sport, so to improve our model's accuracy, we filtered our data to only look at gymnastics.
Binned countries with less than 100 entries to "Other" category
Dropped Name, Team, Sport, Event and Medal columns as these are not needed for our model
Encoded Sex, NOC and Games as these are object data

**How are you training your model?**
X: Sex, Age, Height, Weight, NOC, Games, BMI, Team Wins, Wins Per Member
y: Win (yes or no)
We chose these because we are looking at physical features. We kept NOC (team) and games (year) because these also determine physical attributes.

#### What is the model's accuracy? 
* We are using this model to classify whether or not a person will earn a medal based on their physical attributes. Due to our data's linear relationship, this model is useful for regression analysis and classification. We can also easily view the relative importance of our input features. This will help to determine the most important features in the training of our model. Lastly, the small trees prevent us from overfitting our model.
* Limitations: If there are too many trees, it can slow the algorithm. We must check our features to ensure they are important to our model and the model runs effectively.
* Balanced Accuracy Score: 85%


