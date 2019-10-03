import React, { Fragment } from 'react'
import BlogSingle from './BlogSingle'

const Blog = () => {
    return (
        <Fragment>
		<div className="section-vcardbody section-page" id="page-blog">
			<div className="section-blog">

	            <h2 className="section-title">Blog</h2>

				<div className="blog-posts">

					<div className="blog-item">
						<div className="blog-item-wrapper">

							<div className="blog-item-thumb">
								<a href="single.html" className="loadPost"><img src="img/blog1.jpg" alt=""/></a>
							</div>

							<div className="blog-item-infos">

								<div className="blog-item-title-wrapper">
									<h2 className="blog-item-title title-border"><a href="single.html" className="loadPost">How to succeed in meetings</a></h2>
								</div>

								<div className="blog-item-description">
									<p><a href="single.html" className="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
								</div>

								<div className="blog-item-link">
									<a href="single.html" className="btn btn-default loadPost">See More</a>
								</div>

							</div>

						</div>
					</div>

					<div className="blog-item">
						<div className="blog-item-wrapper">

							<div className="blog-item-thumb">
								<a href="single.html" className="loadPost"><img src="img/blog2.jpg" alt=""/></a>
							</div>

							<div className="blog-item-infos">

								<div className="blog-item-title-wrapper">
									<h2 className="blog-item-title title-border"><a href="single.html" className="loadPost">10 tips to improve your laptop</a></h2>
								</div>

								<div className="blog-item-description">
									<p><a href="single.html" className="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
								</div>

								<div className="blog-item-link">
									<a href="single.html" className="btn btn-default loadPost">See More</a>
								</div>

							</div>

						</div>
					</div>

					<div className="blog-item">
						<div className="blog-item-wrapper">

							<div className="blog-item-thumb">
								<a href="single.html" className="loadPost"><img src="img/blog3.jpg" alt=""/></a>
							</div>

							<div className="blog-item-infos">

								<div className="blog-item-title-wrapper">
									<h2 className="blog-item-title title-border"><a href="single.html" className="loadPost">News of the week</a></h2>
								</div>

								<div className="blog-item-description">
									<p><a href="single.html" className="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
								</div>

								<div className="blog-item-link">
									<a href="single.html" className="btn btn-default loadPost">See More</a>
								</div>

							</div>

						</div>
					</div>

					<div className="blog-item">
						<div className="blog-item-wrapper">

							<div className="blog-item-thumb">
								<a href="single.html" className="loadPost"><img src="img/blog4.jpg" alt=""/></a>
							</div>

							<div className="blog-item-infos">

								<div className="blog-item-title-wrapper">
									<h2 className="blog-item-title title-border"><a href="single.html" className="loadPost">How to be a leader</a></h2>
								</div>

								<div className="blog-item-description">
									<p><a href="single.html" className="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
								</div>

								<div className="blog-item-link">
									<a href="single.html" className="btn btn-default loadPost">See More</a>
								</div>

							</div>

						</div>
					</div>

					<div className="blog-item">
						<div className="blog-item-wrapper">

							<div className="blog-item-thumb">
								<a href="single.html" className="loadPost"><img src="img/blog5.jpg" alt=""/></a>
							</div>

							<div className="blog-item-infos">

								<div className="blog-item-title-wrapper">
									<h2 className="blog-item-title title-border"><a href="single.html" className="loadPost">Tips to talk in public</a></h2>
								</div>

								<div className="blog-item-description">
									<p><a href="single.html" className="loadPost">Designed by Norway-based practice Snhetta, in collaboration with local firm EHDD, the 10-story concrete structure will compliment SFMOMA’s original...</a></p>
								</div>

								<div className="blog-item-link">
									<a href="single.html" className="btn btn-default loadPost">See More</a>
								</div>

							</div>

						</div>
					</div>

				</div>

				<div className="section-pagination">
					<div className="row">
						<div className="col-xs-12">
							<span className="pagination-numbers">
								<a href="#">1</a>
								<a href="#">2</a>
								<a href="#">3</a>
								<a href="#">4</a>
								<a href="#">5</a>
								<a href="#">6</a>
							</span>
						</div>
					</div>								
				</div>
			</div>			
		</div>
        <BlogSingle />
        </Fragment>
    )
}

export default Blog
