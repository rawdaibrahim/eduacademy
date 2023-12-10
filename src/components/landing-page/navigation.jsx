import React from 'react'
import { useRef } from "react";

import { Link, useMatch, useResolvedPath } from 'react-router-dom'


export const Navigation = () => {
  let tableRef = useRef(null);

  return (
    <div className='nav'>
      <CustomLink className="home Link" to="/">Home</CustomLink>
      <CustomLink className="About Link" to="/l">Teachers</CustomLink>
      <a className="contact Link" href='/#footer'>Contact</a>
      <CustomLink className="login" to="/login">Login</CustomLink>
    </div>

  )
}

function CustomLink({ to, children,className, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <a className={isActive ? "active" : ""}>
      <Link to={to} className = {className} {...props}>
        {children}
      </Link>
    </a>
  )
}

