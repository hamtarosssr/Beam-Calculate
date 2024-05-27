document.addEventListener("DOMContentLoaded", function () {
    // Get all the <a> elements within the <ul>
    var links = document.querySelectorAll("ul li a");

    // Get the div elements
    var lengthDiv = document.querySelector(".Length");
    var supportDiv = document.querySelector(".Support");
    var loadsDiv = document.querySelector(".Loads");

    // Add click event listeners to each <a> element
    links.forEach(function (link) {
        link.addEventListener("click", function () {
            // Remove the "active" class from all <a> elements
            links.forEach(function (link) {
                link.classList.remove("active");
            });

            // Add the "active" class to the clicked <a> element
            this.classList.add("active");

            // Toggle the display of the respective div
            if (this.textContent === "Length") {
                lengthDiv.style.display = "block";
                supportDiv.style.display = "none";
                loadsDiv.style.display = "none";
            } else if (this.textContent === "Support") {
                lengthDiv.style.display = "none";
                supportDiv.style.display = "block";
                loadsDiv.style.display = "none";
            } else if (this.textContent === "Loads") {
                lengthDiv.style.display = "none";
                supportDiv.style.display = "none";
                loadsDiv.style.display = "block";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the input element
    var inputElement = document.querySelector('.BLength');

    // Get the select element
    var selectElement = document.querySelector('.ULength');

    // Get the div element to update
    var scaleNumberDiv = document.querySelector('.scaleNumber');

    // Add event listeners to both input and select elements
    inputElement.addEventListener('input', updateScaleNumber);
    selectElement.addEventListener('change', updateScaleNumber);

    // Function to update the scale number
    function updateScaleNumber() {
        // Get the selected option
        var selectedOption = selectElement.options[selectElement.selectedIndex];

        // Get the scale number from the input element
        var scaleNumber = parseFloat(inputElement.value); // Parse as float

        // Check if the scale number is less than 0
        if (scaleNumber < 0) {
            // If it's less than 0, set it to 0
            scaleNumber = 1;
            inputElement.value = scaleNumber; // Update the input value
        }

        // Append the selected unit to the scale number
        var updatedContent = scaleNumber + ' ' + selectedOption.textContent;

        // Update the content of the div
        scaleNumberDiv.textContent = updatedContent;
    }

    // Initial update to set the correct content
    updateScaleNumber();
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the buttons and the image element
    var btnSupfix = document.querySelector('.btnSupfix');
    var btnSupRoller = document.querySelector('.btnSupRoller');
    var btnSupWall = document.querySelector('.btnSupWall');
    var suppic = document.querySelector('.SuppicLeft img');

    // Add event listeners to each button
    btnSupfix.addEventListener('click', function () {
        suppic.src = "asset/sup_fixed.png";
        suppic.parentElement.style.top = '39%';
        suppic.parentElement.style.left = '395px';
    });

    btnSupRoller.addEventListener('click', function () {
        suppic.src = "asset/sup_fluid.png";
        suppic.parentElement.style.top = '39%';
        suppic.parentElement.style.left = '395px';
    });

    btnSupWall.addEventListener('click', function () {
        suppic.src = "asset/sup_anchorage.png";
        suppic.parentElement.style.top = '37%';
        suppic.parentElement.style.left = '387px';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the buttons and the image element
    var btnSupfix2 = document.querySelector('.btnSupfix2');
    var btnSupRoller2 = document.querySelector('.btnSupRoller2');
    var btnSupWall2 = document.querySelector('.btnSupWall2');
    var suppic2 = document.querySelector('.SuppicRight img');

    // Add event listeners to each button
    btnSupfix2.addEventListener('click', function () {
        suppic2.src = "asset/sup_fixed.png";
        suppic2.parentElement.style.top = '39%';
        suppic2.parentElement.style.left = '1390px';
        suppic2.parentElement.style.transform = 'none'; // Reset transform
    });

    btnSupRoller2.addEventListener('click', function () {
        suppic2.src = "asset/sup_fluid.png";
        suppic2.parentElement.style.top = '39%';
        suppic2.parentElement.style.left = '1390px';
        suppic2.parentElement.style.transform = 'none'; // Reset transform
    });

    btnSupWall2.addEventListener('click', function () {
        suppic2.src = "asset/sup_anchorage.png";
        suppic2.parentElement.style.top = '37%';
        suppic2.parentElement.style.left = '1390px';
        suppic2.parentElement.style.transform = 'rotate(180deg)'; // Rotate 180 degrees
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all the buttons and load divs
    var btnforce1 = document.querySelector('.btnforce1');
    var btnforce2 = document.querySelector('.btnforce2');
    var btnforce3 = document.querySelector('.btnforce3');
    var btnforce4 = document.querySelector('.btnforce4');

    var load1 = document.querySelector('.Load1');
    var load2 = document.querySelector('.Load2');
    var load3 = document.querySelector('.Load3');
    var load4 = document.querySelector('.Load4');

    // Get all the Cancel buttons
    var cancelButtons = document.querySelectorAll('.cancle-add button');

    // Function to hide all Load divs
    function hideAllLoadDivs() {
        load1.style.display = "none";
        load2.style.display = "none";
        load3.style.display = "none";
        load4.style.display = "none";
    }

    // Add event listeners to each button
    btnforce1.addEventListener('click', function () {
        hideAllLoadDivs();
        load1.style.display = "block";
        removeActiveClass();
        btnforce1.classList.add('activebtn');
    });

    btnforce2.addEventListener('click', function () {
        hideAllLoadDivs();
        load2.style.display = "block";
        removeActiveClass();
        btnforce2.classList.add('activebtn');
    });

    btnforce3.addEventListener('click', function () {
        hideAllLoadDivs();
        load3.style.display = "block";
        removeActiveClass();
        btnforce3.classList.add('activebtn');
    });

    btnforce4.addEventListener('click', function () {
        hideAllLoadDivs();
        load4.style.display = "block";
        removeActiveClass();
        btnforce4.classList.add('activebtn');
    });

    // Add event listeners to Cancel buttons
    cancelButtons.forEach(function (cancelButton) {
        cancelButton.addEventListener('click', function () {
            hideAllLoadDivs();
            removeActiveClass();
        });
    });

    // Function to remove "activebtn" class from all buttons
    function removeActiveClass() {
        btnforce1.classList.remove('activebtn');
        btnforce2.classList.remove('activebtn');
        btnforce3.classList.remove('activebtn');
        btnforce4.classList.remove('activebtn');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all the <a> elements in the navigation bar
    var navLinks = document.querySelectorAll('ul li a');

    // Get all the Load divs
    var loadDivs = document.querySelectorAll('.Load1, .Load2, .Load3, .Load4');

    // Add click event listeners to all <a> elements in the navigation bar
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function () {
            // Hide all Load divs when any navigation bar item is clicked
            loadDivs.forEach(function (loadDiv) {
                loadDiv.style.display = "none";
            });
        });
    });
});


//Load1 --------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // Get the input element for BLength
    var inputElement = document.querySelector('.BLength');

    // Initialize the variable BLength with the initial value of the input
    var BLength = parseInt(inputElement.value);

    // Get the input elements for position and angle
    var positionInput = document.querySelector('.position-input');
    var arrowPointLoad = document.querySelector('.arrowPointLoad');
    var magnitudeElement = document.querySelector('.Magnitude');
    var positionInput2 = document.querySelector('.position-input2');
    var momentElement = document.querySelector('.Moment');
    var magnitudeMomentElement = document.querySelector('.Magnitude-Moment');

    var arrowInitialLeft = 420;
    var arrowMaxWidth = 1420; // Max width for arrowPointLoad
    var magnitudeInitialLeft = 410;
    var magnitudeMaxWidth = 1410; // Max width for Magnitude
    var momentInitialLeft = 395;
    var momentMaxWidth = 1390; // Max width for Moment

    // Function to update the left position of the arrow, magnitude, and moment elements
    function updateElementsPosition() {
        var position = parseFloat(positionInput.value); // Parse to float for meter input
        var newPosition = Math.min(position, BLength); // Ensure position doesn't exceed BLength

        // Calculate new left position for arrowPointLoad
        var arrowNewLeft = arrowInitialLeft + (newPosition / BLength) * (arrowMaxWidth - arrowInitialLeft);
        arrowNewLeft = Math.max(arrowNewLeft, arrowInitialLeft); // Ensure position is not below initial
        arrowPointLoad.style.left = arrowNewLeft + 'px';

        // Calculate new left position for Magnitude
        var magnitudeNewLeft = magnitudeInitialLeft + (newPosition / BLength) * (magnitudeMaxWidth - magnitudeInitialLeft);
        magnitudeNewLeft = Math.max(magnitudeNewLeft, magnitudeInitialLeft); // Ensure position is not below initial
        magnitudeElement.style.left = magnitudeNewLeft + 'px';

        var position2 = parseFloat(positionInput2.value); // Parse to float for meter input
        var newPosition2 = Math.min(position2, BLength); // Ensure position doesn't exceed BLength

        // Calculate new left position for Magnitude-Moment
        var magnitudeMomentNewLeft = magnitudeInitialLeft + (newPosition2 / BLength) * (magnitudeMaxWidth - magnitudeInitialLeft);
        magnitudeMomentNewLeft = Math.max(magnitudeMomentNewLeft, magnitudeInitialLeft); // Ensure position is not below initial
        magnitudeMomentElement.style.left = magnitudeMomentNewLeft + 'px'; // Update the left position of the Magnitude-Moment element

        // Calculate new left position for Moment
        var momentNewLeft = momentInitialLeft + (newPosition2 / BLength) * (momentMaxWidth - momentInitialLeft);
        momentNewLeft = Math.max(momentNewLeft, momentInitialLeft); // Ensure position is not below initial
        momentElement.style.left = momentNewLeft + 'px'; // Update the left position of the Moment element
    }

    // Add event listeners to update the positions whenever the input values change
    positionInput.addEventListener('input', updateElementsPosition);
    positionInput2.addEventListener('input', updateElementsPosition);
    inputElement.addEventListener('input', function() {
        BLength = parseInt(inputElement.value);
        updateElementsPosition();
    });

    // Initial call to set the positions correctly on page load
    updateElementsPosition();
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the input elements
    var positionInput = document.querySelector('.position-input');
    var forceInput = document.querySelector('.force-input');
    var magnitudeElement = document.querySelector('.Magnitude');

    // Add event listeners for input change
    positionInput.addEventListener('input', updateMagnitudeDisplay);
    forceInput.addEventListener('input', updateMagnitudeDisplay);

    // Function to update the display of the Magnitude div
    function updateMagnitudeDisplay() {
        // Check if both position and force inputs have values and forceInput.value > 0
        if (positionInput.value && forceInput.value && forceInput.value > 0) {
            magnitudeElement.style.display = 'block'; // Show the Magnitude div
            magnitudeElement.textContent = forceInput.value; // Update its content
        } else {
            magnitudeElement.style.display = 'none'; // Hide the Magnitude div if conditions are not met
        }
    }

    // Call updateMagnitudeDisplay initially
    updateMagnitudeDisplay();
});

document.addEventListener("DOMContentLoaded", function () {
    var arrowPointLoad = document.querySelector('.arrowPointLoad');
    var angleInput = document.querySelector('.angle');
    var upButton = document.querySelector('.up');
    var downButton = document.querySelector('.down');

    // Add event listener for up button
    upButton.addEventListener('click', function () {
        angleInput.value = 90; // Reset angle to 90 degrees
        arrowPointLoad.classList.add('mirrored');
        updateRotation();
    });

    // Add event listener for down button
    downButton.addEventListener('click', function () {
        angleInput.value = 90; // Reset angle to 90 degrees
        arrowPointLoad.classList.remove('mirrored');
        updateRotation();
    });

    // Add event listener for angle input change
    angleInput.addEventListener('input', function () {
        updateRotation();
    });
    function updateRotation() {
        var angle = parseInt(angleInput.value);
        angle = Math.max(0, Math.min(180, angle));
        var isMirrored = arrowPointLoad.classList.contains('mirrored');
        var rotation = isMirrored ? angle : -angle;

        arrowPointLoad.style.transform = `rotate(${rotation}deg) scaleX(1)`;
    }
    updateRotation();
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the input elements
    var positionInput = document.querySelector('.position-input');
    var positionInput2 = document.querySelector('.position-input2');
    var forceInput = document.querySelector('.force-input');
    var arrowPointLoad = document.querySelector('.arrowPointLoad img');
    var magnitudeElement = document.querySelector('.Magnitude');
    var magnitudeMomentDiv = document.querySelector('.Magnitude-Moment');
    var momentInput = document.querySelector('.Moment-input');
    var momentImageDiv = document.querySelector('.Moment img');
    var BLengthInput = document.querySelector('.BLength');

    // Get all the Cancel buttons
    var cancelButtons = document.querySelectorAll('.cancle-add button');

    // Function to update the arrow image source
    function updateArrow() {
        // Check if both inputs have values
        if (positionInput.value && forceInput.value) {
            arrowPointLoad.src = 'asset/arrow.png';
        } else {
            arrowPointLoad.src = ''; // Clear the src attribute if inputs are empty
        }
    }

    // Function to clear input values and hide Magnitude div
    function clearInputValues() {
        positionInput.value = '';
        positionInput2.value = '';
        forceInput.value = '';
        magnitudeElement.style.display = 'none';
        arrowPointLoad.src = ''; 
        momentInput.value = '';
        magnitudeMomentDiv.style.display = 'none';
        momentImageDiv.src = '';
    }
    
    // Function to update the display of the Magnitude div
    function updateMagnitudeDisplay() {
        // Check if both position and force inputs have values and forceInput.value > 0
        if (positionInput.value && forceInput.value && forceInput.value > 0) {
            magnitudeElement.style.display = 'block'; // Show the Magnitude div
            magnitudeElement.textContent = forceInput.value; // Update its content
        } else {
            magnitudeElement.style.display = 'none'; // Hide the Magnitude div if conditions are not met
        }
    }

    // Function to ensure the input value is not below 0 or above BLength
    function checkInputValue(input) {
        var BLengthValue = parseFloat(BLengthInput.value);
        if (input.value < 0) {
            input.value = 0;
        } else if (input.value > BLengthValue) {
            input.value = BLengthValue;
        }
    }

    // Add event listeners for input change
    positionInput.addEventListener('input', function () {
        checkInputValue(positionInput);
        updateArrow();
        updateMagnitudeDisplay();
    });

    positionInput2.addEventListener('input', function () {
        checkInputValue(positionInput2);
        // Add any additional logic for positionInput2 if necessary
    });

    forceInput.addEventListener('input', function () {
        checkInputValue(forceInput);
        updateArrow();
        updateMagnitudeDisplay();
    });

    BLengthInput.addEventListener('input', function () {
        // Re-check values of positionInput and positionInput2 when BLength changes
        checkInputValue(positionInput);
        checkInputValue(positionInput2);
        checkInputValue(forceInput);
        updateArrow();
        updateMagnitudeDisplay();
    });

    // Add event listeners to each Cancel button
    cancelButtons.forEach(function (cancelButton) {
        cancelButton.addEventListener('click', function () {
            clearInputValues();
        });
    });

    // Call updateArrow and updateMagnitudeDisplay initially
    updateArrow();
    updateMagnitudeDisplay();
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the input element for the Moment
    var momentInput = document.querySelector('.Moment-input');

    // Get the div element for Magnitude-Moment
    var magnitudeMomentDiv = document.querySelector('.Magnitude-Moment');

    // Add event listener to Moment input for value change
    momentInput.addEventListener('input', function () {
        // Get the value from the Moment input
        var momentValue = momentInput.value;

        // Update the content of the Magnitude-Moment div with the new value
        magnitudeMomentDiv.textContent = momentValue;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the input elements
    var momentInput = document.querySelector('.Moment-input');
    var positionInput2 = document.querySelector('.position-input2');

    // Get the div element for the Moment image
    var momentImageDiv = document.querySelector('.Moment img');

    // Get the div element for Magnitude-Moment
    var magnitudeMomentDiv = document.querySelector('.Magnitude-Moment');

    // Add event listener to Moment input for value change
    momentInput.addEventListener('input', updateMomentImage);
    positionInput2.addEventListener('input', updateMomentImage);

    // Function to update the Moment image and Magnitude-Moment div
    function updateMomentImage() {
        // Get the value from the Moment input and position input
        var momentValue = momentInput.value;
        var positionValue = positionInput2.value;

        // Check if both Moment value and position value are not empty
        if (momentValue !== "" && positionValue !== "") {
            // Set the src attribute of the Moment image to "asset/moment.png"
            momentImageDiv.src = "asset/moment.png";
            // Show the Magnitude-Moment div
            magnitudeMomentDiv.style.display = "block";
        } else {
            // Set the src attribute of the Moment image to an empty string
            momentImageDiv.src = "";
            // Hide the Magnitude-Moment div
            magnitudeMomentDiv.style.display = "none";
        }
    }

    // Initial call to update Moment image
    updateMomentImage();
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the buttons
    var cwButton = document.querySelector('.cw');
    var ccwButton = document.querySelector('.ccw');

    // Get the div element for the Moment image
    var momentImage = document.querySelector('.Moment img');

    // Add event listener for clockwise button
    cwButton.addEventListener('click', function () {
        momentImage.classList.remove('mirror');
    });

    // Add event listener for counter-clockwise button
    ccwButton.addEventListener('click', function () {
        momentImage.classList.add('mirror');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the buttons and the image elements for the first set
    var btnSupfix = document.querySelector('.btnSupfix');
    var btnSupRoller = document.querySelector('.btnSupRoller');
    var btnSupWall = document.querySelector('.btnSupWall');
    var reactionDiv = document.querySelector('.reaction');

    // Add event listeners to each button for the first set
    btnSupfix.addEventListener('click', function () {
        // Toggle the display of ax image
        toggleReactionImages('block', 'block');
    });

    btnSupRoller.addEventListener('click', function () {
        // Toggle the display of ay image
        toggleReactionImages('none', 'block');
    });

    btnSupWall.addEventListener('click', function () {
        // Toggle the display of ax and ay images
        toggleReactionImages('block', 'block');
    });

    // Get the buttons and the image elements for the second set
    var btnSupfix2 = document.querySelector('.btnSupfix2');
    var btnSupRoller2 = document.querySelector('.btnSupRoller2');
    var btnSupWall2 = document.querySelector('.btnSupWall2');

    // Add event listeners to each button for the second set
    btnSupfix2.addEventListener('click', function () {
        // Toggle the display of bx image
        toggleReactionImages2('block', 'block');
    });

    btnSupRoller2.addEventListener('click', function () {
        // Toggle the display of by image
        toggleReactionImages2('none', 'block');
    });

    btnSupWall2.addEventListener('click', function () {
        // Toggle the display of bx and by images
        toggleReactionImages2('block', 'block');
    });

    // Function to toggle the display of reaction images for the first set
    function toggleReactionImages(axDisplay, ayDisplay) {
        var axImage = reactionDiv.querySelector('.ax');
        var ayImage = reactionDiv.querySelector('.ay');
        axImage.style.display = axDisplay;
        ayImage.style.display = ayDisplay;
    }

    // Function to toggle the display of reaction images for the second set
    function toggleReactionImages2(bxDisplay, byDisplay) {
        var bxImage = reactionDiv.querySelector('.bx');
        var byImage = reactionDiv.querySelector('.by');
        bxImage.style.display = bxDisplay;
        byImage.style.display = byDisplay;
    }
});



