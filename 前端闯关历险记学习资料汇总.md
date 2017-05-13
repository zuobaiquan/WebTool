### 1.1 前端开发规范总览

> [《前端开发规范手册》](https://gold.xitu.io/entry/5602f35a60b2b52ca75013cb/)
> [《WEB 前端规范》](https://gold.xitu.io/entry/5853a4cd1b69e6006c8649f1/)
> [《Web 前端开发规范文档》](https://gold.xitu.io/entry/578dbf2c79bc44005ff4e477/)

### 1.2 HTML规范

> [《HTML 最佳实践》](https://gold.xitu.io/entry/565a889260b21eabe0fefa98/)
> [《前端编码规范（2）—— HTML 规范》](https://gold.xitu.io/entry/5858dfaf128fe1006dcbe509/)
> [《Google HTML/CSS 编程规范》](https://gold.xitu.io/entry/57de02620bd1d00057f12264/)

### 1.3 CSS规范

> [《CSS 命名规范总结》](https://gold.xitu.io/entry/57c80c31c4c97100541ebb31/)
> [《Airbnb CSS / Sass 指南》](https://gold.xitu.io/entry/5707c60bd342d300542c60a4/)
> [《CSS 代码格式规范》](https://gold.xitu.io/entry/56fdd00fc4c9710059e1dc74/)

### 1.4 JS规范

> [《JavaScript风格指南》](https://gold.xitu.io/post/587979148d6d810058bb3b32)
> [《JavaScript 代码整洁之道》](https://gold.xitu.io/entry/589d1f8286b599006b2bb861/)
> [《Airbnb 的 JavaScript 编程规范》](https://gold.xitu.io/entry/55a49c85e4b05001a7775df9/)

### 1.5 ES6规范

> [《编程风格》](https://gold.xitu.io/entry/57c9256b67f3560057b00cbd/)

## 二、前言

国学大师王国维自己的著作《人间词话》中说：

古今之成大事业、大学问者，必经过三重境界：

**第一境界:昨夜西风凋碧树,独上高楼,望尽天涯路。**

**第二境界:衣带渐宽终不悔,为伊消得人憔悴。**

**第三境界:众里寻他千百度,蓦然回首,那人却在灯火阑珊处。**

其实我觉得学习JavaScript也要经历类似的三种阶段：

**第一境界:看山是山，看水是水。**

**第二境界:看山不是山，看水不是水。**

**第三境界:看山还是山，看水还是水。**

国学大师王国维精妙地以三句词道破人生之路：起初的迷惘，继而的执着和最终的顿悟。
我以瞎几把乱扯三句词道破学习JavaScript之路：起初的表象，继而的本质和最终的本质回归到现象。

## 三、JavaScript基础篇

看是是山，看水是水。

**万丈高楼平地起，胸有丘壑宏图画。**

`合抱之木,生于毫末;九层之台,起于累土;千里之行,始于足下。任何事情都要从基础做起，打好基础，不浮躁，才能做好一件事，学习一门语言也是一样，从“Hello World!"开始，踏踏实实，夯实基础，基础知识是整个学习体系的根本,没有牢固的基础知识作为根基,我们的学习和努力必将事倍功半,学习提纲是巩固基础知识的一种有效手段.`

> [《思维导图来学习Javascript基础知识》](https://gold.xitu.io/post/57eb187eda2f600060ead7d7)
> [《多年 JavaScript 学习笔记整理》](https://gold.xitu.io/entry/5812ec99570c3500605b366f/)
> [《javascript 基础小结篇》](https://gold.xitu.io/entry/57e7673da22b9d0061506d14/)
> [《前端开发基础 - JavaScript》](https://gold.xitu.io/entry/56c69793efa63100544477af/)
> [《你不知道的 Javascript》](https://gold.xitu.io/entry/57fde2520e3dd90057dbda6c/)

## 四、JavaScript进阶篇

看山不是山，看水不是水。

**其实地上本没有坑，踩的人多了，于是就有了。**

JS是一门玄学，是一门很灵活的语言，当然里面有很多不好懂的概念，尤其是学完基础之后，对`执行环境`、`this`、`类型转换`、`作用域链`、`闭包`、`原型链`、`继承`、`eval`、`JS左值与引用`、`浅复制与深复制`、`IIFE`、`模块化`、`函数式编程`等等都有着这样或那样的不解之惑，想要成为JS大神这些门槛和坑不得不踩。

### 4.1 内存空间

`因为JavaScript具有自动垃圾回收机制，所以对于前端开发来说，内存空间并不是一个经常被提及的概念，很容易被大家忽视。特别是很多不是计算机专业的朋友在进入到前端之后，会对内存空间，内存管理，内存释放的认知比较模糊，甚至有些人干脆就是一无所知。`

> [《前端基础进阶：详细图解 JavaScript 内存空间》](https://gold.xitu.io/entry/589c29a9b123db16a3c18adf/)
> [《JavaScript 内存管理》](https://gold.xitu.io/entry/58b3914b2f301e006c10f6fb/)
> [《JavaScript 中的内存释放》](https://gold.xitu.io/entry/5876018e128fe1006b4bda78/)

### 4.2 执行上下文与作用域

`首先来说说js中的执行环境，所谓执行环境（也称执行上下文–execution context）它是JavaScript中最为重要的一个概念。执行环境定义了变量或函数有权访问的其他数据 ，决定了它们各自的行为。而每个执行环境都有一个与之相关的变量对象，环境中定义的所有变量和函数都保存在这个对象中。`

`当代码在一个环境中执行时，会创建变量对象的一个作用域链（scope chain）。作用域链的用途是保证对执行环境有权访问的所有变量和函数的有序访问。作用域链包含了执行环境栈中的每个执行环境对应的变量对象.通过作用域链，可以决定变量的访问和标识符的解析。`

> [《前端基础进阶：详细图解 JavaScript 执行上下文》](https://gold.xitu.io/entry/589d916c1b69e60059bdde2c/)
> [《深入探讨 JavaScript 的执行环境和栈》](https://gold.xitu.io/entry/5833f18fe696c9004d6da42e/)
> [《图解 JS 上下文与作用域》](https://gold.xitu.io/entry/568a4e2460b24d71fec78e64/)

### 4.3 变量对象

`深入理解执行上下文中的变量对象，从原理上解释变量提升，为接下来理解作用域链，闭包，原型打下坚实的理论基础，值得基础知识不牢固的盆友一阅。`

> [《前端基础进阶：变量对象详解，教你如何高逼格地解释变量提升》](https://gold.xitu.io/entry/589eecbb8d6d81006c91fc49/)
> [《《JavaScript 闯关记》之变量和数据类型》](https://gold.xitu.io/post/580f6489a22b9d006391d6b1)

### 4.4 作用域链与闭包

`当代码在一个环境中执行时，会创建变量对象的一个作用域链（scope chain）。作用域链的用途是保证对执行环境有权访问的所有变量和函数的有序访问。作用域链包含了执行环境栈中的每个执行环境对应的变量对象.通过作用域链，可以决定变量的访问和标识符的解析。`

关于闭包的概念，是婆说婆有理。因而，我就翻阅了**红皮书(p178)**上对于闭包的陈述：
`闭包是指有权访问另外一个函数作用域中的变量的函数`
这概念有点绕，拆分一下。从概念上说，闭包有两个特点：

- 1、函数
- 2、能访问另外一个函数作用域中的变量

在ES 6之前，Javascript只有函数作用域的概念，没有块级作用域（但catch捕获的异常 只能在catch块中访问）的概念（IIFE可以创建局部作用域）。每个函数作用域都是封闭的，即外部是访问不到函数作用域中的变量。

> [《前端基础进阶：详细图解，彻底搞懂闭包与作用域链》](https://gold.xitu.io/entry/58a0bc942f301e0069ed6d55/)
> [《JavaScript 闯关记之作用域和闭包》](https://gold.xitu.io/post/58500a02128fe10069319d83)
> [《你想知道的关于 JavaScript 作用域的一切 (译)》](https://gold.xitu.io/entry/5770a7c8128fe1005a3a381f/)
> [《弄懂 JavaScript 的作用域和闭包》](https://gold.xitu.io/entry/583fd9c4ac502e006b8f64ab/)

### 4.5 this

`This,传说中的天使还是魔鬼？对于新手来说，this的指向一直是很头疼的地方，用的好就是天使，用的差就是魔鬼了，人人都想成为代码中的天使，为了避免成为魔鬼，我们必须好好深入学习一下this的作用机理和一些常见的坑。`

> [《前端基础进阶：全方位解读 this》](https://gold.xitu.io/entry/58a3605e570c35005786f9bf/)
> [《JavaScript 中的 this 陷阱的最全收集 – 没有之一》](https://gold.xitu.io/entry/580da43ba0bb9f0061c84913/)
> [《Javascript 深入浅出 this》](https://gold.xitu.io/entry/584939baac502e006c59448e/)
> [《从 ECMA 规范深入理解 js 中的 this》](https://gold.xitu.io/entry/57a833b95bbb50006435de85/)

### 4.6 原型链

`在JS里，万物皆对象。方法（Function）是对象，方法的原型(Function.prototype)是对象。因此，它们都会具有对 象共有的特点。 即：对象具有属性__proto__，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例 能够访问在构造函数原型中定义的属性和方法。`

> [《JavaScript原型详解》](https://gold.xitu.io/post/57f336a9816dfa00568f300c)
> [《三张图搞懂JavaScript的原型对象与原型链》](https://gold.xitu.io/post/5835853f570c35005e413b19)
> [《JavaScript 原型中的哲学思想》](https://gold.xitu.io/entry/57e49e7b2e958a0054275192/)
> [《一张图搞懂 Javascript 中的原型链、prototype、**proto**的关系》](https://gold.xitu.io/entry/57f89fc9a0bb9f00582dc000/)

### 4.7 继承

`Javascript 这门语言对于习惯了众多传统 OOP 语言 (c++,Java 等) 的 coder 来说其实是一门很奇怪的语言, 因为 Javascript 的 OOP 方式是基于原型的, 而非传统的类继承,主要有原型链继承，借用构造函数继承,组合继承，寄生式继承，寄生组合继承。`

> [《js 原型链继承，借用构造函数继承, 组合继承，寄生式继承，寄生组合继承》](https://gold.xitu.io/entry/588977f28d6d810058e6421d/)
> [《Javascript 三招两式之对象继承 (上)》](https://gold.xitu.io/entry/57babb731532bc0065742d8d/)
> [《JavaScript 三招两式之对象继承 (下)》](https://gold.xitu.io/entry/57dcff190e3dd90069674294/)
> [《征服 JavaScript 面试系列：类继承和原型继承的区别》](https://gold.xitu.io/entry/5885db221b69e600592253e7/)
> [《谈一谈 JavaScript 继承》](https://gold.xitu.io/entry/58a297988d6d8100588996f9/)

### 4.8 arguments

`每个函数都会有一个 Arguments 对象实例 arguments，它引用着函数的实参，可以用数组下标的方式”[]” 引用 arguments 的元素。arguments.length 为函数实参个数，arguments.callee 引用函数自身。`

> [《Arguments 对象深入了解》](https://gold.xitu.io/entry/57ec8215bf22ec00643d7a02/)
> [《javascript arguments(callee、caller) 详解》](https://gold.xitu.io/entry/58184ccda22b9d00679976c0/)
> [《Javascript 中的 arguments 对象》](https://gold.xitu.io/entry/57f081d5128fe100542a02fc/)

### 4.9 类型转换

`如果把通过函数或方法调用，明确的将某种类型转换成另一种类型称为显示转换 ，相反则称为隐式类型转换 。google和维基百科中没有找到“显示类型转换”，“隐式类型转换”的字眼。暂且这么称呼。 JavaScript的数据类型是非常弱的（不然不会叫它做弱类型语言了）！在使用算术运算符时，运算符两边的数据类型可以是任意的，比如，一个字符串可和数字相加。之所以不同的数据类型之间可以做运算，是因为JavaScript引擎在运算之前会悄悄的把他们进行了隐式类型转换的，如下是数值类型和布尔类型的相加：`

```
3 + true; // 4
结果是一个数值型！如果是在C或者Java环境的话，上面的运算肯定会因为运算符两边的数据类型不一致而导致报错的！但
是，在JavaScript中，只有少数情况下，错误类型才会导致出错，比如调用非函数，或者读取null或者undefined的属
性时。
```

> [《从 [\]==![] 为 true 来剖析 JavaScript 各种蛋疼的类型转换》](https://gold.xitu.io/entry/58acf34f0ce463006b1fc884/)
> [《一篇文章搞定 JS 类型转换》](https://gold.xitu.io/entry/5884f17f1b69e60058e28b2d/)
> [《聊一聊 JS 中的『隐式类型转换』》](https://gold.xitu.io/entry/56ce8c137db2a262292035d3/)

### 4.10 IIFE

`全拼Imdiately Invoked Function Expression，立即执行的函数表达式。立即执行函数在模块化中也大有用处。用立即执行函数处理模块化可以减少全局变量造成的空间污染，构造更多的私有变量。`

**立即执行函数写法大全：**

```
// 最常用的两种写法
(function(){ /* code */ }()); // 老道推荐写法
(function(){ /* code */ })(); // 当然这种也可以

// 括号和JS的一些操作符（如 = && || ,等）可以在函数表达式和函数声明上消除歧义
// 如下代码中，解析器已经知道一个是表达式了，于是也会把另一个默认为表达式
// 但是两者交换则会报错
var i = function(){ return 10; }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();

// 如果你不怕代码晦涩难读，也可以选择一元运算符
!function(){ /* code */ }();
~function(){ /* code */ }();
-function(){ /* code */ }();
+function(){ /* code */ }();

// 你也可以这样
new function(){ /* code */ }
new function(){ /* code */ }() // 带参数
```

> [《javascript模块化编程-详解立即执行函数表达式IIFE》](https://gold.xitu.io/entry/58a093ed570c35005777b08d/)
> [《Javascript 的匿名函数与自执行》](https://gold.xitu.io/entry/57fee360a22b9d005b1d9ae3/)
> [《js 匿名自执行函数中闭包的高级使用（前端必看）》](https://gold.xitu.io/entry/5800eb7da22b9d005b36156e/)
> 这一篇掘金没有推荐过，不过我认为真的写的很全很详细，这里也推荐一下：
> [《详解javascript立即执行函数表达式（IIFE）》](http://web.jobbole.com/82520/)

### 4.11 setTimeout

`平时的工作中，也许你会经常用到setTimeout这个方法，可是你真的了解setTimeout吗？本系列想通过总结setTimeout的用法，顺便来探索javascript里面的事件执行机制。在一个基础阶段，理解JavaScript定时器的工作原理的是非常重要的。通常它们看起来不那么直观，因为它们处于单线程中。`

> [《[译\] JavaScript 中的定时器是如何工作的？》](https://gold.xitu.io/entry/5847c0f2a22b9d007aad2bdf/)
> [《关于 JavaScript 定时器我的一些小理解》](https://gold.xitu.io/entry/57be925e0a2b58006cd3f70b/)
> [《JavaScript 定时器及相关面试题》](https://gold.xitu.io/entry/58b253c6ac502e0069d5e4d9/)
> [《【原】以 setTimeout 来聊聊 Event Loop》](https://gold.xitu.io/entry/58b2697b1b69e60058add155/)

### 4.12 Object.defineProperty()函数

`该方法允许精确添加或修改对象的属性。一般情况下，我们为对象添加属性是通过赋值来创建并显示在属性枚举中（for...in 或 Object.keys 方法）， 但这种方式添加的属性值可以被改变，也可以被删除。而使用 Object.defineProperty() 则允许改变这些额外细节的默认设置。例如，默认情况下，使用 Object.defineProperty() 增加的属性值是不可改变的。 对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。数据描述符是一个拥有可写或不可写值的属性。存取描述符是由一对 getter-setter 函数功能来描述的属性。描述符必须是两种形式之一；不能同时是两者。`

> [《理解 JavaScript 的 Object.defineProperty() 函数》](https://gold.xitu.io/entry/57a4a3e51532bc0060bd5011/)
> [《解析神奇的 Object.defineProperty》](https://gold.xitu.io/entry/56a5733bdf0eea0054de62d9/)
> [《双向绑定的简单实现 - 基于 ES5 对象的 getter/setter 机制》](https://gold.xitu.io/entry/58878370128fe1006c4a84ab/)

### 4.13 call、apply、bind

`今天看博客时，看到了这样的一段js代码： var bind = Function.prototype.call.bind(Function.prototype.bind); 上面那段代码涉及到了call、bind，所以我想先区别一下call、apply、bind的用法。这三个方法的用法非常相似，将函数绑定到上下文中，即用来改变函数中this的指向。这个系列就是让大家深入理解其中的差异。`

> [《JS 中 call、apply、bind 那些事》](https://gold.xitu.io/entry/5812edcea22b9d006779b067/)
> [《JavaScript 中的 call、apply、bind 深入理解》](https://gold.xitu.io/entry/58871eba570c350062d2eab0/)
> [《回味JS基础:call apply 与 bind》](https://gold.xitu.io/post/57dc97f35bbb50005e5b39bd)
> [《深入浅出妙用 Javascript 中 apply、call、bind》](https://gold.xitu.io/entry/58a31ee02f301e00690e2cd5/)

### 4.14 深拷贝与浅拷贝

```
eg：有A、B两个对象，且都有子对象

深拷贝：将B对象拷贝到A对象中，包括B里面的子对象;

浅拷贝：将B对象拷贝到A对象中，但不包括B里面的子对象;
```

`首先深复制和浅复制只针对像 Object, Array 这样的复杂对象的。简单来说，浅复制只复制一层对象的属性，而深复制则递归复制了所有层级。`

> [《JavaScript 深拷贝》](https://gold.xitu.io/entry/57bd3817a34131005b21cbdb/)
> [《javaScript 中的浅拷贝和深拷贝》](https://gold.xitu.io/entry/58a3c1acda2f6000530b3cef/)
> [《深入剖析 JavaScript 的深复制》](https://gold.xitu.io/entry/58af00682f301e0068f35fc8/)

### 4.15 正则表达式

`还记得被称为正则小王子的jQuery作者吗？但正则表达式对于我来说一直像黑暗魔法一样的存在。手机正则去网上搜，邮箱正则去网上搜，复杂点的看看文档拼凑一下，再复杂只能厚着脸皮让其他同事给写一个。从来没有系统的学习过，搞完这个系列是不是准备拿下它。`

> [《正则表达式 - 理论基础篇》](https://gold.xitu.io/entry/57b1e6d579bc440058ea0070/)
> [《正则表达式学习笔记》](https://gold.xitu.io/post/582dfcfda22b9d006b726d11)
> [《正则表达式实践篇》](https://gold.xitu.io/entry/5866303161ff4b0057698df8/)
> [《常见的正则表达式可视化描述》](https://gold.xitu.io/entry/581efdb7da2f60005d00ed65/)
> [《最全面的常用正则表达式大全》](https://gold.xitu.io/entry/5686056160b2e495ddd8b9a5/)

直接来个[![img](https://dn-mhke0kuv.qbox.me/7df0063363b254c6a0d4.png?imageView/2/w/100/h/100/q/80/format/png)](https://dn-mhke0kuv.qbox.me/7df0063363b254c6a0d4.png?imageView/2/w/100/h/100/q/80/format/png)**膜法小编** 的收藏集：

> [《正则表达式合集》](https://gold.xitu.io/collection/582d44ed1e35c90ec1305837))

### 4.16 事件

JavaScript 程序采用了异步事件驱动编程（Event-driven programming）模型，维基百科对它的解释是：

`事件驱动程序设计（英语：Event-driven programming）是一种电脑程序设计模型。这种模型的程序运行流程是由用户的动作（如鼠标的按键，键盘的按键动作）或者是由其他程序的消息来决定的。相对于批处理程序设计（batch programming）而言，程序运行的流程是由程序员来决定。批量的程序设计在初级程序设计教学课程上是一种方式。然而，事件驱动程序设计这种设计模型是在交互程序（Interactive program）的情况下孕育而生的`

> [《JavaScript 浏览器事件解析》](https://gold.xitu.io/entry/57eef3a967f35600582f5efa/)
> [《深入理解 - 事件委托》](https://gold.xitu.io/entry/5896d04d61ff4b006b0e337a/)
> [《我也来说说 JS 的事件机制》](https://gold.xitu.io/entry/57fb0544128fe100546c26dd/)
> [《DOM 事件深入浅出（一）》](https://gold.xitu.io/entry/57f65722128fe100544d3f81/)
> [《DOM 事件深入浅出（二）》](https://gold.xitu.io/entry/57fe2b500bd1d00058dcc6b3/)
> [《JS 中的事件绑定、事件监听、事件委托是什么？》](https://gold.xitu.io/entry/57ea329e67f3560057ad41a6/)

### 4.17 其他混淆点

`其他一些容易混淆的难点就不单独开一个类型，这里就统一做一个系列说明，也是平时经常遇到的一些痛点和难点吧，主要是区分一些概念，知道彼此之间的异同，以下简称一张图系列。`

> [《一张图看懂JavaScript中数组的迭代方法：forEach、map、filter、reduce、every、some》](https://gold.xitu.io/post/5835808067f3560065ed4ab2)
> [《一张图看懂encodeURI、encodeURIComponent、decodeURI、decodeURIComponent的区别》](https://gold.xitu.io/post/5835836361ff4b0061f38a5d)
> [《一张图彻底掌握 scrollTop, offsetTop, scrollLeft, offsetLeft……》](https://gold.xitu.io/entry/57cba52079bc440063ff0ae9/)
> [《一张图看懂 Function 和 Object 的关系及简述 instanceof 运算符》](https://gold.xitu.io/post/58358606570c35005e4142bd)

## 五、JavaScript高手篇

看山还是山，看水还是水。

**如果学习JavaScript不是为了成为高手，那将毫无意义。**

**其实，高手有一颗寂寞的心，因为高手的造就本就是用寂寞堆积而成。**

### 5.1 JavaScript数据结构与算法篇

**程序设计=数据结构+算法**

#### 5.1.1 数组去重

> [《也谈 JavaScript 数组去重》](https://gold.xitu.io/entry/58aaaab55c497d005f6b24eb/)
> [《数组去重 – 这几种方法够不?》](https://gold.xitu.io/entry/586efec161ff4b006d29ad93/)
> [《js 对数组去重的完整版》](https://gold.xitu.io/entry/58afa0b05c497d0067785123/)

#### 5.1.2 排序

> [《十大经典排序算法总结（JavaScript描述）》](https://gold.xitu.io/post/57dcd394a22b9d00610c5ec8)
> [《JS 家的排序算法》](https://gold.xitu.io/entry/57d906ee79bc440065d276a1/)
> [《JS 中常见排序算法详解》](https://gold.xitu.io/entry/5883501a128fe10065daaeb0/)

#### 5.1.3 查找

> [《查找算法之顺序、二分、二叉搜索树、红黑树 详细比较总结》](https://gold.xitu.io/entry/56eecbb6128fe100513d1a20/)

#### 5.1.4 数据结构

> [《学习JavaScript数据结构(一)——栈和队列》](https://gold.xitu.io/post/5819c153da2f60005ddc1e8a)
> [《学习 JavaScript 数据结构(二)——链表》](https://gold.xitu.io/post/58287452570c3500587642b6)
> [《学习 JavaScript 数据结构(三)——集合》](https://juejin.im/post/583eaca2a22b9d006c243ccf)
> [《学习 javascript 数据结构 (四)——树》](https://gold.xitu.io/post/587cccca8d6d810058d377e2)
> [《javaScript的数据结构与算法（五）——字典和散列表》](https://gold.xitu.io/post/58b04cc5ac502e006c9617ef)

#### 5.1.5 其它

> [《前端面试中常见的算法问题读后整理》](https://gold.xitu.io/entry/5826c2c12f301e005849cdca/)
> [《常见数据结构 (一)- 栈, 队列, 堆, 哈希表》](https://gold.xitu.io/entry/58330cbfa0bb9f005a0fed62/)
> [《常见数据结构 (二)- 树 (二叉树，红黑树，B 树)》](https://gold.xitu.io/entry/58330d1067f356005bfb211b/)
> [《算法学习笔记》](https://gold.xitu.io/entry/5604a342ddb2e44a7af459ed/)
> [《javascript array js 缓存算法、数组随机抽取、字母串转数字，数字转字符串》](https://gold.xitu.io/entry/58a57f2861ff4b78fc9d9f9c/)
> [《JavaScript 算法练习》](https://gold.xitu.io/entry/574e612349830c0058400ddf/)

### 5.2 JavaScript跨域

**　由于浏览器同源策略，凡是发送请求url的协议、域名、端口三者之间任意一与当前页面地址不同即为跨域。具体可以查看下表（来源）**
　[![img](http://ww1.sinaimg.cn/large/a660cab2gy1fd5f7vaka5j21440mejwe)](http://ww1.sinaimg.cn/large/a660cab2gy1fd5f7vaka5j21440mejwe)　　

> [《前端跨域问题及解决方案》](https://gold.xitu.io/entry/589bd7bc0ce463005620e6e4/)
> [《直白的话告诉你在 javascript 中如何用 jsonp 实现跨域请求》](https://gold.xitu.io/entry/589556d0128fe1006ca72c19/)
> [《前端 Ajax 跨域请求方案沙里淘金》](https://gold.xitu.io/entry/586d0590da2f600055ced97b/)
> [《你所不知道的跨域资源共享(CORS)》](https://gold.xitu.io/post/58539a7861ff4b00684aa29e)
> [《带你一步一步的理解前端跨域的原理及实践》](https://gold.xitu.io/entry/57d11158816dfa00542b5e89/)
> [《HTML5 跨域通信 API - window.postMessage》](https://gold.xitu.io/entry/57d7c8005bbb50005bd0de1e/)
> [《前端跨域整理》](https://gold.xitu.io/post/5815f4abbf22ec006893b431)
> [《跨域问题，解决之道》](https://gold.xitu.io/post/5816158e2e958a00549e80f6)

### 5.3 JavaScript设计模式

`为什么要学习设计模式？ 做事情之前问个为什么总是好的。关于设计模式的好坏，我在知乎上也看过一些讨论，有知友对其提出过一些疑问，里面有一些关于设计模式的观点：`

- 设计模式有何不妥，所谓的荼毒体现在哪？
- 设计模式是不是有点太玄了？

`任何事物的出现都有其道理，任何语言都有其不足之处，设计模式是对语言不足的补充（Peter Norvig)。设计模式也是编程经验的总结，我想学习它对像我这样的前端新手的能力会有很大的提升。`

细说说它的好处：

1. 设计模式能让你用更少的词汇做更充分的沟通；
2. 谈话在模式层次时，不会被压低到对象和类这种琐碎的事情上；
3. 懂设计模式的团队，彼此之间对于设计的看法不容易产生误解；
4. 共享词汇能帮助初级人员快速成长。

> [《学习设计模式前需要知道的事情》](https://gold.xitu.io/entry/575ccf9b207703006ad70f16/)
> [《常用的 JavaScript 设计模式》](https://gold.xitu.io/entry/5816e545570c3500607205f1/)
> [《JavaScript 设计模式》读后感觉很复杂](https://gold.xitu.io/entry/585cc5f5ac502e00671fe20e/)
> [《JavaScript 设计模式》](https://gold.xitu.io/entry/5882e8c52f301e00698d4c4f/)
> [《听飞狐聊 JavaScript 设计模式系列 13》](https://gold.xitu.io/entry/5684883b60b2b60f65d66346/)

### 5.4 JavaScript函数式编程

**什么是函数式编程？**

- 与面向对象编程（Object-oriented programming）和过程式编程（Procedural programming）并列的编程范式。
- 最主要的特征是，函数是第一等公民。
- 强调将计算过程分解成可复用的函数，典型例子就是map方法和reduce方法组合而成 MapReduce 算法。
- 只有纯的、没有副作用的函数，才是合格的函数。

> [《函数式编程入门教程》](https://gold.xitu.io/entry/58aebb69128fe1006ca9934b/)
> [《想学函数式编程？》](https://gold.xitu.io/collection/582c0c336a226505e65d0122)
> [《给 JavaScript 开发者讲讲函数式编程》](https://gold.xitu.io/entry/57237d2271cfe4006b5298ca/)
> [《前端基础进阶（七）：函数与函数式编程》](https://gold.xitu.io/entry/58adbb0d2f301e006c483708/)
> [《『翻译』JavaScript 函数式编程》](https://gold.xitu.io/post/589ea0140ce4630056347991)
> [《JavaScript 函数式编程》](https://gold.xitu.io/entry/587de7b08d6d81005899a2a3/)

### 5.5 JavaScript高阶函数

`具体来说，在 JavaScript 中，我们可以将一个函数 A 作为参数传给另一个函数 B，或者，在函数 B 中将函数 A 作为返回值返回。那么这里的函数 B 就是上面所说的高阶函数。 在《javascript设计模式和开发实践》中是这样定义的。 函数可以作为参数被传递； 函数可以作为返回值输出。`

> [《javascript 高阶函数介绍》](https://gold.xitu.io/entry/5815876c8ac247004fb6d132/)
> [《程序媛学 JS 小记一笔——高阶函数》](https://gold.xitu.io/entry/5832c4fd128fe100697df278/)
> [《高阶函数对系统的 “提纯”》](https://gold.xitu.io/entry/573ed4d479df5400604765df/)
> [《JavaScript 之闭包与高阶函数（一）》](https://gold.xitu.io/entry/56cfe850c507b600507cf6c9/)

### 5.6 JavaScript性能优化

**天下武功，无坚不摧，唯快不破。**

`Javascript是一门非常灵活的语言，我们可以随心所欲的书写各种风格的代码，不同风格的代码也必然也会导致执行效率的差异，作用域链、闭包、原型继承、eval等特性，在提供各种神奇功能的同时也带来了各种效率问题，用之不慎就会导致执行效率低下,开发过程中零零散散地接触到许多提高代码性能的方法，整理一下平时比较常见并且容易规避的问题。`

> [《吹毛求疵的追求优雅高性能JavaScript》](https://gold.xitu.io/post/58affa7d128fe1006cb3a2a3)
> [《天生就慢的 DOM 如何优化？》](https://gold.xitu.io/entry/58abed228d6d810058bee22f/)
> [《Javascript 高性能动画与页面渲染》](https://gold.xitu.io/entry/58b0187c1b69e60058a09faf/)
> [《一个关于 js 线程和性能优化的文档，有例子哦！》](https://gold.xitu.io/entry/587d8d5f61ff4b0065098bcf/)
> [《合理使用 IIFE 优化 JS 引擎的性能》](https://gold.xitu.io/entry/582b1e7ba22b9d006b5e61f1/)
> [《高性能 JavaScript》读书笔记](https://gold.xitu.io/entry/58a4560261ff4b0058b096f3/)

### 5.7 JavaScript 柯里化

**就像最早听到斐波拉切数列一样，第一次听到柯里化我也是懵逼的**

`柯里化又称部分求值，字面意思就是不会立刻求值，而是到了需要的时候再去求值。如果看的懵逼，没事，看完整篇文章再回过头来看这里你就会豁然开朗。 反柯里化的作用是，当我们调用某个方法，不用考虑这个对象在被设计时，是否拥有这个方法，只要这个方法适用于它，我们就可以对这个对象使用它。`

> [《前端高手必备：详解 JavaScript 柯里化》](https://gold.xitu.io/entry/58b316d78d6d810058678579/)
> [《简单理解JavaScript中的柯里化和反柯里化》](https://gold.xitu.io/post/58a5879e1b69e6006d1e8748)
> [《浅谈函数式编程柯里化的魔法》](https://gold.xitu.io/entry/58a11ca261ff4b006b4f8755/)
> [《从一道面试题谈谈函数柯里化 (Currying)》](https://gold.xitu.io/entry/5884efee128fe1006c3b64d5/)
> [《掌握 JavaScript 函数的柯里化》](https://gold.xitu.io/entry/5798191f128fe10056d89bac/)

### 5.8 JavaScript调试

`如今 Chrome 浏览器无疑是最受前端青睐的工具，原因除了界面简洁、大量的应用插件，良好的代码规范支持、强大的 V8 解释器之外，还因为 Chrome 开发者工具提供了大量的便捷功能，方便我们前端调试代码，我们在日常开发中是越来越离不开 Chrome，是否熟练掌握 Chrome 调试技巧恐怕也会成为考量前端技术水平的标杆。 介绍 Chrome 调试技巧的文章很多，本文结合我自己的开发经验，希望从实际运用的角度为大家再一次谈一谈这些功能，也希望对大家都有所帮助和启发。 在chrome的开发者工具中，通过断点调试，我们能够非常方便的一步一步的观察JavaScript的执行过程，直观感知函数调用栈，作用域链，变量对象，闭包，this等关键信息的变化。因此，断点调试对于快速定位代码错误，快速了解代码的执行过程有着非常重要的作用，这也是我们前端开发者必不可少的一个高级技能。`

> [《前端高手必备技能：如何在 chrome 开发者工具中观察函数调用栈、作用域链与闭包》](https://gold.xitu.io/entry/58a9a3848d6d8100583acbf4/)
> [《比 console.log 更多－chrome 调试命令》](https://gold.xitu.io/entry/583c0cce61ff4b006b590676/)
> [《JavaScript30 中文指南 - 09 Console 调试技巧指南》](https://gold.xitu.io/entry/586f45b61b69e6005c9058a1/)
> [《聊一聊移动端调试那些事》](https://gold.xitu.io/entry/5851e77d61ff4b006c8414dd/)
> [《前端 chrome 浏览器调试总结》](https://gold.xitu.io/entry/58452127128fe1006c51e5b6/)
> [《我的职业是前端工程师【五】: 前端工程师必会的六个调试技能》](https://gold.xitu.io/entry/58aa2bc8ac502e007e7646f2/)
> [《九个 Console 命令，让 js 调试更简单》](https://gold.xitu.io/entry/57b58ec275c4cd7290d3006b/)
> [《再谈 Chrome 实用调试技巧》](https://gold.xitu.io/entry/57962a538ac247005f35a8bc/)
> [《调试 CSS 的方法》](https://gold.xitu.io/entry/57d106447db2a200681e1361/)
> [《前端调试效率低？试试这 10 个 Chrome 开发者工具 使用技巧》](https://gold.xitu.io/entry/572980032e958a006946069c/)
> [《前端开发中的 JS 调试技巧》](https://gold.xitu.io/entry/57597d161532bc00607b0baa/)

### 5.9 前端安全

**天下武功，唯快不破。算法越快，越容易破。**

> [《如何让前端更安全？——XSS 攻击和防御详解》](https://gold.xitu.io/entry/58a598dc570c35006b5cd6b4/)
> [《HTTPS 互联网世界的安全基础》](https://gold.xitu.io/post/5831590c570c35006c0c3fe3)
> [《关于 Web 安全，99% 的网站都忽略了这些》](https://gold.xitu.io/entry/5771e9362e958a0078fa0ff2/)
> [《Web 前端慢加密》](https://gold.xitu.io/entry/565e4ad360b294bce590baf3/)

### 5.10 技巧和效率

**技巧恰似黑魔法，效率堪比加速器，都是开发过程中不可或缺的一部分，善用技巧，提高效率。**

`高手之所以高，很大一部分在于技巧巧妙，效率高，让人自愧不如，所以成了我们眼中的高手，其实高手也是从菜鸟过来的，由于长期的学习和经验的积累，再加上善于总结，自然一步步成长成为高手，为了加速自己成为高手，我们可以向高手取经，学习他们分享的一些技巧和解决问题思维方式。`

> [《34 个实用的 webAPP 开发技巧分享，值得收藏》](https://gold.xitu.io/entry/56a17f24816dfa0059150b91/)
> [《不造个轮子，你还真以为你会写代码了？ | 掘金技术征文》](https://gold.xitu.io/entry/58569fe6128fe1006b6e5226/)
> [《【译】帮助你更快学习 JavaScript 的六个思维技巧》](https://gold.xitu.io/entry/57583813207703006a983b34/)
> [《提升效率黑科技》](https://gold.xitu.io/collection/5854fc786a226516b19f2034)
> [《【译】六个漂亮的 ES6 技巧》](https://gold.xitu.io/entry/5748fc982b51e90056d7e193)
> [《【译】45种 Javascript 技巧大全》](https://gold.xitu.io/entry/55272f6ae4b0da2c5deb7f0c/)
> [《程序员应该掌握的 10 个搜索技巧》](https://gold.xitu.io/entry/56a033988ac2470055eb91d4/)
> [《你必须『收藏』的Github技巧》](https://gold.xitu.io/post/58509f8161ff4b00683a360c)
> [《老司机教你更好的进行 CSS 编程 70 个技巧》](https://gold.xitu.io/entry/57cd09c30e3dd90063fc4c3f/)
> [《聊一聊这些常见而且实用的 css 技巧》](https://gold.xitu.io/entry/58217d5f8ac247004f1d15ca/)

## 六、JavaScript框架篇

**青，取之于蓝而青于蓝；冰水为之而寒于水。**

jQuery:一年没写链式JQ了，在这个人手一个MVVM框架的年代，JQuery就不做推荐，想要了解可以自行学习。

vue.js react.js,angularjs···此处省略一万篇文章和略干文字。

关于框架的学习，最好多看看官方文档，多多实践，我这里就不多做介绍了，框架太多，我用的也不多，这里也就不献丑推荐什么的，自己对框架也一知半解，没有深入去研究底层的实现，仅仅停留在够用就行没去深究的层面，大家想学什么框架可以自己去搜索相关资料和教程。

## 七、HTTP和HTTPS篇（待续，下一步学习中）

## 八、前端工程化篇

**解放双手，成就你的梦想。**

> [《webpack系列合集》](https://gold.xitu.io/collection/58330a5e6a22654ac5d1682e)
> [《构建工具合集》](https://gold.xitu.io/collection/5850a2511e35c94ba5320a6b)
> [《教你如何读webpack2中文文档》](https://gold.xitu.io/post/58b2e0a0570c3500692d02ae)

## 九、全栈篇之Node.js（待续，正在学习中nodejs）

## 十、面试篇

### 10.1 简历模板

**简历好比人的一张脸，不能丑了别人，爽了自己。**

`对于开发者与设计师们，一封好的的简历会让自己的面试增色不少。本次分享的简历简介精致，而且样式多种多样。包含 INDD、IDML、PDF、PSD、DOCX 等格式，方便自由修改和学习。`

> [《Talk is cheap, show me the code - 用 github 数据辅助你完善简历》](https://gold.xitu.io/post/58ab95caac502e007e86d54f)
> [《27 款优质简洁的个人简历打包下载》](https://gold.xitu.io/entry/57f3ba078ac247005890e976/)
> [《10+ 优秀简洁的个人简历下载（五）》](https://gold.xitu.io/entry/580c2d09a0bb9f0061bfad1e/)
> [《15 款优质实用简洁的个人简历模板打包下载 （一）》](https://gold.xitu.io/entry/5832dbb6c4c971005f561347/)
> [《5 款精致简洁求职简历》](https://gold.xitu.io/entry/5897c1f18d6d81006c613477/)

### 10.2 面试题

**任凭风吹雨打，胜似闲庭信步。**

`首先我希望表达的一点，就是面试的评判跟学校里的考试完全是两回事，太多的人把面试当做考试而把注意力放在题目上。 事实上面试中未必是所有题目全都回答"正确"就一定会通过或者较高评价。面试是面试官和面试者双方"挖掘与展示才能"的过程，参考前面提到的面试过程，全部回答正确的情况很可能是因为面试官不感兴趣懒得追问。 对于面试官而言，基本评判原则就是"我要不要这个人做我的同事？"，多数情况下，这个答案会非常清楚。一些题目是充分的，也就是"回答对了说明这个人具有可以依靠的才能"，一些题目则是必要的，也就是"回答错了说明这个人无法胜任我们的工作"。`

> [《最近遇到的前端面试题》](https://gold.xitu.io/entry/58b391598d6d8100586942cf/)
> [《大厂前端面试题汇总》](https://gold.xitu.io/collection/588c62401e35c9341b3f734c)
> [《前端面试集合》](https://gold.xitu.io/collection/5845311a1e35c9465010879e)
> [《前端面试题精选》](https://gold.xitu.io/collection/582d5cf36a22654ac5d16792)
> [《一道 JS 面试题所引发的 “血案”，透过现象寻本质，再从本质看现象》](https://gold.xitu.io/entry/58b4c65344d90400685c2bdf/)

### 10.3 面试技巧、经验与感悟

**他山之石，可以攻玉。**

**经验犹如一所大学校，它能使你认识到自己是个什么样的傻瓜。**

`人生就是不断的推销自己，不停的面试，狭义的面试我们认为就是工作上的面试，而广义的面试就是做人的面试，到处就是展示推销自己。看看别人面试心得，取经一下，避免别人已经犯过的错误，也是一种进步。`

> [《面试感悟：一名 3 年工作经验的程序员应该具备的技能》](https://gold.xitu.io/entry/58a6ab2f1b69e6006d2520b2/)
> [《我的 web 前端面试经历 - 百度》](https://gold.xitu.io/entry/584522c0a22b9d007a9f90e0/)
> [《1月前端面试记》](https://gold.xitu.io/post/587dab348d6d810058d87a0a)
> [《关于前端面试》](https://gold.xitu.io/entry/56d4f9be816dfa00593a9b84/)
> [《迟来的面试总结》](https://gold.xitu.io/entry/5702497d2e958a0059427cd5/)

## 十一、资源汇总

**积土成山,风雨兴焉;积水成渊,蛟龙生焉。**

`善于积累，善于总结，也是学习的一门功课，积累是一个循序渐进的过程，搜集总结同时也是一个费时费力的过程，看看别人的积累和总结，不禁感叹于别人的知识面和认真的态度，自己会觉得有压力从而产生动力，此时的自己会不会蠢蠢欲动，给自己所学所看来一个强势的总结呢？`

> [《也许是史上最全的前端资源大汇总》](https://gold.xitu.io/entry/58ad2fc9b123db00672c965a/)
> [《JavaScript 开发者必备的资源合集》](https://gold.xitu.io/entry/568b82efcbc2e8a30105dbc0/)
> [《前端知识点大百科全书》](https://gold.xitu.io/entry/589ff0dbb123db16a3d92c2b/)
> [《100+ 超全的 web 开发工具和资源整理》](https://gold.xitu.io/entry/57cf641a816dfa00541feaed/)
> [《Web 前端从入门菜鸟到实践老司机所需要的资料与指南合集》](https://gold.xitu.io/entry/5839a55e61ff4b007ec7999b/)
> [《GitHub 上最全的前端入门资源汇总 快速入门前端》](https://gold.xitu.io/entry/57dfa293128fe10064d5f783/)
> [《前端教程 & 开发模块化 / 规范化 / 工程化 / 优化 & 工具 / 调试 & 值得关注的博客 / Git & 面试 - 资源汇总》](https://gold.xitu.io/entry/58063ed52e958a0055ece967/)
> [《送给前端的你，推荐几篇前端汇总文章。 - 学习编程 - 知乎专栏》](https://gold.xitu.io/entry/57c525fe79bc440063f0bd7e/)
> [《前端学习资源汇总——前端收藏夹》](https://gold.xitu.io/entry/566a7270ddb2a419311a39cf/)
> [《最全前端资源汇集》](https://gold.xitu.io/entry/580a37cf8ac247005b4763d2/)

## 十二、插件

**插件是我们开发时候的左膀右臂。**

平时自己写插件主要有下面几个问题：

（1）开发插件需要时间，可能拖延项目工期，如果工期紧急不建议选用这种方式

（2）自己造的轮子未必有现有轮子的好用，要考虑到队友是否适用

（3）需要比较高的开发水平

这里搜集一些常用的插件供大家参考使用。

> [《前端常用插件汇总》](https://gold.xitu.io/entry/57aaa21179bc440054e72aad/)
> [《寻找前端插件，一步到位》](https://gold.xitu.io/entry/5832869a570c35006c149649/)
> [《前端插件资源整理》](https://gold.xitu.io/entry/5705fdc7128fe100525f6109/)

## 十三、工具篇

**工欲善其事，必先利其器。**

`张三和李四都要上山砍柴，但他们的斧头都有点钝了，张三没有理会，拿着斧头就上山了，因为他的斧头不利，砍的都是比较细的树柴……李四就不同了，他拿来磨刀石，用劲地把斧头先磨好，虽然他比张三慢了起步，但是他的准备工夫做到家了，砍柴砍得很快。到太阳下山了，张三只背了小小的一捆柴下来，但是李四，背着一大捆的柴下来…… 由此可见，准备工夫做好了，可以事半功倍！`

> [《超全面 + 最流行的「前端速查表」高清版大全》](https://gold.xitu.io/entry/582e762367f35600633a2738/)
> [《成为专业程序员路上用到的各种优秀资料、神器及框架》](https://gold.xitu.io/entry/58ae36d18fd9c50063bfebd3/)
> [《前端切图神器 avocode》](https://gold.xitu.io/entry/5896d35c61ff4b006b0e471e/)
> [《2015 年末必备前端工具集》](https://gold.xitu.io/entry/56cee8afc24aa800545f73bb)
> [《【译】2016 年我最喜欢的前端工》](https://gold.xitu.io/entry/586b23331b69e60063f372f1/)
> [《前端新手可以浏览的网站》](https://gold.xitu.io/entry/581fea735bbb500059ebfb2b/)
> [《收集非常好用的 Mac 应用程序、软件以及工具，主要面向开发者和设计师。》](https://gold.xitu.io/entry/57917e365bbb500063bc43a1/)
> [《工具武装的前端开发工程师》](https://gold.xitu.io/post/57dc98532e958a00545eace9)
> [《一个前端程序猿的 Sublime Text3 的自我修养》](https://gold.xitu.io/entry/57b1e703165abd0054318480/)
> [《前端工程师的工具包》](https://gold.xitu.io/entry/56e42272b014600029f548ab/)