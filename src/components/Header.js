import React from "react";

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheets" href="styles.css">
//     <title>Yummy Veggies</title>
// </head>
    
export default function Header() {
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <ul className="site-nav">
                        <li><a href="#" class="nav-item">Home</a></li>
                        <li><a href="#" class="nav-item">Shop</a></li>
                        <li><a href="#" class="nav-item">About</a></li>
                        <li><a href="#" class="nav-item">Blog</a></li>
                        <li><a href="#" class="nav-item">Contact</a></li>
                    </ul>
                </nav>
                <div class="logo">
                    <h1>YummyVeggies!</h1>
                </div>
                <div className="nav">
                    <ul className="shopper-nav">
                        <li><a href="#" class="">Search</a></li>
                        <li><a href="#" class="">Profile</a></li>
                        <li><a href="#" class="">Cart[0]</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}




    
    


