import React from "react";
import Popup from "reactjs-popup";

export const PopUp = () => (

    <Popup
        trigger={<button className="popUp-btn"> Important Information </button>}>
        <div className="text">This is a simple food recipe search app. Simply type in a
        specific type of food you want to eat and it will come up with different recipes you
        can make out of it. The food recipe apis are coming out of Edamam, a food recipe website with apis of
        different recipes around the web. NOTE: Future implementations would be adding a cart counter
        to save the recipes that really stick out to you. And another feature of adding your own recipes.</div>

    </Popup>

);