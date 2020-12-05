# import libraries
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import pandas as pd 
import scrape_mars

# create Flask app
app = Flask(__name__)

# Use PyMongo for Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/app.py")

# create route that for the index.html template
@app.route("/")
def index():
    mars = mongo.db.mars.find_one()
    return render_template("index.html", mars = mars)

@app.route("/scrape")
def scrape():
    mars = mongo.db.mars 
    mars_table_data = scrape_mars.scrape()
    mars.update({}, mars_data, upsert=True)
    return redirect("/", code=302)

if __name__ == "__main__":
    app.run(debug=True)
