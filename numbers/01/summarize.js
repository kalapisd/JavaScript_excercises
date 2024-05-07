export function summarize(...args) {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    if(Number.isInteger(args[i])) {
      if (Number.isSafeInteger(args[i])){
        sum =
        sum += Number(args[i]);
      } else {
        sum = BigInt(sum);
        sum += BigInt(args[i]);
        }
    }
    
    if (!Number.isSafeInteger(Number(sum))) {
        sum = BigInt(sum);
    }
  }
  return sum;
}
