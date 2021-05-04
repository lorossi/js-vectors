## Classes

<dl>
<dt><a href="#Vector">Vector</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#subtract">subtract()</a></dt>
<dd><p>Alias for sub</p>
</dd>
<dt><a href="#multiply">multiply()</a></dt>
<dd><p>Alias for mult</p>
</dd>
</dl>

<a name="Vector"></a>

## Vector
**Kind**: global class  

* [Vector](#Vector)
    * [new Vector([0], [0], [0])](#new_Vector_new)
    * _instance_
        * [.add(v)](#Vector+add) ⇒ [<code>Vector</code>](#Vector)
        * [.sub(v)](#Vector+sub) ⇒ [<code>Vector</code>](#Vector)
        * [.mult(v)](#Vector+mult) ⇒ [<code>Vector</code>](#Vector)
        * [.divide(v)](#Vector+divide) ⇒ [<code>Vector</code>](#Vector)
        * [.multiplyScalar(s)](#Vector+multiplyScalar) ⇒ [<code>Vector</code>](#Vector)
        * [.divideScalar(s)](#Vector+divideScalar) ⇒ [<code>Vector</code>](#Vector)
        * [.min()](#Vector+min) ⇒ <code>number</code>
        * [.max()](#Vector+max) ⇒ <code>number</code>
        * [.dot(v)](#Vector+dot) ⇒ [<code>Vector</code>](#Vector)
        * [.cross(v)](#Vector+cross) ⇒ [<code>Vector</code>](#Vector)
        * [.distSq(v)](#Vector+distSq) ⇒ <code>number</code>
        * [.dist(v)](#Vector+dist) ⇒ <code>number</code>
        * [.angleBetween(v)](#Vector+angleBetween) ⇒ <code>number</code>
        * [.equals(v)](#Vector+equals) ⇒ <code>boolean</code>
        * [.copy()](#Vector+copy) ⇒ [<code>Vector</code>](#Vector)
        * [.limit(s)](#Vector+limit) ⇒ [<code>Vector</code>](#Vector)
        * [.setMag(s)](#Vector+setMag) ⇒ [<code>Vector</code>](#Vector)
        * [.rotate(t)](#Vector+rotate) ⇒ [<code>Vector</code>](#Vector)
        * [.normalize()](#Vector+normalize) ⇒ [<code>Vector</code>](#Vector)
        * [.invert(x, y, z)](#Vector+invert) ⇒ [<code>Vector</code>](#Vector)
        * [.invertX()](#Vector+invertX) ⇒ [<code>Vector</code>](#Vector)
        * [.invertY()](#Vector+invertY) ⇒ [<code>Vector</code>](#Vector)
        * [.invertZ()](#Vector+invertZ) ⇒ [<code>Vector</code>](#Vector)
        * [.mag()](#Vector+mag) ⇒ <code>number</code>
        * [.magSq()](#Vector+magSq) ⇒ <code>number</code>
        * [.heading2D()](#Vector+heading2D) ⇒ <code>number</code>
        * [.toString()](#Vector+toString) ⇒ <code>string</code>
    * _static_
        * [.fromAngle2D([0])](#Vector.fromAngle2D) ⇒ [<code>Vector</code>](#Vector)
        * [.fromAngle3D([0], [0])](#Vector.fromAngle3D) ⇒ [<code>Vector</code>](#Vector)
        * [.random2D()](#Vector.random2D) ⇒ [<code>Vector</code>](#Vector)
        * [.random3D()](#Vector.random3D) ⇒ [<code>Vector</code>](#Vector)
        * [.fromArray()](#Vector.fromArray) ⇒ [<code>Vector</code>](#Vector)
        * [.fromObject()](#Vector.fromObject) ⇒ [<code>Vector</code>](#Vector)

<a name="new_Vector_new"></a>

### new Vector([0], [0], [0])
Create a vector

**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| [0] | <code>number</code> | x - The x value |
| [0] | <code>number</code> | y - The y value |
| [0] | <code>number</code> | z - The z value |

**Example**  
```js
v1 = new Vector(1, 4, -3);
```
**Example**  
```js
v2 = new Vector(3, -5);
```
<a name="Vector+add"></a>

### vector.add(v) ⇒ [<code>Vector</code>](#Vector)
Add a vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector to be added |

**Example**  
```js
v1 = new Vector(1, -4, 12);v2 = new Vector(2, 9, -3);v1.add(v2);// v1 = Vector(3, 5, 9);
```
<a name="Vector+sub"></a>

### vector.sub(v) ⇒ [<code>Vector</code>](#Vector)
Subract a vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector to be subracted |

**Example**  
```js
v1 = new Vector(10, -3, 12);v2 = new Vector(7, -8, 3);v1.sub(v2);// v1 = Vector(3, 5, 9);
```
<a name="Vector+mult"></a>

### vector.mult(v) ⇒ [<code>Vector</code>](#Vector)
Multiply by a vector or a scalar

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) \| <code>number</code> | The vector or scalar to be multiplied by |

**Example**  
```js
v1 = new Vector(1, 2, 3);v2 = new Vector(2, 5, 0);v1.mult(v2);// v1 = Vector(2, 10, 0);
```
**Example**  
```js
v1 = new Vector(7, 4, 2);v1.mult(3);// v1 = Vector(21, 12, 6);
```
<a name="Vector+divide"></a>

### vector.divide(v) ⇒ [<code>Vector</code>](#Vector)
Divide by a vector or a scalar

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vectorv1 = new Vector(4, 12, 9);v2 = new Vector(4, 6, 3);v1.divide(v2);// v1 = Vector(1, 2, 3);  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) \| <code>number</code> | The vector or scalar to be divided by |

**Example**  
```js
v1 = new Vector(9, 3, 6);v1.divide(3);// v1 = Vector(3, 1, 2);
```
<a name="Vector+multiplyScalar"></a>

### vector.multiplyScalar(s) ⇒ [<code>Vector</code>](#Vector)
Multiply by a  scalar

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>number</code> | The scalar to be multiplied by |

**Example**  
```js
v1 = new Vector(7, 4, 2);v1.multiplyScalar(3);// v1 = Vector(21, 12, 6);
```
<a name="Vector+divideScalar"></a>

### vector.divideScalar(s) ⇒ [<code>Vector</code>](#Vector)
Divide by a scalar

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>number</code> | The scalar to be divided by |

**Example**  
```js
v1 = new Vector(9, 3, 6);v1.divideScalar(3);// v1 = Vector(3, 1, 2);
```
<a name="Vector+min"></a>

### vector.min() ⇒ <code>number</code>
Return minimum component of a vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>number</code> - The smallest component  
**Example**  
```js
v1 = new Vector(3, -8, 12);v1.min();// -8
```
<a name="Vector+max"></a>

### vector.max() ⇒ <code>number</code>
Return maximum component of a vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>number</code> - The biggest component  
**Example**  
```js
v1 = new Vector(3, -8, 12);v1.max();// -12
```
<a name="Vector+dot"></a>

### vector.dot(v) ⇒ [<code>Vector</code>](#Vector)
Dot function

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector to perform dot operation with |

**Example**  
```js
v1 = new Vector(1, 4, 3);v2 = new Vector(2, -6, 9);v1.dot(v2);// return 5;
```
<a name="Vector+cross"></a>

### vector.cross(v) ⇒ [<code>Vector</code>](#Vector)
Cross function

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector to perform cross operation with |

**Example**  
```js
v1 = new Vector(1, 4, 3);v2 = new Vector(2, -6, 9);v1.cross(v2);// v1 = Vector(54, -3, -14);
```
<a name="Vector+distSq"></a>

### vector.distSq(v) ⇒ <code>number</code>
Square distance between vectors

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>number</code> - Return a number containing the square distance  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector whose distance will be calculated |

**Example**  
```js
v1 = new Vector(1, 4, -3);v2 = new Vector(6, -6, 7);v1.distSq(v2);// return 225
```
<a name="Vector+dist"></a>

### vector.dist(v) ⇒ <code>number</code>
Distance between vectors

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>number</code> - Return a number containing the distance  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector whose distance will be calculated |

**Example**  
```js
v1 = new Vector(1, 4, -3);v2 = new Vector(6, -6, 7);v1.dist(v2);// return 15
```
<a name="Vector+angleBetween"></a>

### vector.angleBetween(v) ⇒ <code>number</code>
Angle between vectors

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>number</code> - Return a vector containing the angle in radians  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector whose contained angle will be calcolated |

**Example**  
```js
v1 = new Vector(1, 4, -3);v2 = new Vector(6, -6, 7);v1.angleBetween(v2);// return 1.0888019833827516
```
<a name="Vector+equals"></a>

### vector.equals(v) ⇒ <code>boolean</code>
Check if two vectors are equals

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>boolean</code> - Return true or false  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector that will be compared |

**Example**  
```js
v1 = new Vector(1, 4, -3);v2 = new Vector(6, -6, 7);v1.equals(v2);// return false;
```
<a name="Vector+copy"></a>

### vector.copy() ⇒ [<code>Vector</code>](#Vector)
Copy the vector into a new objecy

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - The new copied vector  
**Example**  
```js
v1 = new Vector(8, 144, -32);v2 = v1.copy();// v2 = Vector(8, 144, -32);
```
<a name="Vector+limit"></a>

### vector.limit(s) ⇒ [<code>Vector</code>](#Vector)
Limit the vector magnitude to a set value

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>number</code> | The maximum magninute |

**Example**  
```js
v1 = new Vector(2, 0, 2);v1.limit(2);// v1 = Vector(1.414213562373095, 0, 1.414213562373095);
```
<a name="Vector+setMag"></a>

### vector.setMag(s) ⇒ [<code>Vector</code>](#Vector)
Set the vector magnitude

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>number</code> | Magnitude |

**Example**  
```js
v1 = new Vector(2, 0, 2);v1.setMag(4);// v1 = Vector(2.82842712474619, 0, 2.82842712474619);
```
<a name="Vector+rotate"></a>

### vector.rotate(t) ⇒ [<code>Vector</code>](#Vector)
Rotate a vector by an angle in randians

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The rotation angle |

**Example**  
```js
v1 = new Vector(2, 1);v1.rotate(Math.PI);// v1 = Vector(-2, -1, 0);
```
<a name="Vector+normalize"></a>

### vector.normalize() ⇒ [<code>Vector</code>](#Vector)
Normalize a vector (its magnitude will be unitary)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  
**Example**  
```js
v1 = new Vector(5, 2, -4);v1.normalize();// v1 = Vector(0.7453559924999299, 0.29814239699997197, -0.5962847939999439);
```
<a name="Vector+invert"></a>

### vector.invert(x, y, z) ⇒ [<code>Vector</code>](#Vector)
Invert some (or all) components of the vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>boolean</code> | The x component |
| y | <code>boolean</code> | The y component |
| z | <code>boolean</code> | The z component |

**Example**  
```js
v1 = new Vector(4, -5, 7);v1.invert(true, true, true);// v1 = Vector(-4, 5, -7);
```
**Example**  
```js
v2 = new Vector(4, -1, -3);v2.invert(true, false);// v2 = Vector(-4, -1, -3);
```
<a name="Vector+invertX"></a>

### vector.invertX() ⇒ [<code>Vector</code>](#Vector)
Invert the x component of the vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  
**Example**  
```js
v1 = new Vector(4, -5, 7);v1.invertX();// v1 = Vector(-4, -5, 7);
```
<a name="Vector+invertY"></a>

### vector.invertY() ⇒ [<code>Vector</code>](#Vector)
Invert the y component of the vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  
**Example**  
```js
v1 = new Vector(4, -5, 7);v1.invertY();// v1 = Vector(4, 5, 7);
```
<a name="Vector+invertZ"></a>

### vector.invertZ() ⇒ [<code>Vector</code>](#Vector)
Invert the z component of the vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  
**Example**  
```js
v1 = new Vector(4, -5, 7);v1.invertZ();// v1 = Vector(4, -5, -7);
```
<a name="Vector+mag"></a>

### vector.mag() ⇒ <code>number</code>
Calculate the vector magnitude

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>number</code> - - The vector magnitude  
**Example**  
```js
v1 = new Vector(6, -2, -1);v1.mag();// return 6.4031242374328485;
```
<a name="Vector+magSq"></a>

### vector.magSq() ⇒ <code>number</code>
Calculate the vector square magnitude

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>number</code> - The vector square magnitude  
**Example**  
```js
v1 = new Vector(6, -2, -1);v1.magSq();// return 41;
```
<a name="Vector+heading2D"></a>

### vector.heading2D() ⇒ <code>number</code>
Calculate the vector heading (radians) - only for 2D vectors

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>number</code> - The vector heading (radians)  
**Example**  
```js
v1 = new Vector(3, 3);v1.heading2D();// return 0.7853981633974483
```
<a name="Vector+toString"></a>

### vector.toString() ⇒ <code>string</code>
Return a printable string of the vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>string</code> - Printable string  
**Example**  
```js
v1 = new Vector(3, 3, -4);v1.toString();// return "x: 3, y: 3, z: -4"
```
<a name="Vector.fromAngle2D"></a>

### Vector.fromAngle2D([0]) ⇒ [<code>Vector</code>](#Vector)
Create a 2D vector from its angle

**Kind**: static method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| [0] | <code>number</code> | theta - Theta angle (radians) |

**Example**  
```js
v1 = new Vector.fromAngle2D(2.42);// v1 = Vector(-0.7507546047254909,0.6605812012792007, 0);
```
<a name="Vector.fromAngle3D"></a>

### Vector.fromAngle3D([0], [0]) ⇒ [<code>Vector</code>](#Vector)
Create a 3D vector from its angles

**Kind**: static method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| [0] | <code>number</code> | theta - Theta angle (radians) |
| [0] | <code>number</code> | phi - Phi angle (radians) |

**Example**  
```js
v1 = new Vector.fromAngle2D(1.33, -2.44);// v1 = Vector(-0.1821516349441893, -0.6454349983343708, -0.7417778945292652);
```
<a name="Vector.random2D"></a>

### Vector.random2D() ⇒ [<code>Vector</code>](#Vector)
Create a random 2D vector

**Kind**: static method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  
**Example**  
```js
v1 = new Vector.random2D();// v1 = Vector(0.2090564102081952, -0.977903582849998, 0);
```
<a name="Vector.random3D"></a>

### Vector.random3D() ⇒ [<code>Vector</code>](#Vector)
Create a random 3D vector

**Kind**: static method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  
**Example**  
```js
v1 = new Vector.random3D();// v1 = Vector(-0.7651693875628326, -0.43066633476756877, 0.47858365667309205);
```
<a name="Vector.fromArray"></a>

### Vector.fromArray() ⇒ [<code>Vector</code>](#Vector)
Create a vector from an Array

**Kind**: static method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  
**Example**  
```js
// return Vector(4, 5, 6)v = new Vector.fromArray([4, 5, 6])
```
**Example**  
```js
// return Vector(1, 7, 0)v = new Vector.fromArray([1, 7])
```
<a name="Vector.fromObject"></a>

### Vector.fromObject() ⇒ [<code>Vector</code>](#Vector)
Create a vector from an object// return Vector(1, 5, 9)v = new Vector.fromArray({x: 5, y: 7, z: 9})

**Kind**: static method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  
**Example**  
```js
// return Vector(3, 0, 4)v = new Vector.fromArray({x: 3, z: 4})
```
<a name="subtract"></a>

## subtract()
Alias for sub

**Kind**: global function  
<a name="multiply"></a>

## multiply()
Alias for mult

**Kind**: global function  
