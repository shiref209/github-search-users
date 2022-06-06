import React,{useContext, useEffect,useReducer} from "react";
import reducer from './reducer'
import axios from 'axios'

const url='https://api.github.com/users/'
const initialState={
    userFound:false,
    name:'',
    login:'',
    image:'',
    followers:0,
    gists:0,
    repos:0,
    following:0,
    location:'',
    twitter:'',
    user_url:'',
    bio:'',
    link:'',
    company:'',
    followersList:[]
}
const userContext=React.createContext()
export const UserProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const {login}=state;
    console.log('login',login)
    const searchUser=async (user)=>{
        try {
            const {data}=await axios.get(`${url}${user}`);
            dispatch({type:'GET_USER_DATA',payload:data})
            console.log(data);
            
            
            
        } catch (error) {
            dispatch({type:'USER_NOT_FOUND',payload:{...initialState}})
            console.log(error)
        }
    }
    const getFollowers=async (login)=>{
        if (!login){
            return
        }
        try {
            const {data}=await axios.get(`${url}${login}/followers`);
            console.log(data);
            const followersList=await data.map((item,index)=>{
                const requestedData={
                    name:item.login,
                    image:item.avatar_url,
                    link:item.html_url
                }
               return {...requestedData}
                
            })
            console.log(followersList)
            dispatch ({type:'GET_FOLLOWERS',payload:followersList})
        } catch (error) {
            console.log('followers',error)
        }
    }
    // useEffect(()=>{
    //     getFollowers(login)
    // },[login])
    return <userContext.Provider value={{...state,searchUser,getFollowers}}>{children}</userContext.Provider>
}
export const useUserContext=()=>{
    return useContext(userContext)
}