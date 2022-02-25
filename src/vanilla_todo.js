import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => { return { type: ADD_TODO, text } };
const deleteToDo = (id) => { return { type: DELETE_TODO, id } };

const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [ { text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO: 
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const displayToDos = () => {
  const items = store.getState();
  ul.innerHTML = "";
  items.map((item) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "DEL";
    button.addEventListener("click", dispatchDeleteToDo);
    li.id = item.id;
    li.innerText = item.text;
    li.appendChild(button);
    ul.appendChild(li);
  })
};

store.subscribe(displayToDos);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);