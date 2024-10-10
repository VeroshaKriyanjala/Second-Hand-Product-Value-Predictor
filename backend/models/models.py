from pydantic import BaseModel

class User(BaseModel):
    id : str
    firstname:str
    lastname:str
    email:str   



class Vehicles(BaseModel):
    user_id:str
    type:str
    brand:str
    model:str
    color:str
    fuel:str
    state:str
    mileage:float
    year:str  
    price:float  
    sold:bool 

