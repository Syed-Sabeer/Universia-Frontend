import React from 'react'

const Profile = () => {
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
                  <div className="widget">
                    <span>
                      <i className="icofont-globe" /> Sponsored
                    </span>
                    <ul className="sponsors-ad">
                      <li>
                        <figure>
                          <img alt="" src="assets/images/resources/sponsor.jpg" />
                        </figure>
                        <div className="sponsor-meta">
                          <h5>
                            <a title="" href="#">
                              IQ Options Broker
                            </a>
                          </h5>
                          <a target="_blank" title="" href="#">
                            www.iqvie.com
                          </a>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img alt="" src="assets/images/resources/sponsor2.jpg" />
                        </figure>
                        <div className="sponsor-meta">
                          <h5>
                            <a title="" href="#">
                              BM Fashion Designer
                            </a>
                          </h5>
                          <a target="_blank" title="" href="#">
                            www.abcd.com
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget">
                    <h4 className="widget-title">Your Groups</h4>
                    <ul className="ak-groups">
                      <li>
                        <figure>
                          <img alt="" src="assets/images/resources/your-group1.jpg" />
                        </figure>
                        <div className="your-grp">
                          <h5>
                            <a title="" href="group-detail.html">
                              Good Group
                            </a>
                          </h5>
                          <a title="" href="#">
                            <i className="icofont-bell-alt" />
                            Notifilactions <span>13</span>
                          </a>
                          <a
                            className="promote"
                            title=""
                            href="group-feed.html"
                          >
                            view feed
                          </a>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img alt="" src="assets/images/resources/your-group2.jpg" />
                        </figure>
                        <div className="your-grp">
                          <h5>
                            <a title="" href="group-detail.html">
                              E-course Group
                            </a>
                          </h5>
                          <a title="" href="#">
                            <i className="icofont-bell-alt" />
                            Notifilactions <span>13</span>
                          </a>
                          <a
                            className="promote"
                            title=""
                            href="group-feed.html"
                          >
                            view feed
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
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
                  <div className="widget">
                    <h4 className="widget-title">Group Terms</h4>
                    <div className="grop-rules">
                      <p>
                        Hi! To ensure that this is a great place for everyone to
                        have a wondefull time, we have some rules. Breaking them
                        will result in a ban from the group.
                      </p>
                      <ol>
                        <li>
                          <i className="icofont-dotted-right" /> Be positive!
                          Respect and help other viewers
                        </li>
                        <li>
                          <i className="icofont-dotted-right" /> No insults,
                          aggravations or any other bad languag
                        </li>
                        <li>
                          <i className="icofont-dotted-right" /> No self
                          promotions
                        </li>
                        <li>
                          <i className="icofont-dotted-right" /> Avoid political
                          or religious discussions
                        </li>
                        <li>
                          <i className="icofont-dotted-right" /> No comment
                          spamming
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="widget stick-widget">
                    <h4 className="widget-title">
                      Featured Universities{" "}
                      <a className="see-all" href="#" title="">
                        See All
                      </a>
                    </h4>
                    <ul className="featured-comp">
                      <li>
                        <a
                          href="#"
                          title="Color Hands inc"
                          data-toggle="tooltip"
                        >
                          <img src="assets/images/resources/company1.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Macrosoft inc" data-toggle="tooltip">
                          <img src="assets/images/resources/company2.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="EBM inc" data-toggle="tooltip">
                          <img src="assets/images/resources/company3.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Boogle inc" data-toggle="tooltip">
                          <img src="assets/images/resources/company4.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Color Hands inc"
                          data-toggle="tooltip"
                        >
                          <img src="assets/images/resources/company5.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Macrosoft inc" data-toggle="tooltip">
                          <img src="assets/images/resources/company6.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="EBM inc" data-toggle="tooltip">
                          <img src="assets/images/resources/company7.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Boogle inc" data-toggle="tooltip">
                          <img src="assets/images/resources/company8.png" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* feature universites logos */}
                </aside>
              </div>
              <div className="col-lg-9">
                <div className="group-feed">
                  <div className="group-avatar">
                    <img src="assets/images/resources/profile-banner.jpg" alt="" />
                    <a href="#" title="">
                      <i className="icofont-check-circled" />
                      Follow
                    </a>
                    <figure className="group-dp">
                      <img src="assets/images/resources/user.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="grp-info about">
                    <h4>
                      Georg Peeter <span>@Georgofficial</span>
                    </h4>
                    <ul className="joined-info">
                      <li>
                        <span>Joined:</span> April 2020
                      </li>
                      <li>
                        <span>Follow:</span> 55K
                      </li>
                      <li>
                        <span>Followers:</span> 2.2K
                      </li>
                      <li>
                        <span>Posts:</span> 932
                      </li>
                    </ul>
                    <ul className="nav nav-tabs about-btn">
                      <li className="nav-item">
                        <a className="active" href="#posts" data-toggle="tab">
                          Posts
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="" href="#pictures" data-toggle="tab">
                          Pictures
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="" href="#videos" data-toggle="tab">
                          Videos
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="" href="#friends" data-toggle="tab">
                          Friends
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="" href="#about" data-toggle="tab">
                          About
                        </a>
                      </li>
                    </ul>
                    <ul className="more-grp-info">
                      <li>
                        <form className="c-form" method="post">
                          <input type="text" placeholder="Search..." />
                          <i className="icofont-search-1" />
                        </form>
                      </li>
                      <li>
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                className="feather feather-more-horizontal"
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
                                <circle r={1} cy={12} cx={12} />
                                <circle r={1} cy={12} cx={19} />
                                <circle r={1} cy={12} cx={5} />
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
                      </li>
                    </ul>
                  </div>
                  <div className="main-wraper">
                    <div className="grp-about">
                      <div className="row">
                        <div className="col-lg-8 col-md-6">
                          <h4>About Me!</h4>
                          <p>
                            Hi! My name is Georg Peeter but some people may know
                            me as peeter! I have a Twitch channel where I
                            stream, play and review all the newest games.
                          </p>
                          <ul className="badges">
                            <li>
                              <img src="assets/images/badges/badge2.png" alt="" />
                            </li>
                            <li>
                              <img src="assets/images/badges/badge3.png" alt="" />
                            </li>
                            <li>
                              <img src="assets/images/badges/badge4.png" alt="" />
                            </li>
                            <li>
                              <img src="assets/images/badges/badge5.png" alt="" />
                            </li>
                            <li>
                              <img src="assets/images/badges/badge7.png" alt="" />
                            </li>
                            <li>
                              <img src="assets/images/badges/badge8.png" alt="" />
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="share-article">
                            <span>Share Profile</span>
                            <a href="#" title="" className="facebook">
                              <i className="icofont-facebook" />
                            </a>
                            <a href="#" title="" className="pinterest">
                              <i className="icofont-pinterest" />
                            </a>
                            <a href="#" title="" className="instagram">
                              <i className="icofont-instagram" />
                            </a>
                            <a href="#" title="" className="twitter">
                              <i className="icofont-twitter" />
                            </a>
                            <a href="#" title="" className="google">
                              <i className="icofont-google-plus" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="tab-content">
                        <div className="tab-pane active fade show " id="posts">
                          <div className="row merged20">
                            <div className="col-lg-8">
                              <div className="main-wraper">
                                <span className="new-title">
                                  Create New Post
                                </span>
                                <div className="new-post">
                                  <form method="post">
                                    <i className="icofont-pen-alt-1" />
                                    <input
                                      type="text"
                                      placeholder="Create New Post"
                                    />
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
                                          <img
                                            src="assets/images/activity.png"
                                            alt=""
                                          />
                                        </i>
                                        <span>Feeling/Activity</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="live-stream.html" title="">
                                        <i>
                                          <img
                                            src="assets/images/live-stream.png"
                                            alt=""
                                          />
                                        </i>
                                        <span>Live Stream</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              {/* create new post */}
                              <div className="main-wraper">
                                <div className="user-post">
                                  <div className="friend-info">
                                    <figure>
                                      <img
                                        alt=""
                                        src="assets/images/resources/user4.jpg"
                                      />
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
                                              <span>
                                                Edit This Post within a Hour
                                              </span>
                                            </li>
                                            <li>
                                              <i className="icofont-ban" />
                                              Hide Post
                                              <span>Hide This Post</span>
                                            </li>
                                            <li>
                                              <i className="icofont-ui-delete" />
                                              Delete Post
                                              <span>
                                                If inappropriate Post By Mistake
                                              </span>
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
                                          Jack Carter
                                        </a>{" "}
                                        Share Post
                                      </ins>
                                      <span>
                                        <i className="icofont-globe" />{" "}
                                        published: Sep,15 2020
                                      </span>
                                    </div>
                                    <div className="post-meta">
                                      <a
                                        href="post-detail.html"
                                        className="post-title"
                                      >
                                        Supervision as a Personnel Development
                                        Device
                                      </a>
                                      <p>
                                        Nam eget dui. Etiam rhoncus. Maecenas
                                        tempus, tellus eget condimentum rhoncus,
                                        sem quam semper libero.
                                      </p>
                                      <div className="we-video-info">
                                        <ul>
                                          <li>
                                            <span
                                              title="views"
                                              className="views"
                                            >
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
                                                  <circle
                                                    cx={12}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                </svg>
                                              </i>
                                              <ins>1.2k</ins>
                                            </span>
                                          </li>
                                          <li>
                                            <span
                                              title="Comments"
                                              className="Recommend"
                                            >
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
                                            <span
                                              title="follow"
                                              className="Follow"
                                            >
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
                                            <span
                                              className="share-pst"
                                              title="Share"
                                            >
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
                                                  <circle
                                                    cx={18}
                                                    cy={5}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={6}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={18}
                                                    cy={19}
                                                    r={3}
                                                  />
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
                                        <a
                                          href="post-detail.html"
                                          title=""
                                          className="reply"
                                        >
                                          Reply <i className="icofont-reply" />
                                        </a>
                                      </div>
                                      <div className="stat-tools">
                                        <div className="box">
                                          <div className="Like">
                                            <a className="Like__link">
                                              <i className="icofont-like" />{" "}
                                              Like
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
                                        <a
                                          title=""
                                          href="#"
                                          className="comment-to"
                                        >
                                          <i className="icofont-comment" />{" "}
                                          Comment
                                        </a>
                                        <a
                                          title=""
                                          href="#"
                                          className="share-to"
                                        >
                                          <i className="icofont-share-alt" />{" "}
                                          Share
                                        </a>
                                        <div className="emoji-state">
                                          <div className="popover_wrapper">
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/thumb.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/thumb.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/heart.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/heart.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/smile.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/smile.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/weep.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/weep.png"
                                                />{" "}
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
                                            <input
                                              type="text"
                                              placeholder="write comment"
                                            />
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
                                                    decision, great post!
                                                  </p>
                                                  <span>
                                                    you can view the more detail
                                                    via link
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
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
                                      <img
                                        alt=""
                                        src="assets/images/resources/user4.jpg"
                                      />
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
                                              <span>
                                                Edit This Post within a Hour
                                              </span>
                                            </li>
                                            <li>
                                              <i className="icofont-ban" />
                                              Hide Post
                                              <span>Hide This Post</span>
                                            </li>
                                            <li>
                                              <i className="icofont-ui-delete" />
                                              Delete Post
                                              <span>
                                                If inappropriate Post By Mistake
                                              </span>
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
                                          Georg Peeter
                                        </a>{" "}
                                        Premium Product
                                      </ins>
                                      <span>
                                        <i className="icofont-globe" />{" "}
                                        published: Sep,15 2020
                                      </span>
                                    </div>
                                    <div className="post-meta">
                                      <figure className="premium-post">
                                        <img
                                          src="assets/images/resources/book5.jpg"
                                          alt=""
                                        />
                                      </figure>
                                      <div className="premium">
                                        <a
                                          href="book-detail.html"
                                          className="post-title"
                                        >
                                          Technicial words 2020 Book world
                                        </a>
                                        <p>
                                          Nam eget dui. Etiam rhoncus. Maecenas
                                          tempus, tellus eget condimentum
                                          rhoncus, sem quam semper libero.
                                        </p>
                                        <a
                                          className="main-btn purchase-btn"
                                          title=""
                                          href="book-detail.html"
                                        >
                                          <i className="icofont-cart-alt" /> Buy
                                          Now
                                        </a>
                                      </div>
                                      <div className="we-video-info">
                                        <ul>
                                          <li>
                                            <span
                                              title="views"
                                              className="views"
                                            >
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
                                                  <circle
                                                    cx={12}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                </svg>
                                              </i>
                                              <ins>1.2k</ins>
                                            </span>
                                          </li>
                                          <li>
                                            <span
                                              title="Comments"
                                              className="Recommend"
                                            >
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
                                            <span
                                              title="follow"
                                              className="Follow"
                                            >
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
                                            <span
                                              className="share-pst"
                                              title="Share"
                                            >
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
                                                  <circle
                                                    cx={18}
                                                    cy={5}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={6}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={18}
                                                    cy={19}
                                                    r={3}
                                                  />
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
                                        <a
                                          href="post-detail.html"
                                          title=""
                                          className="reply"
                                        >
                                          Reply <i className="icofont-reply" />
                                        </a>
                                      </div>
                                      <div className="stat-tools">
                                        <div className="box">
                                          <div className="Like">
                                            <a className="Like__link">
                                              <i className="icofont-like" />{" "}
                                              Like
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
                                        <a
                                          title=""
                                          href="#"
                                          className="comment-to"
                                        >
                                          <i className="icofont-comment" />{" "}
                                          Comment
                                        </a>
                                        <a
                                          title=""
                                          href="#"
                                          className="share-to"
                                        >
                                          <i className="icofont-share-alt" />{" "}
                                          Share
                                        </a>
                                        <div className="emoji-state">
                                          <div className="popover_wrapper">
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/thumb.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/thumb.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/heart.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/heart.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/smile.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/smile.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/weep.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/weep.png"
                                                />{" "}
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
                                            <input
                                              type="text"
                                              placeholder="write comment"
                                            />
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
                                                    decision, great post!
                                                  </p>
                                                  <span>
                                                    you can view the more detail
                                                    via link
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
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
                                    <i className="icofont-video-alt" /> Videos
                                    Play List
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
                                      <img
                                        src="assets/images/resources/user4.jpg"
                                        alt=""
                                      />
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
                                      <img
                                        src="assets/images/resources/user2.jpg"
                                        alt=""
                                      />
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
                                      <img
                                        src="assets/images/resources/user4.jpg"
                                        alt=""
                                      />
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
                                      <img
                                        src="assets/images/resources/user3.jpg"
                                        alt=""
                                      />
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
                                      <img
                                        alt=""
                                        src="assets/images/resources/user4.jpg"
                                      />
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
                                              <span>
                                                Edit This Post within a Hour
                                              </span>
                                            </li>
                                            <li>
                                              <i className="icofont-ban" />
                                              Hide Post
                                              <span>Hide This Post</span>
                                            </li>
                                            <li>
                                              <i className="icofont-ui-delete" />
                                              Delete Post
                                              <span>
                                                If inappropriate Post By Mistake
                                              </span>
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
                                          Georg Peeter{" "}
                                        </a>{" "}
                                        Create Post
                                      </ins>
                                      <span>
                                        <i className="icofont-globe" />{" "}
                                        published: Sep,15 2020
                                      </span>
                                    </div>
                                    <div className="post-meta">
                                      <figure>
                                        <a
                                          data-toggle="modal"
                                          data-target="#img-comt"
                                          href="assets/images/resources/album1.jpg"
                                        >
                                          <img
                                            src="assets/images/resources/study.jpg"
                                            alt=""
                                          />
                                        </a>
                                      </figure>
                                      <a
                                        href="post-detail.html"
                                        className="post-title"
                                      >
                                        Supervision as a Personnel Development
                                        Device
                                      </a>
                                      <p>
                                        Nam eget dui. Etiam rhoncus. Maecenas
                                        tempus, tellus eget condimentum rhoncus,
                                        sem quam semper libero.
                                      </p>
                                      <div className="we-video-info">
                                        <ul>
                                          <li>
                                            <span
                                              title="views"
                                              className="views"
                                            >
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
                                                  <circle
                                                    cx={12}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                </svg>
                                              </i>
                                              <ins>1.2k</ins>
                                            </span>
                                          </li>
                                          <li>
                                            <span
                                              title="Comments"
                                              className="Recommend"
                                            >
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
                                            <span
                                              title="follow"
                                              className="Follow"
                                            >
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
                                            <span
                                              className="share-pst"
                                              title="Share"
                                            >
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
                                                  <circle
                                                    cx={18}
                                                    cy={5}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={6}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={18}
                                                    cy={19}
                                                    r={3}
                                                  />
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
                                        <a
                                          href="post-detail.html"
                                          title=""
                                          className="reply"
                                        >
                                          Reply <i className="icofont-reply" />
                                        </a>
                                      </div>
                                      <div className="stat-tools">
                                        <div className="box">
                                          <div className="Like">
                                            <a className="Like__link">
                                              <i className="icofont-like" />{" "}
                                              Like
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
                                        <a
                                          title=""
                                          href="#"
                                          className="comment-to"
                                        >
                                          <i className="icofont-comment" />{" "}
                                          Comment
                                        </a>
                                        <a
                                          title=""
                                          href="#"
                                          className="share-to"
                                        >
                                          <i className="icofont-share-alt" />{" "}
                                          Share
                                        </a>
                                        <div className="emoji-state">
                                          <div className="popover_wrapper">
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/thumb.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/thumb.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/heart.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/heart.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/smile.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/smile.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/weep.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/weep.png"
                                                />{" "}
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
                                            <input
                                              type="text"
                                              placeholder="write comment"
                                            />
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
                                                    decision, great post!
                                                  </p>
                                                  <span>
                                                    you can view the more detail
                                                    via link
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
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
                                      <img
                                        alt=""
                                        src="assets/images/resources/user4.jpg"
                                      />
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
                                              <span>
                                                Edit This Post within a Hour
                                              </span>
                                            </li>
                                            <li>
                                              <i className="icofont-ban" />
                                              Hide Post
                                              <span>Hide This Post</span>
                                            </li>
                                            <li>
                                              <i className="icofont-ui-delete" />
                                              Delete Post
                                              <span>
                                                If inappropriate Post By Mistake
                                              </span>
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
                                          Georg Peeter{" "}
                                        </a>{" "}
                                        added image album
                                      </ins>
                                      <span>
                                        <i className="icofont-globe" />{" "}
                                        published: Sep,15 2020
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
                                      <a
                                        href="post-detail.html"
                                        className="post-title"
                                      >
                                        Supervision as a Personnel Development
                                        Device
                                      </a>
                                      <p>
                                        Nam eget dui. Etiam rhoncus. Maecenas
                                        tempus, tellus eget condimentum rhoncus,
                                        sem quam semper libero.
                                      </p>
                                      <div className="we-video-info">
                                        <ul>
                                          <li>
                                            <span
                                              title="views"
                                              className="views"
                                            >
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
                                                  <circle
                                                    cx={12}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                </svg>
                                              </i>
                                              <ins>1.2k</ins>
                                            </span>
                                          </li>
                                          <li>
                                            <span
                                              title="Comments"
                                              className="Recommend"
                                            >
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
                                            <span
                                              title="follow"
                                              className="Follow"
                                            >
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
                                            <span
                                              className="share-pst"
                                              title="Share"
                                            >
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
                                                  <circle
                                                    cx={18}
                                                    cy={5}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={6}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={18}
                                                    cy={19}
                                                    r={3}
                                                  />
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
                                        <a
                                          href="post-detail.html"
                                          title=""
                                          className="reply"
                                        >
                                          Reply <i className="icofont-reply" />
                                        </a>
                                      </div>
                                      <div className="stat-tools">
                                        <div className="box">
                                          <div className="Like">
                                            <a className="Like__link">
                                              <i className="icofont-like" />{" "}
                                              Like
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
                                        <a
                                          title=""
                                          href="#"
                                          className="comment-to"
                                        >
                                          <i className="icofont-comment" />{" "}
                                          Comment
                                        </a>
                                        <a
                                          title=""
                                          href="#"
                                          className="share-to"
                                        >
                                          <i className="icofont-share-alt" />{" "}
                                          Share
                                        </a>
                                        <div className="emoji-state">
                                          <div className="popover_wrapper">
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/thumb.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/thumb.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/heart.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/heart.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/smile.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/smile.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/weep.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/weep.png"
                                                />{" "}
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
                                            <input
                                              type="text"
                                              placeholder="write comment"
                                            />
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
                                                    decision, great post!
                                                  </p>
                                                  <span>
                                                    you can view the more detail
                                                    via link
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
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
                                      <img
                                        alt=""
                                        src="assets/images/resources/user4.jpg"
                                      />
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
                                              <span>
                                                Edit This Post within a Hour
                                              </span>
                                            </li>
                                            <li>
                                              <i className="icofont-ban" />
                                              Hide Post
                                              <span>Hide This Post</span>
                                            </li>
                                            <li>
                                              <i className="icofont-ui-delete" />
                                              Delete Post
                                              <span>
                                                If inappropriate Post By Mistake
                                              </span>
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
                                          Georg Peeter{" "}
                                        </a>{" "}
                                        Shared Link
                                      </ins>
                                      <span>
                                        <i className="icofont-globe" />{" "}
                                        published: Sep,15 2020
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
                                        <img
                                          src="assets/images/resources/laptop.png"
                                          alt=""
                                        />
                                      </figure>
                                      <a
                                        href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538"
                                        className="post-title"
                                        target="_blank"
                                      >
                                        Winku Social Network with Company Pages
                                        Theme
                                      </a>
                                      <p>
                                        “Winku” is a social community mobile app
                                        kit with features. user can use this app
                                        for sharing blog, posts, timeline,
                                        create Group, Create Pages,
                                        chat/Messages, Movies sharing, QA, and
                                        Much More.
                                      </p>
                                      <div className="we-video-info">
                                        <ul>
                                          <li>
                                            <span
                                              title="views"
                                              className="views"
                                            >
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
                                                  <circle
                                                    cx={12}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                </svg>
                                              </i>
                                              <ins>1.2k</ins>
                                            </span>
                                          </li>
                                          <li>
                                            <span
                                              title="Comments"
                                              className="Recommend"
                                            >
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
                                            <span
                                              title="follow"
                                              className="Follow"
                                            >
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
                                            <span
                                              className="share-pst"
                                              title="Share"
                                            >
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
                                                  <circle
                                                    cx={18}
                                                    cy={5}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={6}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={18}
                                                    cy={19}
                                                    r={3}
                                                  />
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
                                        <a
                                          href="post-detail.html"
                                          title=""
                                          className="reply"
                                        >
                                          Reply <i className="icofont-reply" />
                                        </a>
                                      </div>
                                      <div className="stat-tools">
                                        <div className="box">
                                          <div className="Like">
                                            <a className="Like__link">
                                              <i className="icofont-like" />{" "}
                                              Like
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
                                        <a
                                          title=""
                                          href="#"
                                          className="comment-to"
                                        >
                                          <i className="icofont-comment" />{" "}
                                          Comment
                                        </a>
                                        <a
                                          title=""
                                          href="#"
                                          className="share-to"
                                        >
                                          <i className="icofont-share-alt" />{" "}
                                          Share
                                        </a>
                                        <div className="emoji-state">
                                          <div className="popover_wrapper">
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/thumb.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/thumb.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/heart.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/heart.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/smile.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/smile.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/weep.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/weep.png"
                                                />{" "}
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
                                            <input
                                              type="text"
                                              placeholder="write comment"
                                            />
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
                                                    decision, great post!
                                                  </p>
                                                  <span>
                                                    you can view the more detail
                                                    via link
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
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
                                      <img
                                        alt=""
                                        src="assets/images/resources/user4.jpg"
                                      />
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
                                              <span>
                                                Edit This Post within a Hour
                                              </span>
                                            </li>
                                            <li>
                                              <i className="icofont-ban" />
                                              Hide Post
                                              <span>Hide This Post</span>
                                            </li>
                                            <li>
                                              <i className="icofont-ui-delete" />
                                              Delete Post
                                              <span>
                                                If inappropriate Post By Mistake
                                              </span>
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
                                          Georg Peeter{" "}
                                        </a>{" "}
                                        Shared Link
                                      </ins>
                                      <span>
                                        <i className="icofont-globe" />{" "}
                                        published: Sep,15 2020
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
                                        Cookie? Biscuit? Bikkie? They all mean
                                        the same thing! Our lovely English
                                        teachers will quickly show you some
                                        pronunciation and vocabulary differences
                                        from Australia, America, and England!
                                      </p>
                                      <div className="we-video-info">
                                        <ul>
                                          <li>
                                            <span
                                              title="views"
                                              className="views"
                                            >
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
                                                  <circle
                                                    cx={12}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                </svg>
                                              </i>
                                              <ins>1.2k</ins>
                                            </span>
                                          </li>
                                          <li>
                                            <span
                                              title="Comments"
                                              className="Recommend"
                                            >
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
                                            <span
                                              title="follow"
                                              className="Follow"
                                            >
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
                                            <span
                                              className="share-pst"
                                              title="Share"
                                            >
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
                                                  <circle
                                                    cx={18}
                                                    cy={5}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={6}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={18}
                                                    cy={19}
                                                    r={3}
                                                  />
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
                                        <a
                                          href="post-detail.html"
                                          title=""
                                          className="reply"
                                        >
                                          Reply <i className="icofont-reply" />
                                        </a>
                                      </div>
                                      <div className="stat-tools">
                                        <div className="box">
                                          <div className="Like">
                                            <a className="Like__link">
                                              <i className="icofont-like" />{" "}
                                              Like
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
                                        <a
                                          title=""
                                          href="#"
                                          className="comment-to"
                                        >
                                          <i className="icofont-comment" />{" "}
                                          Comment
                                        </a>
                                        <a
                                          title=""
                                          href="#"
                                          className="share-to"
                                        >
                                          <i className="icofont-share-alt" />{" "}
                                          Share
                                        </a>
                                        <div className="emoji-state">
                                          <div className="popover_wrapper">
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/thumb.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/thumb.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/heart.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/heart.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/smile.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/smile.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/weep.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/weep.png"
                                                />{" "}
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
                                            <input
                                              type="text"
                                              placeholder="write comment"
                                            />
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
                                                    decision, great post!
                                                  </p>
                                                  <span>
                                                    you can view the more detail
                                                    via link
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
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
                                      <img
                                        alt=""
                                        src="assets/images/resources/user4.jpg"
                                      />
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
                                              <span>
                                                Edit This Post within a Hour
                                              </span>
                                            </li>
                                            <li>
                                              <i className="icofont-ban" />
                                              Hide Post
                                              <span>Hide This Post</span>
                                            </li>
                                            <li>
                                              <i className="icofont-ui-delete" />
                                              Delete Post
                                              <span>
                                                If inappropriate Post By Mistake
                                              </span>
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
                                          Georg Peeter
                                        </a>{" "}
                                        Shared Link
                                      </ins>
                                      <span>
                                        <i className="icofont-globe" />{" "}
                                        published: Sep,15 2020
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
                                            <span
                                              title="views"
                                              className="views"
                                            >
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
                                                  <circle
                                                    cx={12}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                </svg>
                                              </i>
                                              <ins>1.2k</ins>
                                            </span>
                                          </li>
                                          <li>
                                            <span
                                              title="Comments"
                                              className="Recommend"
                                            >
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
                                            <span
                                              title="follow"
                                              className="Follow"
                                            >
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
                                            <span
                                              className="share-pst"
                                              title="Share"
                                            >
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
                                                  <circle
                                                    cx={18}
                                                    cy={5}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={6}
                                                    cy={12}
                                                    r={3}
                                                  />
                                                  <circle
                                                    cx={18}
                                                    cy={19}
                                                    r={3}
                                                  />
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
                                        <a
                                          href="post-detail.html"
                                          title=""
                                          className="reply"
                                        >
                                          Reply <i className="icofont-reply" />
                                        </a>
                                      </div>
                                      <div className="stat-tools">
                                        <div className="box">
                                          <div className="Like">
                                            <a className="Like__link">
                                              <i className="icofont-like" />{" "}
                                              Like
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
                                        <a
                                          title=""
                                          href="#"
                                          className="comment-to"
                                        >
                                          <i className="icofont-comment" />{" "}
                                          Comment
                                        </a>
                                        <a
                                          title=""
                                          href="#"
                                          className="share-to"
                                        >
                                          <i className="icofont-share-alt" />{" "}
                                          Share
                                        </a>
                                        <div className="emoji-state">
                                          <div className="popover_wrapper">
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/thumb.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/thumb.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/heart.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/heart.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/smile.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/smile.png"
                                                />{" "}
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
                                            <a
                                              className="popover_title"
                                              href="#"
                                              title=""
                                            >
                                              <img
                                                alt=""
                                                src="assets/images/smiles/weep.png"
                                              />
                                            </a>
                                            <div className="popover_content">
                                              <span>
                                                <img
                                                  alt=""
                                                  src="assets/images/smiles/weep.png"
                                                />{" "}
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
                                            <input
                                              type="text"
                                              placeholder="write comment"
                                            />
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
                                                    decision, great post!
                                                  </p>
                                                  <span>
                                                    you can view the more detail
                                                    via link
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
                                                    i think that some how, we
                                                    learn who we really are and
                                                    then live with that
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
                              <div className="sp sp-bars" />
                            </div>
                            <div className="col-lg-4">
                              <aside className="sidebar static left">
                                <div className="advertisment-box">
                                  <h4 className="">
                                    <i className="icofont-info-circle" />{" "}
                                    advertisment
                                  </h4>
                                  <figure>
                                    <a href="#" title="Advertisment">
                                      <img
                                        src="assets/images/resources/ad-widget2.gif"
                                        alt=""
                                      />
                                    </a>
                                  </figure>
                                </div>
                                <div className="widget">
                                  <h4 className="widget-title">
                                    Follow People{" "}
                                    <a title="" href="#" className="see-all">
                                      See All
                                    </a>
                                  </h4>
                                  <ul className="invitepage">
                                    <li>
                                      <figure>
                                        <img
                                          alt=""
                                          src="assets/images/resources/friend-avatar.jpg"
                                        />
                                        <a href="">Jack carter</a>
                                      </figure>
                                      <button className="sug-like">
                                        <i className="invit">Follow</i>
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <figure>
                                        <img
                                          alt=""
                                          src="assets/images/resources/friend-avatar2.jpg"
                                        />
                                        <a href="">Emma watson</a>
                                      </figure>
                                      <button className="sug-like">
                                        <i className="invit">Follow</i>
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <figure>
                                        <img
                                          alt=""
                                          src="assets/images/resources/friend-avatar3.jpg"
                                        />
                                        <a href="">Andrew</a>
                                      </figure>
                                      <button className="sug-like">
                                        <i className="invit">Follow</i>
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <figure>
                                        <img
                                          alt=""
                                          src="assets/images/resources/friend-avatar4.jpg"
                                        />
                                        <a href="">Moona Singh</a>
                                      </figure>
                                      <button className="sug-like">
                                        <i className="invit">Follow</i>
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <figure>
                                        <img
                                          alt=""
                                          src="assets/images/resources/friend-avatar5.jpg"
                                        />
                                        <a href="">Harry pooter</a>
                                      </figure>
                                      <button className="sug-like">
                                        <i className="invit">Follow</i>
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                                <div className="widget">
                                  <h4 className="widget-title">Recent Media</h4>
                                  <div className="recent-media">
                                    <figure>
                                      <img
                                        src="assets/images/resources/user-video7.jpg"
                                        alt=""
                                      />
                                      <a
                                        className="play-btn"
                                        data-fancybox=""
                                        href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                      >
                                        <i className="icofont-play" />
                                      </a>
                                      <span>Pool Party 2020</span>
                                    </figure>
                                    <figure>
                                      <img
                                        src="assets/images/resources/user-video10.jpg"
                                        alt=""
                                      />
                                      <a
                                        className="play-btn"
                                        data-fancybox=""
                                        href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                      >
                                        <i className="icofont-play" />
                                      </a>
                                      <span>Spring Break Pool</span>
                                    </figure>
                                  </div>
                                </div>
                                <div className="widget stick-widget">
                                  <h4 className="widget-title">
                                    You May Like Groups
                                  </h4>
                                  <ul className="suggestd">
                                    <li>
                                      <a className="sug-pic" href="#" title="">
                                        <img
                                          src="assets/images/resources/sug-page-1.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <a
                                        className="sug-title"
                                        href="#"
                                        title=""
                                      >
                                        Physics Shop
                                      </a>
                                      <button className="sug-like">
                                        <i className="icofont-like" />
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <a className="sug-pic" href="#" title="">
                                        <img
                                          src="assets/images/resources/sug-page-2.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <a
                                        className="sug-title"
                                        href="#"
                                        title=""
                                      >
                                        Sun Rise
                                      </a>
                                      <button className="sug-like">
                                        <i className="icofont-like" />
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <a className="sug-pic" href="#" title="">
                                        <img
                                          src="assets/images/resources/sug-page-3.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <a
                                        className="sug-title"
                                        href="#"
                                        title=""
                                      >
                                        Big Botny
                                      </a>
                                      <button className="sug-like">
                                        <i className="icofont-like" />
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <a className="sug-pic" href="#" title="">
                                        <img
                                          src="assets/images/resources/sug-page-4.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <a
                                        className="sug-title"
                                        href="#"
                                        title=""
                                      >
                                        King Work
                                      </a>
                                      <button className="sug-like">
                                        <i className="icofont-like" />
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                    <li>
                                      <a className="sug-pic" href="#" title="">
                                        <img
                                          src="assets/images/resources/sug-page-5.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <a
                                        className="sug-title"
                                        href="#"
                                        title=""
                                      >
                                        18teen Guys
                                      </a>
                                      <button className="sug-like">
                                        <i className="icofont-like" />
                                        <i className="icofont-check-alt" />
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                                {/* Suggested groups */}
                              </aside>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="pictures">
                          <h5 className="tab-title">
                            Pictures <span>87</span>
                          </h5>
                          <ul className="pix-filter">
                            <li>
                              <a className="active" href="#" title="">
                                All Photos
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                Profile Pictures
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                Albums
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                from Mobile
                              </a>
                            </li>
                          </ul>
                          <div className="row merged-10">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic1.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic2.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic3.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic4.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic5.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic6.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic7.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic8.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic9.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic10.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic11.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic12.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic13.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic14.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic15.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic5.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic12.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic4.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic6.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="uzr-pictures">
                                <a
                                  href="#"
                                  data-target="#img-comt"
                                  data-toggle="modal"
                                >
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-pic7.jpg"
                                  />
                                </a>
                                <ul className="hover-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-12 mt-3">
                              <div className="sp sp-bars" />
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="videos">
                          <h5 className="tab-title">
                            Videos <span>55</span>
                          </h5>
                          <ul className="pix-filter">
                            <li>
                              <a title="" href="#" className="active">
                                All Videos
                              </a>
                            </li>
                            <li>
                              <a title="" href="#">
                                Most views
                              </a>
                            </li>
                            <li>
                              <a title="" href="#">
                                Newest
                              </a>
                            </li>
                            <li>
                              <a title="" href="#">
                                Mobile videos
                              </a>
                            </li>
                          </ul>
                          <div className="row merged-10">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="user-video">
                                <figure>
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-video1.jpg"
                                  />
                                  <a
                                    href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                    data-fancybox=""
                                    className="play-btn"
                                  >
                                    <i className="icofont-play" />
                                  </a>
                                </figure>
                                <span>Miami Beach Party</span>
                                <ul className="vid-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="user-video">
                                <figure>
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-video2.jpg"
                                  />
                                  <a
                                    href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                    data-fancybox=""
                                    className="play-btn"
                                  >
                                    <i className="icofont-play" />
                                  </a>
                                </figure>
                                <span>Spring Break Party</span>
                                <ul className="vid-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="user-video">
                                <figure>
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-video3.jpg"
                                  />
                                  <a
                                    href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                    data-fancybox=""
                                    className="play-btn"
                                  >
                                    <i className="icofont-play" />
                                  </a>
                                </figure>
                                <span>Pool Party 2020</span>
                                <ul className="vid-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="user-video">
                                <figure>
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-video4.jpg"
                                  />
                                  <a
                                    href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                    data-fancybox=""
                                    className="play-btn"
                                  >
                                    <i className="icofont-play" />
                                  </a>
                                </figure>
                                <span>baby girls Entry at beach</span>
                                <ul className="vid-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="user-video">
                                <figure>
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-video5.jpg"
                                  />
                                  <a
                                    href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                    data-fancybox=""
                                    className="play-btn"
                                  >
                                    <i className="icofont-play" />
                                  </a>
                                </figure>
                                <span>Spring Party 2021</span>
                                <ul className="vid-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="user-video">
                                <figure>
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-video6.jpg"
                                  />
                                  <a
                                    href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                    data-fancybox=""
                                    className="play-btn"
                                  >
                                    <i className="icofont-play" />
                                  </a>
                                </figure>
                                <span>Biggest Part of the Pool Party</span>
                                <ul className="vid-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="user-video">
                                <figure>
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-video7.jpg"
                                  />
                                  <a
                                    href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                    data-fancybox=""
                                    className="play-btn"
                                  >
                                    <i className="icofont-play" />
                                  </a>
                                </figure>
                                <span>Party games in the water</span>
                                <ul className="vid-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="user-video">
                                <figure>
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-video8.jpg"
                                  />
                                  <a
                                    href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                    data-fancybox=""
                                    className="play-btn"
                                  >
                                    <i className="icofont-play" />
                                  </a>
                                </figure>
                                <span>Water party with GF</span>
                                <ul className="vid-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="user-video">
                                <figure>
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-video9.jpg"
                                  />
                                  <a
                                    href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                    data-fancybox=""
                                    className="play-btn"
                                  >
                                    <i className="icofont-play" />
                                  </a>
                                </figure>
                                <span>Super hot party in summer</span>
                                <ul className="vid-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="user-video">
                                <figure>
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-video10.jpg"
                                  />
                                  <a
                                    href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                    data-fancybox=""
                                    className="play-btn"
                                  >
                                    <i className="icofont-play" />
                                  </a>
                                </figure>
                                <span>Summer Party in Bikini</span>
                                <ul className="vid-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="user-video">
                                <figure>
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-video11.jpg"
                                  />
                                  <a
                                    href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                    data-fancybox=""
                                    className="play-btn"
                                  >
                                    <i className="icofont-play" />
                                  </a>
                                </figure>
                                <span>Miami Bikini English</span>
                                <ul className="vid-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="user-video">
                                <figure>
                                  <img
                                    alt=""
                                    src="assets/images/resources/user-video12.jpg"
                                  />
                                  <a
                                    href="https://www.youtube.com/embed/vP-l9L3Ku5Y"
                                    data-fancybox=""
                                    className="play-btn"
                                  >
                                    <i className="icofont-play" />
                                  </a>
                                </figure>
                                <span>Super Summer 2021</span>
                                <ul className="vid-action">
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-like" /> 3
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="icofont-chat" /> 5
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="sp sp-bars" />
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="friends">
                          <h5 className="tab-title">
                            Friends <span>102</span>
                          </h5>
                          <ul className="pix-filter">
                            <li>
                              <a title="" href="#" className="active">
                                All Friends
                              </a>
                            </li>
                            <li>
                              <a title="" href="#">
                                Family Friends
                              </a>
                            </li>
                            <li>
                              <a title="" href="#">
                                Close Friends
                              </a>
                            </li>
                            <li>
                              <a title="" href="#">
                                Mutual Friends
                              </a>
                            </li>
                          </ul>
                          <div className="row merged-10 col-xs-6">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img
                                    src="assets/images/resources/speak-10.jpg"
                                    alt=""
                                  />
                                </figure>
                                <span>
                                  <a href="#" title="">
                                    Amy Watson
                                  </a>
                                </span>
                                <ins>Bz University, Pakistan</ins>
                                <a href="#" title="" data-ripple="">
                                  <i className="icofont-star" />
                                  Unfollow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img
                                    src="assets/images/resources/speak-11.jpg"
                                    alt=""
                                  />
                                </figure>
                                <span>
                                  <a href="#" title="">
                                    Muhammad Khan
                                  </a>
                                </span>
                                <ins>Oxford University, UK</ins>
                                <a href="#" title="" data-ripple="">
                                  <i className="icofont-star" /> Unfollow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img
                                    src="assets/images/resources/speak-12.jpg"
                                    alt=""
                                  />
                                </figure>
                                <span>
                                  <a href="#" title="">
                                    Sadia Gill
                                  </a>
                                </span>
                                <ins>WB University, USA</ins>
                                <a href="#" title="" data-ripple="">
                                  <i className="icofont-star" /> Unfollow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img
                                    src="assets/images/resources/speak-4.jpg"
                                    alt=""
                                  />
                                </figure>
                                <span>
                                  <a href="#" title="">
                                    Rjapal
                                  </a>
                                </span>
                                <ins>Km University, India</ins>
                                <a href="#" title="" data-ripple="">
                                  <i className="icofont-star" /> Unfollow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img
                                    src="assets/images/resources/speak-1.jpg"
                                    alt=""
                                  />
                                </figure>
                                <span>
                                  <a href="#" title="">
                                    Amy watson
                                  </a>
                                </span>
                                <ins>Oxford University, UK</ins>
                                <a href="#" title="" data-ripple="">
                                  <i className="icofont-star" /> Unfollow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img
                                    src="assets/images/resources/speak-2.jpg"
                                    alt=""
                                  />
                                </figure>
                                <span>
                                  <a href="#" title="">
                                    Bob Frank
                                  </a>
                                </span>
                                <ins>WB University, Canada</ins>
                                <a href="#" title="" data-ripple="">
                                  <i className="icofont-star" /> Unfollow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img
                                    src="assets/images/resources/speak-5.jpg"
                                    alt=""
                                  />
                                </figure>
                                <span>
                                  <a href="#" title="">
                                    Amy Watson
                                  </a>
                                </span>
                                <ins>Bz University, Pakistan</ins>
                                <a href="#" title="" data-ripple="">
                                  <i className="icofont-star" /> Unfollow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img
                                    src="assets/images/resources/speak-7.jpg"
                                    alt=""
                                  />
                                </figure>
                                <span>
                                  <a href="#" title="">
                                    Muhammad Khan
                                  </a>
                                </span>
                                <ins>Oxford University, UK</ins>
                                <a href="#" title="" data-ripple="">
                                  <i className="icofont-star" /> Unfollow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img
                                    src="assets/images/resources/speak-10.jpg"
                                    alt=""
                                  />
                                </figure>
                                <span>
                                  <a href="#" title="">
                                    Sadia Gill
                                  </a>
                                </span>
                                <ins>WB University, USA</ins>
                                <a href="#" title="" data-ripple="">
                                  <i className="icofont-star" /> Unfollow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img
                                    src="assets/images/resources/speak-2.jpg"
                                    alt=""
                                  />
                                </figure>
                                <span>
                                  <a href="#" title="">
                                    Bob Frank
                                  </a>
                                </span>
                                <ins>WB University, Canada</ins>
                                <a href="#" title="" data-ripple="">
                                  <i className="icofont-star" /> Unfollow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img
                                    src="assets/images/resources/speak-11.jpg"
                                    alt=""
                                  />
                                </figure>
                                <span>
                                  <a href="#" title="">
                                    Muhammad Khan
                                  </a>
                                </span>
                                <ins>Oxford University, UK</ins>
                                <a href="#" title="" data-ripple="">
                                  <i className="icofont-star" /> Unfollow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="sp sp-bars" />
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="about">
                          <div className="row merged20">
                            <div className="col-lg-8">
                              <div className="main-wraper">
                                <h5 className="main-title">Personal</h5>
                                <div className="info-block-list">
                                  <ul>
                                    <li>
                                      Date of Birth: <span>Dec, 17 1980</span>
                                    </li>
                                    <li>
                                      Location:{" "}
                                      <span>Los Angeles, California</span>
                                    </li>
                                    <li>
                                      Web: <span>www.sample.com</span>
                                    </li>
                                    <li>
                                      Email: <span>sample123@yourmail.com</span>
                                    </li>
                                    <li>
                                      Location:{" "}
                                      <span>Los Angeles, California</span>
                                    </li>
                                    <li>
                                      Occupation: <span>Doctor</span>
                                    </li>
                                    <li>
                                      Location:{" "}
                                      <span>Los Angeles, California</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="main-wraper">
                                <h5 className="main-title">Interests</h5>
                                <div className="info-block-list">
                                  <div className="info-block">
                                    <h6>Favourite TV Shows</h6>
                                    <p>
                                      Breaking Good, RedDevil, People of
                                      Interest, The Running Dead, Found,
                                      American Guy, The Last Windbender, Game of
                                      Wars.
                                    </p>
                                  </div>
                                  <div className="info-block">
                                    <h6>Favourite Music Bands / Artists</h6>
                                    <p>
                                      Iron Maid, DC/AC, Megablow, Kung Fighters,
                                      System of a Revenge, Rammstown.
                                    </p>
                                  </div>
                                  <div className="info-block">
                                    <h6>Favourite Movies</h6>
                                    <p>
                                      The Revengers Saga, The Scarred Wizard and
                                      the Fire Crown, Crime Squad, Metal Man,
                                      The Dark Rider, Watchers, The Impossible
                                      Heist.
                                    </p>
                                  </div>
                                  <div className="info-block">
                                    <h6>Favourite Books</h6>
                                    <p>
                                      The Crime of the Century, Egiptian
                                      Mythology 101, The Scarred Wizard, Lord of
                                      the Wings, Amongst Gods, The Oracle, A
                                      Tale of Air and Water.
                                    </p>
                                  </div>
                                  <div className="info-block">
                                    <h6>Favourite Games</h6>
                                    <p>
                                      The First of Us, Assassin’s Squad, Dark
                                      Assylum, NMAK16, Last Cause 4, Grand
                                      Snatch Auto.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <aside className="sidebar">
                                <div className="widget">
                                  <h4 className="widget-title">
                                    Complete Your Profile
                                  </h4>
                                  <span>
                                    Complete your profile by filling profile
                                    info fields, completing quests &amp;
                                    unlocking badges
                                  </span>
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
                                        Invite to 10+ members
                                      </a>
                                      <em>20%</em>
                                    </li>
                                  </ul>
                                </div>
                                {/* complete profile widget */}
                                <div className="widget">
                                  <h4 className="widget-title">User stats</h4>
                                  <ul className="user-stat">
                                    <li>
                                      <i className="icofont-lollipop" />
                                      <span>
                                        Last Post <em>2 hours ago</em>
                                      </span>
                                    </li>
                                    <li>
                                      <i className="icofont-spotify" />
                                      <span>
                                        Last comment <em>6 hours ago</em>
                                      </span>
                                    </li>
                                    <li>
                                      <i className="icofont-like" />
                                      <span>
                                        Most Liked Post<em>540 Likes</em>
                                      </span>
                                    </li>
                                    <li>
                                      <i className="icofont-user-alt-4" />
                                      <span>
                                        Last Friend Added <em>2 days ago</em>
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                {/* complete profile widget */}
                              </aside>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Profile