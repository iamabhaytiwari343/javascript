//JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

var promise = new Promise(function(resolve, reject) {
  // do thing, then…

  if (/* everything worked */) {
    resolve("See, it worked!");
  }
  else {
    reject(Error("It broke"));
  }
});