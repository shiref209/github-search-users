import React from "react";
import ChartExample from "./ChartExample";
import { useUserContext } from "../context/context";

const StarsChart=()=>{
    const {reposList}=useUserContext();
    // if (reposList){
        let stars=reposList.reduce((total,item)=>{
            const {stargazers_count,name}=item;

            return total[name]={...total,label:item.name,value:item.stargazers_count}
        },{})
        stars=Object.values(stars).sort((a,b)=>{
            return b.value-a.value
        }).slice(0,5)
        console.log(stars)
        return <ChartExample data={stars}/>
}

export default StarsChart