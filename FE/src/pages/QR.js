// import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import AWS from "aws-sdk";

// import Fab from "@mui/material/Fab";
import PhotoIcon from "@mui/icons-material/Photo";
import VideocamIcon from "@mui/icons-material/Videocam";
import IosShareIcon from "@mui/icons-material/IosShare";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: "10%",
  },
  largeIcon: {
    fontSize: "4rem !important",
    color: "#FF9999",
  },
}));

const QR = () => {
  // AWS.config.update({
  //   accessKeyid: "AKIA2TBRAOMD4EYNB5MS",
  //   secretAccessKey: "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",
  //   region: "ap-northeast-2",
  // });
  // const s3 = new AWS.S3()

  // s3.getObject({
  //   Bucket: 'team-a502-bucket',
  //   Key: 'AKIA2TBRAOMD4EYNB5MS'
  // }, function (err, data) {
  //   if (err) {
  //     console.log(err, err.stack);
  //   } else {
  //     const imageUrl = URL.createObjectURL(new Blob([data.Body]));
  //     // Use the imageUrl to display the image
  //   }
  // });

  const navigate = useNavigate();
  const classes = useStyles();

  const params = useParams();
  const s3 = "https://team-a502-bucket.s3.ap-northeast-2.amazonaws.com/";
  const [machineLocation, setMachineLocation] = useState(0);
  const [data, setData] = useState({
    machineDataCreateTime: "",
    machineLocationSeq: "",
    memberSeq: "",
    photo: "",
    post: "",
    video: "",
    voice: "",
  });

  useEffect(() => {
    axios
      .get(`/api/machine/data/${params.machineDataSeq}`)
      .then(function (response) {
        axios(`/api/machine/loc/${params.machineDataSeq}`).then(function (
          response
        ) {
          setMachineLocation(response.data);
        });
        setData({
          ...data,
          machineDataCreateTime: response.data.createTime.substr(0, 10),
          machineLocationSeq: machineLocation,
          photo: response.data.photo,
          post: response.data.post,
          video: response.data.video,
          voice: response.data.voice,
        });
      });
  }, []);

  // const download = (e) => {
  //   console.log(e.target.href);
  //   fetch(e.target.href, {
  //     method: "GET",
  //     headers: {},
  //   })
  //     .then((response) => {
  //       response.arrayBuffer().then(function (buffer) {
  //         const url = window.URL.createObjectURL(new Blob([buffer]));
  //         const link = document.createElement("a");
  //         link.href = url;
  //         link.setAttribute("download", "image.png"); //or any other extension
  //         document.body.appendChild(link);
  //         link.click();
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // console.log(state);
  const state = 1;
  const CLIENT_ID = "1cdhp17WpXR_m9BDcOcE"; // 호성이 새로운거
  const redirectURI = `http://localhost:3000/download/${params.machineDataSeq}`;
  const naverLogin = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${redirectURI}&state=${state}`;

  return (
    <div>
      <h2
        style={{
          display: "flex",
          height: "100%",
          paddingLeft: "5%",
          fontFamily: "GangwonEduAll",
        }}
      >
        <div>{data.machineDataCreateTime}일의 로그박스</div>
        <div style={{ paddingLeft: "5%" }}>{data.machine_location_seq}</div>
      </h2>
      <div>
        <a href={`${s3}${data.post}`} download>
          <img
            // style={"width: 10%;"}
            src={`${s3}${data.post}`}
            alt="사진이 없습니다."
            style={{ width: "100%" }}
          />
        </a>
      </div>
      <div className={classes.root}>
        <div className={classes.buttonContainer}>
          <a href={`${s3}${data.photo}`} download>
            <IconButton>
              <PhotoIcon className={classes.largeIcon} />
            </IconButton>
          </a>
          <a href={`${s3}${data.video}`} download>
            <IconButton>
              <VideocamIcon className={classes.largeIcon} />
            </IconButton>
          </a>
          {/* <IconButton className={classes.largeIcon}>
              <IosShareIcon className={classes.largeIcon} />
            </IconButton> */}
        </div>
      </div>
      <p> 로그인하시면 엽서를 공유하거나 다른 사람의 엽서를 볼 수 있습니다. </p>
      {/* <MyBtn
        sx={{
          position: "absolute",
          left: "50%",
          top: "85%",
          transform: "translate(-50%, -50%)",
          width: "80%",
        }}
        onClick={() => {}}
      > */}
      <a href={naverLogin}>
        <img
          src={process.env.PUBLIC_URL + `assets/naverLogin.png`}
          alt="naver"
          style={{
            height: "6vh",
            display: "flex",
            objectFit: "cover",
          }}
        ></img>
      </a>
      {/* </MyBtn> */}
    </div>
  );
};

export default QR;
