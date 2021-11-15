import React from 'react';
import './Archives.modules.scss';
import ShowYears from './ShowYears/ShowYears';

const Archives  =(props)=> {
	const removeDuplicatesHandler = (array) => {return array.filter((a, b) => array.indexOf(a) === b)}
	let showAuthor =  props.posts.map(post => {return post.author})
	showAuthor = removeDuplicatesHandler(showAuthor)
	let archives = <p style={{textAlign: 'center'}}>Something went wrong!</p> 
	if (!props.error) {archives =<ShowYears posts= {props.posts} loadData={props.loadData}/>}
	return (
		<div className="Archives">
			<p className="ArchiveTitle">Contributors: {showAuthor}</p>
			
			<p className="">Blog Archive:</p>
			{archives}
		</div>
	)
}

export default Archives;