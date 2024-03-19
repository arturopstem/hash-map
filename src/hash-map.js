import LinkedList from './linked-list';

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

  set(key, value) {
    const hashCode = this.#hash(key);
    const bucket = this.#buckets[hashCode];

    if (bucket == null) {
      const newBucket = new LinkedList();
      newBucket.append({ key, value });
      this.#buckets[hashCode] = newBucket;
    } else {
      const index = bucket.findIndex(key);
      if (index) {
        bucket.removeAt(index);
      }
      bucket.append({ key, value });
    }
  }
}

export default HashMap;
