var button = document.getElementById("button");
var dark_theme = false

function change_background(){
    if(dark_theme == false){
        dark_theme = true
        document.body.style.background = "red"
        button.style.background = "green"
        button.style.color = "black"    
    }else{
        dark_theme = false
        document.body.style.background = "green"
        button.style.background = "red"
        button.style.color = "black"  
    }
}