

# **Team NaN: Olympic Athletes**

### Index
- [Overview of Analysis](#overview-of-the-analysis)
  - [Presentation](#presentation)
- [Database Outline](#database-outline)
- [Machine Learning Model](#machine-learning-model)
- [Dashboard](#dashboard)
  - [Tableau](#The-graphs-and-dashboard-were-created-in)
  - [Interactive element outline](#interactive-element-outline)
- [Tools](#tools) 
  
&ensp;

### Team roles:
![Team roles](https://github.com/xenia-e/capstone/blob/main/Report_images/Team_roles_w2.png)
&ensp;

### Communication protocol:

To accomplish the goals of this project, the Nan team has placed a communication protocol to promote effective communication within the team as follows:
- **Rapid communication channel**: The first step of communication is to a Slack a message for the team members. Through this group, we have daily check-ins and we follow up questions or emergency comments regarding the progress of the project. 

- **Zoom meetings**: We host multiple team meetings each week and discuss progress and the requirements for each role. 

- **Team meeting notes**: We decided to record the team meeting highlights and next steps to stay on the same understanding of the project’s progress. 

- **Github**: Our team uses Git as the platform to record the individual and team progress on the project. 

&ensp;

# **Overview of the analysis**

### [Presentation Slides](https://docs.google.com/presentation/d/1U52iM4x94LprbDG-jespGqqpqwhPP5E583R7NAPjWAU/edit#slide=id.gf795edcdee_0_325)
&ensp;

### **Selected topic**:

Olympic Athletes

## **Questions we hopes to answer with the data**: 

Can we use predict an athlete’s chances of winning a medal based on their physical features? We hope to further our analysis and find an interesting correlations between the athlete's physical profile and the country's performance history. 
 
### **Reason we selected the topic**: 

Data is an important part of the sports industry. Not only can data analytics help teams win games, but these statistics can also help improve player performance, prevent injuries and encourage fans to attend games. Through this analysis, our team seeks to determine if it is possible to predict an athlete's performance based on personal features.

### **Description of the source of data**: 

The data was sourced from Kaggle from an article on Olympic Games that delves on data from 120 years of olympic history. The selected tables have data with more than 1,000 data points. The selected two tables were cleaned up using Pandas (Jupyter Notebook) and were explored using PostgreSQL (PgAdmin). 

Datasets cleaned: [Athletes](https://github.com/xenia-e/capstone/blob/main/Resources/Final_athlete_clean_data.csv) and [Games](https://github.com/xenia-e/capstone/blob/main/Resources/olypic_games_clean.csv)

&ensp;

# Database outline 

![Insert schema here](https://github.com/xenia-e/capstone/blob/main/Database%20Schema/ERD.png)

&ensp;


# Machine Learning Model:

Using data from the Olympic games from 1900 to 2016, we are using a Random Forest Classifier to predict if Olympic athletes will earn a medal based on their physical attributes. Please find the code [here](https://github.com/xenia-e/capstone/blob/main/MachineLearning/Olympics_Machine_Learning_Model.ipynb).

#### Description of data preprocessing  
* Body types vary based on sport, so to improve our model's accuracy, we filtered our data to only look at gymnastics. 
* Binned countries with less than 100 entries to "Other" category
* Dropped Name, Team, Sport, Event, Games and Medal columns as these are not needed for our model 
* Converted height and weight from object data to numeric data
* Encoded Sex and NOC as these are object data 

#### Description of feature engineering and the feature selection, including their decision making process  
* X: Sex, Age, Height, Weight, NOC, Year, BMI, Team Wins, Wins Per Member
* y: Win (yes or no) 
* We chose these features because we are looking at the physical attributes of the athletes. We kept NOC (team) and year because these also determine physical attributes. We kept Team Wins and Wins Per Member as these assist with our machine learning model accuracy. 
* We removed Height and Weight data as it is used as a calculation for BMI, but found that our model reduced -1% accuracy score, so we decided to leave the additional Height and Weight data as support for our machine learning model.

#### Description of how data was split into training and testing sets  
* We used the following code to split into training and testing sets:
* X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42, stratify=y)

#### Model Choice - Balanced Random Forest Classifier: 
* We are using this model to classify whether or not an olympic athlete will earn a medal based on their physical attributes. Due to our data's linear relationship, this model is useful for regression analysis and classification. We can also easily view the relative importance of our input features. This will help to determine the most important features in the training of our model. Lastly, the small trees prevent us from overfitting our model.  
* Limitations: If there are too many trees, it can slow the algorithm. We must check our features to ensure they are important to our model and the model runs effectively. 

#### Description of how the model has been trained so far 
The model was trained to take in athlete physical attribute data and identify whether or not an athlete will receive a medal based on their physical attributes. To train the model, we took the following steps:
1. Split the preprocessed data into a training and testing dataset
2. Create a StandardScaler instances
3. Fit the StandardScaler
4. Scale the data
5. Resample the training data with the BalancedRandomForestClassifier
6. Calculate the balanced accuracy score

We took additional steps to review how well the model performed:
1. Display the confusion matrix
2. Display the imbalanced classification report
3. List the features sorted in descending order by feature importance

#### Additional training that has taken place:
* We hope to further our analysis and find interesting correlations between the athlete's physical profile and the country's performance history.
* Attempted to add 'Year', 'City', and 'Season' from games table, but the added data reduced the accuracy score from 85% to 76%. 
* Attempted to add 'Year' and bin to reduce number of unique values, but struggled with data type changes in the model. 
* Attempted to filter on Gender, but the added filtering reduced the accuracy score from 85% to 70%. 
* Filtered by sport to view machine model learning accuracy for different sports. See results below.

#### Accuracy Score Results on Athletes_Medals data: We took the top 3 sports with greatest participation records:
1. Gymnastics Athletes Balanced Accuracy Score: 85% 
2. Swimming Balanced Accuracy Score: 85%
3. Athletics Balanced Accuracy Score: 71%  - Note ML accuracy drops because there is greater variance in height and weight due to the variety of events in athletics compared to gymnastics and swimming.s

#### Model Results: 
* Based on the recall score, our model can correctly predict if an Olympic gymnast will receive a medal 84% of the time.
* With an 85% balanced accuracy score, we can conclude that on Olympic gymnast's physical features are correlated with whether or not they will receive a medal.


&ensp;

# Dashboard
In our dashboard we feature a detailed analysis of gold medal winning teams and the association to the team’s average BMI. 

From the pool of all Olympic Sports we follow twenty of the oldest and most popular olympic sports. From these sports we pick Gymnastics, Athletics and Swimming to compare. 

- The graphs and dashboard were created in [Tableau Public](https://public.tableau.com/app/profile/ilias.rafailidis/viz/Olympians_16363169289870/Dashboard1?publish=yes)  

- [Draft of the interactive map](https://xenia-e.github.io/capstone/) was created using **javascript** and **Leaflet** library. The original dataset was preprocessed and converted into GeoJSON files. 
A map presenting visualizations of countries Olympic achievements and outline of typical Olympic Medal Winner in certain country.  
&ensp;  

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
&ensp;


## Tools
To create the final dashboard we will work with JavaScript, CSS and Bootstrap.  
&ensp;


[Back to Index](#index)