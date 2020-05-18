# Hash Table

Implementation of a Hash table in Javascript, which is used to store key-value pairs. 

## Usage

* **Create a hash table:**
```javascript
let hash = new HashTable();
```

* **Insert element:**
  1. Accepts key and a value
  2. Hashes the key
  3. Stores the key-value pair in the hash table array via separate chaining
```javascript
hashTable.set("salmon", "#ff8c69");
```

* **Find an element:**
  1. Accepts a key
  2. Hashes the key
  3. Retrieves the key-value pair in the hash table
  4. If the key isn't found, returns undefined
```javascript
hashTable.get("salmon");
```

* **Delete an element:**
```javascript
hashTable.delete("salmon");
```

* **Get all keys:**
  * Loops through the hash table array and returns an array of keys in the table
```javascript
hashTable.getKeys();
```

* **Get all values:**
  * Loops through the hash table array and returns an array of values in the table
```javascript
hashTable.getValues();
```







