import { useEffect } from "react";
import Header from "./Header";
import { startServer } from "../services/userService";
import toast from "react-hot-toast";

export default function Home() {
    useEffect(() => {
       async function start() {
            try {
                await startServer();
            }
            catch (error) {
                toast.error(error.message);
            }
       }
       start(); 
    }, []);

return (
    <div>
            <Header />

            <div className="p-4">
                    <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
                    <p className="text-lg mb-4">This is the main landing page of our application.</p>
            </div>
    </div>
);
}