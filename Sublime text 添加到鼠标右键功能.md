Sublime text 添加到鼠标右键功能

有两种方法

一种是直接修改注册列表

另一种是：

![](https://raw.githubusercontent.com/zuobaiquan/blogImg/master/WebTool/sublime鼠标右键.png)



打开安装路径，然后新建文本，写入

```
Windows Registry Editor Version 5.00  
[HKEY_CLASSES_ROOT\*\shell\SublimeText3]  
@="用 SublimeText3 打开"  
"Icon"="D:\\Program Files\\Sublime Text3\\sublime_text.exe,0"  
[HKEY_CLASSES_ROOT\*\shell\SublimeText3\command]  
@="D:\\Program Files\\Sublime Text3\\sublime_text.exe %1"  
[HKEY_CLASSES_ROOT\Directory\shell\SublimeText3]  
@="用 SublimeText3 打开"  
"Icon"="D:\\Program Files\\Sublime Text3\\sublime_text.exe,0"  
[HKEY_CLASSES_ROOT\Directory\shell\SublimeText3\command]  
@="D:\\Program Files\\Sublime Text3\\sublime_text.exe %1"  
```

这里

```
D:\Program Files\Sublime Text3\sublime_text.exe
```

是可执行文件的路径

然后将文件保存为sublime_addright.reg ，之后打开运行，即可。