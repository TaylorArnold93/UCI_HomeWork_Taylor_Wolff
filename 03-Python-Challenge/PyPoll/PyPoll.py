# Importing the Library Folders
import os
import csv

# Creating the path for PyPoll
csvpath = os.path.join("Resources","election_data.csv")

# Setting the PyPoll Variables 

total_votes = 0
candidates = ""
vote_count = {}
percentage_vote = {}
winner_votes = 0
winner = ""

with open(csvpath, encoding='utf-8') as csvfile:
    csvreader = csv.reader(csvfile, delimiter=",")

# add total votes
for row in csvreader:
    total_votes = total_votes + 1
    candidates = row[2]
    if row[2] not in candidates:
        candidates.append(row[2])
        vote_count[row[2]] = vote_count[row[2]] + 1

# Finding the winner of the election
for vote_count in candidates.items():
    percentage_vote = '{0:.0%}'.format(vote_count / total_votes)
    if vote_count > winner_votes:
        winner_votes = vote_count

# Printing the election results with the help of file.writer (reference in output file)
print(f"\nElection Results\n-------------------------------------------")
print(f"Total votes: {total_votes}")
print("-------------------------------------------")
    
for x in range(len(candidates)):
    percentage_vote = round((vote_count[x]/total_votes)*100,3)
    print(f"{candidates[x]}: {percentage_vote}% ({vote_count[x]})")
    if (winner_votes < vote_count[x]):
        winner_votes = vote_count[x]
        winner = candidates[x]
    for x in range(len(candidates)):
    	percentage_vote = round((vote_count[x]/total_votes)*100,3)

print("-------------------------------------------")
print(f"Winner: {winner}")
print("-------------------------------------------")

file = open('output.txt','w')

#Writing output to the file    
file.write("Election Results")
file.write("\n-------------------------------------------")
file.write("\nTotal votes:" + str(total_votes))
file.write("\n" + str(candidates[x]) +" : " + str(percentage_vote) + "% ("+ str(vote_count[x]) + ")")
file.write("\n-------------------------------------------")
file.write("\nWinner: " + str(winner))
file.write("\n-------------------------------------------")

file.close()