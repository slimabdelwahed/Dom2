/**document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded");

    var colorBox = document.getElementById("color-box");
    const button = document.getElementById("change-color-btn");
});**/
   

 /**one = "rgb(255, 0, 0)";
 two = "rgb(0, 255, 0)"; 
 three = "rgb(0, 0, 0)"; 
var colorBox = document.getElementById(".color-box");
const button = document.getElementById("change-color-btn");
    button.addEventListener('click', function() {
       
        const one = "rgb(255, 0, 0)";   
        colorBox.style.Color = 'one'; 
        console.log('click button');
    });**/

    document.addEventListener('DOMContentLoaded', function() {
        let one = "rgb(255, 0, 0)";
        let two = "rgb(0, 255, 0)";
        let three = "rgb(0, 0, 0)";
    
        const colorBox = document.getElementById("color-box");
        const changeColorBtn = document.getElementById("change-color-btn");
    
        changeColorBtn.addEventListener('click', function() {
            const colors = [one, two, three];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            colorBox.style.backgroundColor = randomColor;
            console.log('Button clicked, color changed to:', randomColor);
        });
    });
