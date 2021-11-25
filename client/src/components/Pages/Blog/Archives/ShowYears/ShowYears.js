import React from "react";
import ShowMonths from "../ShowMonths/ShowMonths";

const ShowYears = (props)=>{
    const removeDuplicatesHandler = (array) => {return array.filter((a, b) => array.indexOf(a) === b)}
    // Array of years
    let years = props.posts.map(post => {
        const d = new Date(post.date);
        const year = d.getFullYear();
        return year
    })
    years = removeDuplicatesHandler(years)
    years = years.sort((a,b)=>{return a-b})
    // List all posts in a Year

    const showYears = years.map(year => {
        const yearData = props.posts.filter( post => {
            const d = new Date(post.date);
            const postYear = d.getFullYear()
            return (postYear === year)
        })
        let show
        year === years[years.length-1]
        ? show = true
        : show = false
        //console.log('show = ',show)
        return  <ShowMonths 
                    show     = {show}
                    key      = {year}
                    year     = {year}
                    posts    = {yearData}
                    loadData = {props.loadData}
                />
    })
    return showYears
}
export default ShowYears