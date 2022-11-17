import React, {useState} from "react";
import ShowTitles from "../ShowTitles/ShowTitles";
import classes from './ShowMonths.module.scss';
import PropTypes from 'prop-types';

const ShowMonths = (props)=>{
    // Trigger rerender using state 
    const [show, setShow] = useState(props.show);

    // Toggle true or false
    const showToggleHandler = () => {setShow(!show);};

    const removeDuplicatesHandler = (array) => {return array.filter((a, b) => array.indexOf(a) === b);};

    let posts = props.posts;
    // Array of Months
    let months = posts.map(post => {
        const d = new Date(post.date);
        const month = d.getMonth();
        return month;
    });
    months = removeDuplicatesHandler(months);
    months = months.sort((a,b)=>{return a - b;});
//    months = months.sort(function(a, b){return a-b}).reverse()
    const m = [ "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December" ];
    //const monthName = months.map( month => {return m[month]})

    // Show or hide posts in a Year 
    let showMonths;
    show
        ? showMonths =  months.map( month => {
            let monthData = props.posts.filter( post => {
                const d = new Date(post.date);
                const postMonth = d.getMonth();
                return (postMonth === month);
            });
            monthData = monthData.sort((a, b) => {return new Date(a.date) - new Date(b.date);});
            let showMonth;
            month === months[months.length-1]
                ? showMonth = true
                : showMonth = false;
            console.log('showMonth = ', months);
            return  <ShowTitles 
                        show = {showMonth}
                        key = {month}
                        month = {month}
                        monthName = {m[month]}
                        posts = {monthData}
                        loadData = {props.loadData}
                    />;
        })
        : showMonths = null;

    // chage icon 
    let style;
    show ? style = "fa fa-caret-down" : style = "fa fa-caret-right";
	
    return  <div>
                <div onClick={showToggleHandler} className={classes.Year}>
                    <i className={[style, classes.Icon].join(' ')}/>
                    <div className={classes.YearName}>{props.year}</div>
                </div>
                <div className={classes.ShowMonths}>{showMonths}</div>
            </div>;
};

ShowMonths.propTypes = {
    show: PropTypes.any,
    posts: PropTypes.object,
    loadData: PropTypes.func,
    year: PropTypes.any,
};

export default ShowMonths;