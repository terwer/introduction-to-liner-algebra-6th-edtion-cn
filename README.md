# 《线性代数导论》第六版中文版

欢迎阅读《线性代数导论》第六版中文版，本书由 terwer 翻译。

## 初始化

```
## 初始化 virtualenv
python3 -m pip install --user --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple
python3 -m pip --version

python3 -m pip install --user virtualenv
python3 -m venv venv

## 或者使用虚拟环境（推荐）
curl https://pyenv.run | bash
# 然后设置换变量 https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv
pyenv install 3.11.14
pyenv shell 3.11.14
python -V
python -m pip install --user virtualenv
python -m venv venv
## 激活虚拟环境
source venv/bin/activate

## 安装依赖
pip install --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt
```

## 本地预览

````
sphinx-autobuild source build/html
````

## 项目构建

```
rm -rf build && make html
```

## 参考

https://terwer.space/s/20230725134910-epk1oj8