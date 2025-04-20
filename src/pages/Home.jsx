import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import PostCard from '../components/posts/PostCard';
import UserWidget from '../components/widgets/UserWidget';
import FriendsWidget from '../components/widgets/FriendsWidget';
import SuggestedWidget from '../components/widgets/SuggestedWidget';
import RecentActivityWidget from '../components/widgets/RecentActivityWidget';
import CreatePostWidget from '../components/posts/CreatePostWidget';
import StoriesWidget from '../components/widgets/StoriesWidget';

// Sample data
const posts = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Jack Carter',
      avatar: '/assets/images/resources/user-post.jpg',
      location: 'Ontario, Canada'
    },
    content: "World's most beautiful car in Curabitur <a href=\"#\">#test drive booking!</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website",
    images: ['/assets/images/resources/feed-1.jpg'],
    video: null,
    timestamp: '2 hours ago',
    likes: 15,
    comments: 97,
    shares: 13
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Maria K',
      avatar: '/assets/images/resources/user3.jpg',
      location: 'New York, USA'
    },
    content: 'Our latest course on web development is now available!',
    images: ['/assets/images/resources/course-1.jpg'],
    video: null,
    timestamp: '4 hours ago',
    likes: 28,
    comments: 12,
    shares: 6
  },
  {
    id: 3,
    user: {
      id: 3,
      name: 'Fawad Khan',
      avatar: '/assets/images/resources/user2.jpg',
      location: 'London, UK'
    },
    content: 'Check out this amazing tutorial on React!',
    images: [],
    video: {
      thumbnail: '/assets/images/resources/video-poster.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    timestamp: '8 hours ago',
    likes: 45,
    comments: 23,
    shares: 8
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('newsfeed');

  return (
    <div className="main-content">
      <div className="gap2 no-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              {/* User Profile Widget */}
              <UserWidget />

              {/* Friends Widget */}
              <FriendsWidget />
            </div>

            <div className="col-lg-6">
              <div className="feed-tabs">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'newsfeed' ? 'active' : ''}`} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('newsfeed');
                      }}
                    >
                      <i className="icofont-newspaper"></i> Newsfeed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'videos' ? 'active' : ''}`} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('videos');
                      }}
                    >
                      <i className="icofont-video-alt"></i> Videos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'courses' ? 'active' : ''}`} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('courses');
                      }}
                    >
                      <i className="icofont-book-alt"></i> Courses
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'groups' ? 'active' : ''}`} 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('groups');
                      }}
                    >
                      <i className="icofont-users-alt-2"></i> Groups
                    </a>
                  </li>
                </ul>
              </div>

              {/* Stories Widget */}
              <StoriesWidget />

              {/* Create Post Widget */}
              <CreatePostWidget />

              {/* Posts List */}
              <div className="main-wraper">
                <div className="user-post">
                  {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </div>

              <div className="load-more">
                <div className="loader"></div>
                <span>Load More.....</span>
              </div>
            </div>

            <div className="col-lg-3">
              {/* Suggested Friends Widget */}
              <SuggestedWidget />

              {/* Recent Activity Widget */}
              <RecentActivityWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 