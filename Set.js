function MySet() {
  var collection = [];
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };
  this.values = function () {
    return collection;
  };
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  this.union = function (otherSet) {
    var unionSet = new Set();
    var FirstSet = this.values();
    var SecondSet = otherSet.values();
    FirstSet.forEach(function (e) {
      unionSet.add(e);
    });
    SecondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  this.intersection = function (otherSet) {
    var intersectionSet = new MySet();
    var FirstSet = this.values();
    FirstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  this.difference = function (otherSet) {
    var differenceSet = new MySet();
    var FirstSet = this.values();
    FirstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  this.subSet = function (otherSet) {
    var FirstSet = this.values();
    return FirstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}
var SetA = new MySet();
var SetB = new MySet();
SetA.add("a");
SetB.add("b");
SetB.add("c");
SetB.add("a");
SetB.add("a");
console.log(SetA.subSet(SetB));
console.log(SetA.intersection(SetB).values());
console.log(SetA.difference(SetB).values());

var SetC = new MySet();
var SetD = new MySet();
SetC.add("a");
SetD.add("a");
SetD.add("b");
SetD.add("c");
SetD.add("D");
console.log(SetD.values());
SetD.remove("a");
console.log(SetD.has("a"));
console.log(SetD.add("d"));
console.log(SetC.difference(SetD).values());
