import React from "react";
import ChartExample from "./ChartExample";
import { useUserContext } from "../context/context";
import Doughnut from "./Doughnut";
import styles from './LanguageChart.module.css'
import Column from "./Column";
import Bar from "./Bar";

const Repos=()=>{
    const {reposList}=useUserContext();
        const languages=reposList.reduce((total,item)=>{
            const {language,stargazers_count}=item;
            if (!language){
                return total
            }
            if (!total[language]){
                total[language]={label:language,value:1,stars:stargazers_count}
            }
            else {
                total[language]={...total[language],
                value:total[language].value + 1 ,
                stars:total[language].stars + stargazers_count
            }
            }
            return total
        },{})

        const mostUsedLanguages=Object.values(languages).sort((a,b)=>{
            return b.value-a.value
        }).slice(0,5)
        
        // stars per language
        const languageStars=Object.values(languages).sort((a,b)=>{
            return b.stars-a.stars})
            .map((item)=>{
                return{...item,value:item.stars}}
                )
            .slice(0,5)

// forks and stars per repo
let {stars,forks}=reposList.reduce((total,item)=>{
    const {name,stargazers_count,forks}=item;
    total.stars[stargazers_count]={label:name,value:stargazers_count};
    total.forks[forks]={label:name,value:forks}
    return total;
},{
    stars:{},
    forks:{}
})
const mostStarred=Object.values(stars).sort((a,b)=>b.value-a.value).slice(0,5);
const mostForked=Object.values(forks).sort((a,b)=>b.value-a.value).slice(0,5).reverse();

        return <section className={styles.container}>
            <Doughnut data={languageStars}/>
            <ChartExample data={mostUsedLanguages}/>
            <Column data={mostStarred}/>
            <Bar data={mostForked}/>
            
            </section>
}
export default Repos