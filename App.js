import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", { key: "h1" }, "This is h1 tag."),
            React.createElement("h2", { key: "h2" }, "This is h2 tag.")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));


// const jsxheading = <h1>This is JSX</h1>;

// const HeadingComponent = () => {
//     return <h1>This is functional component</h1>
// }

// const HeadingComponent2 = () => (
//     <div className="container">
//         <h2>This is H2</h2>
//     </div>
// )



// const HeadingComponent = () => (
//     <div>
//         <HeadingComponent2 />
//         <h1>This is functional component</h1>
//     </div>
// )

const styleCard= {
    backgroundColor: "#f0f0f0"
}

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkDMKlwUQvjzYOeJ-i8DW2SfO1fcO3eHU9ow&s" />
            </div>
            <div className="nav-items">
                <ul>
                    <li className="">Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({resName, cusine, rating, deliveryTime}) => {
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=" />
            <h3>{resName}</h3>
            <h4>{cusine}</h4>
            <p>{rating}</p>
            <p>{deliveryTime}</p>
        </div>
    )
   
}

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghna Foods" cusine="North Indian, Asian" rating="4.4 stars" deliveryTime="34 minutes"/>
                <RestaurantCard resName="KFC" cusine="Burger, Fast Food" rating="4.8 stars" deliveryTime="43 minutes"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="root">
        <Header />
        <Body />
    </div>
}


root.render(<AppLayout />);