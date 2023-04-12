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

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (Promise._onHandle) {
    Promise._onHandle(self);
  }
  if (self._state === 0) {
     if (self._deferredState === 0) {
         self._deferredState = 1;
         self._deferreds = deferred;
         return;
    }
    if (self._deferredState === 1) {
       self._deferredState = 2;
       self._deferreds = [self._deferreds, deferred];
       return;
    }
    self._deferreds.push(deferred);
    return;
 }
   handleResolved(self, deferred);
}