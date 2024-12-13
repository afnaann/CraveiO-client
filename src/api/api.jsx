import axios from "axios"
import { gatewayUrl } from "../components/urls"



export const fetchCategory = async () => {
    const { data } = await axios.get(`${gatewayUrl}/restaurant/category/`)
    return data
}


export const fetchRestaurantDishes = async (user_id) => {
    const { data } = await axios.get(`${gatewayUrl}/restaurant/menu/${user_id}/`)
    
    return data
}

export const fetchAllDishes = async (api) => {
    const { data } = await api.get(`${gatewayUrl}/restaurant/menu/`)
    return data
}

export const createCategory = async (newPost) => {
    const { data } = await axios.post(`${gatewayUrl}/restaurant/category/`,newPost)
    return data;
  };



export const createDish = async (formData) => {
    const { data } = await axios.post(`${gatewayUrl}/restaurant/menu/`,formData,{
        headers: {
            'Content-Type': 'multipart/form-data', 
        },
    })
    return data
}


export const addToCart = async (dish_id,user_id) => {
    const { data } = await axios.post(`${gatewayUrl}/orders/addtocart/`,{
        user_id:user_id,
        dish_id:dish_id
    })
    return data
}


export const ViewCart = async (user_id) => {
    const {data} = await axios.get(`${gatewayUrl}/orders/viewcart/${user_id}/`)
    return data
}


export const updateCartQuantity = async (product_id, newQuantity ,user_id) => {
    const {data} = await axios.post(`${gatewayUrl}/orders/quantity/`,{
        product_id : product_id,
        newQuantity : newQuantity,
        user_id : user_id
    })
    return data
}

export const listRestaurants = async () => {
    const {data} = await axios.get(`${gatewayUrl}/restaurant/join/`)
    return data
}
