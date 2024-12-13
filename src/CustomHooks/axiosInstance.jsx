import { useContext } from "react"
import axios from "axios"
import dayjs from "dayjs";
import {jwtDecode} from "jwt-decode"
import { gatewayUrl } from "../components/urls";
import MainContext from "../context/context";


const baseURL = gatewayUrl

const useAxios = () => {
    const {authTokens,setAuthTokens,user,setUser} = useContext(MainContext)
    const authAxios = axios.create({
        baseURL,
        headers:{Authorization: `Bearer ${authTokens?.access}`}
    })

    authAxios.interceptors.request.use(async (req)=> {
        console.log('api is working')
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
        if (!isExpired) return req

        console.log('doing refresh')
        const response = await axios.post(`${baseURL}/auth/refresh/`,{
            refresh: authTokens?.refresh
        });

        localStorage.setItem('authTokens',JSON.stringify(response.data))
        setAuthTokens(response.data)
        setUser(jwtDecode(response.data.access))
        console.log(response)
        req.headers.Authorization = `Bearer ${response.data.access}`
    
        return req
    })
    return authAxios
}

export default useAxios