import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import { Toaster } from 'react-hot-toast'
import Profile from './components/Profile'
import { GuestGuard } from './auth/GuestGuard'
import { AuthGuard } from './auth/AuthGuard'

function App() {

return (
    <Router>
         <Toaster
        position="top-center"
        reverseOrder={false}
        />

        <Routes>
                <Route path="/bt4-client" 
                        element={<Home />} 
                />

                <Route 
                    path="/bt4-client/sign-up" 
                    element={
                        <GuestGuard>
                            <SignupForm />
                        </GuestGuard>
                    } 
                />

                <Route 
                    path="/bt4-client/log-in" 
                    element={
                        <GuestGuard>
                            <LoginForm />
                        </GuestGuard>
                    } 
                />

                <Route 
                    path='/bt4-client/user' 
                    element={
                        <AuthGuard>
                            <Profile />
                        </AuthGuard>
                    } 
                />

                <Route path="*" element={<NotFound />} />
        </Routes>

    </Router>
)
}

export default App