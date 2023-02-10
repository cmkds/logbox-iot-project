import { useState, useRef } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import qs from "qs";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Avatar, Icon } from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@material-ui/core/InputAdornment";

import CommentList from "./CommentList";

const CommentWrite = () => {
  const [state, setState] = useState("");
  const params = useParams();
  const commentInput = useRef();

  const handleChangeState = (e) => {
    setState(e.target.value);
  };

  // useEffect(()=> {

  // },[])

  const handleSubmit = () => {
    if (!state) {
      commentInput.current.focus();
      return;
    }
    // @@@ API 통신 보내기. 아직  api 생성안됐음.

    const data = {
      content: state,
      feedSeq: params.feedId,
      memberSeq: 2,
    };

    axios
      .post(`/api/comment`, qs.stringify(data))
      .then(function (response) {
        console.log(data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(data);
        console.log(error);
      });

    alert("댓글 작성 완료");

    setState("");
    // 통신후 페이지 리렌더링 하기
  };

  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          bgcolor: "#ECECEC",
        }}
      >
        {/* 로그인한 유저의 이미지 */}
        <IconButton
          sx={{ p: "10px", bgcolor: "white", m: 1 }}
          aria-label="profile"
        >
          <Avatar src={process.env.PUBLIC_URL + `/assets/logo.png`}></Avatar>
        </IconButton>
        {/* 댓글 작성 및 게시 */}
        <InputBase
          sx={{
            m: 1,
            flex: 1,
            bgcolor: "white",
            borderRadius: "40px",
            height: "50px",
            paddingLeft: "5%",
          }}
          inputProps={{
            style: { fontFamily: "GangwonEduAll" },
          }}
          placeholder="댓글 달기"
          ref={commentInput}
          name="comment"
          value={state}
          onChange={handleChangeState}
          endAdornment={
            <InputAdornment position="end" style={{ paddingRight: "5%" }}>
              <IconButton onClick={handleSubmit}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
        ></InputBase>
      </Paper>
      <CommentList />
    </div>
  );
};

export default CommentWrite;
