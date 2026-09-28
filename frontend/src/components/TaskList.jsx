import TaskCard from "./TaskCard";

const TaskList = () => {
    const tasks = [
        {
            id: 1,
            title: "Learn React",
            priority: "High",
            status: "Pending",
        },
        {
            id: 2,
            title: "Problem Solving",
            priority: "High",
            status: "completed",
        },
        {
            id: 3,
            title: "Learn python",
            priority: "Medium",
            status: "Pending",
        },
    ];
    return (
        <section className="px-10 py-6">
            <h2 className="mb-8 text-3xl font-bold">My Tasks</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {tasks.map((task) => {
                    return (<TaskCard
                        key={task.id}
                        title={task.title}
                        priority={task.priority}
                        status={task.status}
                    />);
                })}
            </div>
        </section>
    );
};

export default TaskList;
