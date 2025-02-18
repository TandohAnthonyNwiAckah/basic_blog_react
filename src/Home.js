import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // STATE
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "tanacom",
      id: 1,
    },
    { title: "Welcome party!", body: "lorem ipsum...", author: "tony", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "tanacom",
      id: 3,
    },
  ]);

  // Hide blog using filter id
  const hideBlog = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const [name, setName] = useState("Tanacom");

  // useEffect
  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All Blogs!"} hideBlog={hideBlog} />

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "tony")}
        title="Tony's Blogs"
      /> */}

      <p>{name}</p>

      <button onClick={() => setName("Tony")}>change name</button>
    </div>
  );
};

export default Home;
