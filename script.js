function startGame() {
    cm = Math.floor(Math.random() * 3);
    input = prompt("choose your weapon");
    pm = parseInt(input);
    if (cm == 0&& pm == 1) {
        alert("You beat Computer with Paper against Rock");
      } elseif ((cm = 0&& pm == 2)) {
        alert("Computer Beat you with Rock");
      } elseif ((cm = 1&& pm == 0)) {
        alert("Computer Beat you With Paper");
      } elseif ((cm = 1&& pm == 2)) {
        alert("You beat Computer with Scissor against Paper");
      } elseif ((cm = 2&& pm == 0)) {
        alert("You beat Computer with Rock against Scissor");
      } elseif ((cm = 2&& pm == 1)) {
        alert("Computer Beat you With Scissor");
      } else {
        alert("It's a tie");
      }
}