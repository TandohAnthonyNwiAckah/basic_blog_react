import { useState } from "react";

const Home = () => {
  // let user = "Tanacom";

  //  Making it reactive using useState Hook
  const [name, setName] = useState("Tanacom");

  const handleClick = () => {
    // user = "Tony";
    // console.log(user);
    // console.log(user, e);

    setName("Tony");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>

      <p>Username is : {name}</p>

      <button onClick={handleClick}>Change Username </button>
    </div>
  );
};

export default Home;
