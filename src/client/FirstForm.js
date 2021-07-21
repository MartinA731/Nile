import React from "react";


function FirstForm() {
    const closeFirstForm = () => {
        document.getElementById("firstForm").style.display = "none";
      };
    const openSecondForm = () => {
        document.getElementById("secondForm").style.display = "block";
        document.getElementById("firstForm").style.display = "none";
      };
    return (
        <div className="form-popup" id="firstForm">
            <form action="/action_page.php" className="form-container">
                <h1>Request Address</h1>
                <label htmlFor="email">
                    <b>Product Information</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter Product Details or SKU"
                    name="email"
                    required
                />
                <label htmlFor="psw">
                    <b>Size</b>
                </label>
                <select type="password" placeholder="Enter Password" name="psw" id="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <br />
                <br />
                <label htmlFor="psw">
                    <b>Category</b>
                </label>
                <select type="password" placeholder="Enter Password" name="psw" id="size">
                    <option value="one">Category 1</option>
                    <option value="two">Category 2</option>
                    <option value="three">Category 3</option>
                </select>
                <br />
                <br />
                <button type="button" className="btn" onClick={openSecondForm}>
                Next
                </button>
                <button type="button" className="btn cancel" onClick={closeFirstForm}>
                Close
                </button>
        </form>
    </div>
    );
}   

export default FirstForm;