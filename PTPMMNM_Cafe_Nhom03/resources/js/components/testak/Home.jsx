import React from "react";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1> Home Page</h1>
            <Link to="/about">About / </Link>
            <Link to="/shop">Shop / </Link>
            <Link to="/404">404 / </Link>
        </div>
    );
};