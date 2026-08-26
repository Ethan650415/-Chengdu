# 成都旅伴 v25｜實景照片版

此版延續中國境內版：高德地圖、百度搜尋、本地行程、離線備註與 PWA。

## 新增：8 張實景旅行照片

網站已改為讀取：

- `assets/photos/chunxi.jpg`
- `assets/photos/panda.jpg`
- `assets/photos/jiuzhaigou.jpg`
- `assets/photos/huanglong.jpg`
- `assets/photos/leshan.jpg`
- `assets/photos/emei.jpg`
- `assets/photos/sanxingdui.jpg`
- `assets/photos/kuanzhai.jpg`

照片尚未下載時會自動顯示原本的本地插畫，不會破圖。

## 第一次下載照片

上傳全部檔案到 GitHub 後：

1. 進入 repository 的 **Actions**
2. 點 **Fetch travel photos**
3. 點 **Run workflow**
4. 等待 workflow 完成

Action 會自動下載 8 張照片到 `assets/photos/` 並 commit 回 `main`。
之後 GitHub Pages 使用的是 repo 裡的本地圖片，不需要在中國連 Wikimedia/Flickr。

圖片授權與攝影者請見 `IMAGE_CREDITS.md`。

## 離線

出發前在台灣至少完整開啟網站一次；Service Worker 會把同網域圖片在瀏覽時快取。
