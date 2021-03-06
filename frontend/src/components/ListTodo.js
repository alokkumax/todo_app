import React, { Fragment, useEffect, useState } from 'react'
// import Todo from './Todo';
import '../Styles/list.css'
const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    const dltTodo = async id => {
        try {
            const dltTodo = await fetch(`/todo/${id}`, {
                method: "DELETE",
            });
            setTodos(todos.filter(description => description.todo_id !== id))
            console.log(dltTodo)
            window.location = "/"
        } catch (error) {
            console.log(error);
        }
    }

    const getTodo = async () => {
        try {
            const response = await fetch("/todo");
            const jsonData = await response.json()
            setTodos(jsonData)
            document.getElementById("demo").innerHTML = "You got "+jsonData.length+" Todos";
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getTodo();
    }, [])

    return (
        <Fragment>


            <table className="table mx-5 mt-4 table1">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        {/* <th scope="col">Todo#</th> */}
                        <th id="demo" className='book'></th>
                        {/* <th scope="col">Edit</th> */}
                        {/* <th scope="col"></th> */}
                    </tr>
                </thead>
                <thead>
                    {todos.map(description => (
                        <tr key={description.todo_id} className="text-start">
                            {/* <td>{c}</td> */}
                            {/* <td className='todo'>{description.description.t}</td> */}

                            <td className='todo'>{description.description}</td>
                            <td className='text-end todo'><button class="btn btn-outline-secondary mx-1">Edit</button></td>
                            <td className='text-end todo'><button className="btn btn-outline-success mx-1" onClick={() => dltTodo(description.todo_id)}>Done</button></td>


                        </tr>
                    ))}
                </thead>
            </table>
        </Fragment>
    );
}
export default ListTodos;