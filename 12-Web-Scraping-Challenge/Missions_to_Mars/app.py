# import libraries
from flask import Flask, render_template
from flask_pymongo import PyMongo
import pandas as pd 
import scrape_mars

# create Flask app
app = Flask(__name__)

# Use PyMongo for Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/app.py")

# create route that for the index.html template
@app.route("/")
def echo():
     # Find data
    m_facts = mongo.db.collection.find_one()
    #Return templated data
    return render_template("index.html", mars=m_facts)

@app.route("/scrape")
def scrape():
    # Run the scrape function
    mars_data = scrape_mars.scrape_all()

    # Update the Mongo database using update and upsert=True
    mongo.db.collection.update({}, mars_data, upsert=True)

    # Redirect back to home page
    return redirect("/", code=302)



if __name__ == "__main__":
    app.run(debug=True)
