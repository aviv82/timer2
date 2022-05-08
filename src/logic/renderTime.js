export const renderTime = (num)=> {
  const secs = (('0' + (num % 60)).slice(-2));
  const minCalc = (num - secs)/60 < 0 ? 0 : (num - secs)/60
  const mins = ('0' + minCalc).slice(-2);
  return {minutes: mins, seconds: secs}
  }