import React from "react";

const NamePanel = () => {
  return (
    <div className="left-panel">
      <h1>Dinesh Reddy</h1>
          <p>Quality Enginner at
              <a href="https://www.juspay.in/">Juspay Technologies</a>
          </p>
    </div>
  );
};

const PicPanel = () => {
  return (
    <div className="right-panel">
      <img className="profile-image"
        src="https://media.licdn.com/dms/image/D5603AQG4GJl5xJnwHw/profile-displayphoto-shrink_200_200/0/1691960738542?e=1709164800&v=beta&t=b0A1YTZS2XOxJ0bsvoh1y5LfHhrd1LAcFxKgtFZQ9Ew"
        alt="Profile Image" />
    </div>
  );
};

const introflex = () => {
    return (
        <div style={{
            display: 'flex',
            height: '20vh',
        }}>
            <PicPanel />
            <NamePanel />
        </div>
  );
};

export default introflex;