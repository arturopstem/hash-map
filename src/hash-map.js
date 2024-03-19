class HashMap {
  #buckets;

  constructor(numberOfBuckets = 16) {
    this.#buckets = Array(numberOfBuckets).fill(null);
  }

  #hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    const numberOfBuckets = this.#buckets.length;

    for (let i = 0; i < key.length; i += 1) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= numberOfBuckets;
    }

    return hashCode;
  }
}

export default HashMap;
