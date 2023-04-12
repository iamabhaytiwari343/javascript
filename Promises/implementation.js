function noop() {} 

function Promise(executor) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
 if (typeof executor !== 'function') {
   throw new TypeError('Promise constructor\'s argument is not a function');
 }
  this._deferredState = 0;
  this._state = 0;
  this._value = null;
  this._deferreds = null;
  if (executor === noop) return;
  doResolve(executor, this);
}

/*
Looks like a simple function with some properties initialized to 0 or null. Here are a few things to notice:
this._state property can have three possible values as described above:

0 - pending
1 - fulfilled with _value
2 - rejected with _value
3 - adopted the state of another promise, _value

Its value is0 (pending) when you create a new promise.
Later doResolve(executor, this) is invoked with executor and promise object.
Let’s move on to the definition of doResolve and see how it’s implemented.


*/