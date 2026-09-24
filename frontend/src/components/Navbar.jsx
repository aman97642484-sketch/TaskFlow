const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-10 py-5 border-b">
            <h2 className="text-2xl font-bold">TaskFlow</h2>
            <div className="flex gap-8">
                <a className="hover:text-blue-600" href="/about">About</a>
                <a className="hover:text-blue-600" href="/contact">Contact</a>
                <a className="hover:text-blue-600" href="/">Home</a>
            </div>
            <button className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-800">Get Started</button>
        </nav>
    );
}

export default Navbar;