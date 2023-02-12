// /user/:id
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import UserFeedList from "../../components/user/UserFeedList";
import TopBar from "../../components/TopBar";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// 게시물 리스트를 보여줄 페이지.
// 해당 유저의 아이디와 로그인한 아이디가 같다면
// 팔로우 팔로잉 버튼 안보임
// 사진변경, 닉네임 변경 가능
// 팔로워 페이지에서 팔로워 취소 버튼 생김

//다르면
// 메인 페이지에 팔로우, 팔로잉 버튼 보이고 언팔로우 가능
// 팔로잉 페이지에   팔로잉 버튼에 본인이 있으면 언팔로우 가능

//

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    paddingLeft: "8%",
    paddingTop: "8%",
  },
  profile: {
    margin: "auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  stateMessage: {
    paddingLeft: "8%",
    paddingBottom: "3%",
  },
}));

const UserMain = () => {
  const classes = useStyles();

  useEffect(() => {
    axios.get(`/api/account/${params.user}`).then(function (response) {
      // console.log(response.data);
      setUserProfileData(response.data);
    });
  }, []);
  const params = useParams();
  const [userProfileData, setUserProfileData] = useState({});
  const [feedLen, setFeedLen] = useState(0);
  const [followerLen, setFollowerLen] = useState(0);
  const [followingLen, setFollowingLen] = useState(0);

  const navigate = useNavigate();

  // 유저정보 가져오기

  // 게시글수 가져오기
  useEffect(() => {
    axios.get(`/api/main/${params.user}`).then(function (response) {
      // console.log(response.data);
      setFeedLen(response.data.length);
    });
  }, []);
  // 팔로워 수 가져오기
  useEffect(() => {
    axios.get(`/api/search/follower/${params.user}`).then(function (response) {
      setFollowerLen(response.data.length);
    });
  }, [followerLen]);

  // 팔로잉 수 가져오기
  useEffect(() => {
    axios.get(`/api/search/following/${params.user}`).then(function (response) {
      setFollowingLen(response.data.length);
    });
  }, [followingLen]);
  console.log(userProfileData);
  return (
    <div>
      <TopBar />
      <div
        style={{
          display: "flex",
          textAlign: "center",
        }}
      >
        <div style={{ marginLeft: "5%", marginTop: "5%", marginBottom: "5%" }}>
          <Avatar
            className={classes.profile}
            src={userProfileData.memberProfile}
          />
          <div
            style={{
              fontFamily: "GangwonEduAll",
              fontWeight: "bold",
              fontSize: 20,
              paddingTop: "3%",
            }}
          >
            {" "}
            {userProfileData.nickname}
          </div>
        </div>
        <div
          style={{
            paddingLeft: "3%",
            margin: "auto",
            fontFamily: "GangwonEduAll",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          게시글
          <br />
          {/* 여기 수정 */}
          {feedLen}
        </div>
        <div
          style={{
            margin: "auto",
            fontFamily: "GangwonEduAll",
            fontWeight: "bold",
            fontSize: 16,
          }}
          onClick={() => navigate(`/user/${params.user}/follower`)}
        >
          <p>
            팔로워
            <br />
            {/* 여기수정 */}
            {followerLen}
          </p>
        </div>
        <div
          style={{
            margin: "auto",
            fontFamily: "GangwonEduAll",
            fontWeight: "bold",
            fontSize: 16,
          }}
          onClick={() => navigate(`/user/${params.user}/following`)}
        >
          <p>
            팔로잉
            <br />
            {/* 여기수정 */}
            {followingLen}
          </p>
        </div>
      </div>
      <Grid container>
        <Grid item xs={9}>
          <div className={classes.stateMessage}>
            {" "}
            {userProfileData.memberState}
          </div>
        </Grid>
        {/* 팔로우, 팔로잉 중 여기 */}
        <Grid item xs={3}>
          <Button style={{ color: "#6892FF", paddingLeft: "20%" }}>
            팔로우
          </Button>
        </Grid>
        {/* <Grid item xs={3}>
          <Button disabled>팔로우 중</Button>
        </Grid> */}
      </Grid>
      <hr style={{ marginTop: "5%" }} />
      <UserFeedList />
    </div>
  );
};

export default UserMain;
