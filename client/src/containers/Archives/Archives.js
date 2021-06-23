import React, { Component } from 'react';
import './Archives.modules.scss';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
// import Auxiliary from '../../hoc/Auxiliary';

class Archives extends Component {
	removeDuplicatesHandler = (array) => {return array.filter((a, b) => array.indexOf(a) === b)}

	render() {
		let showAuthor =  this.props.fetchedPosts.map(post => {
			return post.author
		})
		showAuthor = this.removeDuplicatesHandler(showAuthor);
		
		let years = this.props.fetchedPosts.map(post => {
			const d = new Date(post.date);
			const year = d.getFullYear();
			return year
		})
		years = this.removeDuplicatesHandler(years)
		years = years.reverse()
		console.log('years: ' + years)

        let archives = <p style={{textAlign: 'center'}}>Something went wrong!</p> 
		if (!this.props.error) {		
			archives = years.map(year => {
				const yearData = this.props.fetchedPosts.filter( post => {
					const d = new Date(post.date);
					const postYear = d.getFullYear()
					return (postYear === year)
				})
	
				let months = yearData.map(post => {
					const d = new Date(post.date);
					const month = d.getMonth()
					return month
				})
	
				months = this.removeDuplicatesHandler(months)
				months = months.sort(function(a, b){return a-b}).reverse()
				console.log('months in year: ' + months)
	
				let showMonths =  months.map( month => {
					const m = [ "January", "February", "March", "April", "May", "June", 
					"July", "August", "September", "October", "November", "December" ];
					
					const monthData = yearData.filter( post => {
						const d = new Date(post.date);
						const postMonth = d.getMonth()
						return (postMonth === month)
					})
					const showTitles = monthData.map( post => {
						const titles = post.title
					return <li key={post._id}>{titles}</li>
					})
	
					return (
						<ul key={month}>
							{m[month]}
							<ul>
								{showTitles}
							</ul>
						</ul>
					)
				})
	
				return 	(
					<ul key={year}>
						{year}
						<ul>
							{showMonths}
						</ul>
					</ul>			
				)
			})
		}
		return (
			<div className="Archives">
				<p className="ArchiveTitle">Contributors:</p>					
				<ul>
					{showAuthor}
				</ul>
				<p className="">Blog Archive:</p>
				{archives}
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
		posts: state.blog.posts,
		fetchedPosts: state.blog.fetchedPosts,
		fetchedPostsByYear: state.blog.fetchedPostsByYear,
		fetchedPostsByMonth: state.blog.fetchedPostsByMonth,
		featuredPost: state.blog.featuredPost,
		
    }
}

const mapDispatchToProps = dispatch => {
    return {
		onFetchPosts:  () => dispatch( actions.fetchPosts()),
		onfetchPostsByYear: (year) => dispatch( actions.fetchPostsByYear(year)),
		onfetchPostsByMonth: () => dispatch( actions.fetchPostsByMonth()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Archives);