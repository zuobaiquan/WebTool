## 匹配字符表

```
修改了文件： git add .      //将文件添加到暂存区



删除add操作:git rm -r --cached filename //

提交到暂存区：git commit -m  “log”  //提交到暂存区

提交到远程：git push   master  //提交到远程仓库

撤销修改：git checkout --filename  //丢弃工作区的修改

如果已经提交到暂存区：git reset HEAD filename //把暂存区的修改撤销掉（unstage），重新放回工作区


创建分支：git checkout -b      //创建并切换分支

查看当前分支：git branch 

切换分支：git checkout 

合并某分支到当前分支：git merge    //

删除分支：git branch -d  

如果合并的时候有冲突：解决冲突

删除远程分支：git push origin :<name>



保存当前工作场景：git stash

切换为master：git checkout master

在master上面创建并切换临时分支：git checkout -b issue-101

修改文件然后提交：git commit -m "fix bug 101"

切换到master分支：git checkout master

合并：git merge --no-ff -m "merge bug fix 101" issue-101

删除分支:git branch -d issue-101

重新回到dev下干活：git checkout dev

查看工作现场：git stash list

恢复工作现场的同时，删除stash：git stash apply(恢复，如果不想删除的话)   git stash drop(恢复并删除)
```
### git 中忽略整个文件夹

关键：在项目的根目录（跟.git文件夹所在目录同层）建立.gitignore文件，在里面声明即可。 
譬如我要忽略当前项下的所有dll文件，及runtime文件夹里所有文件： 

ignore these files

*.dll 
runtime/* 

如果之前文件已提交过，则需要先清除原文件，针对上文做的清理如下： 
$ git rm *.dll 
$ git rm -r runtime 

另一种方法：修改git的全局设置，把忽略名单用于所有项目： 
首先，建立一个.gitignore_global文件； 
执行 $ git config --global core.excludesfile .gitignore_global 



# 

