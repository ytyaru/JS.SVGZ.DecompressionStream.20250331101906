# ファイル一覧

No|Size|ファイル名|概要
--|----|----------|----
1|4219|`clipboard-1.svg`|Inkscapeファイル保存形式(`Inkscape SVG`)
2|2929|`clipboard-2.svg`|Inkscapeファイル保存形式(`プレーン SVG`)
3|1471|`clipboard-3.svg`|Inkscapeファイル保存形式(`最適化 SVG`)
4|1618|`clipboard-4.svgz`|Inkscapeファイル保存形式(`Inkscape SVG 圧縮`)
5|1199|`clipboard-5.svgz`|Inkscapeファイル保存形式(`プレーン SVG 圧縮`)
6|1010|`clipboard-6.svg`|[SVGOMG][]（`最適化 SVG`の不要データをWebツールで削除）
7|610|`clipboard-7.svg`|テキストエディタで不要データを手動削除
8|347|`clipboard-8.svgz`|上記を`gzip`コマンドで圧縮（`svgz`変換）

[SVGOMG]:https://jakearchibald.github.io/svgomg/

　1〜5までは作画ツールInkscapeのファイル保存形式で選択できる。その中で編集可能な最小サイズのファイルは3の`最適化 SVG`である。これを元に6〜8の工程にて他のツールを使い、さらに圧縮した。

　最終的には92%OFFという高圧縮率を実現した。1/12以下であり元の約8%で92%OFF。  
　`4219`Bが`347`Bに圧縮できた。その比率計算は以下。

```
4219:347=1:12.1585014409
347:4219=0.0822469779569
```

　Gzip化による圧縮率は43%OFF。元の約57%まで縮めた。

```
610:347=1.757925072
347:610=0.568852459016
```

## 変換

### 1. 圧縮（SVG→SVGZ）

```sh
gzip -c src.svg > dst.svgz
```

### 2. 展開（SVGZ→SVG）

```sh
gunzip -c dst.svgz > src.svg
```

### 3. 表示確認

　私の環境では`inkview`ツールにで表示確認した。

```sh
inkview dsv.svgz
```

　`inkview`は`inkscape`をインストールした時の付属品。

　もちろん本体の`inkscape`でも表示・編集できる。

```sh
inkscape dsv.svgz
```

