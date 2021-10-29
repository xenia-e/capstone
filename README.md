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
 
 

# **Team roles for First Segment**:

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

We have built a basic machine learning model to take in sample data and test accuracy using a Random Forest Classifier. Please find the code [here](https://github.com/xenia-e/capstone/blob/main/MachineLearning/Olympics_Machine_Learning_Model.ipynb).


### Questions about the model:

**Which model did you choose and why?** 
* We chose the Random Forest Classifier, a supervised ensemble learning method for classification and regression that takes in many small decision trees for training for more accurate input. 

* We chose this model because we have structured tabular data and because we know what we are predicting, we can use a supervised learning model.

* We are also working on testing and training a neural network model. We are still in the process of execution here.

**How are you training your model?**
* X: Age, Gender, Weight, Height, Country
* y: Rank (Medal)

* After choosing our features, we have split to training and testing sets, then scaled the data for the model

#### What is the model's accuracy? 
* Using the Balanced Random Forest Classifier, we received a balanced accuracy score of 0.74


