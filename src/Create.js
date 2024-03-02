import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [isPennding, setIsPennding] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPennding(true);

    fetch("http://localhost:8000/blogs", {
      method: "Post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPennding(true);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          placeholder="Enter your Blog Title"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          placeholder="Enter your Blog Body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        {!isPennding && <button>Add Blog</button>}
        {isPennding && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
