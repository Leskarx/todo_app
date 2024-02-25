import { useContext, createContext } from "react";
const context = createContext({
    todoArray: [],
    changeTodo: () => {},
    deleteTodo: () => {}


})
export const TodoProvider = context.Provider;
export default function UseTodo() {
    return useContext(context)
}