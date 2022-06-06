import React from "react";
import ChartExample from "./ChartExample";
import { useUserContext } from "../context/context";

const LanguagesChart=()=>{
    const {reposList}=useUserContext();
    // if (reposList){
        let languages=reposList.reduce((total,item)=>{
            const {language}=item;
            if (!language){
                return total
            }
            if (!total[language]){
                total[language]={label:language,value:1}
            }
            else {
                total[language]={...total[language],
                value:total[language].value + 1 ,}
            }
            return total
        },{})
        languages=Object.values(languages).sort((a,b)=>{
            return b.value-a.value
        }).slice(0,5)
        console.log(languages)
        return <ChartExample data={languages}/>
}
export default LanguagesChart