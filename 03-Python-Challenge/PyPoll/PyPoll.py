# Importing the Library Folders
import os
import csv

# Creating the path for PyPoll
election_csv = os.path.join("..", "Resources", "election_data.csv")

# Setting the PyPoll Variables 

candidates = ""
vote_count = {}
percentage_vote = {}
winner_votes = 0
winner = ""
total_votes = 0

with open(election_csv) as csvfile:
    csvreader = csv.reader(csvfile, delimiter=",")

# add total votes
for row in csvreader:
	total_votes = total_votes + 1
	candidates = row[2]
	if row[2] not in candidates:
		candidates.append(row[2])
		vote_count[row[2]] = vote_count[row[2]] + 1


# Finding the winner of the election
for person, vote_count in candidates.items():
    percentage_vote[person] = '{0:.0%}'.format(vote_count / total_votes)
    if vote_count > winner_votes:
        winner_votes = vote_count
        winner = person

# Zip lists together
election_csv = zip(total_votes, candidates, vote_count, percentage_vote, winner, winner)
# Set variable for output file
output_file = os.path.join("election_data_results.csv")

#  Open the output file
with open(output_file, "w") as datafile:
    writer = csv.writer(datafile)

    # Write the header row
    writer.writerow(["Election Results", "Total Votes:", "candidates", "Winner:"])

    # Write in zipped rows
    writer.writerows(election_csv)