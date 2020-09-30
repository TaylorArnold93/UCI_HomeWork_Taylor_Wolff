# Importing the Library Folders
import os
import csv

# Creating the path for PyBank CSV
csv_path = os.path.join("Resources", "budget_data.csv")
with open('csv_path', 'r') as csv_file:
        open('output_analysis.txt' 'w') as text_file:

        budget_data = csv.reader(csv_file, delimiter = ',')
        budget_data_header = next(csv_file)

# Setting the PyBank Variables and creating an empty list to add the Budget_Data.csv Values 

total_months = list 0
total_profit_loss = list 0
average_profit_loss_date = dict 0
greatest_monthly_profit = dict 0
lowest_monthly_profit = dict 0
i = 0

#  add the values to the empty CSV list

for row in budget_data:
        total_months.append(row[0])
        total_profit_loss.append(int(row[1]))

        if i = 0
                average_profit_loss_date[0] = total_months[i]
        else 
                average_profit_loss_date[total_profit_loss[i]] - total_profit_loss[i-1]] = total_months[i]

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
