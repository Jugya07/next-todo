import { prisma } from "@/db";
import Link from "next/link";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";

function getTodos(){
  return prisma.toDo.findMany()
}

async function toggleTodo(id:string , complete:boolean ){
  "use server"
  await prisma.toDo.update({where:{id} , data:{complete}})
}
async function delTodo(id:string){
  "use server"
  await prisma.toDo.delete({where:{id} })
}

export default async function Home() {
  const todos = await getTodos()
  // const [update , setUpdate] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center mb-9">
        <header className="text-6xl">🕑 t🔘d🔘s</header>
        <Link href="/new" className="flex justify-center items-center text-3xl h-14 w-14 border rounded-full duration-200 hover:bg-skin">✜</Link>
      </nav>
      <ul className="flex flex-col gap-6">
        {
          todos.map((todo)=>(
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} delTodo={delTodo}/>
          ))
        }
      </ul>
    </>
  );
}
