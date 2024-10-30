export default function Home() {
  return (
    <div>
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl">Home Page</h1>
          <nav>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Sign In</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button>
          </nav>
        </header>
        <div className="bg-cover bg-center h-screen" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487088678257-3a541e6e3922')" }}>
          <div className="flex items-center justify-center h-full">
            <h2 className="text-4xl text-white">Welcome to the Home Page</h2>
          </div>
        </div>
    </div>);
}
