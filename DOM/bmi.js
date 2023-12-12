const heightEl = document.getElementById('height')
const weightEl = document.getElementById('height')

const bmi = (weightEl / ((heightEl * heightEl) / 10000)).toFixed(2);
