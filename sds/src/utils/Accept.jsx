import axios from 'axios';

const onAccept = async ( state ) => {
    const API_BASE_URL = process.env.REACT_APP_API_KEY;
    const token = sessionStorage.getItem("accessToken");
    const data = localStorage.getItem("id");
    console.log(data);

    axios
      .post(`${API_BASE_URL}/accept_report`, {
        report_id: data,
        is_accepted: state ? "YES" : "NO"
      }, {headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        alert(`승인되었습니다.`);
        window.location.assign('/main');
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
    });
}

export default onAccept;