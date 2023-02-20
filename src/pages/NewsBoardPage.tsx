import React, { useState } from "react";
import Post from "../components/Post/Post";
import userPhoto from "../assets/user-photo.jpg";
import { Link } from "react-router-dom";
import { IPost } from "../interfaces/IPost";
import { INotification } from "../interfaces/INotification";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n";

const notifications: INotification[] = [
  { from: "Jane Doe", description: "New message", time: 3 },
  { from: "Jane Doe", description: "Friend Request", time: 3 },
  { from: "Jane Doe", description: "Friend Request", time: 3 },
  { from: "Jane Doe", description: "Friend Request", time: 3 },
  { from: "Jane Doe", description: "New message", time: 3 },
  { from: "Jane Doe", description: "New message", time: 52 },
];

const NewsBoardPage = () => {
  const [posts, setPosts] = useState<IPost[]>([
    { title: "What is Lorem Ipsum?", text, author: "Jane Doe", time: 3 },
    { title: "What is Lorem Ipsum?", text, author: "Jane Doe", time: 3 },
    { title: "What is Lorem Ipsum?", text, author: "Jane Doe", time: 3 },
  ]);
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      setPosts([
        ...posts,
        {
          title: "What is Lorem Ipsum?",
          text: e.target.value,
          author: "Jane Doe",
          time: 3,
        },
      ]);
    }
  };
  return (
    <div className={"newsBoardPage"}>
      <div>
        <div className={"newsBoardPage__newBoardPost"}>
          <span>New Board Post</span>
          <input
            className={"newsBoardPage__newBoardPost-block"}
            placeholder={"What are your thoughts?"}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className={"newsBoardPage__title"}>
          <span>Newsboard</span>
        </div>
        <div>
          <div className={"newsBoardPage__posts"}>
            {posts.map((elem) => (
              <Post
                title={elem.title}
                text={elem.text}
                time={elem.time}
                author={elem.author}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={"newsBoardPage__user-container"}>
        <div className={"newsBoardPage__user-block"}>
          <div className={"newsBoardPage__user-inner-block"}>
            <Link to={"/profile"} className={"no-link"}>
              <img
                src={userPhoto}
                alt={"user-img"}
                className={"newsBoardPage__user-img"}
              />
            </Link>
            <div className={"newsBoardPage__user-friends"}>Friends 500</div>
          </div>
          <Link to={"/profile"} className={"no-link"}>
            <div className={"newsBoardPage__user-name"}>John Doe</div>
          </Link>
        </div>
        <div className={"newsBoardPage__notifications"}>
          <div className={"newsBoardPage__notifications-top-panel"}>
            Notifications
          </div>
          <div className={"newsBoardPage__inside-block-notifications"}>
            {notifications.map((elem) => (
              <div className={"newsBoardPage__notification"}>
                <span>
                  {elem.description} from {elem.from}
                </span>
                <div className={"newsBoardPage__notification-buttons"}>
                  <button>Accept</button>
                  <button>Reject</button>
                </div>
                <div className={"newsBoardPage__notification-time"}>
                  {elem.time} mins ago
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBoardPage;
