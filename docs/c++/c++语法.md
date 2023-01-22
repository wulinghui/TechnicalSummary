---
title: c++语法
date: 2022-02-25 11:58:42
permalink: /pages/c8b30b/
categories:
  - c++
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# Hello World

```c++
#include <iostream>  // 包含了头文件 <iostream>
using namespace std; //告诉编译器使用 std 命名空间。命名空间是 C++ 中一个相对新的概念。
 
// main() 是程序开始执行的地方
 
int main()
{
   cout << "Hello World"; // 输出 Hello World
   return 0;
}
```

编译 & 执行

```b
$ g++ hello.cpp
$ ./a.out
Hello World
```





# 定义常量

- 使用 **#define** 预处理器。
- 使用 **const** 关键字。

# 修饰符类型

- const
- volatile 修饰符 **volatile** 告诉编译器不需要优化volatile声明的变量，让程序可以直接从内存中读取变量。对于一般的变量编译器会对变量进行优化，将内存中的变量值放在寄存器中以加快读写效率。
- restrict  由 **restrict** 修饰的指针是唯一一种访问它所指向的对象的方式。只有 C99 增加了新的类型限定符 restrict。



# 存储类

- auto   

  > 关键字用于两种情况：声明变量时根据初始化表达式自动推断该变量的类型、声明函数时函数返回值的占位符。

- register 

  > 存储类用于定义存储在寄存器中而不是 RAM 中的局部变量。这意味着变量的最大尺寸等于寄存器的大小（通常是一个词），且不能对它应用一元的 '&' 运算符（因为它没有内存位置）。

- static 

  > 存储类指示编译器在程序的生命周期内保持局部变量的存在，而不需要在每次它进入和离开作用域时进行创建和销毁。因此，使用 static 修饰局部变量可以在函数调用之间保持局部变量的值。

- extern

  > 存储类用于提供一个全局变量的引用，全局变量对所有的程序文件都是可见的。当您使用 'extern' 时，对于无法初始化的变量，会把变量名指向一个之前定义过的存储位置。
  >
  > 当您有多个文件且定义了一个可以在其他文件中使用的全局变量或函数时，可以在其他文件中使用 *extern* 来得到已定义的变量或函数的引用。可以这么理解，***extern* 是用来在另一个文件中声明一个全局变量或函数。**

- mutable

  > 它允许对象的成员替代常量。也就是说，mutable 成员可以通过 const 成员函数修改。

- thread_local 

  > 使用 thread_local 说明符声明的变量仅可在它在其上创建的线程上访问。 变量在创建线程时创建，并在销毁线程时销毁。 每个线程都有其自己的变量副本。
  >
  > thread_local 说明符可以与 static 或 extern 合并。

# 杂项运算符

| sizeof               | [sizeof 运算符](https://www.runoob.com/cplusplus/cpp-sizeof-operator.html)返回变量的大小。例如，sizeof(a) 将返回 4，其中 a 是整数。 |
| -------------------- | ------------------------------------------------------------ |
| Condition ? X : Y    | [条件运算符](https://www.runoob.com/cplusplus/cpp-conditional-operator.html)。如果 Condition 为真 ? 则值为 X : 否则值为 Y。 |
| ,                    | [逗号运算符](https://www.runoob.com/cplusplus/cpp-comma-operator.html)会顺序执行一系列运算。整个逗号表达式的值是以逗号分隔的列表中的最后一个表达式的值。 |
| .（点）和 ->（箭头） | [成员运算符](https://www.runoob.com/cplusplus/cpp-member-operators.html)用于引用类、结构和共用体的成员。 |
| Cast                 | [强制转换运算符](https://www.runoob.com/cplusplus/cpp-casting-operators.html)把一种数据类型转换为另一种数据类型。例如，int(2.2000) 将返回 2。 |
| &                    | [指针运算符 &](https://www.runoob.com/cplusplus/cpp-pointer-operators.html) 返回变量的地址。例如 &a; 将给出变量的实际地址。 |
| *                    | [指针运算符 *](https://www.runoob.com/cplusplus/cpp-pointer-operators.html) 指向一个变量。例如，*var; 将指向变量 var。 |





# 函数

## 函数声明

当您在一个源文件中定义函数且在另一个文件中调用函数时，函数声明是必需的。在这种情况下，您应该在调用函数的文件顶部声明函数。

## 函数参数

默认情况下使用**传值调用**来传递参数。

- [传值调用](https://www.runoob.com/cplusplus/cpp-function-call-by-value.html)
- [指针调用](https://www.runoob.com/cplusplus/cpp-function-call-by-pointer.html)
- [引用调用](https://www.runoob.com/cplusplus/cpp-function-call-by-reference.html)

## 参数的默认值

## Lambda 函数与表达式

```c++
[capture](parameters)->return-type{body}// 完整
[capture](parameters){body} // 没有返回值
[](int x, int y){ return x < y ; }
[]{ ++global_x; }    // 没有返回值和参数
```

# 数组

`double balance[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};`



# 指针





# 引用

## 引用 vs 指针

- 不存在空引用。引用必须连接到一块合法的内存。
- 一旦引用被初始化为一个对象，就不能被指向到另一个对象。指针可以在任何时候指向到另一个对象。
- 引用必须在创建时被初始化。指针可以在任何时间被初始化。

```c++
#include <iostream>
 
using namespace std;
 
int main ()
{
   // 声明简单的变量
   int    i;
   double d;
 
   // 声明引用变量
   int&    r = i;
   double& s = d;
   
   i = 5;
   cout << "Value of i : " << i << endl;    // Value of i : 5
   cout << "Value of i reference : " << r  << endl;  // Value of i reference : 5
 
   d = 11.7;
   cout << "Value of d : " << d << endl;         // Value of d : 11.7
   cout << "Value of d reference : " << s  << endl;   // Value of d reference : 11.7
   
   return 0;
}
```

# 基本的输入输出

```c++
cout << "请输入您的名称： ";
cin >> name; 
cerr << "Error message : " << str << endl;
clog << "Error message : " << str << endl;
```

# 数据结构

同c.

```c++
#include <iostream>
#include <cstring>
 
using namespace std;
void printBook( struct Books *book );
 
struct Books
{
   char  title[50];
   char  author[50];
   char  subject[100];
   int   book_id;
};
 
int main( )
{
   Books Book1;        // 定义结构体类型 Books 的变量 Book1
   Books Book2;        // 定义结构体类型 Books 的变量 Book2
 
    // Book1 详述
   strcpy( Book1.title, "C++ 教程");
   strcpy( Book1.author, "Runoob"); 
   strcpy( Book1.subject, "编程语言");
   Book1.book_id = 12345;
 
   // Book2 详述
   strcpy( Book2.title, "CSS 教程");
   strcpy( Book2.author, "Runoob");
   strcpy( Book2.subject, "前端技术");
   Book2.book_id = 12346;
 
   // 通过传 Book1 的地址来输出 Book1 信息
   printBook( &Book1 );
 
   // 通过传 Book2 的地址来输出 Book2 信息
   printBook( &Book2 );
 
   return 0;
}
// 该函数以结构指针作为参数
void printBook( struct Books *book )
{
   cout << "书标题  : " << book->title <<endl;
   cout << "书作者 : " << book->author <<endl;
   cout << "书类目 : " << book->subject <<endl;
   cout << "书 ID : " << book->book_id <<endl;
}
```

## typedef 关键字

可以为创建的类型取一个"别名"







# 类 & 对象 & 继承

继承多继承.

## 写法一

```c++
#include <iostream>
 
using namespace std;
 
class Box
{
   public:
      double length;   // 长度
      double breadth;  // 宽度
      double height;   // 高度
      // 成员函数声明
      double get(void);
      void set( double len, double bre, double hei );
};
// 成员函数定义
double Box::get(void)
{
    return length * breadth * height;
}
 
void Box::set( double len, double bre, double hei)
{
    length = len;
    breadth = bre;
    height = hei;
}
int main( )
{
   Box Box1;        // 声明 Box1，类型为 Box
   Box Box2;        // 声明 Box2，类型为 Box
   Box Box3;        // 声明 Box3，类型为 Box
   double volume = 0.0;     // 用于存储体积
 
   // box 1 详述
   Box1.height = 5.0; 
   Box1.length = 6.0; 
   Box1.breadth = 7.0;
 
   // box 2 详述
   Box2.height = 10.0;
   Box2.length = 12.0;
   Box2.breadth = 13.0;
 
   // box 1 的体积
   volume = Box1.height * Box1.length * Box1.breadth;
   cout << "Box1 的体积：" << volume <<endl;
 
   // box 2 的体积
   volume = Box2.height * Box2.length * Box2.breadth;
   cout << "Box2 的体积：" << volume <<endl;
 
 
   // box 3 详述
   Box3.set(16.0, 8.0, 12.0); 
   volume = Box3.get(); 
   cout << "Box3 的体积：" << volume <<endl;
   return 0;
}
```

## 写法二

```c++
#include <iostream>
 
using namespace std;
 
// 基类
class Shape 
{
   public:
      void setWidth(int w)
      {
         width = w;
      }
      void setHeight(int h)
      {
         height = h;
      }
   protected:
      int width;
      int height;
};
 
// 派生类
class Rectangle: public Shape
{
   public:
      int getArea()
      { 
         return (width * height); 
      }
};
 
int main(void)
{
   Rectangle Rect;
 
   Rect.setWidth(5);
   Rect.setHeight(7);
 
   // 输出对象的面积
   cout << "Total area: " << Rect.getArea() << endl;
 
   return 0;
}
```

# 多态

```c++
class Shape {
   protected:
      int width, height;
   public:
      Shape( int a=0, int b=0)
      {
         width = a;
         height = b;
      }
      virtual int area()   // virtual 表示重写后以子类为主。  没有他就是做基类的
      {
         cout << "Parent class area :" <<endl;
         return 0;
      }
    // 
    virtual int area22() = 0;  // 纯虚函数，表示自己没有实现，叫给子类实现。
};
```





# 异常处理

```c++
try
{
   // 保护代码
}catch( ExceptionName e )
{
  // 处理 ExceptionName 异常的代码
    throw "Division by zero condition!";
}
```

```c++
struct MyException : public exception
{	
    // what() 是异常类提供的一个公共方法，它已被所有子异常类重载。这将返回异常产生的原因。
  const char * what () const throw ()
  {
    return "C++ Exception";
  }
};
 
```



# 动态内存

使用 **delete** 运算符，删除之前由 **new** 运算符分配的内存

```c++
#include <iostream>
using namespace std;

class Box
{
   public:
      Box() { 
         cout << "调用构造函数！" <<endl; 
      }
      ~Box() { 
         cout << "调用销毁函数！" <<endl; 
      }
};

int main ()
{
   double* pvalue  = NULL; // 初始化为 null 的指针
   pvalue  = new double;   // 为变量请求内存
 
   *pvalue = 29494.99;     // 在分配的地址存储值
   cout << "Value of pvalue : " << *pvalue << endl;
 
   delete pvalue;         // 释放内存
 
    Box* myBoxArray = new Box[4];
    delete [] myBoxArray; // 释放数组对象
    
   return 0;
}
```

# 命名空间

类似java包名的概念。

```c++
#include <iostream>
using namespace std;
 
// 嵌套的命名空间
namespace namespace_name1 {
   // 代码声明
   namespace namespace_name2 {
      // 代码声明
       void func(){
     	 cout << "Inside 嵌套的命名空间" << endl;
  	 }
   }
}

// 第一个命名空间
namespace first_space{
   void func(){
      cout << "Inside first_space" << endl;
   }
}
// 第二个命名空间
namespace second_space{
   void func(){
      cout << "Inside second_space" << endl;
   }
}
using namespace first_space; // 使用first_space作为默认的
int main ()
{
 	
   // 调用第一个命名空间中的函数
   first_space::func();
   // 调用第一个命名空间中的函数  和first_space::func(); 相同。
   func();
    
   // 调用第二个命名空间中的函数
   second_space::func(); 
 	// 调用嵌套的命名空间
    namespace_name1::namespace_name2.func();
   return 0;
}
```

# 模板

模板是泛型编程的基础。类似于java中泛型。



# 预处理器

c语言的宏，语法糖。



# 信号处理

信号是由操作系统传给进程的中断，会提早终止一个程序。在 UNIX、LINUX、Mac OS X 或 Windows 系统上，可以通过按 Ctrl+C 产生中断。

有些信号不能被程序捕获，但是下表所列信号可以在程序中捕获，并可以基于信号采取适当的动作。这些信号是定义在 C++ 头文件 <csignal> 中。

## signal() 

用来捕获突发事件

## raise() 

生成信号

