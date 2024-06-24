from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = ""

# Create a new client and connect to the server
client = MongoClient(uri)

def create_database(client, db_name):
    db = None
    try:
        db = client[db_name]
        print(f"Database {db_name} created!!")
    except Exception as e:
        print(e)
    return db


db_name = "plannerDB"  # name of your database
db = create_database(client, db_name)

def create_collection(db, collection_name):
    collection = None
    try:
        collection = db[collection_name]
        print(f"Collection {collection_name} created!!!")
    except Exception as e:
        print(e)
    return collection


def insert_records(collection, records):
    rows = None
    try:
        rows = collection.insert_many(records)
        print(f"{len(rows.inserted_ids)} records added successfully")
    except Exception as e:
        print(e)
    return rows

def close_connection(client):
    if client:
        client.close()
        print("Connection closed!!")
