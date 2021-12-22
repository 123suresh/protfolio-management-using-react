import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h3>404 Error Page not found</h3>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default Error
