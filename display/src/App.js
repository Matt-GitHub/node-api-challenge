import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Form from "./form";

function App() {
  const [post, setPosts] = useState([
    {
      name: "",
      description: "",
      completed: Boolean
    }
  ]);
  const [id, setId] = useState("");

  const [update, setUpdate] = useState(false);
  return (
    <div className="App">
      {useEffect(() => {
        axios
          .get("http://localhost:7500/api/posts")
          .then(response => {
            console.log("api response", response.data);
            setPosts(response.data);
          })
          .catch(error => {
            console.log("error", error);
          });
      }, [update])}

      {post.map((posts, key) => {
        return (
          <div key={key}>
            <h4>Task: {posts.name}</h4>
            <p>Descrition: {posts.description}</p>
          </div>
        );
      })}
      <Form update={update} setUpdate={setUpdate} />
    </div>
  );
}

export default App;
