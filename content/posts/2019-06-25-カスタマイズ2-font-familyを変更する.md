---
template: post
title: カスタマイズ2 - font-familyを変更する
slug: '20190625'
draft: false
date: 2019-06-25T13:51:57.547Z
description: Google Fontsのプラグインの読み込みとフォントの変更を行います
category: CMS
---
エディタで該当フォルダーをオープン。

font-familyで検索すると"_generic.scss"で設定されている模様。



```
body {
```

```
font-family: $typographic-font-family;
```

```
}
```

typographic-font-familyを検索。

"_variables.scss"で発見。



```
// Typographic
```

```
$typographic-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
```



\*\**

\[Google Fonts](https://fonts.google.com/)を使用したかったのでやり方をググる。

gatsbyプラグインを発見。

\[gatsby-plugin-prefetch-google-fonts](https://www.gatsbyjs.org/packages/gatsby-plugin-prefetch-google-fonts/)

こちらを参考にプラグインをインストール。

これでgoogle fontsが使用できるようになった。

\*\**

再び_variables.scssに戻って好みのフォントに書き換えます。



```
// Typographic
```

```
$typographic-font-family: 'Noto Sans JP', 'Lato', sans-serif;
```

\~\~今回選んだフォント"Noto Sans JP"はregularだと太めらしいので各ファイルのfont-weightも変更しておく\~\~

ローカルサーバーでチェックしたら微妙だったのでデフォルトのままでいきます。

\*\**

\`gatsby build\`でローカル環境でチェック

**before**

![](/media/before.png)

**after**

![](/media/after.png)

英語はデフォルトの方が良いかも・・。

というわけで、デフォルトに"Noto Sans JP"を付け加えるかたちに変更。

\*\**

再度チェック！

**before**

![](/media/before2.png)

**after**

![](/media/after2.png)

うん、やっぱりデフォルトの方が行間とかいい感じ。

ついでに、デプロイする度に怒られていたアイコン画像も、指示通り正方形に直しておきました。

\*\**

Ctrl+Cでローカルサーバー終了

\`npm run develop\`でデプロイ

だん！
