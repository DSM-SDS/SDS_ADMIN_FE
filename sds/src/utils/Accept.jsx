import axios from 'axios';

const onView = async ( data ) => {
    const API_BASE_URL = process.env.REACT_APP_API_KEY;
    const token = sessionStorage.getItem("accessToken");
    console.log(data);

    axios
      .post(`${API_BASE_URL}/accept_report`, {
        report_id: data.id,
        is_accepted: data.state
      }, {headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        alert(`승인되었습니다.`);
      })
      .catch((err) => {
        console.log(err);
        alert("에러가 발생했습니다.");
    });
}

export default onView;