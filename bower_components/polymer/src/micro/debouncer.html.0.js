

  Polymer.Base._addFeature({

    _setupDebouncers: function() {
      this._debouncers = {};
    },

    /**
     * Debounce signals.
     *
     * Call `debounce` to collapse multiple requests for a named task into
     * one invocation which is made after the wait time has elapsed with
     * no new request.
     *
     *     debouncedClickAction: function(e) {
     *       // will not call `processClick` more than once per 100ms
     *       this.debounce('click', function() {
     *        this.processClick;
     *       }, 100);
     *     }
     *
     * @method debounce
     * @param String {String} jobName A string to indentify the debounce job.
     * @param Function {Function} callback A function that is called (with `this` context) when the wait time elapses.
     * @param Number {Number} wait Time in milliseconds (ms) after the last signal that must elapse before invoking `callback`
     * @type Handle
     */
    debounce: function(jobName, callback, wait) {
      this._debouncers[jobName] = Polymer.Debounce.call(this,
        this._debouncers[jobName], callback, wait);
    },

    isDebouncerActive: function(jobName) {
      var debouncer = this._debouncers[jobName];
      return debouncer && debouncer.finish;
    },

    flushDebouncer: function(jobName) {
      var debouncer = this._debouncers[jobName];
      if (debouncer) {
        debouncer.complete();
      }
    }

  });

