import motor.motor_asyncio

# url = "mongodb+srv://verosha:<8qb#3buFkwsUAkV>@cluster0.yr7i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# client = motor.motor_asyncio.AsyncIOMotorClient(url)

# database = client["Second_Hand_Predictor"]




from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://verosha:EuWiIiHGj4ROv2XP@cluster0.yr7i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
database = client["Second_Hand_Predictor"]
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)