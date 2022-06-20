import React from 'react';
import {FaListAlt, FaCheckSquare,FaPlusSquare, FaTrash, FaKey} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Navbar = ({onDelete}) => (
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div className="btn-group">
                <NavLink to="/" className="btn btn-outline-dark bg-light" exact={true}><FaListAlt/></NavLink>
                <NavLink to="/completed" className="btn btn-outline-dark bg-light"><FaCheckSquare/></NavLink>
                <NavLink to="/add_task" className="btn btn-outline-dark bg-light"  exact={true}> <FaPlusSquare/></NavLink>
                <NavLink to="/login_mediactive" className="btn btn-outline-dark bg-light"  exact={true}> <FaKey/></NavLink>
            </div>
            <button className='btn btn-outiline-dark bg-light' onClick={onDelete}><FaTrash/></button>
            
        </footer>
)

export default Navbar 