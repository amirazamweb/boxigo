import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebar text-secondary">
            <p>
                <span><i class="fa-solid fa-truck"></i></span>
                <span>MY MOVES</span>
            </p>

            <p>
                <span><i class="fa-solid fa-user"></i></span>
                <span>MY PROFILE</span>
            </p>

            <p>
                <span><i class="fa-solid fa-boxes-packing"></i></span>
                <span>GET QUOTE</span>
            </p>

            <p>
                <span><i class="fa-solid fa-outdent"></i></span>
                <span>LOGOUT</span>
            </p>
        </div>
    )
}

export default Sidebar