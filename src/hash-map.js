class HashMap {
  #buckets;

  constructor(numberOfBuckets = 16) {
    this.#buckets = Array(numberOfBuckets).fill(null);
  }
}

export default HashMap;
