import React from 'react'

const Feed = () => {
  return (
    <>
  <section>
    <div className="white-bg">
      <div className="container-fluid">
        <div className="menu-caro">
          <div className="row">
            <div className="col-lg-2">
              <div className="sidemenu">
                <i>
                  <svg
                    id="side-menu"
                    xmlns="http://www.w3.org/2000/svg"
                    width={26}
                    height={26}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-menu"
                  >
                    <line x1={3} y1={12} x2={21} y2={12} />
                    <line x1={3} y1={6} x2={21} y2={6} />
                    <line x1={3} y1={18} x2={21} y2={18} />
                  </svg>
                </i>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="page-caro">
                <div className="link-item">
                  <a className="active" href="feed.html" title="">
                    <i className="">
                      <svg
                        className="feather feather-zap"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </i>
                    <p>Newsfeed</p>
                  </a>
                </div>
                <div className="link-item">
                  <a href="videos.html" title="">
                    <i className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-youtube"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                    </i>
                    <p>Videos</p>
                  </a>
                </div>
                <div className="link-item">
                  <a href="courses.html" title="">
                    <i className="">
                      <svg
                        className="feather feather-airplay"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                        <polygon points="12 15 17 21 7 21 12 15" />
                      </svg>
                    </i>
                    <p>Courses</p>
                  </a>
                </div>
                <div className="link-item">
                  <a href="books.html" title="">
                    <i className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-book"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    </i>
                    <p>Books</p>
                  </a>
                </div>
                <div className="link-item">
                  <a href="blog.html" title="">
                    <i className="">
                      <svg
                        className="feather feather-layout"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          ry={2}
                          rx={2}
                          height={18}
                          width={18}
                          y={3}
                          x={3}
                        />
                        <line y2={9} x2={21} y1={9} x1={3} />
                        <line y2={9} x2={9} y1={21} x1={9} />
                      </svg>
                    </i>
                    <p>Blog</p>
                  </a>
                </div>
                <div className="link-item">
                  <a href="groups.html" title="">
                    <i className="">
                      <svg
                        className="feather feather-users"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle r={4} cy={7} cx={9} />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </i>
                    <p>Groups</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="user-inf">
                <div className="folowerz">Followers: 204</div>
                <ul className="stars">
                  <li>
                    <i className="icofont-star" />
                  </li>
                  <li>
                    <i className="icofont-star" />
                  </li>
                  <li>
                    <i className="icofont-star" />
                  </li>
                  <li>
                    <i className="icofont-star" />
                  </li>
                  <li>
                    <i className="icofont-star" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* carousel menu */}
  <section>
    <div className="gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="page-contents" className="row merged20">
              <div className="col-lg-3">
                <aside className="sidebar static left">
                  <div className="widget whitish low-opacity">
                    <img src="assets/images/time-clock.png" alt="" />
                    <div
                      className="bg-image"
                      style={{
                        backgroundImage: "url(assets/images/resources/time-bg.jpg)"
                      }}
                    />
                    <div className="date-time">
                      <div className="realtime">
                        <span id="hours">00</span>
                        <span id="point">:</span>
                        <span id="min">00</span>
                      </div>
                      <span id="date" />
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="widget-title">Complete Your Profile</h4>
                    <span>Your Profile is missing followings!</span>
                    <div
                      data-progress="tip"
                      className="progress__outer"
                      data-value="0.67"
                    >
                      <div className="progress__inner">82%</div>
                    </div>
                    <ul className="prof-complete">
                      <li>
                        <i className="icofont-plus-square" />{" "}
                        <a href="#" title="">
                          Upload Your Picture
                        </a>
                        <em>10%</em>
                      </li>
                      <li>
                        <i className="icofont-plus-square" />{" "}
                        <a href="#" title="">
                          Your University?
                        </a>
                        <em>20%</em>
                      </li>
                      <li>
                        <i className="icofont-plus-square" />{" "}
                        <a href="#" title="">
                          Add Payment Method
                        </a>
                        <em>20%</em>
                      </li>
                    </ul>
                  </div>
                  {/* complete profile widget */}
                  <div className="advertisment-box">
                    <h4 className="">
                      <i className="icofont-info-circle" /> advertisment
                    </h4>
                    <figure>
                      <a href="#" title="Advertisment">
                        <img src="assets/images/resources/ad-widget2.gif" alt="" />
                      </a>
                    </figure>
                  </div>
                  {/* adversment widget */}
                  <div className="widget">
                    <h4 className="widget-title">
                      <i className="icofont-flame-torch" /> Popular Courses
                    </h4>
                    <ul className="premium-course">
                      <li>
                        <figure>
                          <img src="assets/images/resources/course-5.jpg" alt="" />
                          <span className="tag">Free</span>
                        </figure>
                        <div className="vid-course">
                          <h5>
                            <a href="course-detail.html" title="">
                              Wordpress Online video course
                            </a>
                          </h5>
                          <ins className="price">$19/M</ins>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img src="assets/images/resources/course-3.jpg" alt="" />
                          <span className="tag">Premium</span>
                        </figure>
                        <div className="vid-course">
                          <h5>
                            <a href="course-detail.html" title="">
                              Node JS Online video course
                            </a>
                          </h5>
                          <ins className="price">$29/M</ins>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* popular courses */}
                  <div className="widget">
                    <h4 className="widget-title">
                      Recent Blogs{" "}
                      <a className="see-all" href="#" title="">
                        See All
                      </a>
                    </h4>
                    <ul className="recent-links">
                      <li>
                        <figure>
                          <img alt="" src="assets/images/resources/recentlink-1.jpg" />
                        </figure>
                        <div className="re-links-meta">
                          <h6>
                            <a title="" href="#">
                              Moira's fade reach much farther...
                            </a>
                          </h6>
                          <span>2 weeks ago </span>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img alt="" src="assets/images/resources/recentlink-2.jpg" />
                        </figure>
                        <div className="re-links-meta">
                          <h6>
                            <a title="" href="#">
                              Daniel asks The voice of doomfist...
                            </a>
                          </h6>
                          <span>3 months ago </span>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img alt="" src="assets/images/resources/recentlink-3.jpg" />
                        </figure>
                        <div className="re-links-meta">
                          <h6>
                            <a title="" href="#">
                              The socimo over watch scandals.
                            </a>
                          </h6>
                          <span>1 day before</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* recent blog */}
                  <div className="widget">
                    <h4 className="widget-title">
                      Your profile has a new Experience section
                    </h4>
                    <p>
                      Showcase your professional experience and education to
                      help potential employers and collaborators find and
                      contact you about career opportunities.
                    </p>
                    <a
                      className="main-btn"
                      href="profile.html"
                      title=""
                      data-ripple=""
                    >
                      view profile
                    </a>
                  </div>
                  {/* your profile */}
                  <div className="widget web-links stick-widget">
                    <h4 className="widget-title">
                      Useful Links{" "}
                      <a title="" href="#" className="see-all">
                        See All
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <i className="icofont-dotted-right" />{" "}
                        <a title="" href="#">
                          about
                        </a>
                      </li>
                      <li>
                        <i className="icofont-dotted-right" />{" "}
                        <a title="" href="#">
                          career
                        </a>
                      </li>
                      <li>
                        <i className="icofont-dotted-right" />{" "}
                        <a title="" href="#">
                          advertise
                        </a>
                      </li>
                      <li>
                        <i className="icofont-dotted-right" />{" "}
                        <a title="" href="#">
                          socimo Apps
                        </a>
                      </li>
                      <li>
                        <i className="icofont-dotted-right" />{" "}
                        <a title="" href="#">
                          socimo Blog
                        </a>
                      </li>
                      <li>
                        <i className="icofont-dotted-right" />{" "}
                        <a title="" href="#">
                          Help
                        </a>
                      </li>
                      <li>
                        <i className="icofont-dotted-right" />{" "}
                        <a title="" href="#">
                          socimo Gifts
                        </a>
                      </li>
                      <li>
                        <i className="icofont-dotted-right" />{" "}
                        <a title="" href="#">
                          content policy
                        </a>
                      </li>
                      <li>
                        <i className="icofont-dotted-right" />{" "}
                        <a title="" href="#">
                          User Policy
                        </a>
                      </li>
                    </ul>
                    <p>© Socimo 2020. All Rights Reserved.</p>
                  </div>
                  {/* links */}
                </aside>
              </div>
              <div className="col-lg-6">
                <ul className="filtr-tabs">
                  <li>
                    <a className="active" href="#" title="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Recent
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Favourit
                    </a>
                  </li>
                </ul>
                {/* tab buttons */}
                <div className="main-wraper">
                  <span className="new-title">Create New Post</span>
                  <div className="new-post">
                    <form method="post">
                      <i className="icofont-pen-alt-1" />
                      <input type="text" placeholder="Create New Post" />
                    </form>
                    <ul className="upload-media">
                      <li>
                        <a href="#" title="">
                          <i>
                            <img src="assets/images/image.png" alt="" />
                          </i>
                          <span>Photo/Video</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          <i>
                            <img src="assets/images/activity.png" alt="" />
                          </i>
                          <span>Feeling/Activity</span>
                        </a>
                      </li>
                      <li>
                        <a href="live-stream.html" title="">
                          <i>
                            <img src="assets/images/live-stream.png" alt="" />
                          </i>
                          <span>Live Stream</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* create new post */}
                <div className="story-card">
                  <div className="story-title">
                    <h5>Recent Stories</h5>
                    <a href="#" title="">
                      See all
                    </a>
                  </div>
                  <div className="story-wraper ">
                    <img src="assets/images/resources/story-card5.jpg" alt="" />
                    <div className="users-dp">
                      <img src="assets/images/resources/user3.jpg" alt="" />
                    </div>
                    <a className="add-new-stry" href="#" title="">
                      <i className="icofont-plus" />
                    </a>
                    <span>Add Your Story</span>
                  </div>
                  <div className="story-wraper">
                    <img src="assets/images/resources/story-card.jpg" alt="" />
                    <div className="users-dp">
                      <img src="assets/images/resources/user6.jpg" alt="" />
                    </div>
                    <span>Tamana Bhatia</span>
                  </div>
                  <div className="story-wraper">
                    <img src="assets/images/resources/story-card2.jpg" alt="" />
                    <div className="users-dp">
                      <img src="assets/images/resources/user7.jpg" alt="" />
                    </div>
                    <span>Emily Caros</span>
                  </div>
                  <div className="story-wraper">
                    <img src="assets/images/resources/story-card3.jpg" alt="" />
                    <div className="users-dp">
                      <img src="assets/images/resources/user8.jpg" alt="" />
                    </div>
                    <span>Daniel Cardos</span>
                  </div>
                  <div className="story-wraper">
                    <img src="assets/images/resources/story-card4.jpg" alt="" />
                    <div className="users-dp">
                      <img src="assets/images/resources/user4.jpg" alt="" />
                    </div>
                    <span>Emma Watson</span>
                  </div>
                </div>
                {/* stories */}
                <div className="main-wraper">
                  <div className="chatroom-title">
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-tv"
                      >
                        <rect
                          x={2}
                          y={7}
                          width={20}
                          height={15}
                          rx={2}
                          ry={2}
                        />
                        <polyline points="17 2 12 7 7 2" />
                      </svg>
                    </i>
                    <span>
                      Chat Rooms <em>Video chat with friends</em>
                    </span>
                    <a className="create-newroom" href="#" title="">
                      Create Room
                    </a>
                  </div>
                  <ul className="chat-rooms">
                    <li>
                      <div className="room-avatar">
                        <img src="assets/images/resources/user2.jpg" alt="" />
                        <span className="status online" />
                      </div>
                      <span>Sara's Room</span>
                      <a className="join" href="#" title="Join Room">
                        Join
                      </a>
                      <a
                        className="say-hi send-mesg"
                        href="#"
                        title="Send Message"
                      >
                        <i className="icofont-facebook-messenger" />
                      </a>
                    </li>
                    <li>
                      <div className="room-avatar">
                        <img src="assets/images/resources/user3.jpg" alt="" />
                        <span className="status offline" />
                      </div>
                      <span>jawad's Room</span>
                      <a className="join" href="#" title="Join Room">
                        Join
                      </a>
                      <a
                        className="say-hi send-mesg"
                        href="#"
                        title="Send Message"
                      >
                        <i className="icofont-facebook-messenger" />
                      </a>
                    </li>
                    <li>
                      <div className="room-avatar">
                        <img src="assets/images/resources/user4.jpg" alt="" />
                        <span className="status away" />
                      </div>
                      <span>Jack's Room</span>
                      <a className="join" href="#" title="Join Room">
                        Join
                      </a>
                      <a
                        className="say-hi send-mesg"
                        href="#"
                        title="Send Message"
                      >
                        <i className="icofont-facebook-messenger" />
                      </a>
                    </li>
                    <li>
                      <div className="room-avatar">
                        <img src="assets/images/resources/user5.jpg" alt="" />
                        <span className="status online" />
                      </div>
                      <span>jobidn's Room</span>
                      <a className="join" href="#" title="Join Room">
                        Join
                      </a>
                      <a
                        className="say-hi send-mesg"
                        href="#"
                        title="Send Message"
                      >
                        <i className="icofont-facebook-messenger" />
                      </a>
                    </li>
                    <li>
                      <div className="room-avatar">
                        <img src="assets/images/resources/user6.jpg" alt="" />
                        <span className="status offline" />
                      </div>
                      <span>Emily's Room</span>
                      <a className="join" href="#" title="Join Room">
                        Join
                      </a>
                      <a
                        className="say-hi send-mesg"
                        href="#"
                        title="Send Message"
                      >
                        <i className="icofont-facebook-messenger" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* chat rooms */}
                <div className="main-wraper">
                  <div className="user-post">
                    <div className="friend-info">
                      <figure>
                        <i className="icofont-learn" />
                      </figure>
                      <div className="friend-name">
                        <ins>
                          <a title="" href="time-line.html">
                            Suggested
                          </a>
                        </ins>
                        <span>
                          <i className="icofont-runner-alt-1" /> Follow similar
                          People
                        </span>
                      </div>
                      <ul className="suggested-caro">
                        <li>
                          <figure>
                            <img src="assets/images/resources/speak-1.jpg" alt="" />
                          </figure>
                          <span>Amy Watson</span>
                          <ins>Department of Socilolgy</ins>
                          <a href="#" title="" data-ripple="">
                            <i className="icofont-star" /> Follow
                          </a>
                        </li>
                        <li>
                          <figure>
                            <img src="assets/images/resources/speak-2.jpg" alt="" />
                          </figure>
                          <span>Muhammad Khan</span>
                          <ins>Department of Socilolgy</ins>
                          <a href="#" title="" data-ripple="">
                            <i className="icofont-star" /> Follow
                          </a>
                        </li>
                        <li>
                          <figure>
                            <img src="assets/images/resources/speak-3.jpg" alt="" />
                          </figure>
                          <span>Sadia Gill</span>
                          <ins>Department of Socilolgy</ins>
                          <a href="#" title="" data-ripple="">
                            <i className="icofont-star" /> Follow
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* suggested friends */}
                <div className="main-wraper">
                  <div className="user-post">
                    <div className="friend-info">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="assets/images/resources/user7.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="verified" href="time-line.html">
                            Andrew
                          </a>{" "}
                          Post Audio
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                      <div className="post-meta">
                        <p>
                          Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                          eget condimentum rhoncus, sem quam semper libero.
                        </p>
                        <div className="aud-vid">
                          <audio
                            id="plyr-audio-player"
                            className="audio-player"
                            controls=""
                          >
                            <source
                              src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3"
                              type="audio/mp3"
                            />
                            <source
                              src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg"
                              type="audio/ogg"
                            />
                          </audio>
                        </div>
                        <div className="we-video-info">
                          <ul>
                            <li>
                              <span title="views" className="views">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx={12} cy={12} r={3} />
                                  </svg>
                                </i>
                                <ins>1.2k</ins>
                              </span>
                            </li>
                            <li>
                              <span title="Comments" className="Recommend">
                                <i>
                                  <svg
                                    className="feather feather-message-square"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    height={16}
                                    width={16}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                  </svg>
                                </i>
                                <ins>54</ins>
                              </span>
                            </li>
                            <li>
                              <span title="follow" className="Follow">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </i>
                                <ins>5k</ins>
                              </span>
                            </li>
                            <li>
                              <span className="share-pst" title="Share">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-share-2"
                                  >
                                    <circle cx={18} cy={5} r={3} />
                                    <circle cx={6} cy={12} r={3} />
                                    <circle cx={18} cy={19} r={3} />
                                    <line
                                      x1="8.59"
                                      y1="13.51"
                                      x2="15.42"
                                      y2="17.49"
                                    />
                                    <line
                                      x1="15.41"
                                      y1="6.51"
                                      x2="8.59"
                                      y2="10.49"
                                    />
                                  </svg>
                                </i>
                                <ins>205</ins>
                              </span>
                            </li>
                          </ul>
                          <a href="post-detail.html" title="" className="reply">
                            Reply <i className="icofont-reply" />
                          </a>
                        </div>
                        <div className="stat-tools">
                          <div className="box">
                            <div className="Like">
                              <a className="Like__link">
                                <i className="icofont-like" /> Like
                              </a>
                              <div className="Emojis">
                                <div className="Emoji Emoji--like">
                                  <div className="icon icon--like" />
                                </div>
                                <div className="Emoji Emoji--love">
                                  <div className="icon icon--heart" />
                                </div>
                                <div className="Emoji Emoji--haha">
                                  <div className="icon icon--haha" />
                                </div>
                                <div className="Emoji Emoji--wow">
                                  <div className="icon icon--wow" />
                                </div>
                                <div className="Emoji Emoji--sad">
                                  <div className="icon icon--sad" />
                                </div>
                                <div className="Emoji Emoji--angry">
                                  <div className="icon icon--angry" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box">
                            <div className="Emojis">
                              <div className="Emoji Emoji--like">
                                <div className="icon icon--like" />
                              </div>
                              <div className="Emoji Emoji--love">
                                <div className="icon icon--heart" />
                              </div>
                              <div className="Emoji Emoji--haha">
                                <div className="icon icon--haha" />
                              </div>
                              <div className="Emoji Emoji--wow">
                                <div className="icon icon--wow" />
                              </div>
                              <div className="Emoji Emoji--sad">
                                <div className="icon icon--sad" />
                              </div>
                              <div className="Emoji Emoji--angry">
                                <div className="icon icon--angry" />
                              </div>
                            </div>
                          </div>
                          <a title="" href="#" className="comment-to">
                            <i className="icofont-comment" /> Comment
                          </a>
                          <a title="" href="#" className="share-to">
                            <i className="icofont-share-alt" /> Share
                          </a>
                          <div className="emoji-state">
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/thumb.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/thumb.png" />{" "}
                                  Likes
                                </span>
                                <ul className="namelist">
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>20+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/heart.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/heart.png" />{" "}
                                  Love
                                </span>
                                <ul className="namelist">
                                  <li>Amara Sin</li>
                                  <li>Jhon Doe</li>
                                  <li>
                                    <span>10+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/smile.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/smile.png" />{" "}
                                  Happy
                                </span>
                                <ul className="namelist">
                                  <li>Sarah K.</li>
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>
                                    <span>100+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/weep.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/weep.png" />{" "}
                                  Dislike
                                </span>
                                <ul className="namelist">
                                  <li>Danial Carbal</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>15+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p>10+</p>
                          </div>
                          <div
                            className="new-comment"
                            style={{ display: "none" }}
                          >
                            <form method="post">
                              <input type="text" placeholder="write comment" />
                              <button type="submit">
                                <i className="icofont-paper-plane" />
                              </button>
                            </form>
                            <div className="comments-area">
                              <ul>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user1.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Jack Carter
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                    <span>
                                      you can view the more detail via link
                                    </span>
                                    <a
                                      title=""
                                      href="https://www.youtube.com/watch?v=HpZgwHU1GcI"
                                      target="_blank"
                                    >
                                      https://www.youtube.com/watch?v=HpZgwHU1GcI
                                    </a>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user2.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Ching xang
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* share audio post */}
                <div className="main-wraper">
                  <div className="user-post">
                    <div className="friend-info">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="assets/images/resources/user6.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="verified" href="time-line.html">
                            Elie Honey
                          </a>{" "}
                          Podcast
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                      <div className="post-meta">
                        <a href="post-detail.html" className="post-title">
                          Supervision as a Personnel Development Device
                        </a>
                        <p>
                          Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                          eget condimentum rhoncus, sem quam semper libero.
                        </p>
                        <div className="aud-vid">
                          <div className="video-player">
                            <iframe
                              src="https://www.youtube.com/embed/RBfJR4oRC0k?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
                              allowFullScreen=""
                              allow="autoplay"
                            />
                          </div>
                        </div>
                        <div className="we-video-info">
                          <ul>
                            <li>
                              <span title="views" className="views">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx={12} cy={12} r={3} />
                                  </svg>
                                </i>
                                <ins>1.2k</ins>
                              </span>
                            </li>
                            <li>
                              <span title="Comments" className="Recommend">
                                <i>
                                  <svg
                                    className="feather feather-message-square"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    height={16}
                                    width={16}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                  </svg>
                                </i>
                                <ins>54</ins>
                              </span>
                            </li>
                            <li>
                              <span title="follow" className="Follow">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </i>
                                <ins>5k</ins>
                              </span>
                            </li>
                            <li>
                              <span className="share-pst" title="Share">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-share-2"
                                  >
                                    <circle cx={18} cy={5} r={3} />
                                    <circle cx={6} cy={12} r={3} />
                                    <circle cx={18} cy={19} r={3} />
                                    <line
                                      x1="8.59"
                                      y1="13.51"
                                      x2="15.42"
                                      y2="17.49"
                                    />
                                    <line
                                      x1="15.41"
                                      y1="6.51"
                                      x2="8.59"
                                      y2="10.49"
                                    />
                                  </svg>
                                </i>
                                <ins>205</ins>
                              </span>
                            </li>
                          </ul>
                          <a href="post-detail.html" title="" className="reply">
                            Reply <i className="icofont-reply" />
                          </a>
                        </div>
                        <div className="stat-tools">
                          <div className="box">
                            <div className="Like">
                              <a className="Like__link">
                                <i className="icofont-like" /> Like
                              </a>
                              <div className="Emojis">
                                <div className="Emoji Emoji--like">
                                  <div className="icon icon--like" />
                                </div>
                                <div className="Emoji Emoji--love">
                                  <div className="icon icon--heart" />
                                </div>
                                <div className="Emoji Emoji--haha">
                                  <div className="icon icon--haha" />
                                </div>
                                <div className="Emoji Emoji--wow">
                                  <div className="icon icon--wow" />
                                </div>
                                <div className="Emoji Emoji--sad">
                                  <div className="icon icon--sad" />
                                </div>
                                <div className="Emoji Emoji--angry">
                                  <div className="icon icon--angry" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box">
                            <div className="Emojis">
                              <div className="Emoji Emoji--like">
                                <div className="icon icon--like" />
                              </div>
                              <div className="Emoji Emoji--love">
                                <div className="icon icon--heart" />
                              </div>
                              <div className="Emoji Emoji--haha">
                                <div className="icon icon--haha" />
                              </div>
                              <div className="Emoji Emoji--wow">
                                <div className="icon icon--wow" />
                              </div>
                              <div className="Emoji Emoji--sad">
                                <div className="icon icon--sad" />
                              </div>
                              <div className="Emoji Emoji--angry">
                                <div className="icon icon--angry" />
                              </div>
                            </div>
                          </div>
                          <a title="" href="#" className="comment-to">
                            <i className="icofont-comment" /> Comment
                          </a>
                          <a title="" href="#" className="share-to">
                            <i className="icofont-share-alt" /> Share
                          </a>
                          <div className="emoji-state">
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/thumb.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/thumb.png" />{" "}
                                  Likes
                                </span>
                                <ul className="namelist">
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>20+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/heart.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/heart.png" />{" "}
                                  Love
                                </span>
                                <ul className="namelist">
                                  <li>Amara Sin</li>
                                  <li>Jhon Doe</li>
                                  <li>
                                    <span>10+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/smile.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/smile.png" />{" "}
                                  Happy
                                </span>
                                <ul className="namelist">
                                  <li>Sarah K.</li>
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>
                                    <span>100+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/weep.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/weep.png" />{" "}
                                  Dislike
                                </span>
                                <ul className="namelist">
                                  <li>Danial Carbal</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>15+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p>10+</p>
                          </div>
                          <div
                            className="new-comment"
                            style={{ display: "none" }}
                          >
                            <form method="post">
                              <input type="text" placeholder="write comment" />
                              <button type="submit">
                                <i className="icofont-paper-plane" />
                              </button>
                            </form>
                            <div className="comments-area">
                              <ul>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user1.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Jack Carter
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                    <span>
                                      you can view the more detail via link
                                    </span>
                                    <a
                                      title=""
                                      href="https://www.youtube.com/watch?v=HpZgwHU1GcI"
                                      target="_blank"
                                    >
                                      https://www.youtube.com/watch?v=HpZgwHU1GcI
                                    </a>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user2.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Ching xang
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* share video post */}
                <div className="main-wraper">
                  <div className="user-post">
                    <div className="friend-info">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="assets/images/resources/user1.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="verified" href="time-line.html">
                            Jack Carter
                          </a>{" "}
                          Share Post
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                      <div className="post-meta">
                        <a href="post-detail.html" className="post-title">
                          Supervision as a Personnel Development Device
                        </a>
                        <p>
                          Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                          eget condimentum rhoncus, sem quam semper libero.
                        </p>
                        <div className="we-video-info">
                          <ul>
                            <li>
                              <span title="views" className="views">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx={12} cy={12} r={3} />
                                  </svg>
                                </i>
                                <ins>1.2k</ins>
                              </span>
                            </li>
                            <li>
                              <span title="Comments" className="Recommend">
                                <i>
                                  <svg
                                    className="feather feather-message-square"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    height={16}
                                    width={16}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                  </svg>
                                </i>
                                <ins>54</ins>
                              </span>
                            </li>
                            <li>
                              <span title="follow" className="Follow">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </i>
                                <ins>5k</ins>
                              </span>
                            </li>
                            <li>
                              <span className="share-pst" title="Share">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-share-2"
                                  >
                                    <circle cx={18} cy={5} r={3} />
                                    <circle cx={6} cy={12} r={3} />
                                    <circle cx={18} cy={19} r={3} />
                                    <line
                                      x1="8.59"
                                      y1="13.51"
                                      x2="15.42"
                                      y2="17.49"
                                    />
                                    <line
                                      x1="15.41"
                                      y1="6.51"
                                      x2="8.59"
                                      y2="10.49"
                                    />
                                  </svg>
                                </i>
                                <ins>205</ins>
                              </span>
                            </li>
                          </ul>
                          <a href="post-detail.html" title="" className="reply">
                            Reply <i className="icofont-reply" />
                          </a>
                        </div>
                        <div className="stat-tools">
                          <div className="box">
                            <div className="Like">
                              <a className="Like__link">
                                <i className="icofont-like" /> Like
                              </a>
                              <div className="Emojis">
                                <div className="Emoji Emoji--like">
                                  <div className="icon icon--like" />
                                </div>
                                <div className="Emoji Emoji--love">
                                  <div className="icon icon--heart" />
                                </div>
                                <div className="Emoji Emoji--haha">
                                  <div className="icon icon--haha" />
                                </div>
                                <div className="Emoji Emoji--wow">
                                  <div className="icon icon--wow" />
                                </div>
                                <div className="Emoji Emoji--sad">
                                  <div className="icon icon--sad" />
                                </div>
                                <div className="Emoji Emoji--angry">
                                  <div className="icon icon--angry" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box">
                            <div className="Emojis">
                              <div className="Emoji Emoji--like">
                                <div className="icon icon--like" />
                              </div>
                              <div className="Emoji Emoji--love">
                                <div className="icon icon--heart" />
                              </div>
                              <div className="Emoji Emoji--haha">
                                <div className="icon icon--haha" />
                              </div>
                              <div className="Emoji Emoji--wow">
                                <div className="icon icon--wow" />
                              </div>
                              <div className="Emoji Emoji--sad">
                                <div className="icon icon--sad" />
                              </div>
                              <div className="Emoji Emoji--angry">
                                <div className="icon icon--angry" />
                              </div>
                            </div>
                          </div>
                          <a title="" href="#" className="comment-to">
                            <i className="icofont-comment" /> Comment
                          </a>
                          <a title="" href="#" className="share-to">
                            <i className="icofont-share-alt" /> Share
                          </a>
                          <div className="emoji-state">
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/thumb.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/thumb.png" />{" "}
                                  Likes
                                </span>
                                <ul className="namelist">
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>20+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/heart.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/heart.png" />{" "}
                                  Love
                                </span>
                                <ul className="namelist">
                                  <li>Amara Sin</li>
                                  <li>Jhon Doe</li>
                                  <li>
                                    <span>10+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/smile.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/smile.png" />{" "}
                                  Happy
                                </span>
                                <ul className="namelist">
                                  <li>Sarah K.</li>
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>
                                    <span>100+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/weep.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/weep.png" />{" "}
                                  Dislike
                                </span>
                                <ul className="namelist">
                                  <li>Danial Carbal</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>15+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p>10+</p>
                          </div>
                          <div
                            className="new-comment"
                            style={{ display: "none" }}
                          >
                            <form method="post">
                              <input type="text" placeholder="write comment" />
                              <button type="submit">
                                <i className="icofont-paper-plane" />
                              </button>
                            </form>
                            <div className="comments-area">
                              <ul>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user1.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Jack Carter
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                    <span>
                                      you can view the more detail via link
                                    </span>
                                    <a
                                      title=""
                                      href="https://www.youtube.com/watch?v=HpZgwHU1GcI"
                                      target="_blank"
                                    >
                                      https://www.youtube.com/watch?v=HpZgwHU1GcI
                                    </a>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user2.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Ching xang
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* share post without image */}
                <div className="main-wraper">
                  <div className="user-post">
                    <div className="friend-info">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#82828e"
                              stroke="#82828e"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="assets/images/resources/user2.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="" href="time-line.html">
                            Maria k.
                          </a>{" "}
                          Premium Product
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                      <div className="post-meta">
                        <figure className="premium-post">
                          <img src="assets/images/resources/book5.jpg" alt="" />
                        </figure>
                        <div className="premium">
                          <a href="book-detail.html" className="post-title">
                            Technicial words 2020 Book world
                          </a>
                          <p>
                            Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                            eget condimentum rhoncus, sem quam semper libero.
                          </p>
                          <a
                            className="main-btn purchase-btn"
                            title=""
                            href="book-detail.html"
                          >
                            <i className="icofont-cart-alt" /> Buy Now
                          </a>
                        </div>
                        <div className="we-video-info">
                          <ul>
                            <li>
                              <span title="views" className="views">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx={12} cy={12} r={3} />
                                  </svg>
                                </i>
                                <ins>1.2k</ins>
                              </span>
                            </li>
                            <li>
                              <span title="Comments" className="Recommend">
                                <i>
                                  <svg
                                    className="feather feather-message-square"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    height={16}
                                    width={16}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                  </svg>
                                </i>
                                <ins>54</ins>
                              </span>
                            </li>
                            <li>
                              <span title="follow" className="Follow">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </i>
                                <ins>5k</ins>
                              </span>
                            </li>
                            <li>
                              <span className="share-pst" title="Share">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-share-2"
                                  >
                                    <circle cx={18} cy={5} r={3} />
                                    <circle cx={6} cy={12} r={3} />
                                    <circle cx={18} cy={19} r={3} />
                                    <line
                                      x1="8.59"
                                      y1="13.51"
                                      x2="15.42"
                                      y2="17.49"
                                    />
                                    <line
                                      x1="15.41"
                                      y1="6.51"
                                      x2="8.59"
                                      y2="10.49"
                                    />
                                  </svg>
                                </i>
                                <ins>205</ins>
                              </span>
                            </li>
                          </ul>
                          <a href="post-detail.html" title="" className="reply">
                            Reply <i className="icofont-reply" />
                          </a>
                        </div>
                        <div className="stat-tools">
                          <div className="box">
                            <div className="Like">
                              <a className="Like__link">
                                <i className="icofont-like" /> Like
                              </a>
                              <div className="Emojis">
                                <div className="Emoji Emoji--like">
                                  <div className="icon icon--like" />
                                </div>
                                <div className="Emoji Emoji--love">
                                  <div className="icon icon--heart" />
                                </div>
                                <div className="Emoji Emoji--haha">
                                  <div className="icon icon--haha" />
                                </div>
                                <div className="Emoji Emoji--wow">
                                  <div className="icon icon--wow" />
                                </div>
                                <div className="Emoji Emoji--sad">
                                  <div className="icon icon--sad" />
                                </div>
                                <div className="Emoji Emoji--angry">
                                  <div className="icon icon--angry" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box">
                            <div className="Emojis">
                              <div className="Emoji Emoji--like">
                                <div className="icon icon--like" />
                              </div>
                              <div className="Emoji Emoji--love">
                                <div className="icon icon--heart" />
                              </div>
                              <div className="Emoji Emoji--haha">
                                <div className="icon icon--haha" />
                              </div>
                              <div className="Emoji Emoji--wow">
                                <div className="icon icon--wow" />
                              </div>
                              <div className="Emoji Emoji--sad">
                                <div className="icon icon--sad" />
                              </div>
                              <div className="Emoji Emoji--angry">
                                <div className="icon icon--angry" />
                              </div>
                            </div>
                          </div>
                          <a title="" href="#" className="comment-to">
                            <i className="icofont-comment" /> Comment
                          </a>
                          <a title="" href="#" className="share-to">
                            <i className="icofont-share-alt" /> Share
                          </a>
                          <div className="emoji-state">
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/thumb.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/thumb.png" />{" "}
                                  Likes
                                </span>
                                <ul className="namelist">
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>20+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/heart.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/heart.png" />{" "}
                                  Love
                                </span>
                                <ul className="namelist">
                                  <li>Amara Sin</li>
                                  <li>Jhon Doe</li>
                                  <li>
                                    <span>10+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/smile.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/smile.png" />{" "}
                                  Happy
                                </span>
                                <ul className="namelist">
                                  <li>Sarah K.</li>
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>
                                    <span>100+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/weep.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/weep.png" />{" "}
                                  Dislike
                                </span>
                                <ul className="namelist">
                                  <li>Danial Carbal</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>15+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p>10+</p>
                          </div>
                          <div
                            className="new-comment"
                            style={{ display: "block" }}
                          >
                            <form method="post">
                              <input type="text" placeholder="write comment" />
                              <button type="submit">
                                <i className="icofont-paper-plane" />
                              </button>
                            </form>
                            <div className="comments-area">
                              <ul>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user1.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Jack Carter
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                    <span>
                                      you can view the more detail via link
                                    </span>
                                    <a title="" href="#">
                                      https://www.youtube.com/watch?v=HpZgwHU1GcI
                                    </a>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user2.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Ching xang
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* post sell book */}
                <div className="main-wraper">
                  <div className="wraper-title">
                    <span>
                      <i className="icofont-video-alt" /> Videos Play List
                    </span>
                    <a href="videos.html" title="">
                      See all Videos
                    </a>
                  </div>
                  <div className="videos-caro">
                    <div className="item-video" data-merge={2}>
                      <a
                        className="owl-video"
                        href="https://www.youtube.com/watch?v=8iZTb9NWbz8"
                      />
                      <div className="posted-user">
                        <img src="assets/images/resources/user4.jpg" alt="" />
                        <span>Frank J.</span>
                      </div>
                      <div className="vid-info">
                        <span>1 year ago</span>
                        <span>
                          <i className="icofont-eye-open" /> 3.1k
                        </span>
                      </div>
                    </div>
                    <div className="item-video" data-merge={2}>
                      <a
                        className="owl-video"
                        href="https://www.youtube.com/watch?v=8itUNRIWVIs"
                      />
                      <div className="posted-user">
                        <img src="assets/images/resources/user2.jpg" alt="" />
                        <span>Maria K.</span>
                      </div>
                      <div className="vid-info">
                        <span>2 weeks ago</span>
                        <span>
                          <i className="icofont-eye-open" /> 1.1k
                        </span>
                      </div>
                    </div>
                    <div className="item-video" data-merge={2}>
                      <a
                        className="owl-video"
                        href="https://www.youtube.com/watch?v=JpxsRwnRwCQ"
                      />
                      <div className="posted-user">
                        <img src="assets/images/resources/user1.jpg" alt="" />
                        <span>Jack Carter</span>
                      </div>
                      <div className="vid-info">
                        <span>4 weeks ago</span>
                        <span>
                          <i className="icofont-eye-open" /> 20k
                        </span>
                      </div>
                    </div>
                    <div className="item-video" data-merge={2}>
                      <a
                        className="owl-video"
                        href="https://www.youtube.com/watch?v=WNeLUngb-Xg"
                      />
                      <div className="posted-user">
                        <img src="assets/images/resources/user3.jpg" alt="" />
                        <span>Fawad Jan</span>
                      </div>
                      <div className="vid-info">
                        <span>1 Month ago</span>
                        <span>
                          <i className="icofont-eye-open" /> 8k
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* video playlist carousel */}
                <div className="main-wraper">
                  <div className="user-post">
                    <div className="friend-info">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="assets/images/resources/user3.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="" href="time-line.html">
                            Turgut Alp
                          </a>{" "}
                          Create Post
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                      <div className="post-meta">
                        <figure>
                          <a
                            data-toggle="modal"
                            data-target="#img-comt"
                            href="assets/images/resources/album1.jpg"
                          >
                            <img src="assets/images/resources/study.jpg" alt="" />
                          </a>
                        </figure>
                        <a href="post-detail.html" className="post-title">
                          Supervision as a Personnel Development Device
                        </a>
                        <p>
                          Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                          eget condimentum rhoncus, sem quam semper libero.
                        </p>
                        <div className="we-video-info">
                          <ul>
                            <li>
                              <span title="views" className="views">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx={12} cy={12} r={3} />
                                  </svg>
                                </i>
                                <ins>1.2k</ins>
                              </span>
                            </li>
                            <li>
                              <span title="Comments" className="Recommend">
                                <i>
                                  <svg
                                    className="feather feather-message-square"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    height={16}
                                    width={16}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                  </svg>
                                </i>
                                <ins>54</ins>
                              </span>
                            </li>
                            <li>
                              <span title="follow" className="Follow">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </i>
                                <ins>5k</ins>
                              </span>
                            </li>
                            <li>
                              <span className="share-pst" title="Share">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-share-2"
                                  >
                                    <circle cx={18} cy={5} r={3} />
                                    <circle cx={6} cy={12} r={3} />
                                    <circle cx={18} cy={19} r={3} />
                                    <line
                                      x1="8.59"
                                      y1="13.51"
                                      x2="15.42"
                                      y2="17.49"
                                    />
                                    <line
                                      x1="15.41"
                                      y1="6.51"
                                      x2="8.59"
                                      y2="10.49"
                                    />
                                  </svg>
                                </i>
                                <ins>205</ins>
                              </span>
                            </li>
                          </ul>
                          <a href="post-detail.html" title="" className="reply">
                            Reply <i className="icofont-reply" />
                          </a>
                        </div>
                        <div className="stat-tools">
                          <div className="box">
                            <div className="Like">
                              <a className="Like__link">
                                <i className="icofont-like" /> Like
                              </a>
                              <div className="Emojis">
                                <div className="Emoji Emoji--like">
                                  <div className="icon icon--like" />
                                </div>
                                <div className="Emoji Emoji--love">
                                  <div className="icon icon--heart" />
                                </div>
                                <div className="Emoji Emoji--haha">
                                  <div className="icon icon--haha" />
                                </div>
                                <div className="Emoji Emoji--wow">
                                  <div className="icon icon--wow" />
                                </div>
                                <div className="Emoji Emoji--sad">
                                  <div className="icon icon--sad" />
                                </div>
                                <div className="Emoji Emoji--angry">
                                  <div className="icon icon--angry" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box">
                            <div className="Emojis">
                              <div className="Emoji Emoji--like">
                                <div className="icon icon--like" />
                              </div>
                              <div className="Emoji Emoji--love">
                                <div className="icon icon--heart" />
                              </div>
                              <div className="Emoji Emoji--haha">
                                <div className="icon icon--haha" />
                              </div>
                              <div className="Emoji Emoji--wow">
                                <div className="icon icon--wow" />
                              </div>
                              <div className="Emoji Emoji--sad">
                                <div className="icon icon--sad" />
                              </div>
                              <div className="Emoji Emoji--angry">
                                <div className="icon icon--angry" />
                              </div>
                            </div>
                          </div>
                          <a title="" href="#" className="comment-to">
                            <i className="icofont-comment" /> Comment
                          </a>
                          <a title="" href="#" className="share-to">
                            <i className="icofont-share-alt" /> Share
                          </a>
                          <div className="emoji-state">
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/thumb.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/thumb.png" />{" "}
                                  Likes
                                </span>
                                <ul className="namelist">
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>20+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/heart.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/heart.png" />{" "}
                                  Love
                                </span>
                                <ul className="namelist">
                                  <li>Amara Sin</li>
                                  <li>Jhon Doe</li>
                                  <li>
                                    <span>10+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/smile.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/smile.png" />{" "}
                                  Happy
                                </span>
                                <ul className="namelist">
                                  <li>Sarah K.</li>
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>
                                    <span>100+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/weep.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/weep.png" />{" "}
                                  Dislike
                                </span>
                                <ul className="namelist">
                                  <li>Danial Carbal</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>15+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p>30+</p>
                          </div>
                          <div
                            className="new-comment"
                            style={{ display: "none" }}
                          >
                            <form method="post">
                              <input type="text" placeholder="write comment" />
                              <button type="submit">
                                <i className="icofont-paper-plane" />
                              </button>
                            </form>
                            <div className="comments-area">
                              <ul>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user1.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Jack Carter
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                    <span>
                                      you can view the more detail via link
                                    </span>
                                    <a title="" href="#">
                                      https://www.youtube.com/watch?v=HpZgwHU1GcI
                                    </a>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user2.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Ching xang
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* share image with post */}
                <div className="main-wraper">
                  <div className="user-post">
                    <div className="friend-info">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#82828e"
                              stroke="#82828e"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="assets/images/resources/user4.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="" href="time-line.html">
                            Saim turan
                          </a>{" "}
                          added image album
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                      <div className="post-meta">
                        <figure>
                          <div className="img-bunch">
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                <figure>
                                  <a
                                    data-toggle="modal"
                                    data-target="#img-comt"
                                    href="assets/images/resources/album1.jpg"
                                  >
                                    <img
                                      src="assets/images/resources/album1.jpg"
                                      alt=""
                                    />
                                  </a>
                                </figure>
                                <figure>
                                  <a
                                    data-toggle="modal"
                                    data-target="#img-comt"
                                    href="assets/images/resources/album2.jpg"
                                  >
                                    <img
                                      src="assets/images/resources/album2.jpg"
                                      alt=""
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                <figure>
                                  <a
                                    data-toggle="modal"
                                    data-target="#img-comt"
                                    href="assets/images/resources/album6.jpg"
                                  >
                                    <img
                                      src="assets/images/resources/album6.jpg"
                                      alt=""
                                    />
                                  </a>
                                </figure>
                                <figure>
                                  <a
                                    data-toggle="modal"
                                    data-target="#img-comt"
                                    href="assets/images/resources/album5.jpg"
                                  >
                                    <img
                                      src="assets/images/resources/album5.jpg"
                                      alt=""
                                    />
                                  </a>
                                </figure>
                                <figure>
                                  <a
                                    data-toggle="modal"
                                    data-target="#img-comt"
                                    href="assets/images/resources/album4.jpg"
                                  >
                                    <img
                                      src="assets/images/resources/album4.jpg"
                                      alt=""
                                    />
                                  </a>
                                  <div className="more-photos">
                                    <span>+15</span>
                                  </div>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </figure>
                        <a href="post-detail.html" className="post-title">
                          Supervision as a Personnel Development Device
                        </a>
                        <p>
                          Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                          eget condimentum rhoncus, sem quam semper libero.
                        </p>
                        <div className="we-video-info">
                          <ul>
                            <li>
                              <span title="views" className="views">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx={12} cy={12} r={3} />
                                  </svg>
                                </i>
                                <ins>1.2k</ins>
                              </span>
                            </li>
                            <li>
                              <span title="Comments" className="Recommend">
                                <i>
                                  <svg
                                    className="feather feather-message-square"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    height={16}
                                    width={16}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                  </svg>
                                </i>
                                <ins>54</ins>
                              </span>
                            </li>
                            <li>
                              <span title="follow" className="Follow">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </i>
                                <ins>5k</ins>
                              </span>
                            </li>
                            <li>
                              <span className="share-pst" title="Share">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-share-2"
                                  >
                                    <circle cx={18} cy={5} r={3} />
                                    <circle cx={6} cy={12} r={3} />
                                    <circle cx={18} cy={19} r={3} />
                                    <line
                                      x1="8.59"
                                      y1="13.51"
                                      x2="15.42"
                                      y2="17.49"
                                    />
                                    <line
                                      x1="15.41"
                                      y1="6.51"
                                      x2="8.59"
                                      y2="10.49"
                                    />
                                  </svg>
                                </i>
                                <ins>205</ins>
                              </span>
                            </li>
                          </ul>
                          <a href="post-detail.html" title="" className="reply">
                            Reply <i className="icofont-reply" />
                          </a>
                        </div>
                        <div className="stat-tools">
                          <div className="box">
                            <div className="Like">
                              <a className="Like__link">
                                <i className="icofont-like" /> Like
                              </a>
                              <div className="Emojis">
                                <div className="Emoji Emoji--like">
                                  <div className="icon icon--like" />
                                </div>
                                <div className="Emoji Emoji--love">
                                  <div className="icon icon--heart" />
                                </div>
                                <div className="Emoji Emoji--haha">
                                  <div className="icon icon--haha" />
                                </div>
                                <div className="Emoji Emoji--wow">
                                  <div className="icon icon--wow" />
                                </div>
                                <div className="Emoji Emoji--sad">
                                  <div className="icon icon--sad" />
                                </div>
                                <div className="Emoji Emoji--angry">
                                  <div className="icon icon--angry" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box">
                            <div className="Emojis">
                              <div className="Emoji Emoji--like">
                                <div className="icon icon--like" />
                              </div>
                              <div className="Emoji Emoji--love">
                                <div className="icon icon--heart" />
                              </div>
                              <div className="Emoji Emoji--haha">
                                <div className="icon icon--haha" />
                              </div>
                              <div className="Emoji Emoji--wow">
                                <div className="icon icon--wow" />
                              </div>
                              <div className="Emoji Emoji--sad">
                                <div className="icon icon--sad" />
                              </div>
                              <div className="Emoji Emoji--angry">
                                <div className="icon icon--angry" />
                              </div>
                            </div>
                          </div>
                          <a title="" href="#" className="comment-to">
                            <i className="icofont-comment" /> Comment
                          </a>
                          <a title="" href="#" className="share-to">
                            <i className="icofont-share-alt" /> Share
                          </a>
                          <div className="emoji-state">
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/thumb.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/thumb.png" />{" "}
                                  Likes
                                </span>
                                <ul className="namelist">
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>20+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/heart.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/heart.png" />{" "}
                                  Love
                                </span>
                                <ul className="namelist">
                                  <li>Amara Sin</li>
                                  <li>Jhon Doe</li>
                                  <li>
                                    <span>10+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/smile.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/smile.png" />{" "}
                                  Happy
                                </span>
                                <ul className="namelist">
                                  <li>Sarah K.</li>
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>
                                    <span>100+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/weep.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/weep.png" />{" "}
                                  Dislike
                                </span>
                                <ul className="namelist">
                                  <li>Danial Carbal</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>15+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p>50+</p>
                          </div>
                          <div
                            className="new-comment"
                            style={{ display: "none" }}
                          >
                            <form method="post">
                              <input type="text" placeholder="write comment" />
                              <button type="submit">
                                <i className="icofont-paper-plane" />
                              </button>
                            </form>
                            <div className="comments-area">
                              <ul>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user1.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Jack Carter
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                    <span>
                                      you can view the more detail via link
                                    </span>
                                    <a title="" href="#">
                                      https://www.youtube.com/watch?v=HpZgwHU1GcI
                                    </a>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user2.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Ching xang
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* share image album */}
                <div className="main-wraper">
                  <div className="user-post">
                    <div className="friend-info">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="assets/images/resources/user5.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="" href="time-line.html">
                            Andrew Jhon
                          </a>{" "}
                          Shared Link
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                      <div className="post-meta">
                        <em>
                          <a
                            href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538"
                            title=""
                            target="_blank"
                          >
                            https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538
                          </a>
                        </em>
                        <figure>
                          <span>fetched-image</span>
                          <img src="assets/images/resources/laptop.png" alt="" />
                        </figure>
                        <a
                          href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538"
                          className="post-title"
                          target="_blank"
                        >
                          Winku Social Network with Company Pages Theme
                        </a>
                        <p>
                          “Winku” is a social community mobile app kit with
                          features. user can use this app for sharing blog,
                          posts, timeline, create Group, Create Pages,
                          chat/Messages, Movies sharing, QA, and Much More.
                        </p>
                        <div className="we-video-info">
                          <ul>
                            <li>
                              <span title="views" className="views">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx={12} cy={12} r={3} />
                                  </svg>
                                </i>
                                <ins>1.2k</ins>
                              </span>
                            </li>
                            <li>
                              <span title="Comments" className="Recommend">
                                <i>
                                  <svg
                                    className="feather feather-message-square"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    height={16}
                                    width={16}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                  </svg>
                                </i>
                                <ins>54</ins>
                              </span>
                            </li>
                            <li>
                              <span title="follow" className="Follow">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </i>
                                <ins>5k</ins>
                              </span>
                            </li>
                            <li>
                              <span className="share-pst" title="Share">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-share-2"
                                  >
                                    <circle cx={18} cy={5} r={3} />
                                    <circle cx={6} cy={12} r={3} />
                                    <circle cx={18} cy={19} r={3} />
                                    <line
                                      x1="8.59"
                                      y1="13.51"
                                      x2="15.42"
                                      y2="17.49"
                                    />
                                    <line
                                      x1="15.41"
                                      y1="6.51"
                                      x2="8.59"
                                      y2="10.49"
                                    />
                                  </svg>
                                </i>
                                <ins>205</ins>
                              </span>
                            </li>
                          </ul>
                          <a href="post-detail.html" title="" className="reply">
                            Reply <i className="icofont-reply" />
                          </a>
                        </div>
                        <div className="stat-tools">
                          <div className="box">
                            <div className="Like">
                              <a className="Like__link">
                                <i className="icofont-like" /> Like
                              </a>
                              <div className="Emojis">
                                <div className="Emoji Emoji--like">
                                  <div className="icon icon--like" />
                                </div>
                                <div className="Emoji Emoji--love">
                                  <div className="icon icon--heart" />
                                </div>
                                <div className="Emoji Emoji--haha">
                                  <div className="icon icon--haha" />
                                </div>
                                <div className="Emoji Emoji--wow">
                                  <div className="icon icon--wow" />
                                </div>
                                <div className="Emoji Emoji--sad">
                                  <div className="icon icon--sad" />
                                </div>
                                <div className="Emoji Emoji--angry">
                                  <div className="icon icon--angry" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box">
                            <div className="Emojis">
                              <div className="Emoji Emoji--like">
                                <div className="icon icon--like" />
                              </div>
                              <div className="Emoji Emoji--love">
                                <div className="icon icon--heart" />
                              </div>
                              <div className="Emoji Emoji--haha">
                                <div className="icon icon--haha" />
                              </div>
                              <div className="Emoji Emoji--wow">
                                <div className="icon icon--wow" />
                              </div>
                              <div className="Emoji Emoji--sad">
                                <div className="icon icon--sad" />
                              </div>
                              <div className="Emoji Emoji--angry">
                                <div className="icon icon--angry" />
                              </div>
                            </div>
                          </div>
                          <a title="" href="#" className="comment-to">
                            <i className="icofont-comment" /> Comment
                          </a>
                          <a title="" href="#" className="share-to">
                            <i className="icofont-share-alt" /> Share
                          </a>
                          <div className="emoji-state">
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/thumb.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/thumb.png" />{" "}
                                  Likes
                                </span>
                                <ul className="namelist">
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>20+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/heart.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/heart.png" />{" "}
                                  Love
                                </span>
                                <ul className="namelist">
                                  <li>Amara Sin</li>
                                  <li>Jhon Doe</li>
                                  <li>
                                    <span>10+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/smile.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/smile.png" />{" "}
                                  Happy
                                </span>
                                <ul className="namelist">
                                  <li>Sarah K.</li>
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>
                                    <span>100+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/weep.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/weep.png" />{" "}
                                  Dislike
                                </span>
                                <ul className="namelist">
                                  <li>Danial Carbal</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>15+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p>10+</p>
                          </div>
                          <div
                            className="new-comment"
                            style={{ display: "block" }}
                          >
                            <form method="post">
                              <input type="text" placeholder="write comment" />
                              <button type="submit">
                                <i className="icofont-paper-plane" />
                              </button>
                            </form>
                            <div className="comments-area">
                              <ul>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user1.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Jack Carter
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                    <span>
                                      you can view the more detail via link
                                    </span>
                                    <a title="" href="#">
                                      https://www.youtube.com/watch?v=HpZgwHU1GcI
                                    </a>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user2.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Ching xang
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* share link */}
                <div className="main-wraper">
                  <div className="user-post">
                    <div className="friend-info">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="assets/images/resources/user2.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="" href="time-line.html">
                            Maria k.
                          </a>{" "}
                          Shared Link
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                      <div className="post-meta">
                        <em>
                          <a
                            href="https://www.youtube.com/embed/zdow47FQRfQ"
                            title=""
                            target="_blank"
                          >
                            https://www.youtube.com/embed/zdow47FQRfQ
                          </a>
                        </em>
                        <iframe
                          height={285}
                          src="https://www.youtube.com/embed/zdow47FQRfQ"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <p>
                          Cookie? Biscuit? Bikkie? They all mean the same thing!
                          Our lovely English teachers will quickly show you some
                          pronunciation and vocabulary differences from
                          Australia, America, and England!
                        </p>
                        <div className="we-video-info">
                          <ul>
                            <li>
                              <span title="views" className="views">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx={12} cy={12} r={3} />
                                  </svg>
                                </i>
                                <ins>1.2k</ins>
                              </span>
                            </li>
                            <li>
                              <span title="Comments" className="Recommend">
                                <i>
                                  <svg
                                    className="feather feather-message-square"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    height={16}
                                    width={16}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                  </svg>
                                </i>
                                <ins>54</ins>
                              </span>
                            </li>
                            <li>
                              <span title="follow" className="Follow">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </i>
                                <ins>5k</ins>
                              </span>
                            </li>
                            <li>
                              <span className="share-pst" title="Share">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-share-2"
                                  >
                                    <circle cx={18} cy={5} r={3} />
                                    <circle cx={6} cy={12} r={3} />
                                    <circle cx={18} cy={19} r={3} />
                                    <line
                                      x1="8.59"
                                      y1="13.51"
                                      x2="15.42"
                                      y2="17.49"
                                    />
                                    <line
                                      x1="15.41"
                                      y1="6.51"
                                      x2="8.59"
                                      y2="10.49"
                                    />
                                  </svg>
                                </i>
                                <ins>205</ins>
                              </span>
                            </li>
                          </ul>
                          <a href="post-detail.html" title="" className="reply">
                            Reply <i className="icofont-reply" />
                          </a>
                        </div>
                        <div className="stat-tools">
                          <div className="box">
                            <div className="Like">
                              <a className="Like__link">
                                <i className="icofont-like" /> Like
                              </a>
                              <div className="Emojis">
                                <div className="Emoji Emoji--like">
                                  <div className="icon icon--like" />
                                </div>
                                <div className="Emoji Emoji--love">
                                  <div className="icon icon--heart" />
                                </div>
                                <div className="Emoji Emoji--haha">
                                  <div className="icon icon--haha" />
                                </div>
                                <div className="Emoji Emoji--wow">
                                  <div className="icon icon--wow" />
                                </div>
                                <div className="Emoji Emoji--sad">
                                  <div className="icon icon--sad" />
                                </div>
                                <div className="Emoji Emoji--angry">
                                  <div className="icon icon--angry" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box">
                            <div className="Emojis">
                              <div className="Emoji Emoji--like">
                                <div className="icon icon--like" />
                              </div>
                              <div className="Emoji Emoji--love">
                                <div className="icon icon--heart" />
                              </div>
                              <div className="Emoji Emoji--haha">
                                <div className="icon icon--haha" />
                              </div>
                              <div className="Emoji Emoji--wow">
                                <div className="icon icon--wow" />
                              </div>
                              <div className="Emoji Emoji--sad">
                                <div className="icon icon--sad" />
                              </div>
                              <div className="Emoji Emoji--angry">
                                <div className="icon icon--angry" />
                              </div>
                            </div>
                          </div>
                          <a title="" href="#" className="comment-to">
                            <i className="icofont-comment" /> Comment
                          </a>
                          <a title="" href="#" className="share-to">
                            <i className="icofont-share-alt" /> Share
                          </a>
                          <div className="emoji-state">
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/thumb.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/thumb.png" />{" "}
                                  Likes
                                </span>
                                <ul className="namelist">
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>20+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/heart.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/heart.png" />{" "}
                                  Love
                                </span>
                                <ul className="namelist">
                                  <li>Amara Sin</li>
                                  <li>Jhon Doe</li>
                                  <li>
                                    <span>10+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/smile.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/smile.png" />{" "}
                                  Happy
                                </span>
                                <ul className="namelist">
                                  <li>Sarah K.</li>
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>
                                    <span>100+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/weep.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/weep.png" />{" "}
                                  Dislike
                                </span>
                                <ul className="namelist">
                                  <li>Danial Carbal</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>15+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p>20+</p>
                          </div>
                          <div
                            className="new-comment"
                            style={{ display: "none" }}
                          >
                            <form method="post">
                              <input type="text" placeholder="write comment" />
                              <button type="submit">
                                <i className="icofont-paper-plane" />
                              </button>
                            </form>
                            <div className="comments-area">
                              <ul>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user1.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Jack Carter
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                    <span>
                                      you can view the more detail via link
                                    </span>
                                    <a title="" href="#">
                                      https://www.youtube.com/watch?v=HpZgwHU1GcI
                                    </a>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user2.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Ching xang
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* share video */}
                <div className="main-wraper">
                  <div className="user-post">
                    <div className="friend-info">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="assets/images/resources/user2.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="" href="time-line.html">
                            Maria k.
                          </a>{" "}
                          Shared Link
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                      <div className="post-meta">
                        <img
                          className="gif"
                          src="assets/images/giphy.png"
                          data-gif="assets/images/giphy-sample.gif"
                          alt=""
                        />
                        <div className="we-video-info">
                          <ul>
                            <li>
                              <span title="views" className="views">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx={12} cy={12} r={3} />
                                  </svg>
                                </i>
                                <ins>1.2k</ins>
                              </span>
                            </li>
                            <li>
                              <span title="Comments" className="Recommend">
                                <i>
                                  <svg
                                    className="feather feather-message-square"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    height={16}
                                    width={16}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                  </svg>
                                </i>
                                <ins>54</ins>
                              </span>
                            </li>
                            <li>
                              <span title="follow" className="Follow">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </i>
                                <ins>5k</ins>
                              </span>
                            </li>
                            <li>
                              <span className="share-pst" title="Share">
                                <i>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-share-2"
                                  >
                                    <circle cx={18} cy={5} r={3} />
                                    <circle cx={6} cy={12} r={3} />
                                    <circle cx={18} cy={19} r={3} />
                                    <line
                                      x1="8.59"
                                      y1="13.51"
                                      x2="15.42"
                                      y2="17.49"
                                    />
                                    <line
                                      x1="15.41"
                                      y1="6.51"
                                      x2="8.59"
                                      y2="10.49"
                                    />
                                  </svg>
                                </i>
                                <ins>205</ins>
                              </span>
                            </li>
                          </ul>
                          <a href="post-detail.html" title="" className="reply">
                            Reply <i className="icofont-reply" />
                          </a>
                        </div>
                        <div className="stat-tools">
                          <div className="box">
                            <div className="Like">
                              <a className="Like__link">
                                <i className="icofont-like" /> Like
                              </a>
                              <div className="Emojis">
                                <div className="Emoji Emoji--like">
                                  <div className="icon icon--like" />
                                </div>
                                <div className="Emoji Emoji--love">
                                  <div className="icon icon--heart" />
                                </div>
                                <div className="Emoji Emoji--haha">
                                  <div className="icon icon--haha" />
                                </div>
                                <div className="Emoji Emoji--wow">
                                  <div className="icon icon--wow" />
                                </div>
                                <div className="Emoji Emoji--sad">
                                  <div className="icon icon--sad" />
                                </div>
                                <div className="Emoji Emoji--angry">
                                  <div className="icon icon--angry" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box">
                            <div className="Emojis">
                              <div className="Emoji Emoji--like">
                                <div className="icon icon--like" />
                              </div>
                              <div className="Emoji Emoji--love">
                                <div className="icon icon--heart" />
                              </div>
                              <div className="Emoji Emoji--haha">
                                <div className="icon icon--haha" />
                              </div>
                              <div className="Emoji Emoji--wow">
                                <div className="icon icon--wow" />
                              </div>
                              <div className="Emoji Emoji--sad">
                                <div className="icon icon--sad" />
                              </div>
                              <div className="Emoji Emoji--angry">
                                <div className="icon icon--angry" />
                              </div>
                            </div>
                          </div>
                          <a title="" href="#" className="comment-to">
                            <i className="icofont-comment" /> Comment
                          </a>
                          <a title="" href="#" className="share-to">
                            <i className="icofont-share-alt" /> Share
                          </a>
                          <div className="emoji-state">
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/thumb.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/thumb.png" />{" "}
                                  Likes
                                </span>
                                <ul className="namelist">
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>20+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/heart.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/heart.png" />{" "}
                                  Love
                                </span>
                                <ul className="namelist">
                                  <li>Amara Sin</li>
                                  <li>Jhon Doe</li>
                                  <li>
                                    <span>10+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/smile.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/smile.png" />{" "}
                                  Happy
                                </span>
                                <ul className="namelist">
                                  <li>Sarah K.</li>
                                  <li>Jhon Doe</li>
                                  <li>Amara Sin</li>
                                  <li>
                                    <span>100+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="popover_wrapper">
                              <a className="popover_title" href="#" title="">
                                <img alt="" src="assets/images/smiles/weep.png" />
                              </a>
                              <div className="popover_content">
                                <span>
                                  <img alt="" src="assets/images/smiles/weep.png" />{" "}
                                  Dislike
                                </span>
                                <ul className="namelist">
                                  <li>Danial Carbal</li>
                                  <li>Amara Sin</li>
                                  <li>Sarah K.</li>
                                  <li>
                                    <span>15+ more</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p>20+</p>
                          </div>
                          <div
                            className="new-comment"
                            style={{ display: "none" }}
                          >
                            <form method="post">
                              <input type="text" placeholder="write comment" />
                              <button type="submit">
                                <i className="icofont-paper-plane" />
                              </button>
                            </form>
                            <div className="comments-area">
                              <ul>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user1.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Jack Carter
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                    <span>
                                      you can view the more detail via link
                                    </span>
                                    <a title="" href="#">
                                      https://www.youtube.com/watch?v=HpZgwHU1GcI
                                    </a>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                                <li>
                                  <figure>
                                    <img
                                      alt=""
                                      src="assets/images/resources/user2.jpg"
                                    />
                                  </figure>
                                  <div className="commenter">
                                    <h5>
                                      <a title="" href="#">
                                        Ching xang
                                      </a>
                                    </h5>
                                    <span>2 hours ago</span>
                                    <p>
                                      i think that some how, we learn who we
                                      really are and then live with that
                                      decision, great post!
                                    </p>
                                  </div>
                                  <a title="Like" href="#">
                                    <i className="icofont-heart" />
                                  </a>
                                  <a
                                    title="Reply"
                                    href="#"
                                    className="reply-coment"
                                  >
                                    <i className="icofont-reply" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* gif image post */}
                <div className="main-wraper">
                  <div className="user-post">
                    <div className="friend-info">
                      <figure>
                        <img alt="" src="assets/images/resources/sponsor.png" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="" href="time-line.html">
                            Sponsors Ads
                          </a>
                        </ins>
                        <span>
                          <i className="icofont-globe" /> Sponsor
                        </span>
                      </div>
                      <div className="post-meta">
                        <ul className="sponsored-caro">
                          <li>
                            <figure>
                              <img
                                src="assets/images/resources/sponsor-prod1.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="sponsor-prod-name">
                              <a href="#" title="">
                                Aloevera Juice 1 liter
                              </a>
                              <span>$24</span>
                            </div>
                            <a href="#" title="" className="shop-btn">
                              Shop Now
                            </a>
                            <div className="share-info">
                              <span>50 shares</span>
                              <span>20k Likes</span>
                            </div>
                            <div className="stat-tools">
                              <div className="box">
                                <div className="Like">
                                  <a className="Like__link">
                                    <i className="icofont-like" /> Like
                                  </a>
                                  <div className="Emojis">
                                    <div className="Emoji Emoji--like">
                                      <div className="icon icon--like" />
                                    </div>
                                    <div className="Emoji Emoji--love">
                                      <div className="icon icon--heart" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box">
                                <div className="Emojis">
                                  <div className="Emoji Emoji--like">
                                    <div className="icon icon--like" />
                                  </div>
                                  <div className="Emoji Emoji--love">
                                    <div className="icon icon--heart" />
                                  </div>
                                </div>
                              </div>
                              <a title="" href="#" className="share-to">
                                <i className="icofont-share-alt" /> Share
                              </a>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="assets/images/resources/sponsor-prod5.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="sponsor-prod-name">
                              <a href="#" title="">
                                Beauty Cosmetics
                              </a>
                              <span>$24</span>
                            </div>
                            <a href="#" title="" className="shop-btn">
                              Shop Now
                            </a>
                            <div className="share-info">
                              <span>50 shares</span>
                              <span>20k Likes</span>
                            </div>
                            <div className="stat-tools">
                              <div className="box">
                                <div className="Like">
                                  <a className="Like__link">
                                    <i className="icofont-like" /> Like
                                  </a>
                                  <div className="Emojis">
                                    <div className="Emoji Emoji--like">
                                      <div className="icon icon--like" />
                                    </div>
                                    <div className="Emoji Emoji--love">
                                      <div className="icon icon--heart" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box">
                                <div className="Emojis">
                                  <div className="Emoji Emoji--like">
                                    <div className="icon icon--like" />
                                  </div>
                                  <div className="Emoji Emoji--love">
                                    <div className="icon icon--heart" />
                                  </div>
                                </div>
                              </div>
                              <a title="" href="#" className="share-to">
                                <i className="icofont-share-alt" /> Share
                              </a>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="assets/images/resources/sponsor-prod4.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="sponsor-prod-name">
                              <a href="#" title="">
                                Overtime For Men
                              </a>
                              <span>$24</span>
                            </div>
                            <a href="#" title="" className="shop-btn">
                              Shop Now
                            </a>
                            <div className="share-info">
                              <span>50 shares</span>
                              <span>20k Likes</span>
                            </div>
                            <div className="stat-tools">
                              <div className="box">
                                <div className="Like">
                                  <a className="Like__link">
                                    <i className="icofont-like" /> Like
                                  </a>
                                  <div className="Emojis">
                                    <div className="Emoji Emoji--like">
                                      <div className="icon icon--like" />
                                    </div>
                                    <div className="Emoji Emoji--love">
                                      <div className="icon icon--heart" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box">
                                <div className="Emojis">
                                  <div className="Emoji Emoji--like">
                                    <div className="icon icon--like" />
                                  </div>
                                  <div className="Emoji Emoji--love">
                                    <div className="icon icon--heart" />
                                  </div>
                                </div>
                              </div>
                              <a title="" href="#" className="share-to">
                                <i className="icofont-share-alt" /> Share
                              </a>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="assets/images/resources/sponsor-prod3.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="sponsor-prod-name">
                              <a href="#" title="">
                                Redish Baby Items
                              </a>
                              <span>$24</span>
                            </div>
                            <a href="#" title="" className="shop-btn">
                              Shop Now
                            </a>
                            <div className="share-info">
                              <span>50 shares</span>
                              <span>20k Likes</span>
                            </div>
                            <div className="stat-tools">
                              <div className="box">
                                <div className="Like">
                                  <a className="Like__link">
                                    <i className="icofont-like" /> Like
                                  </a>
                                  <div className="Emojis">
                                    <div className="Emoji Emoji--like">
                                      <div className="icon icon--like" />
                                    </div>
                                    <div className="Emoji Emoji--love">
                                      <div className="icon icon--heart" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box">
                                <div className="Emojis">
                                  <div className="Emoji Emoji--like">
                                    <div className="icon icon--like" />
                                  </div>
                                  <div className="Emoji Emoji--love">
                                    <div className="icon icon--heart" />
                                  </div>
                                </div>
                              </div>
                              <a title="" href="#" className="share-to">
                                <i className="icofont-share-alt" /> Share
                              </a>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="assets/images/resources/sponsor-prod2.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="sponsor-prod-name">
                              <a href="#" title="">
                                Potato Baby Fider
                              </a>
                              <span>$24</span>
                            </div>
                            <a href="#" title="" className="shop-btn">
                              Shop Now
                            </a>
                            <div className="share-info">
                              <span>50 shares</span>
                              <span>20k Likes</span>
                            </div>
                            <div className="stat-tools">
                              <div className="box">
                                <div className="Like">
                                  <a className="Like__link">
                                    <i className="icofont-like" /> Like
                                  </a>
                                  <div className="Emojis">
                                    <div className="Emoji Emoji--like">
                                      <div className="icon icon--like" />
                                    </div>
                                    <div className="Emoji Emoji--love">
                                      <div className="icon icon--heart" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box">
                                <div className="Emojis">
                                  <div className="Emoji Emoji--like">
                                    <div className="icon icon--like" />
                                  </div>
                                  <div className="Emoji Emoji--love">
                                    <div className="icon icon--heart" />
                                  </div>
                                </div>
                              </div>
                              <a title="" href="#" className="share-to">
                                <i className="icofont-share-alt" /> Share
                              </a>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                src="assets/images/resources/sponsor-prod3.jpg"
                                alt=""
                              />
                            </figure>
                            <div className="sponsor-prod-name">
                              <a href="#" title="">
                                Baby items fider
                              </a>
                              <span>$24</span>
                            </div>
                            <a href="#" title="" className="shop-btn">
                              Shop Now
                            </a>
                            <div className="share-info">
                              <span>50 shares</span>
                              <span>20k Likes</span>
                            </div>
                            <div className="stat-tools">
                              <div className="box">
                                <div className="Like">
                                  <a className="Like__link">
                                    <i className="icofont-like" /> Like
                                  </a>
                                  <div className="Emojis">
                                    <div className="Emoji Emoji--like">
                                      <div className="icon icon--like" />
                                    </div>
                                    <div className="Emoji Emoji--love">
                                      <div className="icon icon--heart" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="box">
                                <div className="Emojis">
                                  <div className="Emoji Emoji--like">
                                    <div className="icon icon--like" />
                                  </div>
                                  <div className="Emoji Emoji--love">
                                    <div className="icon icon--heart" />
                                  </div>
                                </div>
                              </div>
                              <a title="" href="#" className="share-to">
                                <i className="icofont-share-alt" /> Share
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* advertisment carousel */}
                <div className="loadmore">
                  <div className="sp sp-bars" />
                  <a href="#" title="" data-ripple="">
                    Load More..
                  </a>
                </div>
                {/* loadmore buttons */}
              </div>
              <div className="col-lg-3">
                <aside className="sidebar static right">
                  <div className="widget">
                    <h4 className="widget-title">Your Groups</h4>
                    <ul className="ak-groups">
                      <li>
                        <figure>
                          <img src="assets/images/resources/your-group1.jpg" alt="" />
                        </figure>
                        <div className="your-grp">
                          <h5>
                            <a href="group-detail.html" title="">
                              Good Group
                            </a>
                          </h5>
                          <a href="#" title="">
                            <i className="icofont-bell-alt" />
                            Notifilactions <span>13</span>
                          </a>
                          <a
                            href="group-feed.html"
                            title=""
                            className="promote"
                          >
                            view feed
                          </a>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img src="assets/images/resources/your-group2.jpg" alt="" />
                        </figure>
                        <div className="your-grp">
                          <h5>
                            <a href="group-detail.html" title="">
                              E-course Group
                            </a>
                          </h5>
                          <a href="#" title="">
                            <i className="icofont-bell-alt" />
                            Notifilactions <span>13</span>
                          </a>
                          <a
                            href="group-feed.html"
                            title=""
                            className="promote"
                          >
                            view feed
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Your groups */}
                  <div className="widget">
                    <h4 className="widget-title">Suggested Group</h4>
                    <div className="sug-caro">
                      <div className="friend-box">
                        <figure>
                          <img alt="" src="assets/images/resources/sidebar-info.jpg" />
                          <span>Members: 505K</span>
                        </figure>
                        <div className="frnd-meta">
                          <img alt="" src="assets/images/resources/frnd-figure2.jpg" />
                          <div className="frnd-name">
                            <a title="" href="#">
                              Social Research
                            </a>
                            <span>@biolabest</span>
                          </div>
                          <a className="main-btn2" href="#" title="">
                            Join Community
                          </a>
                        </div>
                      </div>
                      <div className="friend-box">
                        <figure>
                          <img
                            alt=""
                            src="assets/images/resources/sidebar-info2.jpg"
                          />
                          <span>Members: 505K</span>
                        </figure>
                        <div className="frnd-meta">
                          <img alt="" src="assets/images/resources/frnd-figure3.jpg" />
                          <div className="frnd-name">
                            <a title="" href="#">
                              Bio Labest Group
                            </a>
                            <span>@biolabest</span>
                          </div>
                          <a className="main-btn2" href="#" title="">
                            Join Community
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* suggested group */}
                  <div className="widget">
                    <h4 className="widget-title">Ask Research Question?</h4>
                    <div className="ask-question">
                      <i className="icofont-question-circle" />
                      <h6>
                        Ask questions in Q&amp;A to get help from experts in
                        your field.
                      </h6>
                      <a className="ask-qst" href="#" title="">
                        Ask a question
                      </a>
                    </div>
                  </div>
                  {/* ask question widget */}
                  <div className="widget">
                    <h4 className="widget-title">
                      Explor Events{" "}
                      <a className="see-all" href="#" title="">
                        See All
                      </a>
                    </h4>
                    <div className="rec-events bg-purple">
                      <i className="icofont-gift" />
                      <h6>
                        <a title="" href="">
                          BZ University good night event in columbia
                        </a>
                      </h6>
                      <img alt="" src="assets/images/clock.png" />
                    </div>
                    <div className="rec-events bg-blue">
                      <i className="icofont-microphone" />
                      <h6>
                        <a title="" href="">
                          The 3rd International Conference 2020
                        </a>
                      </h6>
                      <img alt="" src="assets/images/clock.png" />
                    </div>
                  </div>
                  {/* event widget */}
                  <div className="widget">
                    <span>
                      <i className="icofont-globe" /> Sponsored
                    </span>
                    <ul className="sponsors-ad">
                      <li>
                        <figure>
                          <img src="assets/images/resources/sponsor.jpg" alt="" />
                        </figure>
                        <div className="sponsor-meta">
                          <h5>
                            <a href="#" title="">
                              IQ Options Broker
                            </a>
                          </h5>
                          <a href="#" title="" target="_blank">
                            www.iqvie.com
                          </a>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img src="assets/images/resources/sponsor2.jpg" alt="" />
                        </figure>
                        <div className="sponsor-meta">
                          <h5>
                            <a href="#" title="">
                              BM Fashion Designer
                            </a>
                          </h5>
                          <a href="#" title="" target="_blank">
                            www.abcd.com
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* sponsord */}
                  <div className="widget stick-widget">
                    <h4 className="widget-title">Who's follownig</h4>
                    <ul className="followers">
                      <li>
                        <figure>
                          <img
                            alt=""
                            src="assets/images/resources/friend-avatar.jpg"
                          />
                        </figure>
                        <div className="friend-meta">
                          <h4>
                            <a title="" href="time-line.html">
                              Kelly Bill
                            </a>
                            <span>Dept colleague</span>
                          </h4>
                          <a className="underline" title="" href="#">
                            Follow
                          </a>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img
                            alt=""
                            src="assets/images/resources/friend-avatar2.jpg"
                          />
                        </figure>
                        <div className="friend-meta">
                          <h4>
                            <a title="" href="time-line.html">
                              Issabel
                            </a>
                            <span>Dept colleague</span>
                          </h4>
                          <a className="underline" title="" href="#">
                            Follow
                          </a>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img
                            alt=""
                            src="assets/images/resources/friend-avatar3.jpg"
                          />
                        </figure>
                        <div className="friend-meta">
                          <h4>
                            <a title="" href="time-line.html">
                              Andrew
                            </a>
                            <span>Dept colleague</span>
                          </h4>
                          <a className="underline" title="" href="#">
                            Follow
                          </a>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img
                            alt=""
                            src="assets/images/resources/friend-avatar4.jpg"
                          />
                        </figure>
                        <div className="friend-meta">
                          <h4>
                            <a title="" href="time-line.html">
                              Sophia
                            </a>
                            <span>Dept colleague</span>
                          </h4>
                          <a className="underline" title="" href="#">
                            Follow
                          </a>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img
                            alt=""
                            src="assets/images/resources/friend-avatar5.jpg"
                          />
                        </figure>
                        <div className="friend-meta">
                          <h4>
                            <a title="" href="time-line.html">
                              Allen
                            </a>
                            <span>Dept colleague</span>
                          </h4>
                          <a className="underline" title="" href="#">
                            Follow
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* whos following */}
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* content */}
</>

  )
}

export default Feed