// /:userId/:itemId
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import NavBar from "../../components/NavBar";
import MyButton from "../../components/MyButton";
import FeedItem from "../../components/feed/FeedItem";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// 개별 아이템 보여주는 페이지.
const UserPost = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [feedData, setFeedData] = useState(location.state);
  return (
    <div>
      <NavBar
        navText={"내엽서"}
        leftChild={<ArrowBackIosNewIcon onClick={() => navigate(-1)} />}
      />
      <FeedItem {...feedData}></FeedItem>
    </div>
  );
};

export default UserPost;
