# Importing the Library Folders
import os
import csv

# Creating the path for PyPoll
csvpath = os.path.join("..", "Resources", "election_data.csv")

# Setting the PyPoll Variables 

total_votes = 0
candidates = []
vote_counter = []
Winner_Vote_Count= []
Winner_Name = 0
i = 0

with open(csvpath, 'r') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=",")

    for row in csv_reader:
        row_count = row_count + 1
        if row[2] not in candidates:
            candidates.append(row[2])
            vote_counter.append(0)
        else:
            vote_counter[candidates.index(row[2])] = voter_counter[candidates.index(row[2]) + 1
# Results of the final count of the votes casted
        vote_counter = 1
# Finding the winner of the election





# Creating the Election Results Winner 
election_results = f"""
	Election Results
	----------------------
	Total Votes = {votes_counter}
	----------------------
	{candidates_list[0]}: {candidates_percentage[candidates_list[0]]}% ({candidates_votes[candidates_list[0]]})
	{candidates_list[1]}: {candidates_percentage[candidates_list[1]]}% ({candidates_votes[candidates_list[1]]})
	{candidates_list[2]}: {candidates_percentage[candidates_list[2]]}% ({candidates_votes[candidates_list[2]]})
	{candidates_list[3]}: {candidates_percentage[candidates_list[3]]}% ({candidates_votes[candidates_list[3]]})
	----------------------
	Winner: {popular_candidates}
	----------------------
	"""
	# Write the election results as a text file
	text_file.write(election_results)

	# Print the election results to the terminal
	print(election_results)