/**
 * 并查集
 */
export class DisjointSet {
  /**
   * 集合组
   */
  private sets: number[];

  /**
   * @param n - 集合数量
   */
  constructor(n: number) {
    this.sets = new Array(n).fill(0).map((n, idx) => idx);
  }
}
