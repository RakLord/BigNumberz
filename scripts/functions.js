
export function headerText(text){
    let header = $("#header");
    let headerWidth = header.width();
    
    let movingDiv = $("<div><p>"+text+"</p></div>");
    movingDiv.css({
        "position": "absolute",
    })
    movingDiv.appendTo(header);

    movingDiv.animate({"left": headerWidth + 100}, {
        duration: 20000,
        easing: "linear",
        complete: function() {
            movingDiv.remove();
          }
    });

    console.log(text);
}

export function formatValue(value) {

    if (Math.abs(value.e - 2) < 4) {
        return (value.mantissa * Math.pow(10, value.e))
    }
    return (value.mantissa + "e" + value.e)
}