import React, { useState } from "react";
import axios from "axios";

const Form = props => {
  const [post, setPost] = useState({
    name: "",
    description: ""
  });
  // !handle changes
  const handleChanges = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };
  //!! handle submit
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:7500/api/posts", post)
      .then(response => {
        console.log("api post", response);
      })
      .catch(error => {
        console.log("api post error", error);
      });
    setPost({
      name: "",
      description: ""
    });
    props.setUpdate(!props.update);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={post.name}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        value={post.description}
        onChange={handleChanges}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
