import pymongo
import requests
from splinter import Browser
from bs4 import BeautifulSoup as bs
import pandas as pd
import time

# connecting to the mongodb
client = pymongo.MongoClient('mongodb://localhost:27017')
db = client.mars_db
collection = db.mars 

# execute the browser path
def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {'executable_path': 'chromedriver.exe'}
    return Browser('chrome', **executable_path, headless=False)

