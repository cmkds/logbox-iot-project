// /:userId/:itemId
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import MyButton from "../../components/MyButton";
import FeedItem from "../../components/feed/FeedItem";

// 개별 아이템 보여주는 페이지.
// 여기 어떻게 처리할지 고민.
const UserPost = () => {
  const location = useLocation();
  // console.log(location.state);
  const [feedData, setFeedData] = useState(location.state);
  // console.log(222222);
  // console.log(feedData);
  // console.log(222222);
  const navigate = useNavigate();
  return (
    <div>
      <NavBar
        navText={"내엽서"}
        leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
      />
      <FeedItem {...feedData}></FeedItem>
    </div>
  );
};

export default UserPost;