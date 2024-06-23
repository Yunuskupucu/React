function TaskShow({ task }) {
  console.log(task);
  return (
    <div className="task-show">
      <h4 className="task-title">Göreviniz</h4>
      <p>{task.title}</p>
      <h4 className="task-title">Yapılacaklar</h4>
      <p>{task.taskDesc}</p>
      <div>
        <button className="task-delete">Sil</button>
        <button className="task-edit">Güncelle</button>
      </div>
    </div>
  );
}

export default TaskShow;
