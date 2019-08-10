/**
 * Helper function for URL stats.
 * @param {Object} data
 */
module.exports = data => ({
  shorten: data.stats.shorten,
  get: data.stats.get,
  usage: {
    get: (data.usage ? data.usage.get : []).map(firestoreTimestamp => firestoreTimestamp.toMillis()),
    shorten: (data.usage ? data.usage.shorten : []).map(firestoreTimestamp => firestoreTimestamp.toMillis())
  }
});