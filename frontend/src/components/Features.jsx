const Features = () => {
    return (
        <div>
            <section className="px-10 py-20">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    Why TaskFlow?
                </h2>

                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
                    <div className="rounded-xl border p-6 shadow-sm">
                        <h3 className="text-xl font-semibold">Task Management</h3>
                        <p className="mt-3 text-slate-600">
                            Create and organize your tasks easily.
                        </p>
                    </div>

                    <div className="rounded-xl border p-6 shadow-sm">
                        <h3 className="text-xl font-semibold">Progress Tracking</h3>
                        <p className="mt-3 text-slate-600">
                            Track your completed and pending tasks.
                        </p>
                    </div>

                    <div className="rounded-xl border p-6 shadow-sm">
                        <h3 className="text-xl font-semibold">Productivity</h3>
                        <p className="mt-3 text-slate-600">
                            Stay focused and get more things done.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Features;