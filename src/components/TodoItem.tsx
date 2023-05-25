"use client"

type ToDoItemProps = {
    id:string ,
    title:string,
    complete:boolean,
    toggleTodo:(id:string , complete:boolean)=>void
    delTodo:(id:string)=>void,
}


export default function TodoItem({id , title , complete , toggleTodo , delTodo}:ToDoItemProps){
    return (
        <li className="flex gap-5 items-center text-3xl ml-10">
            <input id={id} type="checkbox" className="appearance-none bg-yellow rounded-full checked:bg-blue cursor-pointer peer h-5 w-5 " defaultChecked={complete} onChange={(e)=>toggleTodo(id , e.target.checked)}/>
            <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer">{title}</label>
            <button className="text-sm px-8" onClick={()=>delTodo(id)}>❌</button>
        </li>
    )
}