import ShowTask from "./ShowTask";

export default function AllTasks({ tasks, del }) {
    if (tasks.length === 0) {
        return (
            <div className="mt-4 text-center flex-col justify-center items-center mx-auto w-1/2">
                <p className="text-center text-gray-500 text-xl mt-14">No tasks added yet!</p>
            </div>
        )
    }
    return (
        <div className="mt-4 text-center flex-col justify-center items-center mx-auto w-1/2">
            {tasks.map((task, index) => (
                <div key={index}>
                    <ShowTask task={task} index={index} del={del} />
                </div>
            ))}
        </div>
    )
}