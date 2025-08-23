from fastapi import APIRouter, Query, Depends
from geopy.distance import geodesic
from data_handler import*
from models import PaginationParams

router = APIRouter()

def get_pagination_parameters(
    skip: int = Query(0, ge=0),
    limit: int = Query(3, gt=0)
) -> PaginationParams:
    return PaginationParams(skip=skip, limit=limit)

@router.get("/washrooms")
def get_washrooms(
    lat: float, 
    lon: float, 
    pagination: PaginationParams = Depends(get_pagination_parameters)
):
    user_location = (lat, lon)
    skip = pagination.skip
    limit = pagination.limit

    washrooms = load_washrooms()
    total_count = len(washrooms)
    for w in washrooms:
        w_coords = (w["latitude"], w["longitude"])
        w["distance_km"] = geodesic(user_location, w_coords).km

    sorted_washrooms = sorted(washrooms, key=lambda x: x["distance_km"])
    paginated_centers = sort[skip : skip + limit]

    return{
        "total_count": total_count,
        "skip": skip,
        "limit": limit,
        "items": paginated_centers
    }