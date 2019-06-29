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

まずは [gatsby-plugin-twitter](https://www.gatsbyjs.org/packages/gatsby-plugin-twitter/?=twitter) から。

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

パッケージ`fstream`の脆弱性が高いようです。修正済みパッケージをインストール。

```bash
npm i fstream -D
+ fstream@1.0.12
updated 1 package and audited 1798528 packages in 21.556s
found 0 vulnerabilities
```

うまくいったようです。こうやって修正箇所を明示してくれるのありがたすぎる。\
なおエラー解消はこちらの記事を参考にしました。  

[脆弱性の警告を受けたnpmパッケージの依存関係を力技で直す](https://qiita.com/hibikikudo/items/0af352acac85fce28ec2)  

***

続いて [gatsby-remark-embed-youtube](https://www.gatsbyjs.org/packages/gatsby-remark-embed-youtube/?=youtube%20embd) をインストールします。  

```bash
npm install --save gatsby-remark-embed-youtube
+ gatsby-remark-embed-youtube@0.0.7
```

2つのプラグインのインストールが完了しました！

***

## config.jsに追加

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

- - -

## 記事への埋め込み

実は、この記述で埋め込みができず、解決に数時間費やしました。  
（現在は解決済み）

この時の結果はこちら。

![](/media/failed_embed.png)

***
## 失敗の理由:
# フ ァ イ ル 間 違 っ て る
~~**config.js**~~  

** ◯ gatsby-config.js**

しかも、プラグインである`gatsby-transformrer-remark`のオプションとして記述しないといけないのに、独立したプラグインとして記述していました。  

なぜ気づいたかというと、入れた覚えのない `prismjs` が稼働していることに気づき、（もしや他のファイルにプラグインの記述ある？）とファイル内検索したらビンゴだったからです。  

てか、よく見たらTakumonさんの記事にもGatsbyの公式にもちゃんと  
`gatsby-config.js` って書いてあるし。。  
コードは嘘をつきませんね。私の目は節穴ですね。　　


というわけで正しいファイルに書き直す。  

```javascript
//gatsby-config.js
  plugins: [
      resolve: 'gatsby-transformer-remark',
        options: {
        plugins: [
          {
            resolve: "@weknow/gatsby-remark-twitter",
            options: {
              debug: true
            }
          },
          {
            resolve: "gatsby-remark-embed-youtube",
              options: {　// 固定サイズにする場合に指定
              width: 800,
              height: 400
            }
          },
         ]
```

`gatsby-plugin-twitter` がどうしても動作してくれなかったので  
プラグインを [@weknow/gatsby-remark-twitter](https://www.gatsbyjs.org/packages/@weknow/gatsby-remark-twitter/?=twitter) に変更しました。　　
***
## 結果 
**Twitter**  
<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">日記書きました。<br><br>今月からサンノゼ <a href="https://t.co/Z9IPmGJnse">https://t.co/Z9IPmGJnse</a></p>&mdash; takumontakumon (@inouetakumon) <a href="https://twitter.com/inouetakumon/status/1135354793906429962?ref_src=twsrc%5Etfw">2019年6月3日</a></blockquote>


**youtube**  
`youtube:https://www.youtube.com/embed/ZXsQAXx_ao0`

# で　き　た　！

※youtubeの動画IDは前回から変更しました  

ついでに前回追加していたGoogle Fontsのプラグインも移しておきました。  
ほんと、自分の目の節穴っぷりに落ち込みますが、解決できて嬉しいです！
## 本日の教訓: コードはちゃんと見て、ちゃんと書こう
　　
**本日のBGM**  

[Pink Sweat Radio](https://www.jango.com/music/Pink+Sweat+)
