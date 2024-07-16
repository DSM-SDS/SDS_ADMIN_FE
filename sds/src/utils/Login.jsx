import axios from 'axios';

const onLogin = async ( data ) => {
    const API_BASE_URL = process.env.REACT_APP_API_KEY;
    console.log(data);

    axios
      .post(`${API_BASE_URL}/login`, {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        const { accessToken, refreshToken } = res.data;
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("refreshToken", refreshToken);
        alert(`로그인에 성공하였습니다.`);
        window.location.assign("/main");
      })
      .catch((err) => {
          console.log(err);
          alert("에러가 발생했습니다.");
    });
}

export default onLogin;