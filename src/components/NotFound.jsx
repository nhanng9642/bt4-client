import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <img src="https://static-00.iconduck.com/assets.00/9-404-error-illustration-1024x454-1e9ol1ls.png" alt="Not Found" 
            style={{ width: '300px', height: 'auto', margin: '20px auto' }} />
        <h2>Sorry, the page you are looking for does not exist.</h2>
        <Link to="/bt4-client" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Go back to Home</Link>
    </div>
  )
}