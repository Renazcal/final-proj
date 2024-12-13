
function toggleKey() {
    var details = document.getElementById("keys");
    if (details.style.display === "none") {
        details.style.display = "block"; 
    } else {
        details.style.display = "none";
    }
}





function lightMode() {
    
    let mode;

    
    while (true) {
        mode = prompt("What mode would you prefer? Light or Dark?").toLowerCase();
        
        
        if (mode === "light" || mode === "dark") {
            break; 
        } else {
            alert("Invalid input. Please enter 'Light' or 'Dark'.");
        }
    }

    
    const colors = {
        light: ["white", "black"],  
        dark: ["black", "white"]    
    };

    
    document.body.style.backgroundColor = colors[mode][0];
    document.body.style.color = colors[mode][1];

    
    document.getElementById("toggleBtn").addEventListener("click", function() {
       
        mode = (mode === "light") ? "dark" : "light"; 
        document.body.style.backgroundColor = colors[mode][0];
        document.body.style.color = colors[mode][1];
    });
}
