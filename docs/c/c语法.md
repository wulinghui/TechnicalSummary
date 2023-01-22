---
title: c语法
date: 2022-02-25 10:15:09
permalink: /pages/1fb41a/
categories:
  - c
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---


# Hello World

```c
#include <stdio.h>
 
int main()
{
   /* 我的第一个 C 程序 */
   printf("Hello, World! \n");
   
   return 0;
}
```

```bash
# 编译 & 执行
$ gcc hello.c
$ ./a.out
Hello, World!
```

# 函数

当您在一个源文件中定义函数且在另一个文件中调用函数时，**函数声明是必需的**。在这种情况下，您应该在调用函数的文件顶部声明函数。

> 其实就是类似于定义接口，供其他人使用.



默认情况下，C 使用**传值调用**来传递参数。一般来说，这意味着函数内的代码不能改变用于调用函数的实际参数。

# 数组

`double balance[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};`



# 枚举

```c
#include <stdio.h>
 
enum DAY
{
      MON=1, TUE, WED, THU, FRI, SAT, SUN
};
 
int main()
{
    enum DAY day;
    day = WED;
    printf("%d",day);
    return 0;
}
```

# 指针

```c
#include <stdio.h>
 
int main ()
{
   int  var = 20;   /* 实际变量的声明 */
   int  *ip;        /* 指针变量的声明 */
 
   ip = &var;  /* 在指针变量中存储 var 的地址 */
 
   printf("var 变量的地址: %p\n", &var  );	// var 变量的地址: 0x7ffeeef168d8
 
   /* 在指针变量中存储的地址 */
   printf("ip 变量存储的地址: %p\n", ip );   // ip 变量存储的地址: 0x7ffeeef168d8
 
   /* 使用指针访问值 */
   printf("*ip 变量的值: %d\n", *ip );        // *ip 变量的值: 20
 
   return 0;
}
```

指针的指针。指针就是对象引用的概念。

## 函数指针

就是回调函数.

`typedef int (*fun_ptr)(int,int); // 声明一个指向同样参数、返回值的函数指针类型` 



# 结构体

C 数组允许定义可存储相同类型数据项的变量，**结构**是 C 编程中另一种用户自定义的可用的数据类型，它允许您存储不同类型的数据项。结构用于表示一条记录。

类似java的类定义。

```c
#include <stdio.h>
 
struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
} book = {"C 语言", "RUNOOB", "编程语言", 123456};
 
int main()
{
    printf("title : %s\nauthor: %s\nsubject: %s\nbook_id: %d\n", book.title, book.author, book.subject, book.book_id);
}
```

还有  -> 的使用   `book -> author`

# 共用体

同一时间只用到一个成员。

**共用体**是一种特殊的数据类型，允许您在相同的内存位置存储不同的数据类型。您可以定义一个带有多成员的共用体，但是任何时候只能有一个成员带有值。共用体提供了一种使用相同的内存位置的有效方式。

```c
#include <stdio.h>
#include <string.h>
 
union Data
{
   int i;
   float f;
   char  str[20];
};
 
int main( )
{
   union Data data;        
 
   data.i = 10;
   printf( "data.i : %d\n", data.i);
   
   data.f = 220.5;
   printf( "data.f : %f\n", data.f);
   
   strcpy( data.str, "C Programming");
   printf( "data.str : %s\n", data.str);
   
   data.i = 10;
   data.f = 220.5;
   strcpy( data.str, "C Programming");  // 覆盖上面的属性.
   printf( "data.i : %d\n", data.i);   // 不会输出10，是 'C Programming'的 int 
   printf( "data.f : %f\n", data.f);   // 同上 
   printf( "data.str : %s\n", data.str);  // 输出  C Programming
   return 0;
}
```



# 位域

有些信息在存储时，并不需要占用一个完整的字节，而只需占几个或一个二进制位。例如在存放一个开关量时，只有 0 和 1 两种状态，用 1 位二进位即可。为了节省存储空间，并使处理简便，C 语言又提供了一种数据结构，称为"位域"或"位段"。

所谓"位域"是把一个字节中的二进位划分为几个不同的区域，并说明每个区域的位数。每个域有一个域名，允许在程序中按域名进行操作。这样就可以把几个不同的对象用一个字节的二进制位域来表示。

```c
struct bs{
    int a:8;
    int b:2;
    int c:6;
}data;
```

data 为 bs 变量，共占两个字节。其中位域 a 占 8 位，位域 b 占 2 位，位域 c 占 6 位。



# typedef

您可以使用它来为类型取一个新的名字。下面的实例为单字节数字定义了一个术语 **BYTE**

```c
typedef unsigned char BYTE;
BYTE  b1, b2;
```

给类重命名，类似于类的继承.



# 宏

- 在定义了宏之后，无论宏名称出现在源代码的何处，预处理器都会把它用定义时指定的文本替换掉。
- 该命令允许把一个名称指定成任何所需的文本，例如一个常量值或者一条语句等等等
- 就是语法糖...

## 定义宏

## 预定义宏

## 参数化的宏



# 头文件

头文件是扩展名为 **.h** 的文件，包含了 C 函数声明和宏定义，被多个源文件中引用共享。有两种类型的头文件：程序员编写的头文件和编译器自带的头文件。

在程序中要使用头文件，需要使用 C 预处理指令 **#include** 来引用它。前面我们已经看过 **stdio.h** 头文件，它是编译器自带的头文件。

引用头文件相当于复制头文件的内容，但是我们不会直接在源文件中复制头文件的内容，因为这么做很容易出错，特别在程序是由多个源文件组成的时候。

A simple practice in C 或 C++ 程序中，建议把所有的常量、宏、系统全局变量和函数原型写在头文件中，在需要的时候随时引用这些头文件。





# 错误处理

**C 语言不提供对错误处理的直接支持**，但是作为一种系统编程语言，它以返回值的形式允许您访问底层数据。在发生错误时，大多数的 C 或 UNIX 函数调用返回 1 或 NULL，同时会设置一个错误代码 **errno**，该错误代码是全局变量，表示在函数调用期间发生了错误。您可以在 errno.h 头文件中找到各种各样的错误代码。

所以，**C 程序员可以通过检查返回值，然后根据返回值决定采取哪种适当的动作**。开发人员应该在程序初始化时，把 errno 设置为 0，这是一种良好的编程习惯。0 值表示程序中没有错误。

# 可变参数

`double average(int num,...)`

# 内存管理

- 动态分配内存，通过指针实现
- **void \*calloc(int num, int size);** 在内存中动态地分配 num 个长度为 size 的连续空间，并将每一个字节都初始化为 0。所以它的结果是分配了 num*size 个字节长度的内存空间，并且每个字节的值都是0。
- **void free(void \*address);** 该函数释放 address 所指向的内存块,释放的是动态分配的内存空间。
- **void \*malloc(int num); **  在堆区分配一块指定大小的内存空间，用来存放数据。这块内存空间在函数执行完成后不会被初始化，它们的值是未知的。
- **void \*realloc(void \*address, int newsize);**    该函数重新分配内存，把内存扩展到 **newsize**。

# 命令行参数

命令行参数是使用 main() 函数参数来处理的，其中，**argc** 是指传入参数的个数，**argv[]** 是一个指针数组，指向传递给程序的每个参数。

`int main( int argc, char *argv[] )  `

# 参考资料

[C 语言教程](https://www.runoob.com/cprogramming/c-tutorial.html)

[C语言如何在一个.c源文件里调用另一个源文件中的函数](https://blog.csdn.net/HQY_0306/article/details/105431559)

> 头文件，定义函数
>
> 源文件，实现函数
>
> main，引用头文件，再调用。

[C语言宏的定义和宏的使用方法](http://c.biancheng.net/view/446.html)

