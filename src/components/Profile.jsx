import { useAuth } from "../auth/useAuth";
import Header from "./Header";

export default function Profile() {
    const {user} = useAuth();

    return (
        <>
            <Header />

            <div className="flex flex-col items-start justify-start p-4">
                <h1 className="text-3xl font-bold text-gray-800">Hello {user.email},</h1>

                <p className="mt-4 text-lg text-gray-600">
                    This page is currently under construction.
                    We will have it completed shortly.
                    Please revisit us at a later time.
                </p>
            </div>
        </>
    )

}
