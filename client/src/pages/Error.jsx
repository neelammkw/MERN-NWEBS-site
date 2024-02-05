import { NavLink } from "react-router-dom"

const Error = () => {
  return (
    <div>
      <h1 className="center">Error</h1>
      <p>Sorry, there was an error processing your request.</p>
      <div>
        <NavLink to="/"> Return Home</NavLink>

      </div>
    </div>
  )
}

export default Error
