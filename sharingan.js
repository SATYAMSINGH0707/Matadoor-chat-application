const ball = document.querySelector(".toogle-ball");
const items = document.querySelectorAll(
  "body , .toogle ,.button ,.container ,h1 ,#messageInp ,.img "
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
  
});


function close()
{
    document.getElementById("rengoku").style.zIndex = "-10000";
    document.getElementById("close").style.filter = "brightness(250%)";
}