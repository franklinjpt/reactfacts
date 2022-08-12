/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/
export default function Navbar() {
    return (
        <nav className="header-nav">
            <figure className="header-nav__logo">
            <img src="../../public/react-icon-small.png" />
            <figcaption>ReactFacts</figcaption>
            </figure>
            <p className="header-nav__extra-title">React Course - Project 1</p>
        </nav>
    )
}