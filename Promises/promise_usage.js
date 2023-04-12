function handleResolved(self, deferred) {
   asap(function() { // asap is external lib used to execute cb immediately
   var cb = self._state === 1 ? deferred.onFulfilled :     deferred.onRejected;
   if (cb === null) {
       if (self._state === 1) {
           resolve(deferred.promise, self._value);
       } else {
         reject(deferred.promise, self._value);
       }
      return;
  }
  var ret = tryCallOne(cb, self._value);
    if (ret === IS_ERROR) {
       reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}