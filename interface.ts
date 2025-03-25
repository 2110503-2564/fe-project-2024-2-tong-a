export interface BookingItem {
  apptDate: string,
  user: string,    
  campground:string
}

export interface BookingJson {
  success:boolean,
  count: number,
  pagination: Object,
  data: Booking[]
}

export interface Campground {
  _id: string,
  name: string,
  address: string,
  district: string,
  province: string,
  postalcode: string,
  tel: string,
}

export interface Booking {
  _id:string
  apptDate: string
  user: string
  campground: Campground
}

export interface CampJson {
  success:boolean
  count: number
  pagination: Object
  data: Campground[]
}

export interface OneCampJson {
  success:boolean
  data: Campground
}

export interface User{
  _id:string
  name:string
  email:string
  role:string
  password:string
}

export interface UserJson{
  success:boolean
  token:string
}
