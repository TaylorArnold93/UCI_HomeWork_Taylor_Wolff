While your data companions rushed off to jobs in finance and government, you remained adamant that science was the way for you. Staying true to your mission, you've joined Pymaceuticals Inc., a burgeoning pharmaceutical company based out of San Diego. Pymaceuticals specializes in anti-cancer pharmaceuticals. In its most recent efforts, it began screening for potential treatments for squamous cell carcinoma (SCC), a commonly occurring form of skin cancer.

As a senior data analyst at the company, you've been given access to the complete data from their most recent animal study. In this study, 249 mice identified with SCC tumor growth were treated through a variety of drug regimens. Over the course of 45 days, tumor development was observed and measured. The purpose of this study was to compare the performance of Pymaceuticals' drug of interest, Capomulin, versus the other treatment regimens. You have been tasked by the executive team to generate all of the tables and figures needed for the technical report of the study. The executive team also has asked for a top-level summary of the study results.

Instructions
Your tasks are to do the following:
Before beginning the analysis, check the data for any mouse ID with duplicate time points and remove any data associated with that mouse ID.
Use the cleaned data for the remaining steps.
Generate a summary statistics table consisting of the mean, median, variance, standard deviation, and SEM of the tumor volume for each drug regimen.
Generate a bar plot using both Pandas's DataFrame.plot() and Matplotlib's pyplot that shows  the number of total mice for each treatment regimen throughout the course of the study.
Generate a pie plot using both Pandas's DataFrame.plot() and Matplotlib's pyplot that shows the distribution of female or male mice in the study.
Calculate the final tumor volume of each mouse across four of the most promising treatment regimens: Capomulin, Ramicane, Infubinol, and Ceftamin. Calculate the quartiles and IQR and quantitatively determine if there are any potential outliers across all four treatment regimens.
Using Matplotlib, generate a box and whisker plot of the final tumor volume for all four treatment regimens and highlight any potential outliers in the plot by changing their color and style.
Select a mouse that was treated with Capomulin and generate a line plot of tumor volume vs. time point for that mouse.
Generate a scatter plot of mouse weight versus average tumor volume for the Capomulin treatment regimen.
Calculate the correlation coefficient and linear regression model between mouse weight and average tumor volume for the Capomulin treatment. Plot the linear regression model on top of the previous scatter plot.







Matplotlib Analysis

• When reviewing the various data of the Pymaceautical’s Matplotlib, we over saw various data with various drug regimens. We also looked that the various tumor sizes and looked at the gender of each mouse. This data analysis oversaw the drug regimens of the mice with various tumor sizes and to find the best drug regimen based upon the treatment rate but also by the size of the tumor after the different drug regimens were used. 

•	When looking at the data we did see a more positive rate that was more effective with the drug regimen with Capomulin and Ramicane. We saw that the drugs were more effective, and they had a better rate of decreasing the tumors within a short span of time. 

•	We oversaw the various linear regression models to find the correlations between eh average tumor size and the mouses weight. We had to find if the mouses weight played a factor into the average tumor size and whether the drug regimen Capomulin used played a role in shrinking the tumor or if with more weight gain there was a chance of the tumor size also increasing. In this analysis, we did find that the mice that used Capomulin drug did have an increase in tumor size as they gained weight. 

•	In another analysis take, we created a line plot of a mouse that was using the Capomulin drug regimen for treatment. We used “m601” for the analysis and we saw how the sizes of the tumor changed over a time period of treatment and within a certain amount of days such as 30 days, we saw that the tumor did indeed shrink and had an effective treatment plan with this mouses tumor. 

•	We also looked at the gender distribution of the mice and found that we used more male mice than female, but we did not find whether the treatment rate was more effective on females versus male mice. Although we used 51% of male mice, we were able to see a more effective approach on the distribution.

	References

Boxplot demo — Matplotlib 3.3.2 documentation. (n.d.). Matplotlib: Python plotting — Matplotlib 3.3.2 documentation. https://matplotlib.org/gallery/pyplots/boxplot_demo_pyplot.html#sphx-glr-gallery-pyplots-boxplot-demo-pyplot-py

Boxplots in matplotlib: Markers and outliers. (n.d.). Stack Overflow. https://stackoverflow.com/questions/17725927/boxplots-in-matplotlib-markers-and-outliers

How to add some statistics to the plot in Python. (n.d.). Stack Overflow. https://stackoverflow.com/questions/34243737/how-to-add-some-statistics-to-the-plot-in-python

How to plot value counts for each subset in matplotlib/seaborn? (n.d.). Stack Overflow. https://stackoverflow.com/questions/63940682/how-to-plot-value-counts-for-each-subset-in-matplotlib-seaborn

Scipy.stats.linregress — SciPy v1.5.2 reference guide. (n.d.). Numpy and Scipy Documentation — Numpy and Scipy documentation. https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.linregress.html
