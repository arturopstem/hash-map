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

  get(key) {
    const hashCode = this.#hash(key);
    const bucket = this.#buckets[hashCode];

    if (bucket == null) {
      return null;
    }
    if (bucket.size() === 0) {
      return null;
    }
    const index = bucket.findIndex(key);
    if (index) {
      const node = bucket.at(index);
      return node.data.value;
    }
    return null;
  }

  has(key) {
    const hashCode = this.#hash(key);
    const bucket = this.#buckets[hashCode];

    if (bucket == null) {
      return false;
    }
    if (bucket.size() === 0) {
      return false;
    }
    return bucket.contains(key);
  }
}

export default HashMap;
