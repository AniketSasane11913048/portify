import React from 'react';

function generateRandomString(length) {
  // Function to generate a random string of given length
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomString;
}

function generateSpotifyAuthorizationUrl() {
  const clientId = "83ff02a8dfb7449c96ebbb97a3404a07";
  const redirectUri = "http://localhost:3000/callback";
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email playlist-read-private playlist-read-collaborative";

  const spotifyAuthorizeUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`;

  // Redirect the user to Spotify's login page
  window.location.href = spotifyAuthorizeUrl;
}

function HomePage() {
  return (
    <div className="home-page">
      {/* Home page content */}
      <button onClick={generateSpotifyAuthorizationUrl}>Login</button>
    </div>
  );
}

export default HomePage;
