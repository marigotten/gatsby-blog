---
template: post
title: Netlify + Gatsby で任意のテンプレでデプロイするまで
slug: /posts/how-to-deploy-my-fav-starter/
draft: false
date: 2019-06-22T08:57:19.254Z
description: Netlify + Netlify CMS + Gatsby で一度サイト構築は済んだものの、好みのデザインのテンプレでデプロイし直した備忘録。
category: CMS
---
- [Starter Libraryで好きなデザインを選ぶ](#Starter-Libraryで好きなデザインを選ぶ)
- [Try this starter Netlify する](#Try-this-starter-Netlify-する)
- [Content Managerの設定](#Content-Managerの設定)

- - -

## Starter Libraryで好きなデザインを選ぶ

![](/media/676a4064c65c6241491c7cec0fdfe45e.png "gatsby-starter-gcn")

[gatsby-starter-gcn by ryanwiemer](https://www.gatsbyjs.org/starters/ryanwiemer/gatsby-starter-gcn/)

最初このデザインにしたかったのだが、contentfulの設定で挫折。  

contentfulを避けたかったので、"Netlify CMS"にチェックを付けてヒットした下記のを選択しました。

![](/media/67579028d94db53a0e7cac5403204efa.png "gatsby-starter-lumen")

[gatsby-starter-lumen by alxshelepenok](https://www.gatsbyjs.org/starters/alxshelepenok/gatsby-starter-lumen/)

- - -

## Try this starter Netlify する

![](/media/trythisstarter.png)

スターターのサンプル画像右下にあるリンクからNetlifyに飛ぶ。あとは指示に従いながら進めば秒でデプロイ完了。

（このリンクを見つけるまで、どうやってデプロイするか分からずネットを何時間も右往左往してしまいました）

- - -

## Content Managerの設定

デプロイするまでの流れは色々あると思いますが、私の場合、初めてのデプロイは[Gatsby Site Starter](https://www.netlifycms.org/docs/start-with-a-template/)経由でした。

![](/media/スクリーンショット-2019-06-22-18.56.53.png)

ここで何も設定をいじらずにデプロイすると[謎のKALDIデザイン](https://www.gatsbyjs.org/starters/netlify-templates/gatsby-starter-netlify-cms/)になります。

![](/media/7b045e345369cdbae5e6d6b1035fb864.png "謎のKALDI")

ただ、このスターターの優しいところはadminリンクを貼ってくれているところ。

![](/media/スクリーンショット-2019-06-22-18.46.36.png "adminリンク")

ページ下部、赤線を引いている"Admin"をクリックしてemailを登録すれば、Content Manager機能を追加できます。

このリンクが[gatsby-starter-lumen](https://www.gatsbyjs.org/starters/alxshelepenok/gatsby-starter-lumen/)には無かった。  

え、もしかしていちいちエディタでファイル作成してプッシュしなきゃなの？と焦りましたが、ふとurlの末尾に"/admin"を付けたらあっさりサインアップ画面に飛べました。  

![adminのサインアップ画面](/media/スクリーンショット-2019-06-22-17.54.43.png)

ここに名前、メールアドレス、パスワードを登録。\
登録したメールアドレス宛に確認メールが届くので、リンク先へ飛べばContent Manager作成完了です！

※ここでサインアップできない方はGit Gatewayを有効にしてください。

（Netlify→Site Settings→Identity→Git Gateway設定）



Content Managerの作成が完了したら、Registration Preferencesで

invite-onlyにしておくことも忘れずに！

![](/media/スクリーンショット-2019-06-22-19.35.17.png "sample")

※サンプル記事

こんな感じで手軽にポストできます〜

RTFかMarkdown方式。

マークダウン勉強しなくては〜！
