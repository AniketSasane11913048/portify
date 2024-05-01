import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router for client-side routing
import axios from 'axios';

function CallbackComponent() {
  const location = useLocation();
  // const [code, setCode] = useState('');
  const clientId = "83ff02a8dfb7449c96ebbb97a3404a07";
  const clientSecret = "a5bdf83d1fb744169300f2df326acff6";
  const redirectUri = "http://localhost:3000/callback";
  const url = "https://accounts.spotify.com/api/token";


  const handleCallback = async (code) => {
    try {
      console.log(code);
      console.log(code + "sssssssssss");
      const response = await axios.post(
        url,
        new URLSearchParams({
          code: code,
          redirect_uri: redirectUri,
          grant_type: "authorization_code"
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(clientId + ":" + clientSecret)}`
          }
        }
      );
      
      if (response.status === 200) {

        console.log(response.data); // You can handle the response data here
      } else {
        console.error('Failed to fetch access token');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };


  useEffect( () => {
    const searchParams = new URLSearchParams(location.search);
    const codeParam = searchParams.get('code');
    // console.log(codeParam);
    if (codeParam) {
      console.log("ghsagdgsdgadgsadgadasgdag");
      // setCode(codeParam);
      handleCallback(codeParam)
    }
  }, [location.search]);

  return (
    <div>
      <h2>Callback Component</h2>
      {/* {code && <p>Code received: {code}</p>} */}
    </div>
  );
}

export default CallbackComponent;
