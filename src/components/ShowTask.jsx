
export default function ShowTask({ task, index, del }) {
    return (
        <div className="flex justify-between items-center border-b border-gray-300 p-2 py-5 mx-auto">
            <p>{task}</p>
            <div className="flex gap-2">
                <button onClick={() => del(index)} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 cursor-pointer">Delete</button>
            </div>
        </div>
    )
}