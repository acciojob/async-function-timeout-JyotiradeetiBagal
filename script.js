// JavaScript Code

const delayMessage = (message, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};

document.getElementById("btn").addEventListener("click", async (event) => {
  event.preventDefault(); 
	
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value, 10);
  const outputDiv = document.getElementById("output");

  outputDiv.textContent = "";

  const message = await delayMessage(text, delay);
  outputDiv.textContent = message;
});
