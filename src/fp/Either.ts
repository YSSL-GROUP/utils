export class Either<V> {
  private constructor(readonly value: V) {}

  static of<T>(value: T): T extends null ? Left<T> : Right<T> {
    // @ts-ignore
    return value !== null ? Right.of(value) : Left.of(value);
  }
}

class Left<V> {
  private constructor(readonly value: V) {}

  static of<T>(value: T) {
    return new Left(value);
  }

  map<T>(_: T) {
    return Left.of(this.value);
  }

  getOrElse<T>(value: T) {
    return value;
  }
}

class Right<V> {
  private constructor(readonly value: V) {}

  static of<T>(value: T) {
    return new Right(value);
  }

  map<T>(fn: (val: V) => T) {
    return Right.of(fn(this.value));
  }

  getOrElse<T>(value: T) {
    return this.value;
  }
}
