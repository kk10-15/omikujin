# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

# おみくじん（Omikujin）

Web で楽しめるおみくじガチャアプリです！
ボタンを押下すると、カプセルが回転して今日の運勢が表示されます。
落ち込んでる人を励ましたいというコンセプトで作りました。

## デモページ

[▶ おみくじんを使ってみる](https://kk10-15.github.io/omikujin/)

## 使用技術

React + TypeScript
Vite
Tailwind CSS
GitHub Pages で公開

## 開発経緯

React と TypeScript の学習を目的として、
初めての Web アプリ制作にチャレンジしました。
また、TailwindCSS の使い方を理解するため、
簡素ではありますが、デザイン UI やアニメーションにも挑戦しています。
ビルド・デプロイ・GitHub Page での公開までを一通り経験することを目標に取り組みました。

## 機能一覧

ボタンをクリックすると運勢が表示される
アニメーション演出あり
音声付き演出（ON/OFF 検討中）

## 今後の改善ポイント（メモ）

デザインのブラッシュアップ
SP 表示の最適化
音声 ON/OFF 切り替え機能
