import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import { Toaster } from 'react-hot-toast'

function App() {

return (
    <Router>
         <Toaster
        position="top-center"
        reverseOrder={false}
        />
        <Routes>
                <Route path="/" 
                        element={<Home />} 
                />
                <Route path="/sign-up" 
                        element={<SignupForm />} />
                <Route path="/log-in" 
                        element={<LoginForm />} />
                        <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
)
}

export default App