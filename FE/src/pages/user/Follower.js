// /:user/follower
import { useContext } from "react";
import { UserStateContext } from "../../pages/User";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { useNavigate } from "react-router-dom";

import NavBar from "../../components/NavBar";
// 해당 유저의 팔로워 확인 페이지
import FollowerList from "../../components/follow/FollowerList";

const Follower = () => {
  const navigate = useNavigate();
  const userData = useContext(UserStateContext)[0][0];
  return (
    <div>
      <NavBar
        navText={"팔로워"}
        leftChild={<ArrowBackIosNewIcon onClick={() => navigate(-1)} />}
      />
      {userData.id}의 팔로워 페이지다
      <FollowerList />
    </div>
  );
};

export default Follower;
