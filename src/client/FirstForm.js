import React, {createRef} from "react";
import SecondForm from './SecondForm';
import Client from './Client';
import Data from './Data'



class FirstForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prodDetails : ""
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
    }
    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            prodDetails : event.target.value
        });
    }
    
    
    render() {
    const closeFirstForm = () => {
        document.getElementById("firstForm").style.display = "none";
        window.formOpen = false;
      };
    const openSecondForm = () => {
        document.getElementById("secondForm").style.display = "block";
        document.getElementById("firstForm").style.display = "none";
      };
    //next 3 arrow func toggles which button for size is selected
    const handleSize = (e) => {
        //collections of dom pointers to size buttons
        const sizeBtns = btnContainer.current.children;
        //target button to select
        const tarBtn = e.target;

        //make all buttons unselected
        for(let i = sizeBtns.length - 1; i >= 0; i--) {
            const sizeBtn = sizeBtns[i];

            //Only unselect if sizeBtn is selected and is not the target button
            if(sizeBtn.classList.contains("button-selected") && tarBtn !== sizeBtn) {
                sizeBtn.classList.replace("button-selected", "button-unselected");
            }
        }
        //if current clicked button is unselected, select it
        if(tarBtn.classList.contains("button-unselected")) {
            tarBtn.classList.replace("button-unselected", "button-selected");
        }   
    };

    //pointer to size button container
    //const btnContainer = useRef(null);
    const btnContainer = createRef();
    

    return (
        <div className="form-popup" id="firstForm">
            <form action="/action_page.php" className="form-container" onSubmit={this.handleSubmit}>
                <h4>{this.state.prodDetails} Request Address</h4>
                <label>
                    <b>Details</b>
                </label> <br />
                <div className="input-container" id="subtitle-space">
                    <div className="hidden" aria-hidden="true">Enter Product Details or SKU padding</div>
                    <input type="text" placeholder="Enter Product Details or SKU" onChange={this.handleInputChange} id="prod-details" required/>
                </div> <br />
                <label>
                    <b>Size</b>
                </label>
                <div className="btnContainer" ref={btnContainer}  id="subtitle-space">
                    <span value="small" className="left button-unselected" onClick={handleSize}>Small</span>
                    <span value="medium" className="mid button-unselected" onClick={handleSize}>Medium</span>
                    <span value="large" className="right button-unselected" onClick={handleSize}>Large</span>
                </div>
                <label>
                    <b>Category</b>
                </label> <br />
                <select type="password" placeholder="Enter Password" name="psw" id="size">
                    <option value="one">Category 1</option>
                    <option value="two">Category 2</option>
                    <option value="three">Category 3</option>
                </select> <br /> <br />
                <button type="button" className="btn" onClick={openSecondForm}>
                Next
                </button>
                <button type="button" className="btn cancel" onClick={closeFirstForm}>
                Close
                </button>
                <Data data={this.state.prodDetails}></Data>
        </form>
    </div>
    );
    }
    
}   


export default FirstForm;
