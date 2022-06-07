import React from "react";
import ChartExample from "./ChartExample";
import { useUserContext } from "../context/context";
import Doughnut from "./Doughnut";
import styles from './LanguageChart.module.css'
import Column from "./Column";
import Bar from "./Bar";

const Repos=()=>{
    const {reposList}=useUserContext();
    // if (reposList){
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
        console.log(languages);

        const mostUsedLanguages=Object.values(languages).sort((a,b)=>{
            return b.value-a.value
        }).slice(0,5)
        console.log(languages)
        // stars per language
        const languageStars=Object.values(languages).sort((a,b)=>{
            return b.stars-a.stars
        }).map((item)=>{return{...item,value:item.stars}})
.slice(0,5)
console.log('stars',languageStars)
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
console.log('stars',mostStarred)
console.log('forks',mostForked)
        return <section className={styles.container}>
            <Doughnut data={languageStars}/>
            <ChartExample data={mostUsedLanguages}/>
            <Column data={mostStarred}/>
            <Bar data={mostForked}/>
            
            </section>
}
export default Repos