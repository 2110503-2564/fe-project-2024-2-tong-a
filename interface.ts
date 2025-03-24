interface VenueItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    dailyrate: number,
    __v: number,
    id: string
  }
  
  interface VenueJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: VenueItem[]
  }

  interface BookingItem {
    apptDate: string,
    user: string,
    campground:string
    
  }

  interface BookingJson {
    success:boolean,
    count: number,
    pagination: Object,
    data: Booking[]
}

interface Campground {
  _id: string,
  name: string,
  address: string,
  district: string,
  province: string,
  postalcode: string,
  tel: string,
  picture: string,
  dailyrate: number,
  __v: number,
  id: string
}

interface Booking {
  _id:Object;
  apptDate: string;
  user: string;
  campground: Campground; // campground is an object of type Campground
}

interface CampJson {
  success:boolean,
  count: number,
  pagination: Object,
  data: Campground[]
}
