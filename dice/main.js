console.log("hey");

const button = document.getElementById("dice");
console.log(button);
button.onclick = () => {
  button.innerHTML = Math.ceil(Math.random() * 10);
};
