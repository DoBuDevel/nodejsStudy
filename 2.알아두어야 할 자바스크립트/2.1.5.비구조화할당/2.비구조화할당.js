var candyMachine = {
  status: {
    name: "node",
    count: 5
  },
  getCandy: function() {
    this.status.count--;
    return this.status.count;
  }
};

const {
  getCandy,
  status: { count }
} = candyMachine;

console.log(getCandy);
console.log(count);

var array = ["nodejs", {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

console.log(node);
