export default function NewTask() {
    return <div className="flex items-center gap-4">
        <input type="text" className="w-64 rounded-sm py-1 px-2 bg-stone-200" />
        <button className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
}