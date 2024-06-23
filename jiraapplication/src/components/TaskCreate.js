import { useState } from "react";

function TaskCreate() {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  return (
    <div className="task-create">
      <h3>Task Ekleyiniz ! </h3>
      <form className="task-form">
        <label className="task-label">Başlık:</label>
        <input value={title} onChange={handleChange} className="task-text" />
        <label className="task-label">Açıklama:</label>
        <textarea
          value={taskDesc}
          onChange={handleTaskChange}
          className="task-text"
          rows={5}
        />
        <button className="task-button">Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
