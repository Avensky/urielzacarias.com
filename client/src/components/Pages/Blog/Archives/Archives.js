import React from 'react';
import classes from './Archives.module.scss';
import ShowYears from './ShowYears/ShowYears';

const Archives  =(props)=> {
	const removeDuplicatesHandler = (array) => {return array.filter((a, b) => array.indexOf(a) === b)}
	let showAuthor =  props.posts.map(post => {return post.author})
	showAuthor = removeDuplicatesHandler(showAuthor)
	showAuthor = showAuthor.filter((x)=>{return x !== undefined})
	let archives = <p style={{textAlign: 'center'}}>Something went wrong!</p> 
	if (!props.error) {archives =<ShowYears posts= {props.posts} loadData={props.loadData}/>}
	return (
		<div className={classes.Archives}>
			<div className={classes.ArchiveTitle}>Contributors</div>
			{showAuthor.map((author)=> {
				console.log('author',author)
				return <li 
					key={author} 
					className={classes.Author}>
						{author}
				</li>
			})}
			
			<p className="">Blog Archive</p>
			{archives}
		</div>
	)
}

export default Archives;