---
template: post
title: Netlify + Gatsby で任意のテンプレでデプロイするまで
slug: cms
draft: true
date: 2019-06-22T08:57:19.254Z
description: Netlify + Netlify CMS + Gatsby で一度サイト構築は済んだものの、好みのデザインのテンプレでデプロイし直した備忘録。
category: CMS
---
1. gatsby-starterで好きなデザインを選ぶ
2. Try this starter Netlify する
3. Connect to Githubでデプロイする
4. content managerの設定
  

***
  

## **gatsby-starterで好きなデザインを選ぶ**

![](/media/676a4064c65c6241491c7cec0fdfe45e.png "gatsby-starter-gcn")

<https://www.gatsbyjs.org/starters/ryanwiemer/gatsby-starter-gcn/>

最初このデザインがにしたかったのだが、contentfulの設定で挫折。  
  
  


contentfulを使わなくて良いよう"Netlify CMS"にチェックを付けてヒットした下記のテンプレを選択しました。

![](/media/67579028d94db53a0e7cac5403204efa.png "gatsby-starter-lumen")

<https://www.gatsbyjs.org/starters/alxshelepenok/gatsby-starter-lumen/>

***
## Try this starter Netlify する

![](/media/trythisstarter.png)

スターターのサンプル画像右下にあるリンクからNetlifyに飛ぶ。あとは指示に従いながら進めば秒でデプロイ完了。

（このリンクを見つけるまで、どうやってデプロイするか分からずネットを何時間も右往左往してしまいました）


***
## content managerの設定

デプロイするまでの流れは色々あると思いますが、私の場合、初めてのデプロイは<https://www.netlifycms.org/docs/start-with-a-template/>Gatsby Site Starter経由でした。

![](/media/スクリーンショット-2019-06-22-18.56.53.png)

ここで何も設定をいじらずにデプロイすると謎のKALDIデザインになります。

![](/media/7b045e345369cdbae5e6d6b1035fb864.png "謎のKALDI")

ただ、このスターターの優しいところはadminリンクを貼ってくれているところ。

![](/media/スクリーンショット-2019-06-22-18.46.36.png "adminリンク")

赤線を引いている"Admin"をクリックしてemailを登録すれば、Content Manager機能を追加できます。

このリンクが[gatsby-starter-lumen](https://www.gatsbyjs.org/starters/alxshelepenok/gatsby-starter-lumen/)には無かった。  
  
え、もしかしていちいちエディタでファイル作成してプッシュしなきゃなの？と焦りましたが、ふとurlの末尾に"/admin"を付けたら飛べました。  


![adminのサインアップ画面](/media/スクリーンショット-2019-06-22-17.54.43.png)

ここに名前、メールアドレス、パスワードを登録。  
登録したメールアドレス宛に確認メールが届くのでリンク先へ飛べばContent Manager作成完了です！
