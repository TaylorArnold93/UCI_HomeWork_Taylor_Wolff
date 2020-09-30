# Importing the Library Folders
import os
import csv

# Creating the path for PyBank CSV
csvpath = os.path.join("..", "Resources", "budget_data.csv")
with open('budget_data.csv', 'r') as csvfile:
        csvreader = csvreader(csvfile, delimiter = ',')
        csv_header = next(csvfile)

# Setting the PyBank Variables and creating an empty list to add the Budget_Data.csv Values 

total_months = 0
total_profit_loss = 0
total_differences = 0
greatest_monthly_profit = 0
lowest_monthly_profit = 0

#  add the values to the empty CSV list

for row in csvreader:
        total_months.append(row[0])
        total_profit_loss.append(int(row[1]))
for i in range(len(profit)-1):
        change_profit.append(profit[i+1]-profit[i])

# Understanding the min and max profits from the csv file
greatest_increase_profit = max(total_differences)
lowest_monthly_profit = min(total_differences)

# Understanding the min and max of the dates 
increase = date[total_months.index(max(greatest_increase_profit))]
decrease = date[total_months.index(min(lowest_monthly_profit))]

# Summary of Financial Analysis 

print("Financial Analysis")
print(f"Total Months:{len(total_months)}")
print(f"Total: ${sum(total_profit_loss)}")
print(f"Average Change: {round(sum(total_differences)/len(total_profit_loss),2)}")
print(f"Greatest Increase in Profits: {total_months[month_increase]} (${(str(increase))})")
print(f"Greatest Decrease in Profits: {total_months[month_decrease]} (${(str(decrease))})")    

# Output Text file
output = os.path.join(".", 'output.txt')
with open(output, "w") as new:
output.txt("Financial Analysis")
output.txt(f"Total Months:{len(total_months)}")
output.txt(f"Total: ${sum(total_profit_loss)}")
output.txt(f"Average Change: {round(sum(total_differences)/len(total_profit_loss),2)}")
output.txt(f"Greatest Increase in Profits: {total_months[month_increase]} (${(str(increase))})")
output.txt(f"Greatest Decrease in Profits: {total_months[month_decrease]} (${(str(decrease))})")  
