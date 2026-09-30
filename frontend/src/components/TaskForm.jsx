import { useState } from "react";

const TaskForm = ({ setTasks }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [status, setStatus] = useState("Pending");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            title,
            description,
            status,
            priority,
            dueDate,
        };
        setTasks((prevTasks) => [
            ...prevTasks,
            newTask,
        ])
    };

    return (
        <section className="px-10 py-10">
            <div className="mx-auto max-w-2xl rounded-xl border bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold">Create Task</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Title */}
                    <div>
                        <label className="mb-2 block font-medium">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            placeholder="Enter Task Title"
                            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-2 block font-medium">Description</label>

                        <textarea
                            placeholder="Enter task description"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                        />
                    </div>

                    {/* Priority */}
                    <div>
                        <label className="mb-2 block font-medium">Priority</label>

                        <select
                            className="w-full rounded-lg border px-4 py-2"
                            value={priority}
                            onChange={(e) => {
                                setPriority(e.target.value);
                            }}
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="mb-2 block font-medium">Status</label>

                        <select
                            value={status}
                            onChange={(e) => {
                                setStatus(e.target.value);
                            }}
                            className="w-full rounded-lg border px-4 py-2"
                        >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    {/* Due Date */}
                    <div>
                        <label className="mb-2 block font-medium">Due Date</label>

                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => {
                                setDueDate(e.target.value);
                            }}
                            className="w-full rounded-lg border px-4 py-2"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
                    >
                        Create Task
                    </button>
                </form>
            </div>
        </section>
    );
};

export default TaskForm;
