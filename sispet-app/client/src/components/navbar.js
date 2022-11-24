import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }
    return (<nav className="nav">
                <a href="/" className="web-app-title">SisPets</a>
                {user && (
                <div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log out</button>
                </div>
                )}
                {!user && (
                <div>
                    <a href="/signup" >Cadastrar</a>
                    <a href="/login" >Login</a>
                </div>
                )}
            </nav>
    )
};

