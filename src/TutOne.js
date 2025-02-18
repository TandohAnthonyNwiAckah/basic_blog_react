function TutOne() {
  const title = "Introduction to components and templates";
  const rank = 4;
  // const person = { name: "yoshi", age: 30 }; // Objects are not valid as a React child
  const link = "http://www.google.com";

  return (
    <div className="tut">
      {/* CONVERTING ALL TO STRING */}
      <h1>{title}</h1>
      <p> Ranked {rank} out of 10</p>
      {/* <p>{person}</p> */}
      <p>{"hello, ninjas"}</p>
      <p>{[1, 2, 3, 4, 5]}</p>
      <p>{Math.random() * 10}</p>

      <a href={link}>Google Site</a>
    </div>
  );
}

export default TutOne;
