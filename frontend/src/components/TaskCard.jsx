import { useState } from "react";

const TaskCard = ({priority, title, status}) => {
    const[taskStatus, setTaskStatus] = useState(status);

    const handleComplete = () => {
        setTaskStatus("Completed");
    }
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                    {title}
                </h3>
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-600">
                    {priority}
                </span>
            </div>

            <p className="mt-3 text-sm text-slate-500">
                Status: {taskStatus}
            </p>
            {taskStatus != "Completed" && (
                <button onClick={handleComplete} className="mt-4 rounded-lg bg-green-600 px-4 py-2 text-white">Mark Completed</button>
            )}

            <div className="mt-5 flex gap-3">
                <button className="rounded-lg border px-4 py-2 text-sm">
                    Edit
                </button>

                <button className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TaskCard;