# Importing the Library Folders
import os
import csv

# Creating the path for PyBank CSV
csvpath = os.path.join("Resources", "budget_data.csv")
with open(csvpath, encoding='utf-8') as csvfile:
        csvreader = csv.reader(csvfile, delimiter=",")
        csvreader = next(csvfile)

# Setting the PyBank Variables and creating an empty list to add the Budget_Data.csv Values 

total_months = []
total_profit_loss = 0
average_profit_loss_date = 0
max_monthly_profit = 0
min_monthly_profit = 0

#  add the values to the empty CSV list

for row in csvreader:
    total_months.append(row[0])

# Understanding the revenue profit and loss
    total_profit_loss.append = int(row[1])

# Understanding the min and max
if(max_monthly_profit<int(row[1])):
    max_monthly_profit = int(row[1])
    max_monthly_profit = row[0]

if(min_monthly_profit<int(row[1])):
    min_monthly_profit = int(row[1])
    min_monthly_profit = row[0]


# Summary of Financial Analysis 

print("Financial Analysis")
print(f"Total Months:{len(total_months)}")
print(f"Total: ${sum(total_profit_loss)}")
print(f"Average Change: {round(sum(average_profit_loss_date)/len(total_profit_loss),2)}")
print(f"Greatest Increase in Profits: {total_months[max_monthly_profit]} (${(str(max_monthly_profit))})")
print(f"Greatest Decrease in Profits: {total_months[min_monthly_profit]} (${(str(min_monthly_profit))})")

file = open('budget_analysis.txt','w')

# Writing the election results with the help of file.writer (reference in output file)  
file.write("Financial Analysis")
file.write("\n-----------------------------------------------")
file.write("\nTotal Month: " + str(len(total_months)))
file.write("\nTotal: $" + str(total_profit_loss))
file.write("\nAverage Change : $" + str(round(total_profit_loss/len(total_months),2)))
file.write("\nGreatest Increase in Profits : " + str(max_monthly_profit) + " (" + str(max_monthly_profit) + ")")
file.write("\nGreatest Decrease in Profits : " + str(min_monthly_profit) + " (" + str(min_monthly_profit) + ")")


file.close()
