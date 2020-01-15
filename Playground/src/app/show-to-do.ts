export interface Todo {
    title: string;
    text: string;
  }
  
  function showToDo(todo: Todo) {
  
    console.log(`${todo.title}: ${todo.text}`)
  }
  
  let myTodo = {title: "trash", text: "Take out trash bro"}
  
  showToDo(myTodo);
  