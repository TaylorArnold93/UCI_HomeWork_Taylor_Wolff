import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine 
from sqlalchemy import func

from flask import Flask, jsonify

import datetime as dt 


