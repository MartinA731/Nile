import React, {useRef} from "react";


function Data() {
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
    const btnContainer = useRef(null);

    return (
    <div className="hi" id="firstForm">
        {document.getElementById("prod-details").placeholder}
    </div>
    );
    
}   


export default FirstForm;
