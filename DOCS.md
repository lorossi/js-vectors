<a name="Vector"></a>

## Vector
**Kind**: global class  

* [Vector](#Vector)
    * [new Vector([0], [0], [0])](#new_Vector_new)
    * _instance_
        * [.add(v)](#Vector+add)
        * [.sub(v)](#Vector+sub)
        * [.multiply(v)](#Vector+multiply)
        * [.divide(v)](#Vector+divide)
        * [.multiply_scalar(s)](#Vector+multiply_scalar)
        * [.divide_scalar(s)](#Vector+divide_scalar)
        * [.dot(v)](#Vector+dot)
        * [.cross(v)](#Vector+cross)
        * [.dist(v)](#Vector+dist) ⇒ [<code>Vector</code>](#Vector)
        * [.angleBetween(v)](#Vector+angleBetween) ⇒ <code>number</code>
        * [.equals(v)](#Vector+equals) ⇒ <code>boolean</code>
        * [.copy()](#Vector+copy) ⇒ [<code>Vector</code>](#Vector)
        * [.limit(s)](#Vector+limit)
        * [.setMag(s)](#Vector+setMag)
        * [.rotate(t)](#Vector+rotate)
        * [.invert(x, y, z)](#Vector+invert)
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


| Param | Type | Description |
| --- | --- | --- |
| [0] | <code>number</code> | x - The x value |
| [0] | <code>number</code> | y - The y value |
| [0] | <code>number</code> | z - The z value |

<a name="Vector+add"></a>

### vector.add(v)
Add a vector together

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector to be added |

<a name="Vector+sub"></a>

### vector.sub(v)
Subract a vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector to be subracted |

<a name="Vector+multiply"></a>

### vector.multiply(v)
Multiply by a vector or a scalar

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) \| <code>number</code> | The vector or scalar to be multiplied by |

<a name="Vector+divide"></a>

### vector.divide(v)
Divide by a vector or a scalar

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) \| <code>number</code> | The vector or scalar to be divided by |

<a name="Vector+multiply_scalar"></a>

### vector.multiply\_scalar(s)
Multiply by a or a scalar

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>number</code> | The scalar to be multiplied by |

<a name="Vector+divide_scalar"></a>

### vector.divide\_scalar(s)
Divide by a scalar

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>number</code> | The scalar to be divided by |

<a name="Vector+dot"></a>

### vector.dot(v)
Dot function

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector to perform dot operation with |

<a name="Vector+cross"></a>

### vector.cross(v)
Cross function

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector to perform cross operation with |

<a name="Vector+dist"></a>

### vector.dist(v) ⇒ [<code>Vector</code>](#Vector)
Distance between vectors

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - Returns a vector containing the distance  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector whose distance will be calculated |

<a name="Vector+angleBetween"></a>

### vector.angleBetween(v) ⇒ <code>number</code>
Angle between vectors

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>number</code> - - Returns a vector containing the angle in radians  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector whose contained angle will be calcolated |

<a name="Vector+equals"></a>

### vector.equals(v) ⇒ <code>boolean</code>
Check if two vectors are equals

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>boolean</code> - - Returns true or false  

| Param | Type | Description |
| --- | --- | --- |
| v | [<code>Vector</code>](#Vector) | The vector that will be compared |

<a name="Vector+copy"></a>

### vector.copy() ⇒ [<code>Vector</code>](#Vector)
Copy the vector into a new objecy

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new copied vector  
<a name="Vector+limit"></a>

### vector.limit(s)
Limit the vector magnitude to a set value

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>number</code> | The maximum magninute |

<a name="Vector+setMag"></a>

### vector.setMag(s)
Set the vector magninute

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>number</code> | Magninute |

<a name="Vector+rotate"></a>

### vector.rotate(t)
Rotate a vector by an angle in randians

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | The rotation angle |

<a name="Vector+invert"></a>

### vector.invert(x, y, z)
Invert some (or all) components of the vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>boolean</code> | The x component |
| y | <code>boolean</code> | The y component |
| z | <code>boolean</code> | The z component |

<a name="Vector+mag"></a>

### vector.mag() ⇒ <code>number</code>
Calculate the vector magnitude

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>number</code> - - The vector magnitude  
<a name="Vector+magSq"></a>

### vector.magSq() ⇒ <code>number</code>
Calculate the vector square magnitude

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>number</code> - - The vector square magnitude  
<a name="Vector+heading2D"></a>

### vector.heading2D() ⇒ <code>number</code>
Calculate the vector heading (radians)

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>number</code> - - The vector heading (radians)  
<a name="Vector+toString"></a>

### vector.toString() ⇒ <code>string</code>
Return a printable string of the vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
**Returns**: <code>string</code> - - Printable string  
<a name="Vector.fromAngle2D"></a>

### Vector.fromAngle2D([0]) ⇒ [<code>Vector</code>](#Vector)
Create a 2D vector from its angle

**Kind**: static method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| [0] | <code>number</code> | theta - Theta angle |

<a name="Vector.fromAngle3D"></a>

### Vector.fromAngle3D([0], [0]) ⇒ [<code>Vector</code>](#Vector)
Create a 3D vector from its angles

**Kind**: static method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  

| Param | Type | Description |
| --- | --- | --- |
| [0] | <code>number</code> | theta - Theta angle |
| [0] | <code>number</code> | phi - Phi angle |

<a name="Vector.random2D"></a>

### Vector.random2D() ⇒ [<code>Vector</code>](#Vector)
Create a random 2D vector

**Kind**: static method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  
<a name="Vector.random3D"></a>

### Vector.random3D() ⇒ [<code>Vector</code>](#Vector)
Create a random 3D vector

**Kind**: static method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  
<a name="Vector.fromArray"></a>

### Vector.fromArray() ⇒ [<code>Vector</code>](#Vector)
Create a vector from an Array

**Kind**: static method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  
**Example**  
```js
// returns Vector(4, 5, 6)v = new Vector.fromArray([4, 5, 6])
```
**Example**  
```js
// returns Vector(1, 7, 0)v = new Vector.fromArray([1, 7])
```
<a name="Vector.fromObject"></a>

### Vector.fromObject() ⇒ [<code>Vector</code>](#Vector)
Create a vector from an object// returns Vector(1, 5, 9)v = new Vector.fromArray({x: 5, y: 7, z: 9})

**Kind**: static method of [<code>Vector</code>](#Vector)  
**Returns**: [<code>Vector</code>](#Vector) - - The new vector  
**Example**  
```js
// returns Vector(3, 0, 4)v = new Vector.fromArray({x: 3, z: 4})
```
