function currentTime() {
  const hours = (new Date().getHours() < 10 ? '0' : '') + new Date().getHours();
  const minutes = (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes();
  return `The time is ${hours}:${minutes}`;
}

console.log(currentTime());