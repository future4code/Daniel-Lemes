import react,{useState, useEffect} from "react"
import {BASE_URL} from "../../Utilization/BaseUrl"


const TripsDetailPage = () => {

const [userId, setUserId] = useState("")
    useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = (id) => {
    axios
      .get(`${BASE_URL}/${id}`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (

<div>
<p>{setUserId.name}</p>
</div>

  )

}
expor default TripsDetailPage
