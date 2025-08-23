from fastapi import APIRouter, Query, Depends
from geopy.distance import geodesic
from data_handler import *
from models import PaginationParams

router = APIRouter()

def get_pagination_parameters(
    skip: int = Query(0, ge=0),
    limit: int = Query(3, gt=0)
) -> PaginationParams:
    return PaginationParams(skip=skip, limit=limit)

@router.get("/health-centers")
def get_healthcenters(
    lat: float, 
    lon: float, 
    pagination: PaginationParams = Depends(get_pagination_parameters)
):
    user_location = (lat, lon)
    skip = pagination.skip
    limit = pagination.limit

    healthcenters = load_healthcenters()
    total_count = len(healthcenters)
    
    for h in healthcenters:
        h_coords = (h["latitude"], h["longitude"])
        h["distance_km"] = geodesic(user_location, h_coords).km

    sorted_healthcenters = sorted(healthcenters, key=lambda x: x["distance_km"])
    paginated_centers = sorted_healthcenters[skip : skip + limit]

    return{
        "total_count": total_count,
        "skip": skip,
        "limit": limit,
        "items": paginated_centers
    }