// @flow
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import styles from './Layout.module.scss';

import React from 'react';
import Helmet from 'react-helmet';

export default class Iframely extends React.Component {

  // 記事ページから古い記事に遷移したときにもロードされるようにする
  componentDidMount () {
    if (window.iframely) {
      window.iframely.load();
    }
  }

  // マークダウンファイルにembed.jsのスクリプトタグを記述しても読み込まれないため
  // コンポーネントでReact Helmetを使って読み込む
  render() {
      return (
        <Helmet>
          <script type="text/javascript" src="https://cdn.iframe.ly/embed.js" charset="utf-8"/>
        </Helmet>
    );
  }
}

type Props = {
  children: ReactNode,
  title: string,
  description?: string
};

const Layout = ({ children, title, description }: Props) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="jp" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
    </Helmet>
    {children}
  </div>
);

export default Layout;
