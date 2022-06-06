
const user_reducer=(state,action)=>{
    if (action.type==='GET_USER_DATA'){
        const {name,login,following,followers,location,bio,company}=action.payload
        return {...state,name,following,followers,location,bio,company,login,
            repos:action.payload.public_repos,
            gists:action.payload.public_gists,
            image:action.payload.avatar_url,
            twitter:action.payload.twitter_username,
            user_url:action.payload.html_url,
            link:action.payload.blog,
            userFound:true
        
        }
    }
    if (action.type==='USER_NOT_FOUND'){
        return {...action.payload}
    }
    if (action.type==='GET_FOLLOWERS'){
        return {...state,followersList:action.payload}
    }
    if (action.type==='GET_REPOS'){
        return {...state,reposList:action.payload}
    }
    return state
}

export default user_reducer;