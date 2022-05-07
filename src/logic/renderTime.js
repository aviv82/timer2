export const renderTime = (num)=> {
  const secs = num % 60;
  let mins = (num - secs)/60 < 0 ? 0 : (num - secs)/60
  return {minutes: mins, seconds: secs}
  }