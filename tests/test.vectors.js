mocha.setup("bdd");

const TESTS_NUM = 1000;
const EPS = 1e-6;

const magnitude_sq = (v) => v.x * v.x + v.y * v.y + v.z * v.z;
const magnitude = (v) => Math.sqrt(magnitude_sq(v));
const heading = (v) => Math.atan2(v.y, v.x);
const dot = (v1, v2) => v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
const cross = (v1, v2) => {
  const x = v1.y * v2.z - v1.z * v2.y;
  const y = v1.z * v2.x - v1.x * v2.z;
  const z = v1.x * v2.y - v1.y * v2.x;

  return new Vector(x, y, z);
};
const angle_between = (v1, v2) =>
  Math.acos(dot(v1, v2) / (magnitude(v1) * magnitude(v2)));
const equals = (v1, v2) => {
  return (
    Math.abs(v1.x - v2.x) < EPS &&
    Math.abs(v1.y - v2.y) < EPS &&
    Math.abs(v1.z - v2.z) < EPS
  );
};
const rotate = (v, angle) => {
  const x = v.x * Math.cos(angle) - v.y * Math.sin(angle);
  const y = v.x * Math.sin(angle) + v.y * Math.cos(angle);
  return new Vector(x, y, v.z);
};
const polar_to_cartesian = (r, theta, phi = 0) => {
  const x = r * Math.sin(theta) * Math.cos(phi);
  const y = r * Math.sin(theta) * Math.sin(phi);
  const z = r * Math.cos(theta);
  return { x, y, z };
};

describe("Test Vectors", () => {
  it("should be able to generate 2D and 3D vectors", () => {
    // 2D
    const v = new Vector(1, 2);
    chai.expect(v.x).to.equal(1);
    chai.expect(v.y).to.equal(2);
    chai.expect(v.z).to.equal(0);

    // 3D
    const w = new Vector(3, 4, 5);
    chai.expect(w.x).to.equal(3);
    chai.expect(w.y).to.equal(4);
    chai.expect(w.z).to.equal(5);
  });

  it("should be able to generate random 2D and 3D vectors", () => {
    for (let i = 0; i < TESTS_NUM; i++) {
      const v = Vector.random2D();
      chai.expect(v.x).to.be.within(-1, 1);
      chai.expect(v.y).to.be.within(-1, 1);
      chai.expect(v.z).to.equal(0);

      chai.expect(magnitude(v)).to.be.closeTo(1, EPS);
      chai.expect(v.heading2D()).to.be.within(-Math.PI, Math.PI);

      const w = Vector.random3D();
      chai.expect(w.x).to.be.within(-1, 1);
      chai.expect(w.y).to.be.within(-1, 1);
      chai.expect(w.z).to.be.within(-1, 1);
      chai.expect(magnitude(w)).to.be.closeTo(1, EPS);
      chai.expect(() => w.heading2D()).to.throw();
    }
  });

  it("should be able to create vectors from arrays", () => {
    const v = Vector.fromArray([1, 2]);
    chai.expect(v.x).to.equal(1);
    chai.expect(v.y).to.equal(2);
    chai.expect(v.z).to.equal(0);
  });

  it("should be able to create vectors from objects", () => {
    const w = Vector.fromObject({ x: 3, y: 4, z: 5 });
    chai.expect(w.x).to.equal(3);
    chai.expect(w.y).to.equal(4);
    chai.expect(w.z).to.equal(5);
  });

  it("should be able to create vectors from a string", () => {
    const v = Vector.fromString("Vector(1, 2, 3)");
    chai.expect(v.x).to.equal(1);
    chai.expect(v.y).to.equal(2);
    chai.expect(v.z).to.equal(3);
  });

  it("should be able to create vectors from 2D and 3D angles", () => {
    const v = Vector.fromAngle2D(Math.PI / 2);
    chai.expect(v.x).to.be.closeTo(0, EPS);
    chai.expect(v.y).to.be.closeTo(1, EPS);
    chai.expect(v.z).to.be.closeTo(0, EPS);
    const angle = heading(v);
    chai.expect(angle).to.be.within(Math.PI / 2 - EPS, Math.PI / 2 + EPS);

    const w = Vector.fromAngle3D(Math.PI / 2, Math.PI / 2);
    chai.expect(w.x).to.be.closeTo(0, EPS);
    chai.expect(w.y).to.be.closeTo(1, EPS);
    chai.expect(w.z).to.be.closeTo(0, EPS);
  });

  it("should be able to create a vector from a polar coordinate", () => {
    const rho = 10;
    const theta = Math.PI / 10;
    const phi = Math.PI / 5;
    const { x, y, z } = polar_to_cartesian(rho, theta, phi);
    const v = Vector.fromPolar(rho, theta, phi);

    chai.expect(v.x).to.be.closeTo(x, EPS);
    chai.expect(v.y).to.be.closeTo(y, EPS);
    chai.expect(v.z).to.be.closeTo(z, EPS);
  });

  it("should be able to convert a vector to a string", () => {
    const v = new Vector(1, 2, 3);
    chai.expect(v.toString()).to.equal("Vector(1, 2, 3)");
  });

  it("should be able to convert a vector to an array", () => {
    const v = new Vector(1, 2, 3);
    chai.expect(v.toArray()).to.deep.equal([1, 2, 3]);
  });

  it("should be able to serialize and deserialize a vector", () => {
    const v = new Vector(1, 2, 3);

    const a = Vector.fromArray(v.toArray());
    chai.expect(equals(v, a)).to.be.true;

    const o = Vector.fromObject(v.toObject());
    chai.expect(equals(v, o)).to.be.true;

    const s = Vector.fromString(v.toString());
    chai.expect(equals(v, s)).to.be.true;
  });

  it("should be able to add vectors", () => {
    const v = new Vector(1, 2, 3);
    const w = new Vector(4, 5, 6);
    const u = v.add(w);
    chai.expect(u.x).to.equal(5);
    chai.expect(u.y).to.equal(7);
    chai.expect(u.z).to.equal(9);

    chai.expect(() => v.add("1")).to.throw();
  });

  it("should be able to subtract vectors", () => {
    const v = new Vector(1, 2, 3);
    const w = new Vector(4, 5, 6);

    v.sub(w);
    chai.expect(v.x).to.equal(-3);
    chai.expect(v.y).to.equal(-3);
    chai.expect(v.z).to.equal(-3);
    chai.expect(() => v.sub("1")).to.throw();

    const y = new Vector(1, 2, 3);
    const z = new Vector(4, 5, 6);

    y.subtract(z);
    chai.expect(y.x).to.equal(-3);
    chai.expect(y.y).to.equal(-3);
    chai.expect(y.z).to.equal(-3);
    chai.expect(() => y.subtract("1")).to.throw();
  });

  it("should be able to multiply and divide vectors by scalars", () => {
    const v = new Vector(1, 2, 3);
    v.mult(2);
    chai.expect(v.x).to.equal(2);
    chai.expect(v.y).to.equal(4);
    chai.expect(v.z).to.equal(6);

    v.div(2);
    chai.expect(v.x).to.equal(1);
    chai.expect(v.y).to.equal(2);
    chai.expect(v.z).to.equal(3);

    chai.expect(() => v.mult("1")).to.throw();
    chai.expect(() => v.div("1")).to.throw();

    const w = new Vector(1, 2, 3);
    w.multiply(2);
    chai.expect(w.x).to.equal(2);
    chai.expect(w.y).to.equal(4);
    chai.expect(w.z).to.equal(6);

    w.divide(2);
    chai.expect(w.x).to.equal(1);
    chai.expect(w.y).to.equal(2);
    chai.expect(w.z).to.equal(3);

    chai.expect(() => w.multiply("1")).to.throw();
    chai.expect(() => w.divide("1")).to.throw();
  });

  it("should be able to multiply and divide vectors by vectors", () => {
    const v = new Vector(1, 2, 3);
    const w = new Vector(4, 5, 6);

    v.mult(w);
    chai.expect(v.x).to.equal(4);
    chai.expect(v.y).to.equal(10);
    chai.expect(v.z).to.equal(18);

    v.div(w);
    chai.expect(v.x).to.equal(1);
    chai.expect(v.y).to.equal(2);
    chai.expect(v.z).to.equal(3);

    chai.expect(() => v.mult("1")).to.throw();
    chai.expect(() => v.div("1")).to.throw();

    const x = new Vector(1, 2, 3);

    x.multiply(w);
    chai.expect(x.x).to.equal(4);
    chai.expect(x.y).to.equal(10);
    chai.expect(x.z).to.equal(18);

    x.divide(w);
    chai.expect(x.x).to.equal(1);
    chai.expect(x.y).to.equal(2);

    chai.expect(() => x.multiply("1")).to.throw();
    chai.expect(() => x.divide("1")).to.throw();
  });

  it("should calculate the maximum and minimum components of a vector", () => {
    const v = new Vector(1, 2, 3);
    chai.expect(v.max()).to.equal(3);
    chai.expect(v.min()).to.equal(1);
  });

  it("should calculate the dot and cross products of vectors", () => {
    const v = new Vector(1, 2, 3);
    const w = new Vector(4, 5, 6);

    const d = dot(v, w);
    chai.expect(v.dot(w)).to.equal(d);
    chai.expect(() => v.dot("1")).to.throw();

    const u = new Vector(1, 2, 3);
    const p = new Vector(4, 5, 6);

    const c = cross(u, p);
    u.cross(p);
    chai.expect(u.x).to.equal(c.x);
    chai.expect(u.y).to.equal(c.y);
    chai.expect(u.z).to.equal(c.z);
    chai.expect(() => v.cross("1")).to.throw();
  });

  it("should calculate the heading of a vector", () => {
    const v = new Vector(1, 2);
    chai.expect(v.heading2D()).to.equal(heading(v));
  });

  it("should create the vector from an angle", () => {});

  it("should calculate the distance of a vector", () => {
    const v = new Vector(1, 2, 3);
    const u = new Vector(4, 5, 6);

    const distance_sq =
      Math.pow(u.x - v.x, 2) + Math.pow(u.y - v.y, 2) + Math.pow(u.z - v.z, 2);
    const distance = Math.sqrt(distance_sq);

    chai.expect(v.dist(u)).to.equal(distance);
    chai.expect(v.distSq(u)).to.equal(distance_sq);
    chai.expect(() => v.dist("1")).to.throw();
    chai.expect(() => v.dist()).to.throw();
  });

  it("should calculate the angle between two vectors", () => {
    const v = new Vector(1, 2, 3);
    const u = new Vector(4, 5, 6);

    const angle = angle_between(v, u);
    chai.expect(v.angleBetween(u)).to.equal(angle);
    chai.expect(() => v.angleBetween("1")).to.throw();
  });

  it("should calculate the equality of two vectors", () => {
    const v = new Vector(1, 2, 3);
    const u = new Vector(4, 5, 6);

    chai.expect(v.equals(u)).to.be.false;
    chai.expect(u.equals(v)).to.be.false;

    chai.expect(v.equals(v)).to.be.true;
    chai.expect(u.equals(u)).to.be.true;

    chai.expect(() => v.equals("1")).to.throw();
    chai.expect(() => v.equals()).to.throw();
  });

  it("should copy a vector", () => {
    const v = new Vector(1, 2, 3);
    const u = v.copy();

    chai.expect(equals(v, u)).to.be.true;
    chai.expect(v.equals(u)).to.be.true;
    chai.expect(u.equals(v)).to.be.true;

    const z = v.copy();
    z.z = 4;
    chai.expect(z.equals(v)).to.be.false;
  });

  it("should limit a vector", () => {
    const v = new Vector(1, 2, 3);
    v.limit(2);
    chai.expect(magnitude(v)).to.equal(2);
    chai.expect(() => v.limit("1")).to.throw();
  });

  it("should set the magnitude of a vector", () => {
    const v = new Vector(1, 2, 3);
    v.setMag(2);
    chai.expect(magnitude(v)).to.equal(2);
    chai.expect(() => v.setMag("1")).to.throw();
  });

  it("should rotate a vector", () => {
    const v = new Vector(1, 2, 3);
    const u = rotate(v, 2);
    v.rotate(2);
    chai.expect(equals(v, u)).to.be.true;
    chai.expect(() => v.rotate("1")).to.throw();
  });

  it("should normalize a vector", () => {
    const v = new Vector(1, 2, 3);
    v.normalize();
    chai.expect(magnitude(v)).to.equal(1);
  });

  it("should invert a vector", () => {
    for (const x of [true, false]) {
      for (const y of [true, false]) {
        for (const z of [true, false]) {
          const v = new Vector(1, 2, 3);
          v.invert(x, y, z);
          chai.expect(v.x).to.equal(x ? -1 : 1);
          chai.expect(v.y).to.equal(y ? -2 : 2);
          chai.expect(v.z).to.equal(z ? -3 : 3);
        }
      }
    }

    // invert x
    const x = new Vector(1, 2, 3);
    x.invertX();
    chai.expect(x.x).to.equal(-1);

    // invert y
    const y = new Vector(1, 2, 3);
    y.invertY();
    chai.expect(y.y).to.equal(-2);

    // invert z
    const z = new Vector(1, 2, 3);
    z.invertZ();
    chai.expect(z.z).to.equal(-3);
  });

  it("should calculate the magnitude of a vector", () => {
    const v = new Vector(1, 2, 3);
    chai.expect(v.mag()).to.equal(magnitude(v));
    chai.expect(v.magSq()).to.equal(magnitude_sq(v));
  });

  it("should have working setters and getters", () => {
    const v = new Vector(1, 2, 3);
    chai.expect(v.x).to.equal(1);
    chai.expect(v.y).to.equal(2);
    chai.expect(v.z).to.equal(3);

    v.x = 4;
    v.y = 5;
    v.z = 6;

    chai.expect(v.x).to.equal(4);
    chai.expect(v.y).to.equal(5);
    chai.expect(v.z).to.equal(6);
  });
});

describe("Random Vector Tests", () => {
  it("the magnitude of a random vector should be 1", () => {
    for (let i = 0; i < TESTS_NUM; i++) {
      const v = Vector.random2D();
      const u = Vector.random3D();

      chai.expect(v.mag()).to.be.closeTo(1, EPS);
      chai.expect(u.mag()).to.be.closeTo(1, EPS);
    }
  });

  it("rotating a vector should not change its magnitude", () => {
    for (let i = 0; i < TESTS_NUM; i++) {
      const m = Math.random() * 100;

      const v = Vector.random2D();
      const u = Vector.random3D();

      v.setMag(m);
      u.setMag(m);
      v.rotate(Math.random() * 2 * Math.PI);
      u.rotate(Math.random() * 2 * Math.PI);

      chai.expect(v.mag()).to.be.closeTo(m, EPS);
      chai.expect(u.mag()).to.be.closeTo(m, EPS);
    }
  });

  it("testing dot and cross products of random vectors", () => {
    for (let i = 0; i < TESTS_NUM; i++) {
      const v = Vector.random2D();
      const u = Vector.random3D();

      const d = dot(v, u);
      const c = cross(v, u);

      chai.expect(v.copy().dot(u)).to.be.closeTo(d, EPS);
      chai.expect(u.copy().dot(v)).to.be.closeTo(d, EPS);

      chai.expect(v.copy().cross(u)).to.deep.equal(c);
      chai.expect(u.copy().cross(v)).to.deep.equal(c.invert());
    }
  });

  it("testing angle between random vectors", () => {
    for (let i = 0; i < TESTS_NUM; i++) {
      const v = Vector.random2D();
      const u = Vector.random3D();

      const a = angle_between(v, u);

      chai.expect(v.angleBetween(u)).to.be.closeTo(a, EPS);
      chai.expect(u.angleBetween(v)).to.be.closeTo(a, EPS);
    }
  });

  it("testing vector serialization and deserialization", () => {
    for (let i = 0; i < TESTS_NUM; i++) {
      const v = Vector.random3D();

      const a = Vector.fromArray(v.toArray());
      chai.expect(equals(v, a)).to.be.true;
      const o = Vector.fromObject(v.toObject());
      chai.expect(equals(v, o)).to.be.true;
      const s = Vector.fromString(v.toString());
      chai.expect(equals(v, s)).to.be.true;
    }
  });
});
