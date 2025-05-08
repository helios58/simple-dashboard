import pandas as pd
from sqlalchemy import create_engine
import urllib.parse

username = "postgres"
password = urllib.parse.quote("kalli")  
host = "localhost"
database = "simple-dashboard"

engine = create_engine(f"postgresql+psycopg2://{username}:{password}@{host}/{database}")

read_opts = {"encoding": "utf-8", "low_memory": False}

articles = pd.read_csv("articles.csv", **read_opts)
brands = pd.read_csv("brands.csv", **read_opts)
categories = pd.read_csv("categories.csv", **read_opts)
colors = pd.read_csv("colors.csv", **read_opts)
influencers = pd.read_csv("influencers.csv", **read_opts)
sales = pd.read_csv("sales.csv", **read_opts)
subcategories = pd.read_csv("subcategories.csv", **read_opts)

articles.to_sql("articles", engine, if_exists="replace", index=False)
brands.to_sql("brands", engine, if_exists="replace", index=False)
categories.to_sql("categories", engine, if_exists="replace", index=False)
colors.to_sql("colors", engine, if_exists="replace", index=False)
influencers.to_sql("influencers", engine, if_exists="replace", index=False)
sales.to_sql("sales", engine, if_exists="replace", index=False)
subcategories.to_sql("subcategories", engine, if_exists="replace", index=False)
