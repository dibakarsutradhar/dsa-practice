// const performance = require('perf_hooks').performance;

const nemo = ['nemo'];

const fishColony = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

const large = new Array(100).fill('nemo');

function findNemo(array) {
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if(array[i] === 'nemo') {
      console.log('Found Nemo');
    }
  }
  // let t1 = performance.now();
  console.log('Performance = ' + (t1 - t0) + ' milliseconds');
};

findNemo(large); // O(n) --> Linear Time