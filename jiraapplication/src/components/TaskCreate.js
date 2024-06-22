function TaskCreate() {
  return (
    <div className="task-create">
      <h3>Task Ekleyiniz ! </h3>
      <form className="task-form">
        <label>Başlık:</label>
        <input />
        <label>Açıklama:</label>
        <textarea />
        <button>Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
