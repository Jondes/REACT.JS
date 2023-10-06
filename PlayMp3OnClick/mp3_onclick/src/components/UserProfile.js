import React from "react";
function UserProfile() {
  let initAudio = () => {
    const targetAudio = document.getElementsByClassName("audioBtn")[0];
    targetAudio.play();
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={initAudio}>
        Play Mp3 Audio
      </button>
      <audio className="audioBtn">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></source>
      </audio>
    </div>
  );
}
export default UserProfile;