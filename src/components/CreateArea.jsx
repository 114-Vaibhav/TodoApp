import React, { useState } from "react";

var notesArray = [];

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // function handleTitle(event) {
  //   setTitle(event.target.value);
  //   console.log(event.target.value);
  // }
  // function handleContent(event) {
  //   setContent(event.target.value);
  //   console.log(event.target.value);
  // }

  function handleClick(event) {
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    });
    // let note1 = { title: { title }, content: { content } };
    // notesArray.push(note1);
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
// export {notesArray,CreateArea}
