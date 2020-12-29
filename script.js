function currentTime24hrs() {
  const date = new Date();
  const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
  const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  return `${hours}:${minutes}`;
}

const to12hrs = {
  13: 1, 
  14: 2, 
  15: 3, 
  16: 4, 
  17: 5, 
  18: 6, 
  19: 7, 
  20: 8, 
  21: 9, 
  22: 10, 
  23: 11, 
  0: 12
};

function currentTime12hrs() {
  const date = new Date();
  let hours = date.getHours();
  const suffix = hours < 12 ? 'am' : 'pm';
  
  if (to12hrs[hours]) { hours = to12hrs[hours]; }
  
  const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  return `${hours}:${minutes}${suffix}`;
}
