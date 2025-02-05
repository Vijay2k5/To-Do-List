
export default function InputField({ add }) {
    return (
        <div className="mt-4 text-center flex-col justify-center items-center mx-auto w-1/2">
            <textarea className="w-full h-24 p-2 border-2 border-gray-300 rounded-lg" placeholder="Add a new task..."></textarea>
            <button onClick={() => add(document.querySelector("textarea").value)} className="p-2 mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer">Add Task</button>
        </div>
    )
}