const Home = () => {
  // HANDLING CLICK EVENTS

  const handleClick = (e) => {
    console.log("hello, ninjas", e);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>

      <button onClick={handleClick}>CLICK ME</button>

      {/* PASSING ARGUMENTS TO EVENT HANDLERS */}
      <button
        onClick={(e) => {
          handleClickAgain("mario", e);
        }}
      >
        CLICK ME AGAIN
      </button>
    </div>
  );
};

export default Home;
