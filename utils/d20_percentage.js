module.exports = (toHit, ac) => {
  // calculate minimum number we need to roll to hit
  const minNtoHit = ac - toHit;

  // if its 20 or greater, we can always hit with a nat 20
  if (minNtoHit >= 20) return 5;
  // if its 1 or less we can always miss with nat 1
  if (minNtoHit <= 1) return 95;
  // else
  const percentage = (20 - minNtoHit + 1) * 5;
  return percentage;
};
