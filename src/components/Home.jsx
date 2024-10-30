import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl">Home Page</h1>
          <nav>
            <Link to="/bt3-web/sign-up">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Sign In</button>
            </Link>

            <Link to = "/bt3-web/log-in">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button>
            </Link>
          </nav>
        </header>
        <div className="bg-cover bg-center h-screen" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487088678257-3a541e6e3922')" }}>
          
        </div>
    </div>);
}
