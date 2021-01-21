/**
 * 并查集
 * 在计算机科学中，并查集是一种树型的数据结构，用于处理一些不交集（Disjoint Sets）的合并及查询问题。有一个联合-查找算法（Union-find Algorithm）定义了两个用于此数据结构的操作：
 * Find：确定元素属于哪一个子集。它可以被用来确定两个元素是否属于同一子集。
 * Union：将两个子集合并成同一个集合。由于支持这两种操作，一个不相交集也常被称为联合-查找数据结构（Union-find Data Structure）或合并-查找集合（Merge-find Set）
 * 为了更加精确的定义这些方法，需要定义如何表示集合。一种常用的策略是为每个集合选定一个固定的元素，称为代表，以表示整个集合。接着，Find(x)Find(x) 返回 xx 所属集合的代表，而 Union 使用两个集合的代表作为参数。
 */
export class DisjointSet {
  /**
   * 集合组
   */
  private sets: number[] = [];
  /**
   * 秩组(按秩合并 - 减小树的合并深度)
   */
  private ranks: number[] = [];

  /**
   * @param n - 集合数量
   */
  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this.sets.push(i);
      this.ranks.push(1);
    }
  }

  /**
   * 查询节点的父节点编号
   * @param n - 节点编号
   * @returns 父节点编号
   */
  find(n: number): number {
    // 父节点编号
    const parentNo = this.sets[n];
    // 路径压缩(直接指向根节点)
    return parentNo === n ? n : (this.sets[n] = this.find(parentNo));
  }

  /**
   * 集合合并
   * @param n1 - 合并节点
   * @param n2 - 被合并节点
   */
  union(n1: number, n2: number) {
    const parentNo1 = this.find(n1);
    const parentNo2 = this.find(n2);
    const rank1 = this.ranks[parentNo1];
    const rank2 = this.ranks[parentNo2];
    if (rank1 <= rank2) {
      this.sets[parentNo1] = parentNo2;
    } else {
      this.sets[parentNo2] = parentNo1;
    }
    if (rank1 === rank2 && parentNo1 !== parentNo2) {
      //如果深度相同且根节点不同，则新的根节点的深度+1
      this.ranks[parentNo2]++;
    }
  }
}
