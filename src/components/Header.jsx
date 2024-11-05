import { useAuth } from "../auth/useAuth";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export default function Header() {
    const { user, dispatch, isInit } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        dispatch({ type: "LOGOUT" });
    };

    return (
        <>
            {!isInit && <Loading />}
            { isInit &&
                <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                    <Link to="/bt4-client/">
                        <p className="text-2xl pl-4 hover:text-gray-400">Home</p>
                    </Link>

                    <nav>

                        {!user && <>
                            <Link to="/bt4-client/sign-up">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 transition duration-300 ease-in-out transform hover:scale-105">Sign Up</button>
                            </Link>

                            <Link to="/bt4-client/log-in">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">Login</button>
                            </Link>
                        </>}

                        {user && 
                            <>
                                <Link to="/bt4-client/user" className="hover:text-gray-400">{user.email}</Link>

                                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold ml-3 py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                                    Log out
                                </button>
                            </>
                        }
                    </nav>
                </header>
            }
        </>
    );
}
