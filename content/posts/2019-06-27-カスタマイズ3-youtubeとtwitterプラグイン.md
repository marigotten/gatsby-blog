---
template: post
title: カスタマイズ3 - youtubeとTwitterプラグイン
slug: '20190627'
draft: false
date: 2019-06-27T12:22:00.615Z
description: 記事にyoutubeとTwitterの埋め込みができるようプラグインを設定します。
category: cms
---
## 参考サイト
[GatsbyでYouTubeとTwitter埋め込み](https://takumon.com/2018/10/07/)

***

## プラグインをインストール
**Twitter**  
[gatsby-plugin-twitter](https://www.gatsbyjs.org/packages/gatsby-plugin-twitter/?=twitter)  
**youtube**  
[gatsby-remark-embed-youtube](https://www.gatsbyjs.org/packages/gatsby-remark-embed-youtube/?=youtube%20embd)  
***
まずはTwitterから。
```bash
npm install --save gatsby-plugin-twitter
```
この際エラーが発生してしまいました。  
```bash
found 2 high severity vulnerabilities
run `npm audit fix` to fix them, or `npm audit` for details
```
ググると脆弱性が高いファイルだよ！という意味らしい。とりあえず指示通りに`npm audit fix`と打ってみる。
```bash
npm ERR! code ELOCKVERIFY
npm ERR! Errors were found in your package-lock.json, run  npm install  to fix them.
```
またエラー。指示通り`npm install`
```bash
added 4 packages from 10 contributors, updated 5 packages and audited 1798508 packages in 23.853s
found 2 high severity vulnerabilities
```
npmは問題なくアップデート？できましたが脆弱性のあるファイルは健在。`npm audit`してみる。
```bash
┌───────────────┬──────────────────────────────────────────────────────────────┐
│ High          │ Arbitrary File Overwrite                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ fstream                                                      │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ node-sass                                                    │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ node-sass > node-gyp > fstream                               │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/886                             │
└───────────────┴──────────────────────────────────────────────────────────────┘


┌───────────────┬──────────────────────────────────────────────────────────────┐
│ High          │ Arbitrary File Overwrite                                     │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Package       │ fstream                                                      │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Dependency of │ flow-typed                                                   │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ Path          │ flow-typed > unzipper > fstream                              │
├───────────────┼──────────────────────────────────────────────────────────────┤
│ More info     │ https://npmjs.com/advisories/886                             │
└───────────────┴──────────────────────────────────────────────────────────────┘
```
パッケージnode-sass, flow-typedの中で使われているパッケージ`fstream`の脆弱性が高いようです。修正済みパッケージをインストール。
```bash
npm i fstream -D
+ fstream@1.0.12
updated 1 package and audited 1798528 packages in 21.556s
found 0 vulnerabilities
```
うまくいったようです。こうやって修正箇所を明示してくれるのありがたすぎる。  
続いてyoutubeもインストールします。  
```bash
npm install --save gatsby-remark-embed-youtube
+ gatsby-remark-embed-youtube@0.0.7
```
2つのプラグインのインストールが完了しました！
***
## gatsby-config.jsに追加
```javascript
  plugins: [
        {
          resolve: "gatsby-remark-embed-youtube",
          options: {　// 固定サイズにする場合に指定
            width: 800,
            height: 400
          }
        },
        "gatsby-plugin-twitter",
      ],
```
これで環境設定完了です。

***
## 記事への埋め込み
マークダウン方式です。  
**Twitter**  
今回参考にさせていただいた記事の執筆者、Takumonさんのツイートを。  
```
<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">日記書きました。<br><br>今月からサンノゼ <a href="https://t.co/Z9IPmGJnse">https://t.co/Z9IPmGJnse</a></p>&mdash; takumontakumon (@inouetakumon) <a href="https://twitter.com/inouetakumon/status/1135354793906429962?ref_src=twsrc%5Etfw">2019年6月3日</a></blockquote>
```



 

