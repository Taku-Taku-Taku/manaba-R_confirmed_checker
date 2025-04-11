# manaba+R Confirmed Checker

manaba+Rの「確認済みにする」ボタンを自動でクリックしてくれるChrome拡張機能です。

## 機能概要

- `https://ct.ritsumei.ac.jp/ct/` 配下のページにアクセスしたとき、
- 「確認済みにする」ボタン（画像ボタン）を自動でクリックします。
- 手動で確認済みにする作業を省略できます。

## インストール方法（開発版）

1. このリポジトリをダウンロード or クローン
2. Chrome で `chrome://extensions/` を開く
3. 右上の「デベロッパーモード」をオンにする
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. 本プロジェクトのディレクトリを選択（`manaba+R_confirmed_checker`）

## フォルダ構成
```
manaba+R_confirmed_checker/ 
├── content.js # ページに注入されるスクリプト 
├── manifest.json # 拡張機能の設定ファイル 
└── README.md # このファイル
```

## 注意事項

- 本拡張機能は個人利用を想定しています。
- manaba+Rの仕様変更により動作しなくなる可能性があります。

## ライセンス

MIT License

