import axios from 'axios';
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function GoogleVerification() {
    const location = useLocation();
    const navigate = useNavigate();
    const code = new URLSearchParams(location.search).get("code");

    useEffect(() => {
        const getRefreshToken = async() => {
          try {
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/bookings/google?code=${code}`);
            navigate("/artist-dashboard");
            console.log(res)
          } catch(err) {
            console.log(err)
          }
        }
      
        if(code) getRefreshToken();
          
      },[code])

  return (
    <div>Redirecting...</div>
  )
}

export default GoogleVerification