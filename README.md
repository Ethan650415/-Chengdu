# 成都旅伴 v26｜實景照片自動下載版

此版本修正 v25「上傳後沒有實景圖片」的問題。

## 上傳後會自動做什麼

只要把本資料夾完整上傳到 GitHub repository 的 `main` branch：

1. GitHub Actions 會自動啟動 `Fetch travel photos`
2. 透過 Wikimedia Commons API 找到 8 張照片的實際檔案網址
3. 下載到 `assets/photos/`
4. 由 `github-actions[bot]` 自動 commit 回 `main`
5. GitHub Pages 再次部署後，網站就會改用真正照片

不需要手動按 `Run workflow`。

## 你會看到的照片

- 春熙路
- 成都大熊貓繁育研究基地
- 九寨溝
- 黃龍
- 樂山大佛
- 峨眉山金頂
- 三星堆博物館
- 寬窄巷子

## 如果 Action 出現 push 權限錯誤

到 repository：

`Settings → Actions → General → Workflow permissions`

選：

`Read and write permissions`

儲存後，再到 Actions 頁面重新執行一次 `Fetch travel photos`。

## 如何確認成功

在 repository 裡打開：

`assets/photos/`

應該會看到 8 個 `.jpg`，不再只有 `.gitkeep`。

完整照片來源與授權見 `IMAGE_CREDITS.md`。
