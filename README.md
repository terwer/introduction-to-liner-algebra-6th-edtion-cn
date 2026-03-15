# 《线性代数导论》第六版中文版

欢迎阅读《线性代数导论》第六版中文版，本书由 terwer 翻译。

这个网站是使用 [Docusaurus 3](https://docusaurus.io/) 构建的，它是一个现代静态网站生成器。

### 安装

```
pnpm install
```

### 本地开发

```
pnpm dev
```

此命令启动一个本地开发服务器并打开浏览器窗口。大多数更改都会实时反映，无需重新启动服务器。

### 构建

```
pnpm build
```

此命令将静态内容生成到 `build` 目录，并可使用任何静态内容托管服务进行提供。

### 部署

使用 SSH：

```
$ USE_SSH=true pnpm deploy
```

不使用 SSH：

```
$ GIT_USER=<Your GitHub username> pnpm deploy
```

## 使用插件

### 数学公式

https://docusaurus.io/docs/markdown-features/math-equations

### 提示

https://docusaurus.io/docs/markdown-features/admonitions

如果您使用 GitHub Pages 进行托管，这个命令是构建网站并推送到 `gh-pages` 分支的方便方式。