---
title: java集合
date: 2022-02-11 17:00:35
permalink: /pages/82ccdc/
categories:
  - java
  - java-se
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# ArrayList



```java
public class ArrayList<E> extends AbstractList<E>   
        implements  RandomAccess, Cloneable, java.io.Serializable   // 随机访问标识，克隆，序列化
{
    
    public ArrayList(int initialCapacity) {
        if (initialCapacity > 0) {
            this.elementData = new Object[initialCapacity]; // 设置了长度。
        } else if (initialCapacity == 0) {
            this.elementData = EMPTY_ELEMENTDATA; // 空数组
        } else {
            throw new IllegalArgumentException("Illegal Capacity: "+
                                               initialCapacity);
        }
    }
    /**
     * Constructs an empty list with an initial capacity of ten.
     */
    public ArrayList() {
        this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA; // 空数组
    }
    
    public E get(int index) {
        rangeCheck(index); // 校验长度异常
        return elementData(index); // this.elementData[index];
    }
    //
    public boolean add(E e) {
        // 满足条件就触发扩容操作。
        ensureCapacityInternal(size + 1);  // Increments modCount!!
        elementData[size++] = e;
        return true;
    }
    public void add(int index, E element) {
        rangeCheckForAdd(index); // 校验
	    // 同上
        ensureCapacityInternal(size + 1);  // Increments modCount!!
        // 这里是肯定慢的...
        System.arraycopy(elementData, index, elementData, index + 1,
                         size - index);
        elementData[index] = element;
        size++;
    }
    private void ensureExplicitCapacity(int minCapacity) {
        modCount++;

        // minCapacity > elementData.length 就扩容了。
        if (minCapacity - elementData.length > 0)
            grow(minCapacity); // 触发扩容
    }
    public E remove(int index) {
        rangeCheck(index); // 校验
        modCount++;
        E oldValue = elementData(index); // 获得旧数据
	    // 判断是否是最后一个元素.
        int numMoved = size - index - 1;
        if (numMoved > 0)
            System.arraycopy(elementData, index+1, elementData, index,
                             numMoved); // 移动元素。
        //  
        elementData[--size] = null; // clear to let GC do its work
        return oldValue;
    }
    
    public void add(int index, E element) {
        checkPositionIndex(index); // 校验
	   //
        if (index == size)
            linkLast(element);
        else
            linkBefore(element, node(index));
    }
}
```

## 总结

- 无参构造，第一次调用add是要扩容的。**所以使用时最好给一个初始值**
- get肯定是快的
- remove  主要是移动的慢，但是操作最后一个元素是快的。
- add 不一定比链表慢，主要看是不是要扩容。
- 数组对空间有连续性要求
- add(int index, E element) ，操作最后还是会调用数组复制操作，**所以如果是尾插别用他**



# LinkedList

```java
public class LinkedList<E>
    extends AbstractSequentialList<E>   // 只支持按次序访问
    implements Deque<E>, Cloneable, java.io.Serializable  // 队列，克隆，序列化
{		
        
    /**
     * Pointer to first node.
     * Invariant: (first == null && last == null) ||
     *            (first.prev == null && first.item != null)
     */
    transient Node<E> first;

    /**
     * Pointer to last node.
     * Invariant: (first == null && last == null) ||
     *            (last.next == null && last.item != null)
     */
    transient Node<E> last;
    
    	// 双链表结构
        private static class Node<E> {
        E item;
        Node<E> next;
        Node<E> prev;

        Node(Node<E> prev, E element, Node<E> next) {
            this.item = element;
            this.next = next;
            this.prev = prev;
        }
    }
    public E get(int index) {
        checkElementIndex(index); // 校验
        return node(index).item; // 看下面
    }
    // 主要是判断从头找还是从尾找..
    Node<E> node(int index) {
        // assert isElementIndex(index);
	   // 判断从头找还是从尾找..
        if (index < (size >> 1)) {
            Node<E> x = first;
            // 递归的查找.
            for (int i = 0; i < index; i++)
                x = x.next;
            return x;
        } else {
            Node<E> x = last;
            for (int i = size - 1; i > index; i--)
                x = x.prev;
            return x;
        }
    }
    // 尾插
    public boolean add(E e) {
        linkLast(e);
        return true;
    }
    public void add(int index, E element) {
        checkPositionIndex(index);
		
        if (index == size)
            linkLast(element);// 尾插
        else
            linkBefore(element, node(index)); // 先node查出来，再插入.
    }
    
    public E remove(int index) {
        checkElementIndex(index);
        return unlink(node(index)); // 先查出来，再unlink移除.操作该node前后节点。
    }
}
```



## 总结

- 有头节点和尾节点，node双链表。
- 插入和查询会先判断从头还是从尾开始。
- 删除是先查再操作节点。



# ArrayList 和 LinkedList 对比

| 方法                      | ArrayList                                                  | LinkedList                                     |
| ------------------------- | ---------------------------------------------------------- | ---------------------------------------------- |
| get                       | 数组下标肯定是快的                                         | 距离中间的节点，就是遍历几次                   |
| remove                    | 最后一个节点是快的，但是其他位置需要复制数组元素，不一定了 | 瓶颈是查询，如果是头节点的话是比array快的      |
| add(E e)                  | 瓶颈是扩容，容量够的话，比Link快                           | 无瓶颈                                         |
| add(int index, E element) | 瓶颈是扩容+复制数组元素(一定)                              | 先查再插，瓶颈是查找。所以插入0的话，Link会快. |



# HashSet

内部就是一个HashMap.





# Colletcions.synchronizedXXX

Colletcions.synchronizedSet 就是包装了sysn 对原集合的操作，完美的装饰模式。



# hashmap

## 数据结构

数组+链表+(红黑树jdk>=8)

## 源码原理分析

### 重要成员变量

- DEFAULT_INITIAL_CAPACITY = 1 << 4; Hash表默认初始容量
- MAXIMUM_CAPACITY = 1 << 30; 最大Hash表容量
- DEFAULT_LOAD_FACTOR = 0.75f；默认加载因子
- TREEIFY_THRESHOLD = 8；链表转红黑树阈值
- UNTREEIFY_THRESHOLD = 6；红黑树转链表阈值
- MIN_TREEIFY_CAPACITY = 64；链表转红黑树时hash表最小容量阈值，达不到优先扩容。

### 内部的执行机制源码

- 记录oldhash表中e.next
- rehash计算出数组的位置(hash表中桶的位置)
- e要插入链表的头部， 所以要先将e.next指向new hash表中的第一个元素
- 将e放入到new hash表的头部(jdk8采用尾插法，避免了扩容的死锁情况，但是树和链表转换还是会死锁.)
- 转移e到下一个节点， 继续循环下去

## Jdk7-扩容死锁分析

- 单线程扩容
- 多线程扩容

## Jdk8-扩容死锁分析

[HashMap在jdk1.8也会出现死循环的问题（实测）](https://blog.csdn.net/Liu_JM/article/details/105582711)

[踩坑了，JDK8 中 HashMap 依然会产生死循环问题！](https://cloud.tencent.com/developer/article/1701731)



# ConcurrentHashMap

## 数据结构

与HashMap基本类似,区别在于,内部在于:

- 数据写入时加了同步机制(分段锁)保证线程安全，读操作是无锁操作
- 扩容时老数据的转移是并发执行的，这样扩容的效率更高。

## 并发安全控制

- Java7 ReentrantLock，同时锁的是整个分段对象.

- Java8 基于分段锁+CAS保证线程安全，分段锁基于synchronized关键字实现，且只锁头结点.

## 源码原理分析

table扩容过程就是将table元素迁移到新的table上, 在元素迁移时, 可以并发完成, 加快了迁移速度, 同时不至于阻塞线程。所有元素迁移完成后, 旧的table直接丢失, 直接使用新的table。

### 重要成员变量

- LOAD_FACTOR 负载因子, 默认75%

  > 当table使用率达到75%时, 为减少table的hash碰撞, tabel长度将扩容一倍。负载因子计算: 元素总个数%table.lengh

- TREEIFY_THRESHOLD: 默认8, 当链表长度达到9时, 将结构转变为红黑树。

- UNTREEIFY_THRESHOLD: 默认6, 红黑树转变为链表的阈值。

- MIN_TRANSFER_STRIDE: 默认16, table扩容时, 每个线程最少迁移table的槽位个数。

- MOVED: 值为-1, 当Node.hash为MOVED时, 代表着table正在扩容

- TREEBIN, 置为-2, 代表此元素后接红黑树。

- nextTable: table迁移过程临时变量, 在迁移过程中将元素全部迁移到nextTable上。

- sizeCtl: 用来标志table初始化和扩容的,不同的取值代表着不同的含义:

  > - 0: table还没有被初始化
  > - -1: table正在初始化
  > - 小于-1: 实际值为resizeStamp(n)<<RESIZE_STAMP_SHIFT+2, 表明table正在扩容
  > - 大于0: 初始化完成后, 代表table最大存放元素的个数, 默认为0.75*n

### 协助扩容helpTransfer

- 一个线程插完元素后, 检查table使用率, 若超过阈值, 调用transfer进行扩容

- 一个线程插入数据时, 发现table对应元素的hash=MOVED, 那么调用helpTransfer()协助扩容。

  > - 检查是否扩容完成
  > - 对sizeCtrl = sizeCtrl+1, 然后调用transfer()进行真正的扩容。

### 扩容transfer

扩容的整体步骤就是新建一个nextTab, size是之前的2倍, 将table上的非空元素迁移到nextTab上面去。




# CopyOnWrite机制

## 核心思想

- 读写分离，空间换时间，避免为保证并发安全导致的激烈的锁竞争。

- 写先写副本，副本修改完后，将副本转正.
- CopyOnWrite适用于读多写少的情况，最大程度的提高读的效率
- CopyOnWrite是最终一致性，在写的过程中，原有的读的数据是不会发生更新的，只有新的读才能读到最新数据
- 如何使其他线程能够及时读到新的数据，需要使用volatile变量
- 写的时候不能并发写，需要对写操作进行加锁

## copyonwrite集合

- copyonwritearraylist
- copyonwritearrayset













# 参考资料

[一点一点看JDK源码（五）java.util.ArrayList 后篇之Spliterator多线程遍历](https://blog.csdn.net/anyu0190/article/details/101989481)

> Spliterator为jdk1.8新增接口，由[ArrayList](https://so.csdn.net/so/search?q=ArrayList&spm=1001.2101.3001.7020).spliterator();获得其返回值对象Spliterator。
>
> 它也是一个迭代器实现，从名称可以看出来，Spliterator是一个可分割的迭代器，用来分割和迭代给定源的元素，这里的源可以是collection，array和io等。 

[System.arraycopy为什么快](https://www.jianshu.com/p/898f094b7a20)

> 他比for循环肯定是快的。

[Java 集合深入理解（8）：AbstractSequentialList](https://cloud.tencent.com/developer/article/1014432)

> （ Sequential 相继的，按次序的） ，AbstractSequentialList **只支持按次序访问**，而不像 [AbstractList](https://cloud.tencent.com/developer/article/1014426?from=10680) 那样支持随机访问。

[Java并发编程之支持并发的list集合](https://www.cnblogs.com/kaigejava/p/12585862.html)

> - Vectory  // 锁方法
> -  Colletcions.synchronizedList()  //锁内部的mutex属性对象
> - CopyOnWriteArrayList   //

