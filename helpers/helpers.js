import Cookies from "js-cookie";

export const saveAccessToken=(access_token)=>{
    Cookies.set("access token", access_token)
}

export const getAccessToken=()=>{
    Cookies.get("access_token")
}