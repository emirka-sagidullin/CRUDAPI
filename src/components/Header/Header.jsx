import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav>
      <ul>
        <li>
            <Link to={'/'}>Главная</Link>
        </li>
        <li>
        <Link to={'/addPost'}>Добавить</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
