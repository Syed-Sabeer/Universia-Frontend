import React from 'react'

const Header = () => {
  return (
    <>
  <div className="responsive-header">
    <div className="logo res">
      <img src="assets/images/logo.png" alt="" />
      <span>Socimo</span>
    </div>
    <div className="user-avatar mobile">
      <a href="profile.html" title="View Profile">
        <img alt="" src="assets/images/resources/user.jpg" />
      </a>
      <div className="name">
        <h4>Danial Cardos</h4>
        <span>Ontario, Canada</span>
      </div>
    </div>
    <div className="right-compact">
      <div className="sidemenu">
        <i>
          <svg
            id="side-menu2"
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
      <div className="res-search">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
          >
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2="16.65" y2="16.65" />
          </svg>
        </span>
      </div>
    </div>
    <div className="restop-search">
      <span className="hide-search">
        <i className="icofont-close-circled" />
      </span>
      <form method="post">
        <input type="text" placeholder="Search..." />
      </form>
    </div>
  </div>
  {/* responsive header */}
  <header className="">
    <div className="topbar stick">
      <div className="logo">
        <img src="assets/images/logo.png" alt="" />
        <span>Socimo</span>
      </div>
      <div className="searches">
        <form method="post">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <i className="icofont-search" />
          </button>
          <span className="cancel-search">
            <i className="icofont-close" />
          </span>
          <div className="recent-search">
            <h4 className="recent-searches">Your's Recent Search</h4>
            <ul className="so-history">
              <li>
                <div className="searched-user">
                  <figure>
                    <img src="assets/images/resources/user1.jpg" alt="" />
                  </figure>
                  <span>Danial Carabal</span>
                </div>
                <span className="trash">
                  <i className="icofont-close-circled" />
                </span>
              </li>
              <li>
                <div className="searched-user">
                  <figure>
                    <img src="assets/images/resources/user2.jpg" alt="" />
                  </figure>
                  <span>Maria K</span>
                </div>
                <span className="trash">
                  <i className="icofont-close-circled" />
                </span>
              </li>
              <li>
                <div className="searched-user">
                  <figure>
                    <img src="assets/images/resources/user3.jpg" alt="" />
                  </figure>
                  <span>Fawad Khan</span>
                </div>
                <span className="trash">
                  <i className="icofont-close-circled" />
                </span>
              </li>
              <li>
                <div className="searched-user">
                  <figure>
                    <img src="assets/images/resources/user4.jpg" alt="" />
                  </figure>
                  <span>Danial Sandos</span>
                </div>
                <span className="trash">
                  <i className="icofont-close-circled" />
                </span>
              </li>
              <li>
                <div className="searched-user">
                  <figure>
                    <img src="assets/images/resources/user5.jpg" alt="" />
                  </figure>
                  <span>Jack Carter</span>
                </div>
                <span className="trash">
                  <i className="icofont-close-circled" />
                </span>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <ul className="web-elements">
        <li>
          <div className="user-dp">
            <a href="profile-page2.html" title="">
              <img alt="" src="assets/images/resources/user.jpg" />
              <div className="name">
                <h4>Danial Cardos</h4>
              </div>
            </a>
          </div>
        </li>
        <li className="go-live">
          <a href="live-stream.html" title="Go Live" data-toggle="tooltip">
            <i>
              <svg
                fill="#f00"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="18px"
                height="18px"
              >
                <path d="M 6.1015625 6.1015625 C 3.5675625 8.6345625 2 12.134 2 16 C 2 19.866 3.5675625 23.365437 6.1015625 25.898438 L 7.5195312 24.480469 C 5.3465312 22.307469 4 19.308 4 16 C 4 12.692 5.3465312 9.6925313 7.5195312 7.5195312 L 6.1015625 6.1015625 z M 25.898438 6.1015625 L 24.480469 7.5195312 C 26.653469 9.6925312 28 12.692 28 16 C 28 19.308 26.653469 22.307469 24.480469 24.480469 L 25.898438 25.898438 C 28.432437 23.365437 30 19.866 30 16 C 30 12.134 28.432437 8.6345625 25.898438 6.1015625 z M 9.6367188 9.6367188 C 8.0077188 11.265719 7 13.515 7 16 C 7 18.485 8.0077187 20.734281 9.6367188 22.363281 L 11.052734 20.947266 C 9.7847344 19.680266 9 17.93 9 16 C 9 14.07 9.7847344 12.319734 11.052734 11.052734 L 9.6367188 9.6367188 z M 22.363281 9.6367188 L 20.947266 11.052734 C 22.215266 12.319734 23 14.07 23 16 C 23 17.93 22.215266 19.680266 20.947266 20.947266 L 22.363281 22.363281 C 23.992281 20.734281 25 18.485 25 16 C 25 13.515 23.992281 11.265719 22.363281 9.6367188 z M 16 12 A 4 4 0 0 0 16 20 A 4 4 0 0 0 16 12 z" />
              </svg>
            </i>
          </a>
        </li>
        <li>
          <a href="index.html" title="Home" data-toggle="tooltip">
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
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </i>
          </a>
        </li>
        <li>
          <a
            className="mesg-notif"
            href="#"
            title="Messages"
            data-toggle="tooltip"
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
                className="feather feather-message-square"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </i>
          </a>
          <span />
        </li>
        <li>
          <a
            className="mesg-notif"
            href="#"
            title="Notifications"
            data-toggle="tooltip"
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
                className="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </i>
          </a>
          <span />
        </li>
        <li>
          <a className="create" href="#" title="Add New" data-toggle="tooltip">
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
                className="feather feather-plus"
              >
                <line x1={12} y1={5} x2={12} y2={19} />
                <line x1={5} y1={12} x2={19} y2={12} />
              </svg>
            </i>
          </a>
        </li>
        <li>
          <a href="#" title="">
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
                className="feather feather-grid"
              >
                <rect x={3} y={3} width={7} height={7} />
                <rect x={14} y={3} width={7} height={7} />
                <rect x={14} y={14} width={7} height={7} />
                <rect x={3} y={14} width={7} height={7} />
              </svg>
            </i>
          </a>
          <ul className="dropdown">
            <li>
              <a href="profile.html" title="">
                <i className="icofont-user-alt-3" /> Your Profile
              </a>
            </li>
            <li>
              <a href="add-new-course.html" title="">
                <i className="icofont-plus" /> New Course
              </a>
            </li>
            <li>
              <a className="invite-new" href="#" title="">
                <i className="icofont-brand-slideshare" /> Invite Collegue
              </a>
            </li>
            <li>
              <a href="pay-out.html" title="">
                <i className="icofont-price" /> Payout
              </a>
            </li>
            <li>
              <a href="price-plan.html" title="">
                <i className="icofont-flash" /> Upgrade
              </a>
            </li>
            <li>
              <a href="help-faq.html" title="">
                <i className="icofont-question-circle" /> Help
              </a>
            </li>
            <li>
              <a href="settings.html" title="">
                <i className="icofont-gear" /> Setting
              </a>
            </li>
            <li>
              <a href="privacy-n-policy.html" title="">
                <i className="icofont-notepad" /> Privacy
              </a>
            </li>
            <li>
              <a className="dark-mod" href="#" title="">
                <i className="icofont-moon" /> Dark Mode
              </a>
            </li>
            <li className="logout">
              <a href="sign-in.html" title="">
                <i className="icofont-power" /> Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
  {/* header */}
  <nav className="sidebar">
    <ul className="menu-slide">
      <li className="active menu-item-has-children">
        <a className="" href="#" title="">
          <i>
            <svg
              id="icon-home"
              className="feather feather-home"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height={14}
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </i>{" "}
          Home
        </a>
        <ul className="submenu">
          <li>
            <a href="index.html" title="">
              Newsfeed
            </a>
          </li>
          <li>
            <a href="company-home.html" title="">
              Company Home
            </a>
          </li>
          <li>
            <a href="profile-page2.html" title="">
              User Profile
            </a>
          </li>
          <li>
            <a href="profile.html" title="">
              Student User Profile
            </a>
          </li>
          <li>
            <a href="groups.html" title="">
              Groups
            </a>
          </li>
          <li>
            <a href="group-detail.html" title="">
              Group Detail
            </a>
          </li>
          <li>
            <a href="post-detail.html" title="">
              Social Post Detail
            </a>
          </li>
          <li>
            <a href="messages.html" title="">
              Chat/Messages
            </a>
          </li>
          <li>
            <a href="notifications.html" title="">
              Notificatioins
            </a>
          </li>
          <li>
            <a href="search-result.html" title="">
              Search Result
            </a>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <a className="" href="#" title="">
          <i className="">
            <svg
              id="ab7"
              className="feather feather-zap"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height={14}
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </i>{" "}
          Features
        </a>
        <ul className="submenu">
          <li>
            <a href="videos.html" title="">
              Videos
            </a>
          </li>
          <li>
            <a href="live-stream.html" title="">
              Live Stream
            </a>
          </li>
          <li>
            <a href="event-page.html" title="">
              Events Page
            </a>
          </li>
          <li>
            <a href="event-detail.html" title="">
              Event Detail
            </a>
          </li>
          <li>
            <a href="Q-A.html" title="">
              QA
            </a>
          </li>
          <li>
            <a href="Q-detail.html" title="">
              QA Detail
            </a>
          </li>
          <li>
            <a href="help-faq.html" title="">
              Support Help
            </a>
          </li>
          <li>
            <a href="help-faq-detail.html" title="">
              Support Detail
            </a>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <a className="" href="#" title="">
          <i className="">
            <svg
              id="ab5"
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-shopping-bag"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1={3} y1={6} x2={21} y2={6} />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </i>{" "}
          Market Place
        </a>
        <ul className="submenu">
          <li>
            <a href="books.html" title="">
              Books
            </a>
          </li>
          <li>
            <a href="book-detail.html" title="">
              Books Detail
            </a>
          </li>
          <li>
            <a href="courses.html" title="">
              Course
            </a>
          </li>
          <li>
            <a href="course-detail.html" title="">
              course Detail
            </a>
          </li>
          <li>
            <a href="add-new-course.html" title="">
              Add New Course
            </a>
          </li>
          <li>
            <a href="product-cart.html" title="">
              Cart Page
            </a>
          </li>
          <li>
            <a href="product-checkout.html" title="">
              Checkout
            </a>
          </li>
          <li>
            <a href="add-credits.html" title="">
              Add Credit
            </a>
          </li>
          <li>
            <a href="pay-out.html" title="">
              Payouts
            </a>
          </li>
          <li>
            <a href="price-plan.html" title="">
              Pricing Plans
            </a>
          </li>
          <li>
            <a href="invoice.html" title="">
              Invoice
            </a>
          </li>
          <li>
            <a href="thank-you.html" title="">
              Thank you Page
            </a>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <a className="" href="#" title="">
          <i className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-coffee"
            >
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1={6} y1={1} x2={6} y2={4} />
              <line x1={10} y1={1} x2={10} y2={4} />
              <line x1={14} y1={1} x2={14} y2={4} />
            </svg>
          </i>{" "}
          Blogs
        </a>
        <ul className="submenu">
          <li>
            <a href="blog.html" title="">
              Blog
            </a>
          </li>
          <li>
            <a href="blog-detail.html" title="">
              Blog Detail
            </a>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <a className="" href="#" title="">
          <i>
            <svg
              id="ab8"
              className="feather feather-file"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height={14}
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <polyline points="13 2 13 9 20 9" />
            </svg>
          </i>{" "}
          Featured Pages
        </a>
        <ul className="submenu">
          <li>
            <a href="404.html" title="">
              Error 404
            </a>
          </li>
          <li>
            <a href="coming-soon.html" title="">
              Coming Soon
            </a>
          </li>
          <li>
            <a href="send-feedback.html" title="">
              Send Feedback
            </a>
          </li>
          <li>
            <a href="badges.html" title="">
              Badges
            </a>
          </li>
          <li>
            <a href="thank-you.html" title="">
              Thank You
            </a>
          </li>
        </ul>
      </li>
      <li className="menu-item-has-children">
        <a className="" href="#" title="">
          <i className="">
            <svg
              id="ab9"
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-lock"
            >
              <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </i>{" "}
          Authentications
        </a>
        <ul className="submenu">
          <li>
            <a href="sign-in.html" title="">
              Sign In
            </a>
          </li>
          <li>
            <a href="signup.html" title="">
              Sign Up
            </a>
          </li>
          <li>
            <a href="forgot-password.html" title="">
              Forgot Password
            </a>
          </li>
        </ul>
      </li>
      <li className="">
        <a className="" href="about-university.html" title="">
          <i>
            <svg
              id="ab1"
              className="feather feather-users"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height={14}
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle r={4} cy={7} cx={9} />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </i>{" "}
          University Profile
        </a>
      </li>
      <li className="">
        <a className="" href="messages.html" title="">
          <i className="">
            <svg
              className="feather feather-message-square"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height={14}
              width={14}
              xmlns="http://www.w3.org/2000/svg"
              id="ab2"
            >
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                style={{ strokeDasharray: "68, 88", strokeDashoffset: 0 }}
              />
            </svg>
          </i>{" "}
          Live Chat
        </a>
      </li>
      <li className="">
        <a className="" href="privacy-n-policy.html" title="">
          <i className="">
            <svg
              id="ab4"
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-airplay"
            >
              <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
              <polygon points="12 15 17 21 7 21 12 15" />
            </svg>
          </i>{" "}
          Privacy Polices
        </a>
      </li>
      <li className="">
        <a className="" href="settings.html" title="">
          <i className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-settings"
            >
              <circle cx={12} cy={12} r={3} />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </i>{" "}
          Web Settings
        </a>
      </li>
      <li className="menu-item-has-children">
        <a className="#" href="#" title="">
          <i className="">
            <svg
              id="team"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-smile"
            >
              <circle cx={12} cy={12} r={10} />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1={9} y1={9} x2="9.01" y2={9} />
              <line x1={15} y1={9} x2="15.01" y2={9} />
            </svg>
          </i>{" "}
          Development Tools
        </a>
        <ul className="submenu">
          <li>
            <a href="widgets.html" title="">
              Widgets Collection
            </a>
          </li>
          <li>
            <a href="development-component.html" title="">
              Web Component
            </a>
          </li>
          <li>
            <a href="development-elements.html" title="">
              Web Elements
            </a>
          </li>
          <li>
            <a href="loader-spiners.html" title="">
              Loader Spiners
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  {/* nav sidebar */}
</>

  )
}

export default Header