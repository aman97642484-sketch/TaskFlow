const Hero = () => {
    return (
        <section className="bg-slate-50 px-10 py-24 text-center">
            <h1 className="mx-auto max-w-3xl text-5xl font-bold text-slate-900">
                Manage Your Tasks. Simplify Your Life.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
                TaskFlow helps you organize your tasks, track your progress,
                and stay productive.
            </p>

            <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
                Start Managing Tasks
            </button>
        </section>
    );
}

export default Hero;