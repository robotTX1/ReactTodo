import React,{useState} from "react";
import { ListGroup,ListGroupItem,Input,Form } from "reactstrap";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { allTodos, addTodo, deleteTodo, updateTodo } from "./utils";

export const Todo = () => {
  const {data, status} = useQuery('todos', allTodos);
  const [newItem,setNewItem]=useState('');

  status === 'success' && console.log(data);
  // client adatokat szeretnénk módosítani
  const queryClient = useQueryClient();
  
  const mutationAdd = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      setNewItem('');
    }
  });

  const mutationMarkAsDone = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });

  const mutationDelete = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });

  return (
    <div className="container text-center todo">
      <h3>My Todos</h3>

      <Form className="mb-1 d-flex">
          <Input placeholder="add todo" value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
          <i className="fa-solid fa-plus btn btn-primary fa-2x" onClick={() => mutationAdd.mutate({newTodo: newItem})}></i>
      </Form>

      <ListGroup className="">
        {status === "loading" && <p>Loading...</p>}
        {status === "error" && <p>Error fetching data</p>}
        {status === "success" && data.data.map(obj=>
           <ListGroupItem key={obj.id} className="d-flex justify-content-between align-items-center">
              <i className={`fa-solid fa-check fa-2x ${obj.completed === 1 && 'text-success'}`} onClick={() => mutationMarkAsDone.mutate({id: obj.id, completed: obj.completed})}></i>
              <span className={obj.completed === 1 ? "done" : ""}>{obj.text}</span>
              <i className="fa-solid fa-trash text-danger fa-2x" onClick={() => mutationDelete.mutate({id: obj.id})}></i>
          </ListGroupItem>
          )}
      </ListGroup>
    </div>
  );
};
