import React,{useState} from 'react'
import '../Styles/list.css'
export default function Todo() {
    const [description, setDescription] = useState("");

    const onSubmitTodo = async e =>{
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todo",{
                method : "POST",
                headers : {"Content-Type":"application/json"},
                body: JSON.stringify(body)
                

            })
            console.log(response)
            window.location = "/";
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <>
            <div className="container mt-4">
                <h2 className="text-start book">Add a Todo</h2>
                

                <form className="d-flex" onSubmit={onSubmitTodo}>
                    <input className="form-control me-2 search" type="search" value={description} onChange={e => setDescription(e.target.value)} placeholder="write a task ...."/>
                    <button className="btn btn-outline-success success">Add</button>
                </form>
            </div>
        </>


    )

}
