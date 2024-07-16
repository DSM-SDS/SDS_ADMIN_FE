import axios from 'axios';

const onSignup = async ( data ) => {
    const API_BASE_URL = process.env.REACT_APP_API_KEY;
    console.log(data);

    axios
      .post(`${API_BASE_URL}/signin`, {
        username: data.username,
        password: data.password,
        name: data.name,
        hosu: data.hosu,
        apt_name: data.apt_name,
        role: data.role
    })
      .then((res) => {
        alert(`회원가입에 성공하였습니다.`);
        window.location.assign("/");
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
    });
}

export default onSignup;