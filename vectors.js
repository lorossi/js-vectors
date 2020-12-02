/*jshint esversion: 6 */

/**
* Simple 2D and 3D vector library made in pure js.
* @version 1.0.0
* @author Lorenzo Rossi - https://www.lorenzoros.si - https://github.com/lorossi/
* @license Attribution 4.0 International (CC BY 4.0)
*/

/**
* Create a vector
* @class
* @param {number} [0] x - The x value
* @param {number} [0] y - The y value
* @param {number} [0] z - The z value
*/
function Vector(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

Vector.prototype = {
  /**
  * Add a vector together
  * @param {Vector} v - The vector to be added
  */
  add: function(v) {
    if (v instanceof Vector) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
    }
  },

  /**
  * Subract a vector
  * @param {Vector} v - The vector to be subracted
  */
  sub: function(v) {
    if (v instanceof Vector) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
    }
  },

  /**
  * Multiply by a vector or a scalar
  * @param {Vector|number} v - The vector or scalar to be multiplied by
  */
  multiply: function(v) {
    if (v instanceof Vector) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
    } else if (typeof(v) === "number") {
      this.x *= v;
      this.y *= v;
      this.z *= v;
    }
  },

  /**
  * Divide by a vector or a scalar
  * @param {Vector|number} v - The vector or scalar to be divided by
  */
  divide: function(v) {
    if (v instanceof Vector) {
      this.x /= v.x;
      this.y /= v.y;
      this.z /= v.z;
    } else if (typeof(v) === "number") {
      this.x /= v;
      this.y /= v;
      this.z /= v;
    }
  },

  /**
  * Multiply by a or a scalar
  * @param {number} s - The scalar to be multiplied by
  */
  multiply_scalar: function(s) {
    this.multiply(s);
  },

  /**
  * Divide by a scalar
  * @param {number} s - The scalar to be divided by
  */
  divide_scalar: function(s) {
    this.divide(s);
  },

  /**
  * Dot function
  * @param {Vector} v - The vector to perform dot operation with
  */
  dot: function(v) {
    if (v instanceof Vector) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
    }
  },

  /**
  * Cross function
  * @param {Vector} v - The vector to perform cross operation with
  */
  cross: function(v) {
    if (v instanceof Vector) {
      this.x = this.y * v.z - this.z * v.y;
      this.y = this.z * v.x - this.x * v.z;
      this.z = this.x * v.y - this.y * v.z;
    }
  },

  /**
  * Distance between vectors
  * @param {Vector} v - The vector whose distance will be calculated
  * @returns {Vector} - Returns a vector containing the distance
  */
  dist: function(v) {
    if (v instanceof Vector) {
      return this.sub(v);
    }
  },

  /**
  * Angle between vectors
  * @param {Vector} v - The vector whose contained angle will be calcolated
  * @returns {number} - Returns a vector containing the angle in radians
  */
  angleBetween: function(v) {
    if (v instanceof Vector) {
      return Math.acos(this.dot(this, v) / (this.mag() * v.mag()));
    }
  },

  /**
  * Check if two vectors are equals
  * @param {Vector} v - The vector that will be compared
  * @returns {boolean} - Returns true or false
  */
  equals: function(v) {
    if (v instanceof Vector) {
      return (this.x == v.x && this.y == v.y && this.z == v.z);
    }
  },

  /**
  * Copy the vector into a new objecy
  * @returns {Vector} - The new copied vector
  */
  copy: function() {
    return new Vector(this.x, this.y, this.z);
  },

  /**
  * Limit the vector magnitude to a set value
  * @param {number} s - The maximum magninute
  */
  limit: function(s) {
    if (typeof(s) === "number") {
      let m = this.mag();
      if (m > s) {
        this.multiply(s / m);
      }
    }
  },

  /**
  * Set the vector magninute
  * @param {number} s - Magninute
  */
  setMag: function(s) {
    if (typeof(s) === "number") {
      let m = this.mag();
      this.multiply(s / m);
    }
  },

  /**
  * Rotate a vector by an angle in randians
  * @param {number} t - The rotation angle
  */
  rotate: function(t) {
    if (typeof(t) === "number") {
      let x2 = Math.cos(t) * this.x - Math.sin(t) * this.y;
      let y2 =  Math.sin(t) * this.x + Math.cos(t) * this.y;
      this.x = x2;
      this.y = y2;
    }
  },

  /* Normalize a vector (its magnitude will be unitary) */
  normalize: function() {
    this.divide_scalar(this.mag());
  },

  /**
  * Invert some (or all) components of the vector
  * @param {boolean} x - The x component
  * @param {boolean} y - The y component
  * @param {boolean} z - The z component
  */
  invert: function(x, y, z) {
    if (x) {
      this.x *= -1;
    }
    if (y) {
      this.y *= -1;
    }
    if (z) {
      this.z *= -1;
    }

    if (!x && !y && !z) {
      this.x *= -1;
      this.y *= -1;
      this.z *= -1;
    }
  },

  /* Invert the x component of the vector */
  invertX: function() {
    this.invert(true, false, false);
  },

  /* Invert the y component of the vector */
  invertY: function() {
    this.invert(false, true, false);
  },

  /* Invert the z component of the vector */
  invertZ: function() {
    this.invert(false, false, true);
  },

  /**
  * Calculate the vector magnitude
  * @returns {number} - The vector magnitude
  */
  mag: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  },

  /**
  * Calculate the vector square magnitude
  * @returns {number} - The vector square magnitude
  */
  magSq: function() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  },

  /**
  * Calculate the vector heading (radians)
  * @returns {number} - The vector heading (radians)
  */
  heading2D: function() {
    return Math.atan2(this.y, this.x);
  },

  /**
  * Return a printable string of the vector
  * @returns {string} - Printable string
  */
  toString: function() {
    return `x: ${this.x}, y: ${this.y}, z: ${this.z}`;
  }
};

/**
* Create a 2D vector from its angle
* @param {number} [0] theta - Theta angle
* @return {Vector} - The new vector
*/
Vector.fromAngle2D = function(theta) {
  theta = theta || 0;
  return new Vector(Math.cos(theta), Math.sin(theta), 0);
};

/**
* Create a 3D vector from its angles
* @param {number} [0] theta - Theta angle
* @param {number} [0] phi - Phi angle
* @return {Vector} - The new vector
*/
Vector.fromAngle3D = function(theta, phi) {
  theta = theta || 0;
  phi = phi || 0;
  return new Vector(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi));
};

/**
* Create a random 2D vector
* @return {Vector} - The new vector
*/
Vector.random2D = function() {
  let theta = Math.random() * 2 * Math.PI;
  return new Vector.fromAngle2D(theta);
};

/**
* Create a random 3D vector
* @return {Vector} - The new vector
*/
Vector.random3D = function() {
  let theta = Math.random() * 2 * Math.PI;
  let phi = Math.random() * 2 * Math.PI;
  return new Vector.fromAngle3D(theta, phi);
};

/**
* Create a vector from an Array
* @example
* // returns Vector(4, 5, 6)
* v = new Vector.fromArray([4, 5, 6])
* @example
* // returns Vector(1, 7, 0)
* v = new Vector.fromArray([1, 7])
* @return {Vector} - The new vector
*/
Vector.fromArray = function(a) {
  return new Vector(a[0], a[1], a[2]);
};

/**
* Create a vector from an object
* // returns Vector(1, 5, 9)
* v = new Vector.fromArray({x: 5, y: 7, z: 9})
* @example
* // returns Vector(3, 0, 4)
* v = new Vector.fromArray({x: 3, z: 4})
* @return {Vector} - The new vector
*/
Vector.fromObject = function(o) {
  return new Vector(o.x, o.y, o.z);
};
