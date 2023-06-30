
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
