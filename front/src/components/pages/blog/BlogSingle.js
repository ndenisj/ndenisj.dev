import React from "react";

const BlogSingle = () => {
  return (
    <div
      className="section-vcardbody section-page section-page-single"
      id="page-blog-single"
    >
      <div className="section-blog-single">
        <div id="postHere">SINGLE POST HERE</div>

        <div className="" id="section-home">
          <div className="blog-single-post" id="blogPost">
            <div className="post-header-image">
              <img src="img/blog3.jpg" alt="" />
            </div>

            <h2 className="blog-single-title title-border">
              This is your post title!
            </h2>

            <div className="blog-single-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                sodales varius sagittis. Proin a arcu vitae turpis congue
                facilisis. Quisque a lectus pretium, sagittis augue in,
                fringilla risus. Quisque elementum, ante a maximus commodo, dui
                metus imperdiet mi, sit amet tempor lectus erat ac orci. Mauris
                suscipit rhoncus lobortis. Quisque tincidunt nisi libero. Fusce
                nec turpis quis enim finibus porta. Donec eget sapien ac leo
                tempor elementum a at ante. In volutpat placerat quam non
                cursus. Nunc rutrum nisl at diam maximus tempor. Fusce eget
                commodo lorem. In et fringilla tellus. Donec vitae laoreet
                lacus. Donec varius, velit at varius ornare, augue orci posuere
                enim, in dignissim quam dui nec turpis. Donec molestie
                sollicitudin elit eget porttitor.
              </p>
              <p>
                {" "}
                Sed dignissim facilisis ex. Maecenas mattis velit orci, ut
                rhoncus tellus dapibus ut. Ut placerat tortor sed felis
                pellentesque pharetra. Etiam commodo elementum mollis. Donec
                aliquam sem id odio porttitor sodales id id arcu. Maecenas
                vulputate dictum nulla, a vestibulum purus varius id. Cras non
                mollis enim.
              </p>
              <p>
                Donec cursus massa sed sapien laoreet, eget vulputate urna
                interdum. Proin quis neque sem. Curabitur accumsan mollis
                malesuada. Donec nec ultrices ante. Nam sed elit aliquet,
                convallis augue in, rhoncus ante. Integer vulputate lectus dui,
                et dictum magna commodo et. Curabitur scelerisque finibus tortor
                pellentesque iaculis. Ut varius aliquet suscipit. Praesent
                commodo quam tempor, volutpat felis ut, imperdiet nulla. Sed eu
                libero sed nisl semper sagittis. Nunc odio arcu, convallis a
                nulla nec, egestas auctor lectus. Morbi finibus justo commodo
                turpis laoreet commodo. Sed auctor vel orci eu tincidunt.
              </p>
              <p>
                Vivamus non odio egestas, condimentum nunc nec, venenatis
                tellus. Morbi tempor sagittis scelerisque. Donec hendrerit
                dictum lobortis. Nulla eget lacus commodo, malesuada metus sed,
                faucibus odio. Ut convallis diam eu consequat vehicula. Nulla
                massa neque, consectetur quis nunc quis, fringilla viverra
                lorem. Cras auctor at risus pellentesque elementum. Pellentesque
                odio magna, fringilla non fermentum in, luctus dapibus mauris.
                Mauris commodo est eget sem maximus, vitae tempor purus
                facilisis. Cras accumsan diam at sem egestas, eget lobortis quam
                vestibulum. Sed rutrum interdum dolor, at commodo magna feugiat
                ac. Integer euismod dignissim feugiat. Aliquam erat volutpat.
                Vestibulum ac libero sit amet erat molestie pulvinar nec ut
                urna. Vestibulum dapibus pretium mauris ac porttitor. Aliquam
                sagittis velit et placerat
              </p>
            </div>

            <div className="blog-comments">
              <h2 className="title2 blog-comments-title">
                <i className="fa fa-commenting"></i>&nbsp; Comments
              </h2>

              <div className="well">
                <h4>Leave a Comment:</h4>
                <form>
                  <div className="form-group">
                    <textarea className="form-control" rows="3"></textarea>
                  </div>
                  <button type="submit" className="btn btn-1c">
                    Submit
                  </button>
                </form>
              </div>

              <hr />

              <div className="media">
                <a className="pull-left" href="#">
                  <img className="media-object" src="img/avatar.png" alt="" />
                </a>
                <div className="media-body">
                  <h4 className="media-heading">
                    John Rex
                    <small>August 25, 2014 at 9:30 PM</small>
                  </h4>
                  Comments? I love comments!
                </div>
              </div>

              <div className="media">
                <a className="pull-left" href="#">
                  <img className="media-object" src="img/avatar.png" alt="" />
                </a>
                <div className="media-body">
                  <h4 className="media-heading">
                    Homer Simpson
                    <small>August 25, 2014 at 9:30 PM</small>
                  </h4>
                  This blog is amazing!
                  <div className="media">
                    <a className="pull-left" href="#">
                      <img
                        className="media-object"
                        src="img/avatar.png"
                        alt=""
                      />
                    </a>
                    <div className="media-body">
                      <h4 className="media-heading">
                        Margie Simpson
                        <small>August 25, 2014 at 9:30 PM</small>
                      </h4>
                      We are totally going to blog about these curiosities!
                    </div>
                  </div>
                </div>
              </div>

              <div className="media">
                <a className="pull-left" href="#">
                  <img className="media-object" src="img/avatar.png" alt="" />
                </a>
                <div className="media-body">
                  <h4 className="media-heading">
                    Joey Ramone
                    <small>August 25, 2014 at 9:30 PM</small>
                  </h4>
                  OMGI love to read it so much!
                </div>
              </div>
            </div>
          </div>

          <div className="vcard-footer">
            <a href="index-2.html" className="btn btn-default">
              <i className="fa fa-arrow-left"></i>&nbsp; Back to home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
