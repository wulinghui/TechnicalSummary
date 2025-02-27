(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{436:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"hello-world"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[s._v("#")]),s._v(" Hello World")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#include <iostream>  // 包含了头文件 <iostream>\nusing namespace std; //告诉编译器使用 std 命名空间。命名空间是 C++ 中一个相对新的概念。\n \n// main() 是程序开始执行的地方\n \nint main()\n{\n   cout << "Hello World"; // 输出 Hello World\n   return 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("编译 & 执行")]),s._v(" "),n("div",{staticClass:"language-b line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ g++ hello.cpp\n$ ./a.out\nHello World\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h1",{attrs:{id:"定义常量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义常量"}},[s._v("#")]),s._v(" 定义常量")]),s._v(" "),n("ul",[n("li",[s._v("使用 "),n("strong",[s._v("#define")]),s._v(" 预处理器。")]),s._v(" "),n("li",[s._v("使用 "),n("strong",[s._v("const")]),s._v(" 关键字。")])]),s._v(" "),n("h1",{attrs:{id:"修饰符类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修饰符类型"}},[s._v("#")]),s._v(" 修饰符类型")]),s._v(" "),n("ul",[n("li",[s._v("const")]),s._v(" "),n("li",[s._v("volatile 修饰符 "),n("strong",[s._v("volatile")]),s._v(" 告诉编译器不需要优化volatile声明的变量，让程序可以直接从内存中读取变量。对于一般的变量编译器会对变量进行优化，将内存中的变量值放在寄存器中以加快读写效率。")]),s._v(" "),n("li",[s._v("restrict  由 "),n("strong",[s._v("restrict")]),s._v(" 修饰的指针是唯一一种访问它所指向的对象的方式。只有 C99 增加了新的类型限定符 restrict。")])]),s._v(" "),n("h1",{attrs:{id:"存储类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#存储类"}},[s._v("#")]),s._v(" 存储类")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("auto")]),s._v(" "),n("blockquote",[n("p",[s._v("关键字用于两种情况：声明变量时根据初始化表达式自动推断该变量的类型、声明函数时函数返回值的占位符。")])])]),s._v(" "),n("li",[n("p",[s._v("register")]),s._v(" "),n("blockquote",[n("p",[s._v("存储类用于定义存储在寄存器中而不是 RAM 中的局部变量。这意味着变量的最大尺寸等于寄存器的大小（通常是一个词），且不能对它应用一元的 '&' 运算符（因为它没有内存位置）。")])])]),s._v(" "),n("li",[n("p",[s._v("static")]),s._v(" "),n("blockquote",[n("p",[s._v("存储类指示编译器在程序的生命周期内保持局部变量的存在，而不需要在每次它进入和离开作用域时进行创建和销毁。因此，使用 static 修饰局部变量可以在函数调用之间保持局部变量的值。")])])]),s._v(" "),n("li",[n("p",[s._v("extern")]),s._v(" "),n("blockquote",[n("p",[s._v("存储类用于提供一个全局变量的引用，全局变量对所有的程序文件都是可见的。当您使用 'extern' 时，对于无法初始化的变量，会把变量名指向一个之前定义过的存储位置。")]),s._v(" "),n("p",[s._v("当您有多个文件且定义了一个可以在其他文件中使用的全局变量或函数时，可以在其他文件中使用 "),n("em",[s._v("extern")]),s._v(" 来得到已定义的变量或函数的引用。可以这么理解，"),n("strong",[n("em",[s._v("extern")]),s._v(" 是用来在另一个文件中声明一个全局变量或函数。")])])])]),s._v(" "),n("li",[n("p",[s._v("mutable")]),s._v(" "),n("blockquote",[n("p",[s._v("它允许对象的成员替代常量。也就是说，mutable 成员可以通过 const 成员函数修改。")])])]),s._v(" "),n("li",[n("p",[s._v("thread_local")]),s._v(" "),n("blockquote",[n("p",[s._v("使用 thread_local 说明符声明的变量仅可在它在其上创建的线程上访问。 变量在创建线程时创建，并在销毁线程时销毁。 每个线程都有其自己的变量副本。")]),s._v(" "),n("p",[s._v("thread_local 说明符可以与 static 或 extern 合并。")])])])]),s._v(" "),n("h1",{attrs:{id:"杂项运算符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#杂项运算符"}},[s._v("#")]),s._v(" 杂项运算符")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("sizeof")]),s._v(" "),n("th",[n("a",{attrs:{href:"https://www.runoob.com/cplusplus/cpp-sizeof-operator.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("sizeof 运算符"),n("OutboundLink")],1),s._v("返回变量的大小。例如，sizeof(a) 将返回 4，其中 a 是整数。")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("Condition ? X : Y")]),s._v(" "),n("td",[n("a",{attrs:{href:"https://www.runoob.com/cplusplus/cpp-conditional-operator.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("条件运算符"),n("OutboundLink")],1),s._v("。如果 Condition 为真 ? 则值为 X : 否则值为 Y。")])]),s._v(" "),n("tr",[n("td",[s._v(",")]),s._v(" "),n("td",[n("a",{attrs:{href:"https://www.runoob.com/cplusplus/cpp-comma-operator.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("逗号运算符"),n("OutboundLink")],1),s._v("会顺序执行一系列运算。整个逗号表达式的值是以逗号分隔的列表中的最后一个表达式的值。")])]),s._v(" "),n("tr",[n("td",[s._v(".（点）和 ->（箭头）")]),s._v(" "),n("td",[n("a",{attrs:{href:"https://www.runoob.com/cplusplus/cpp-member-operators.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("成员运算符"),n("OutboundLink")],1),s._v("用于引用类、结构和共用体的成员。")])]),s._v(" "),n("tr",[n("td",[s._v("Cast")]),s._v(" "),n("td",[n("a",{attrs:{href:"https://www.runoob.com/cplusplus/cpp-casting-operators.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("强制转换运算符"),n("OutboundLink")],1),s._v("把一种数据类型转换为另一种数据类型。例如，int(2.2000) 将返回 2。")])]),s._v(" "),n("tr",[n("td",[s._v("&")]),s._v(" "),n("td",[n("a",{attrs:{href:"https://www.runoob.com/cplusplus/cpp-pointer-operators.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("指针运算符 &"),n("OutboundLink")],1),s._v(" 返回变量的地址。例如 &a; 将给出变量的实际地址。")])]),s._v(" "),n("tr",[n("td",[s._v("*")]),s._v(" "),n("td",[n("a",{attrs:{href:"https://www.runoob.com/cplusplus/cpp-pointer-operators.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("指针运算符 *"),n("OutboundLink")],1),s._v(" 指向一个变量。例如，*var; 将指向变量 var。")])])])]),s._v(" "),n("h1",{attrs:{id:"函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[s._v("#")]),s._v(" 函数")]),s._v(" "),n("h2",{attrs:{id:"函数声明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数声明"}},[s._v("#")]),s._v(" 函数声明")]),s._v(" "),n("p",[s._v("当您在一个源文件中定义函数且在另一个文件中调用函数时，函数声明是必需的。在这种情况下，您应该在调用函数的文件顶部声明函数。")]),s._v(" "),n("h2",{attrs:{id:"函数参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数参数"}},[s._v("#")]),s._v(" 函数参数")]),s._v(" "),n("p",[s._v("默认情况下使用"),n("strong",[s._v("传值调用")]),s._v("来传递参数。")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.runoob.com/cplusplus/cpp-function-call-by-value.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("传值调用"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://www.runoob.com/cplusplus/cpp-function-call-by-pointer.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("指针调用"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://www.runoob.com/cplusplus/cpp-function-call-by-reference.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("引用调用"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"参数的默认值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参数的默认值"}},[s._v("#")]),s._v(" 参数的默认值")]),s._v(" "),n("h2",{attrs:{id:"lambda-函数与表达式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lambda-函数与表达式"}},[s._v("#")]),s._v(" Lambda 函数与表达式")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[capture](parameters)->return-type{body}// 完整\n[capture](parameters){body} // 没有返回值\n[](int x, int y){ return x < y ; }\n[]{ ++global_x; }    // 没有返回值和参数\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h1",{attrs:{id:"数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[s._v("#")]),s._v(" 数组")]),s._v(" "),n("p",[n("code",[s._v("double balance[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};")])]),s._v(" "),n("h1",{attrs:{id:"指针"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#指针"}},[s._v("#")]),s._v(" 指针")]),s._v(" "),n("h1",{attrs:{id:"引用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[s._v("#")]),s._v(" 引用")]),s._v(" "),n("h2",{attrs:{id:"引用-vs-指针"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用-vs-指针"}},[s._v("#")]),s._v(" 引用 vs 指针")]),s._v(" "),n("ul",[n("li",[s._v("不存在空引用。引用必须连接到一块合法的内存。")]),s._v(" "),n("li",[s._v("一旦引用被初始化为一个对象，就不能被指向到另一个对象。指针可以在任何时候指向到另一个对象。")]),s._v(" "),n("li",[s._v("引用必须在创建时被初始化。指针可以在任何时间被初始化。")])]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#include <iostream>\n \nusing namespace std;\n \nint main ()\n{\n   // 声明简单的变量\n   int    i;\n   double d;\n \n   // 声明引用变量\n   int&    r = i;\n   double& s = d;\n   \n   i = 5;\n   cout << "Value of i : " << i << endl;    // Value of i : 5\n   cout << "Value of i reference : " << r  << endl;  // Value of i reference : 5\n \n   d = 11.7;\n   cout << "Value of d : " << d << endl;         // Value of d : 11.7\n   cout << "Value of d reference : " << s  << endl;   // Value of d reference : 11.7\n   \n   return 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h1",{attrs:{id:"基本的输入输出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本的输入输出"}},[s._v("#")]),s._v(" 基本的输入输出")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('cout << "请输入您的名称： ";\ncin >> name; \ncerr << "Error message : " << str << endl;\nclog << "Error message : " << str << endl;\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h1",{attrs:{id:"数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[s._v("#")]),s._v(" 数据结构")]),s._v(" "),n("p",[s._v("同c.")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#include <iostream>\n#include <cstring>\n \nusing namespace std;\nvoid printBook( struct Books *book );\n \nstruct Books\n{\n   char  title[50];\n   char  author[50];\n   char  subject[100];\n   int   book_id;\n};\n \nint main( )\n{\n   Books Book1;        // 定义结构体类型 Books 的变量 Book1\n   Books Book2;        // 定义结构体类型 Books 的变量 Book2\n \n    // Book1 详述\n   strcpy( Book1.title, "C++ 教程");\n   strcpy( Book1.author, "Runoob"); \n   strcpy( Book1.subject, "编程语言");\n   Book1.book_id = 12345;\n \n   // Book2 详述\n   strcpy( Book2.title, "CSS 教程");\n   strcpy( Book2.author, "Runoob");\n   strcpy( Book2.subject, "前端技术");\n   Book2.book_id = 12346;\n \n   // 通过传 Book1 的地址来输出 Book1 信息\n   printBook( &Book1 );\n \n   // 通过传 Book2 的地址来输出 Book2 信息\n   printBook( &Book2 );\n \n   return 0;\n}\n// 该函数以结构指针作为参数\nvoid printBook( struct Books *book )\n{\n   cout << "书标题  : " << book->title <<endl;\n   cout << "书作者 : " << book->author <<endl;\n   cout << "书类目 : " << book->subject <<endl;\n   cout << "书 ID : " << book->book_id <<endl;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br")])]),n("h2",{attrs:{id:"typedef-关键字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typedef-关键字"}},[s._v("#")]),s._v(" typedef 关键字")]),s._v(" "),n("p",[s._v('可以为创建的类型取一个"别名"')]),s._v(" "),n("h1",{attrs:{id:"类-对象-继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类-对象-继承"}},[s._v("#")]),s._v(" 类 & 对象 & 继承")]),s._v(" "),n("p",[s._v("继承多继承.")]),s._v(" "),n("h2",{attrs:{id:"写法一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写法一"}},[s._v("#")]),s._v(" 写法一")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#include <iostream>\n \nusing namespace std;\n \nclass Box\n{\n   public:\n      double length;   // 长度\n      double breadth;  // 宽度\n      double height;   // 高度\n      // 成员函数声明\n      double get(void);\n      void set( double len, double bre, double hei );\n};\n// 成员函数定义\ndouble Box::get(void)\n{\n    return length * breadth * height;\n}\n \nvoid Box::set( double len, double bre, double hei)\n{\n    length = len;\n    breadth = bre;\n    height = hei;\n}\nint main( )\n{\n   Box Box1;        // 声明 Box1，类型为 Box\n   Box Box2;        // 声明 Box2，类型为 Box\n   Box Box3;        // 声明 Box3，类型为 Box\n   double volume = 0.0;     // 用于存储体积\n \n   // box 1 详述\n   Box1.height = 5.0; \n   Box1.length = 6.0; \n   Box1.breadth = 7.0;\n \n   // box 2 详述\n   Box2.height = 10.0;\n   Box2.length = 12.0;\n   Box2.breadth = 13.0;\n \n   // box 1 的体积\n   volume = Box1.height * Box1.length * Box1.breadth;\n   cout << "Box1 的体积：" << volume <<endl;\n \n   // box 2 的体积\n   volume = Box2.height * Box2.length * Box2.breadth;\n   cout << "Box2 的体积：" << volume <<endl;\n \n \n   // box 3 详述\n   Box3.set(16.0, 8.0, 12.0); \n   volume = Box3.get(); \n   cout << "Box3 的体积：" << volume <<endl;\n   return 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br")])]),n("h2",{attrs:{id:"写法二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写法二"}},[s._v("#")]),s._v(" 写法二")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#include <iostream>\n \nusing namespace std;\n \n// 基类\nclass Shape \n{\n   public:\n      void setWidth(int w)\n      {\n         width = w;\n      }\n      void setHeight(int h)\n      {\n         height = h;\n      }\n   protected:\n      int width;\n      int height;\n};\n \n// 派生类\nclass Rectangle: public Shape\n{\n   public:\n      int getArea()\n      { \n         return (width * height); \n      }\n};\n \nint main(void)\n{\n   Rectangle Rect;\n \n   Rect.setWidth(5);\n   Rect.setHeight(7);\n \n   // 输出对象的面积\n   cout << "Total area: " << Rect.getArea() << endl;\n \n   return 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br")])]),n("h1",{attrs:{id:"多态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多态"}},[s._v("#")]),s._v(" 多态")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('class Shape {\n   protected:\n      int width, height;\n   public:\n      Shape( int a=0, int b=0)\n      {\n         width = a;\n         height = b;\n      }\n      virtual int area()   // virtual 表示重写后以子类为主。  没有他就是做基类的\n      {\n         cout << "Parent class area :" <<endl;\n         return 0;\n      }\n    // \n    virtual int area22() = 0;  // 纯虚函数，表示自己没有实现，叫给子类实现。\n};\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h1",{attrs:{id:"异常处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[s._v("#")]),s._v(" 异常处理")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('try\n{\n   // 保护代码\n}catch( ExceptionName e )\n{\n  // 处理 ExceptionName 异常的代码\n    throw "Division by zero condition!";\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('struct MyException : public exception\n{\t\n    // what() 是异常类提供的一个公共方法，它已被所有子异常类重载。这将返回异常产生的原因。\n  const char * what () const throw ()\n  {\n    return "C++ Exception";\n  }\n};\n \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h1",{attrs:{id:"动态内存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态内存"}},[s._v("#")]),s._v(" 动态内存")]),s._v(" "),n("p",[s._v("使用 "),n("strong",[s._v("delete")]),s._v(" 运算符，删除之前由 "),n("strong",[s._v("new")]),s._v(" 运算符分配的内存")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#include <iostream>\nusing namespace std;\n\nclass Box\n{\n   public:\n      Box() { \n         cout << "调用构造函数！" <<endl; \n      }\n      ~Box() { \n         cout << "调用销毁函数！" <<endl; \n      }\n};\n\nint main ()\n{\n   double* pvalue  = NULL; // 初始化为 null 的指针\n   pvalue  = new double;   // 为变量请求内存\n \n   *pvalue = 29494.99;     // 在分配的地址存储值\n   cout << "Value of pvalue : " << *pvalue << endl;\n \n   delete pvalue;         // 释放内存\n \n    Box* myBoxArray = new Box[4];\n    delete [] myBoxArray; // 释放数组对象\n    \n   return 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("h1",{attrs:{id:"命名空间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命名空间"}},[s._v("#")]),s._v(" 命名空间")]),s._v(" "),n("p",[s._v("类似java包名的概念。")]),s._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#include <iostream>\nusing namespace std;\n \n// 嵌套的命名空间\nnamespace namespace_name1 {\n   // 代码声明\n   namespace namespace_name2 {\n      // 代码声明\n       void func(){\n     \t cout << "Inside 嵌套的命名空间" << endl;\n  \t }\n   }\n}\n\n// 第一个命名空间\nnamespace first_space{\n   void func(){\n      cout << "Inside first_space" << endl;\n   }\n}\n// 第二个命名空间\nnamespace second_space{\n   void func(){\n      cout << "Inside second_space" << endl;\n   }\n}\nusing namespace first_space; // 使用first_space作为默认的\nint main ()\n{\n \t\n   // 调用第一个命名空间中的函数\n   first_space::func();\n   // 调用第一个命名空间中的函数  和first_space::func(); 相同。\n   func();\n    \n   // 调用第二个命名空间中的函数\n   second_space::func(); \n \t// 调用嵌套的命名空间\n    namespace_name1::namespace_name2.func();\n   return 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("h1",{attrs:{id:"模板"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模板"}},[s._v("#")]),s._v(" 模板")]),s._v(" "),n("p",[s._v("模板是泛型编程的基础。类似于java中泛型。")]),s._v(" "),n("h1",{attrs:{id:"预处理器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#预处理器"}},[s._v("#")]),s._v(" 预处理器")]),s._v(" "),n("p",[s._v("c语言的宏，语法糖。")]),s._v(" "),n("h1",{attrs:{id:"信号处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#信号处理"}},[s._v("#")]),s._v(" 信号处理")]),s._v(" "),n("p",[s._v("信号是由操作系统传给进程的中断，会提早终止一个程序。在 UNIX、LINUX、Mac OS X 或 Windows 系统上，可以通过按 Ctrl+C 产生中断。")]),s._v(" "),n("p",[s._v("有些信号不能被程序捕获，但是下表所列信号可以在程序中捕获，并可以基于信号采取适当的动作。这些信号是定义在 C++ 头文件 "),n("csignal",[s._v(" 中。")])],1),s._v(" "),n("h2",{attrs:{id:"signal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signal"}},[s._v("#")]),s._v(" signal()")]),s._v(" "),n("p",[s._v("用来捕获突发事件")]),s._v(" "),n("h2",{attrs:{id:"raise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#raise"}},[s._v("#")]),s._v(" raise()")]),s._v(" "),n("p",[s._v("生成信号")])])}),[],!1,null,null,null);n.default=t.exports}}]);