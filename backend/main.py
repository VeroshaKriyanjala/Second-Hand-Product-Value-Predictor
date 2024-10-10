from fastapi import FastAPI
from config.config import database
from models.models import User,Vehicles
from fastapi.middleware.cors import CORSMiddleware 

app = FastAPI()

origins = [
    'http://localhost:3000'
]

#add midldleware
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

@app.post('/add-user',tags=["user"])
async def add_user(user: User):
    result = await database["users"].insert_one(user.dict())
    return "success"

@app.get('/get_user/{id}',tags=["user"])
async def get_user(id:str):
    user = await database["users"].find_one({"id": id})
    if user:
        user['id'] = str(user['_id'])  # Convert ObjectId to string
        return User(**user)
     

@app.post('/add-vehicles',tags=["vehicles"])
async def add_vehicle(vehicle:Vehicles):
    result = await database["vehicles"].insert_one(vehicle.dict())
    return "success"
    

@app.get('/vehicles',tags=["vehicles"])
async def get_vehicle():
    vehicles = []
    vehicles_cursor = database["vehicles"].find()
    async for  vehicle in vehicles_cursor:
        vehicles.append(Vehicles(**vehicle))
        
    return vehicles

@app.get('/get-vehicles-userid/{id}',tags=["vehicles"])
async def get_vehicle_by_user_id(id:str):
    vehicles = []
    vehicles_cursor = database["vehicles"].find({"user_id":id})
    async for vehicle in vehicles_cursor:
        vehicles.append(Vehicles(**vehicle))

    return vehicles    
    
@app.post('/addvehicle',tags=["vehicles"])
async def addNewVehicle(request:Vehicles):
    database["vehicles"].insert_one(request.dict())
    return "success"    

