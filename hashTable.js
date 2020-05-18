class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        let hashedKey = this._hash(key);
        if (!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = [];
        }
        this.keyMap[hashedKey].push([key, value]);
    }

    get(key) {
        let hashedKey = this._hash(key);
        if (this.keyMap[hashedKey]) {
            let res = this.keyMap[hashedKey].find((val) => {
                return val[0] == key;
            });

            return res[1];
        }

        return null;
    }

    delete (key) {
        for (let i  = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (this.keyMap[i][j][0] === key) {
                        return this.keyMap[i].splice(j, 1);
                    }
                }
            }
        }
    }

    getKeys () {
        let keys = [];
        this.keyMap.forEach((item) => {
            for (let i = 0; i < item.length; i++) {
                if (!keys.includes(item[i][0])) {
                    keys.push(item[i][0]);
                }
            }
        });

        return keys;
    }

    getValues () {
        let values = [];
        this.keyMap.forEach((item) => {
            for (let i = 0; i < item.length; i++) {
                if (!values.includes(item[i][1])) {
                    values.push(item[i][1]);
                }
            }
        });

        return values;
    }
}

// CREATE HASHTABLE
let hashTable = new HashTable(11);

// ADD VALUES
hashTable.set("salmon", "#ff8c69");
hashTable.set("maroon", "#800000");
hashTable.set("yellow", "#ffff00");
hashTable.set("olive", "#808000");
hashTable.set("salmon", "#fa8072");
hashTable.set("lightcoral", "#f08080");
hashTable.set("mediumvioletred", "#c71585");
hashTable.set("plum", "dda0dd");
hashTable.set("purple", "dda0dd");

// FIND A VALUE
hashTable.get("maroon");

// REMOVE A VALUE
hashTable.delete("lightcoral");

// GET ALL KEYS
hashTable.getKeys();

// GET ALL VALUES
hashTable.getValues();
