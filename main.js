canvas=document.getElementById("MYCANVAS");
ctx= canvas.getContext("2d");


color = "white";

ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.arc(400,400,40,0,2*Math.PI);
ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "red";
    ctx.arc(500,400,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";
    ctx.arc(300,400,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "orange";
    ctx.arc(350,445,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "green";
    ctx.arc(450,445,40,0,2*Math.PI);
    ctx.stroke();



