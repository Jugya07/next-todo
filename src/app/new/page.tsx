import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData){
    "use server"
    const title = data.get("title")?.valueOf()
    if(typeof title !== "string" || title.length ===0){
        throw new Error("Invalid title")
    }
    await prisma.toDo.create({data:{title:title ,complete:false}})
    redirect("/")
}

export default function Page() {
  return (
    <>
      <nav className="flex justify-between items-center mb-8">
        <header className="text-4xl">Create a new To-Do</header>
      </nav>
      <form action={createTodo} className="flex gap-4 flex-col">
        <input type="text" name="title" className="border bg-transparent rounded px-2 py-1 outline-none"/>
        <div className="flex gap-4">
            <Link href={".."} className="border p-3 rounded-lg hover:bg-slate-400 duration-200">Cancel</Link>
            <button type="submit" className="border p-3 rounded-lg hover:bg-slate-400 duration-200">Add</button>
        </div>
      </form>
    </>
  );
}
