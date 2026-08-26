const searchLink = (query) =>
  `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`;

const mapLink = (query) =>
  `https://uri.amap.com/search?keyword=${encodeURIComponent(query)}&view=map&src=chengdu-trip&callnative=1`;

document.addEventListener(
  "error",
  (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement)) return;
    const fallback = image.dataset.fallback;
    if (!fallback || image.dataset.fallbackUsed === "1") return;
    image.dataset.fallbackUsed = "1";
    image.src = fallback;
  },
  true,
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // The app still works in browsers that block service workers.
    });
  });
}

const images = {
  panda: {
    src: "./assets/photos/panda.jpg",
    fallback: "./assets/panda.svg",
    alt: "成都大熊貓繁育研究基地的大熊貓",
  },
  mountain: {
    src: "./assets/mountain.svg",
    alt: "高山與湖泊景觀",
  },
  lake: {
    src: "./assets/lake.svg",
    alt: "湖泊與山景",
  },
  city: {
    src: "./assets/photos/chunxi.jpg",
    fallback: "./assets/city.svg",
    alt: "成都春熙路街景",
  },
  huanglong: {
    src: "./assets/photos/huanglong.jpg",
    fallback: "./assets/mountain.svg",
    alt: "四川黃龍彩池",
  },
  jiuzhaigou: {
    src: "./assets/photos/jiuzhaigou.jpg",
    fallback: "./assets/lake.svg",
    alt: "四川九寨溝湖泊",
  },
  leshan: {
    src: "./assets/photos/leshan.jpg",
    fallback: "./assets/lake.svg",
    alt: "四川樂山大佛",
  },
  emei: {
    src: "./assets/photos/emei.jpg",
    fallback: "./assets/mountain.svg",
    alt: "四川峨眉山金頂",
  },
  sanxingdui: {
    src: "./assets/photos/sanxingdui.jpg",
    fallback: "./assets/city.svg",
    alt: "三星堆博物館",
  },
  kuanzhai: {
    src: "./assets/photos/kuanzhai.jpg",
    fallback: "./assets/city.svg",
    alt: "成都寬窄巷子",
  },
  tea: {
    src: "./assets/tea.svg",
    alt: "茶杯與茶席",
  },
  hotpot: {
    src: "./assets/hotpot.svg",
    alt: "熱鍋料理",
  },
  noodles: {
    src: "./assets/noodles.svg",
    alt: "麵食料理",
  },
  snack: {
    src: "./assets/snack.svg",
    alt: "炸物與街頭小吃",
  },
  dessert: {
    src: "./assets/dessert.svg",
    alt: "甜點",
  },
};

const itinerary = [
  {
    date: "9/18",
    weekday: "Day 1 · 星期五",
    title: "台灣出發・抵達成都",
    theme: "接機入住，第一晚只走春熙路／太古里",
    photos: [
      { ...images.city, caption: "成都第一晚" },
      { ...images.tea, caption: "成都節奏" },
    ],
    items: [
      {
        time: "出發",
        title: "台灣 → 成都",
        body: "依實際航班時間前往機場；抵達成都後由旅行社安排接機，先前往飯店辦理入住。",
        links: [
          { label: "成都天府機場", url: mapLink("成都天府國際機場") },
          { label: "成都雙流機場", url: mapLink("成都雙流國際機場") },
        ],
      },
      {
        time: "抵達後",
        title: "接機・入住成都飯店",
        body: "這天正式行程只安排抵達與市區活動，飯店名稱目前仍待確認。",
        links: [
          { label: "成都", url: mapLink("成都") },
        ],
      },
      {
        time: "晚上",
        title: "春熙路・太古里",
        body: "第一晚以市中心散步、吃飯為主，不再安排遠距離景點。",
        links: [
          { label: "春熙路", url: mapLink("成都 春熙路") },
          { label: "成都太古里", url: mapLink("成都 太古里") },
        ],
      },
    ],
  },
  {
    date: "9/19",
    weekday: "Day 2 · 星期六",
    title: "成都 → 都江堰 → 川主寺",
    theme: "正式進入川西段，今天以移動＋都江堰為主",
    photos: [
      { ...images.mountain, caption: "前往川西" },
      { ...images.lake, caption: "山區路線" },
    ],
    items: [
      {
        time: "上午",
        title: "成都出發",
        body: "搭乘 7 座商務車離開成都，開始往川西與九寨溝方向移動。",
        links: [
          { label: "成都", url: mapLink("成都") },
        ],
      },
      {
        time: "途中",
        title: "都江堰",
        body: "正式行程安排途中停留都江堰，再繼續前往川主寺。",
        links: [
          { label: "都江堰景區", url: mapLink("都江堰景區") },
        ],
      },
      {
        time: "晚上",
        title: "抵達川主寺",
        body: "入住川主寺，為隔天黃龍一日遊準備；飯店目前待旅行社確認。",
        links: [
          { label: "川主寺鎮", url: mapLink("四川 川主寺鎮") },
        ],
      },
    ],
  },
  {
    date: "9/20",
    weekday: "Day 3 · 星期日",
    title: "黃龍一日遊 → 九寨溝口",
    theme: "上行索道＋動車到五彩池",
    photos: [
      { ...images.huanglong, caption: "黃龍彩池" },
      { ...images.lake, caption: "五彩池" },
    ],
    items: [
      {
        time: "上午",
        title: "前往黃龍景區",
        body: "由川主寺前往黃龍，今天整天以景區行程為主。",
        links: [
          { label: "黃龍風景名勝區", url: mapLink("黃龍風景名勝區 四川") },
        ],
      },
      {
        time: "景區內",
        title: "索道上行・五彩池",
        body: "依旅行社版本，以「上行索道＋動車到五彩池」的景區交通方式為主。",
        links: [
          { label: "黃龍五彩池", url: mapLink("黃龍 五彩池") },
        ],
      },
      {
        time: "傍晚",
        title: "前往九寨溝口",
        body: "黃龍行程結束後移動至九寨溝溝口住宿，隔天一早進九寨溝。",
        links: [
          { label: "九寨溝景區", url: mapLink("九寨溝風景名勝區") },
        ],
      },
    ],
  },
  {
    date: "9/21",
    weekday: "Day 4 · 星期一",
    title: "九寨溝全天 → 松潘古城",
    theme: "景區觀光車為主，完整留給九寨溝",
    photos: [
      { ...images.jiuzhaigou, caption: "九寨溝" },
      { ...images.mountain, caption: "川西山水" },
    ],
    items: [
      {
        time: "全天",
        title: "九寨溝一日遊",
        body: "正式行程安排一整天九寨溝，景區內以觀光車移動；實際海子與步行段依當天景區安排。",
        links: [
          { label: "九寨溝風景名勝區", url: mapLink("九寨溝風景名勝區") },
        ],
      },
      {
        time: "傍晚",
        title: "九寨溝 → 松潘古城",
        body: "完成九寨溝後前往松潘古城住宿。",
        links: [
          { label: "松潘古城", url: mapLink("松潘古城 四川") },
        ],
      },
      {
        time: "晚上",
        title: "松潘古城周邊",
        body: "以入住、用餐與休息為主，不另外加排遠點。",
        links: [
          { label: "松潘古城", url: mapLink("松潘古城") },
        ],
      },
    ],
  },
  {
    date: "9/22",
    weekday: "Day 5 · 星期二",
    title: "松潘返回成都・放鬆半日",
    theme: "下午奎星樓街或按摩休息",
    photos: [
      { ...images.city, caption: "回到成都" },
      { ...images.tea, caption: "慢下來" },
    ],
    items: [
      {
        time: "上午",
        title: "松潘古城 → 成都",
        body: "從松潘返回成都，今天的重點是結束川西段並恢復體力。",
        links: [
          { label: "松潘古城", url: mapLink("松潘古城") },
          { label: "成都", url: mapLink("成都") },
        ],
      },
      {
        time: "下午",
        title: "奎星樓街",
        body: "旅行社版本安排奎星樓街或按摩休息，可依抵達成都的實際時間與體力二選一。",
        links: [
          { label: "奎星樓街", url: mapLink("成都 奎星樓街") },
        ],
      },
      {
        time: "備案",
        title: "按摩・飯店休息",
        body: "如果前幾天山區行程較累，這個下午直接留白也完全符合原始規劃。",
        links: [
          { label: "成都按摩", url: searchLink("成都 按摩 推薦") },
        ],
      },
    ],
  },
  {
    date: "9/23",
    weekday: "Day 6 · 星期三",
    title: "成都 → 樂山大佛 → 峨眉山",
    theme: "樂山採遊船路線，下午前往報國寺區域",
    photos: [
      { ...images.leshan, caption: "樂山大佛" },
      { ...images.emei, caption: "前往峨眉" },
    ],
    items: [
      {
        time: "上午",
        title: "成都 → 樂山大佛",
        body: "由成都前往樂山，正式行程指定採遊船方式觀看樂山大佛。",
        links: [
          { label: "樂山大佛", url: mapLink("樂山大佛") },
        ],
      },
      {
        time: "中午",
        title: "樂山市區午餐",
        body: "遊船結束後在樂山逛逛並吃午餐，再繼續往峨眉山移動。",
        links: [
          { label: "樂山市區", url: mapLink("樂山 四川") },
          { label: "樂山美食", url: searchLink("樂山 美食 推薦") },
        ],
      },
      {
        time: "下午",
        title: "前往峨眉山報國寺區域",
        body: "入住峨眉山報國寺周邊，為隔天金頂一日遊準備。",
        links: [
          { label: "峨眉山報國寺", url: mapLink("峨眉山 報國寺") },
        ],
      },
    ],
  },
  {
    date: "9/24",
    weekday: "Day 7 · 星期四",
    title: "峨眉山金頂一日遊 → 成都",
    theme: "景區觀光車＋索道為主",
    photos: [
      { ...images.emei, caption: "峨眉山金頂" },
      { ...images.lake, caption: "山景日" },
    ],
    items: [
      {
        time: "全天",
        title: "峨眉山金頂",
        body: "今天以峨眉山金頂為核心，按照正式行程以景區觀光車與索道移動為主。",
        links: [
          { label: "峨眉山金頂", url: mapLink("峨眉山 金頂") },
        ],
      },
      {
        time: "下午／傍晚",
        title: "下山後返回成都",
        body: "完成金頂行程後返回成都住宿。",
        links: [
          { label: "成都", url: mapLink("成都") },
        ],
      },
      {
        time: "晚上",
        title: "成都晚餐・休息",
        body: "這天不再硬塞景點，為隔天熊貓基地最早時段保留體力。",
        links: [
          { label: "成都美食", url: searchLink("成都 晚餐 火鍋 推薦") },
        ],
      },
    ],
  },
  {
    date: "9/25",
    weekday: "Day 8 · 星期五",
    title: "熊貓基地 → 三星堆 → 錦里",
    theme: "上午最早時段看熊貓，下午三星堆",
    photos: [
      { ...images.panda, caption: "成都大熊貓基地" },
      { ...images.sanxingdui, caption: "三星堆博物館" },
    ],
    items: [
      {
        time: "最早時段",
        title: "成都大熊貓繁育研究基地",
        body: "旅行社特別安排上午最早時段，這是今天第一個固定重點。",
        links: [
          { label: "成都大熊貓基地", url: mapLink("成都大熊貓繁育研究基地") },
        ],
      },
      {
        time: "下午",
        title: "三星堆博物館",
        body: "下午前往三星堆博物館；第一版先保留行程本身，之後再補門票與入館時段。",
        links: [
          { label: "三星堆博物館", url: mapLink("三星堆博物館") },
        ],
      },
      {
        time: "晚上",
        title: "錦里",
        body: "回成都後前往錦里，作為今天的夜間散步與小吃行程。",
        links: [
          { label: "錦里古街", url: mapLink("成都 錦里古街") },
        ],
      },
    ],
  },
  {
    date: "9/26",
    weekday: "Day 9 · 星期六",
    title: "成都慢生活・人民公園・寬窄巷子",
    theme: "自由活動＋川劇變臉",
    photos: [
      { ...images.tea, caption: "人民公園喝茶" },
      { ...images.kuanzhai, caption: "寬窄巷子" },
    ],
    items: [
      {
        time: "上午",
        title: "人民公園",
        body: "最後一個完整旅行日刻意放慢，先到人民公園散步、喝茶。",
        links: [
          { label: "成都人民公園", url: mapLink("成都 人民公園") },
        ],
      },
      {
        time: "下午",
        title: "寬窄巷子・自由活動",
        body: "下午安排寬窄巷子與自由活動，也可把前幾天想買、想吃但沒完成的清單放到這裡。",
        links: [
          { label: "寬窄巷子", url: mapLink("成都 寬窄巷子") },
        ],
      },
      {
        time: "晚上",
        title: "川劇變臉",
        body: "以川劇變臉作為最後一晚的正式行程；場次與劇場之後再補。",
        links: [
          { label: "川劇變臉", url: searchLink("成都 川劇 變臉 表演") },
        ],
      },
    ],
  },
  {
    date: "9/27",
    weekday: "Day 10 · 星期日",
    title: "成都返程・分兩次送機",
    theme: "兩組航班資訊待補",
    photos: [
      { ...images.city, caption: "成都最後一天" },
      { ...images.tea, caption: "See you Chengdu" },
    ],
    items: [
      {
        time: "上午",
        title: "自由活動・整理行李",
        body: "依各自航班時間安排最後採買、早餐與行李整理。",
        links: [
          { label: "春熙路", url: mapLink("成都 春熙路") },
        ],
      },
      {
        time: "Flight 01",
        title: "第一批送機",
        body: "旅行社確認 9/27 會分兩次送機；第一組航班時間與機場待補。",
        links: [
          { label: "天府機場", url: mapLink("成都天府國際機場") },
          { label: "雙流機場", url: mapLink("成都雙流國際機場") },
        ],
      },
      {
        time: "Flight 02",
        title: "第二批送機",
        body: "第二組航班時間與機場待補；確定後可直接把這張卡改成實際航班資訊。",
        links: [
          { label: "成都機場航班", url: searchLink("成都 機場 航班 查詢") },
        ],
      },
    ],
  },
];

const places = [
  {
    name: "春熙路",
    type: "成都",
    area: "市中心",
    image: images.city,
    body: "抵達成都第一晚的市區散步主軸，可與太古里排在一起。",
    links: [
      { label: "地圖", url: mapLink("成都 春熙路") },
      { label: "高德", url: mapLink("成都 春熙路") },
    ],
  },
  {
    name: "成都太古里",
    type: "成都",
    area: "市中心",
    image: images.city,
    body: "第一晚與春熙路一起安排，適合吃飯、逛街與熟悉成都。",
    links: [{ label: "地圖", url: mapLink("成都 太古里") }],
  },
  {
    name: "都江堰",
    type: "川西",
    area: "都江堰",
    image: images.lake,
    body: "9/19 從成都前往川主寺途中停留的正式景點。",
    links: [{ label: "地圖", url: mapLink("都江堰景區") }],
  },
  {
    name: "黃龍風景名勝區",
    type: "川西",
    area: "黃龍",
    image: images.huanglong,
    body: "9/20 全天核心景區，行程安排上行索道與五彩池。",
    links: [{ label: "地圖", url: mapLink("黃龍風景名勝區 四川") }],
  },
  {
    name: "九寨溝",
    type: "川西",
    area: "九寨溝",
    image: images.jiuzhaigou,
    body: "9/21 完整一日，景區內以觀光車移動。",
    links: [{ label: "地圖", url: mapLink("九寨溝風景名勝區") }],
  },
  {
    name: "松潘古城",
    type: "川西",
    area: "松潘",
    image: images.mountain,
    body: "9/21 九寨溝結束後入住，9/22 再返回成都。",
    links: [{ label: "地圖", url: mapLink("松潘古城") }],
  },
  {
    name: "奎星樓街",
    type: "成都",
    area: "青羊區",
    image: images.city,
    body: "9/22 返回成都後的彈性安排，可依體力改成按摩或休息。",
    links: [{ label: "地圖", url: mapLink("成都 奎星樓街") }],
  },
  {
    name: "樂山大佛",
    type: "樂山峨眉",
    area: "樂山",
    image: images.leshan,
    body: "9/23 採遊船路線觀看大佛，之後在樂山市區午餐。",
    links: [{ label: "地圖", url: mapLink("樂山大佛") }],
  },
  {
    name: "峨眉山金頂",
    type: "樂山峨眉",
    area: "峨眉山",
    image: images.emei,
    body: "9/24 一日遊核心，景區觀光車與索道為主。",
    links: [{ label: "地圖", url: mapLink("峨眉山 金頂") }],
  },
  {
    name: "成都大熊貓繁育研究基地",
    type: "成都",
    area: "成華區",
    image: images.panda,
    body: "9/25 上午最早時段，接著前往三星堆。",
    links: [{ label: "地圖", url: mapLink("成都大熊貓繁育研究基地") }],
  },
  {
    name: "三星堆博物館",
    type: "人文",
    area: "廣漢",
    image: images.sanxingdui,
    body: "9/25 下午的文化重點，後續可再補實際預約與入館時間。",
    links: [{ label: "地圖", url: mapLink("三星堆博物館") }],
  },
  {
    name: "錦里古街",
    type: "成都",
    area: "武侯區",
    image: images.city,
    body: "9/25 晚上安排，適合散步與吃小吃。",
    links: [{ label: "地圖", url: mapLink("成都 錦里古街") }],
  },
  {
    name: "成都人民公園",
    type: "成都",
    area: "青羊區",
    image: images.tea,
    body: "9/26 慢生活主軸，適合喝茶與散步。",
    links: [{ label: "地圖", url: mapLink("成都 人民公園") }],
  },
  {
    name: "寬窄巷子",
    type: "成都",
    area: "青羊區",
    image: images.kuanzhai,
    body: "9/26 下午安排，可與自由活動、採買放在一起。",
    links: [{ label: "地圖", url: mapLink("成都 寬窄巷子") }],
  },
  {
    name: "川劇變臉",
    type: "人文",
    area: "成都",
    image: images.tea,
    body: "9/26 晚上安排；第一版先留表演搜尋入口，等劇場與場次確認後再固定。",
    links: [{ label: "查找場次", url: searchLink("成都 川劇 變臉 表演") }],
  },
];

const restaurants = [
  {
    name: "成都火鍋",
    type: "火鍋",
    area: "成都",
    day: "Day 1 / Day 5 / Day 7",
    image: images.hotpot,
    body: "成都段的主餐候選。第一版先不綁店家，等你提供收藏名單後再替換成實際餐廳。",
    links: [
      { label: "附近火鍋", url: mapLink("成都 火鍋") },
      { label: "查找", url: searchLink("成都 火鍋 推薦") },
    ],
  },
  {
    name: "串串香",
    type: "火鍋",
    area: "成都",
    day: "Day 1 / Day 5 / Day 9",
    image: images.hotpot,
    body: "適合晚餐或宵夜，比完整火鍋更彈性，可放在春熙路、奎星樓街或最後一晚。",
    links: [{ label: "附近串串", url: mapLink("成都 串串香") }],
  },
  {
    name: "擔擔麵",
    type: "麵食",
    area: "成都",
    day: "Day 1 / Day 9",
    image: images.noodles,
    body: "適合當小份量補吃項目，市區自由活動時再依位置搜尋。",
    links: [{ label: "附近擔擔麵", url: mapLink("成都 擔擔麵") }],
  },
  {
    name: "甜水麵",
    type: "麵食",
    area: "成都",
    day: "Day 5 / Day 9",
    image: images.noodles,
    body: "成都代表性小吃之一，可與其他小吃一起分食，不必單獨排一餐。",
    links: [{ label: "附近甜水麵", url: mapLink("成都 甜水麵") }],
  },
  {
    name: "冰粉",
    type: "甜品",
    area: "成都",
    day: "Day 1 / Day 5 / Day 9",
    image: images.dessert,
    body: "適合吃完辣食後補一碗，春熙路、奎星樓街與寬窄巷子都可再就近搜尋。",
    links: [{ label: "附近冰粉", url: mapLink("成都 冰粉") }],
  },
  {
    name: "兔頭",
    type: "小吃",
    area: "成都",
    day: "Day 5 / Day 9",
    image: images.snack,
    body: "想體驗成都特色小吃時再安排；同行不一定都吃，可當單點體驗。",
    links: [{ label: "附近兔頭", url: mapLink("成都 兔頭") }],
  },
  {
    name: "樂山蹺腳牛肉",
    type: "樂山",
    area: "樂山",
    day: "Day 6",
    image: images.hotpot,
    body: "9/23 樂山市區午餐候選之一，符合『看完大佛後逛樂山吃午餐』的安排。",
    links: [{ label: "附近蹺腳牛肉", url: mapLink("樂山 蹺腳牛肉") }],
  },
  {
    name: "樂山缽缽雞",
    type: "樂山",
    area: "樂山",
    day: "Day 6",
    image: images.snack,
    body: "同樣適合放在 9/23 樂山午餐或小吃段，之後可再依實際店家補進網站。",
    links: [{ label: "附近缽缽雞", url: mapLink("樂山 缽缽雞") }],
  },
  {
    name: "人民公園蓋碗茶",
    type: "茶館",
    area: "成都",
    day: "Day 9",
    image: images.tea,
    body: "9/26 慢生活主題的一部分，重點不是趕景點，而是留時間坐下喝茶。",
    links: [{ label: "附近茶館", url: mapLink("成都 人民公園 茶館") }],
  },
];

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeExternalUrl(value) {
  try {
    const url = new URL(String(value), window.location.href);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

const navTabs = document.querySelectorAll(".nav-tab");
const views = document.querySelectorAll(".view");
const dateSwitcher = document.querySelector("#dateSwitcher");
const dayPanel = document.querySelector("#dayPanel");
const placeFilters = document.querySelector("#placeFilters");
const placesGrid = document.querySelector("#placesGrid");
const placesStatus = document.querySelector("#placesStatus");
const foodFilters = document.querySelector("#foodFilters");
const foodGrid = document.querySelector("#foodGrid");
const foodPhotoStrip = document.querySelector("#foodPhotoStrip");
const toast = document.querySelector("#toast");
const noteForm = document.querySelector("#noteForm");
const noteList = document.querySelector("#noteList");
const notesStatus = document.querySelector("#notesStatus");
const refreshNotesButton = document.querySelector("#refreshNotesButton");

let selectedDay = 0;
let selectedType = "全部";
let selectedFoodType = "全部";
let toastTimer;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function renderLinks(links) {
  if (!links?.length) return "";
  return `
    <div class="link-row">
      ${links
        .map(
          (link) =>
            `<a href="${safeExternalUrl(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`,
        )
        .join("")}
    </div>
  `;
}

function renderPhotos(photos) {
  if (!photos?.length) return "";
  return `
    <div class="day-photo-grid" aria-label="今日相關圖片">
      ${photos
        .map(
          (photo) => `
            <figure class="photo-card">
              <img src="${safeExternalUrl(photo.src)}" data-fallback="${escapeHtml(photo.fallback || "")}" alt="${escapeHtml(photo.alt)}" loading="lazy" />
              <figcaption>${escapeHtml(photo.caption)}</figcaption>
            </figure>
          `,
        )
        .join("")}
    </div>
  `;
}

navTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    navTabs.forEach((item) => item.classList.remove("is-active"));
    views.forEach((view) => view.classList.remove("is-visible"));
    tab.classList.add("is-active");
    document.querySelector(`#${tab.dataset.view}`)?.classList.add("is-visible");
  });
});

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      showToast("已複製到剪貼簿");
    } catch {
      showToast("瀏覽器未允許複製");
    }
  });
});

function renderDateSwitcher() {
  if (!dateSwitcher) return;
  dateSwitcher.innerHTML = itinerary
    .map(
      (day, index) => `
        <button class="date-button ${index === selectedDay ? "is-active" : ""}" data-day="${index}">
          ${escapeHtml(day.date)}
        </button>
      `,
    )
    .join("");

  dateSwitcher.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedDay = Number(button.dataset.day);
      renderDateSwitcher();
      renderDayPanel();
    });
  });
}

function renderDayPanel() {
  if (!dayPanel) return;
  const day = itinerary[selectedDay];
  dayPanel.innerHTML = `
    <div class="day-title">
      <div>
        <p class="eyebrow">${escapeHtml(day.weekday)} · ${escapeHtml(day.date)}</p>
        <h4>${escapeHtml(day.title)}</h4>
      </div>
      <span class="tag">${escapeHtml(day.theme)}</span>
    </div>
    ${renderPhotos(day.photos)}
    <div class="timeline">
      ${day.items
        .map(
          (item) => `
            <article class="timeline-item">
              <div class="timeline-time">${escapeHtml(item.time)}</div>
              <div>
                <h5>${escapeHtml(item.title)}</h5>
                <p>${escapeHtml(item.body)}</p>
                ${renderLinks(item.links)}
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderPlaceFilters() {
  if (!placeFilters) return;
  const filters = ["全部", ...new Set(places.map((place) => place.type))];
  if (!filters.includes(selectedType)) selectedType = "全部";

  placeFilters.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-pill ${filter === selectedType ? "is-active" : ""}" data-filter="${escapeHtml(filter)}">
          ${escapeHtml(filter)}
        </button>
      `,
    )
    .join("");

  placeFilters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedType = button.dataset.filter;
      renderPlaceFilters();
      renderPlaces();
    });
  });
}

function renderPlaces() {
  if (!placesGrid) return;
  const visiblePlaces =
    selectedType === "全部"
      ? places
      : places.filter((place) => place.type === selectedType);

  placesGrid.innerHTML = visiblePlaces
    .map(
      (place) => `
        <article class="place-card">
          ${
            place.image
              ? `<img class="place-image" src="${safeExternalUrl(place.image.src)}" data-fallback="${escapeHtml(place.image.fallback || "")}" alt="${escapeHtml(place.image.alt)}" loading="lazy" />`
              : ""
          }
          <span class="card-kicker">${escapeHtml(place.area)}</span>
          <h4>${escapeHtml(place.name)}</h4>
          <p>${escapeHtml(place.body)}</p>
          <div class="tag-row">
            <span class="tag">${escapeHtml(place.type)}</span>
          </div>
          ${renderLinks(place.links)}
        </article>
      `,
    )
    .join("");

  if (placesStatus) {
    placesStatus.textContent = `第一版已整理 ${places.length} 個行程核心地點。`;
  }
}

function renderFoodFilters() {
  if (!foodFilters) return;
  const filters = ["全部", ...new Set(restaurants.map((restaurant) => restaurant.type))];
  foodFilters.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-pill ${filter === selectedFoodType ? "is-active" : ""}" data-food-filter="${escapeHtml(filter)}">
          ${escapeHtml(filter)}
        </button>
      `,
    )
    .join("");

  foodFilters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedFoodType = button.dataset.foodFilter;
      renderFoodFilters();
      renderFood();
    });
  });
}

function renderFoodPhotoStrip() {
  if (!foodPhotoStrip) return;
  const uniquePhotos = [];
  const seen = new Set();

  restaurants.forEach((restaurant) => {
    if (!restaurant.image || seen.has(restaurant.image.src)) return;
    seen.add(restaurant.image.src);
    uniquePhotos.push({
      ...restaurant.image,
      caption: restaurant.name,
    });
  });

  foodPhotoStrip.innerHTML = uniquePhotos
    .slice(0, 8)
    .map(
      (photo) => `
        <figure class="photo-card">
          <img src="${safeExternalUrl(photo.src)}" data-fallback="${escapeHtml(photo.fallback || "")}" alt="${escapeHtml(photo.alt)}" loading="lazy" />
          <figcaption>${escapeHtml(photo.caption)}</figcaption>
        </figure>
      `,
    )
    .join("");
}

function renderFood() {
  if (!foodGrid) return;
  const visibleRestaurants =
    selectedFoodType === "全部"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.type === selectedFoodType);

  foodGrid.innerHTML = visibleRestaurants
    .map(
      (restaurant) => `
        <article class="place-card food-card">
          ${
            restaurant.image
              ? `<img class="place-image" src="${safeExternalUrl(restaurant.image.src)}" data-fallback="${escapeHtml(restaurant.image.fallback || "")}" alt="${escapeHtml(restaurant.image.alt)}" loading="lazy" />`
              : ""
          }
          <span class="card-kicker">${escapeHtml(restaurant.area)} · ${escapeHtml(restaurant.day)}</span>
          <h4>${escapeHtml(restaurant.name)}</h4>
          <p>${escapeHtml(restaurant.body)}</p>
          <div class="tag-row">
            <span class="tag">${escapeHtml(restaurant.type)}</span>
          </div>
          ${renderLinks(restaurant.links)}
        </article>
      `,
    )
    .join("");
}

// Notes: China/offline edition. Stored only on this device.
const NOTES_STORAGE_KEY = "chengdu-trip-notes-v23";

function localNotes() {
  try {
    return JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveLocalNotes(notes) {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
}

function renderNotesList(notes) {
  if (!noteList) return;
  noteList.innerHTML = notes.length
    ? notes
        .map(
          (note) => `
            <article class="note-card">
              <h4>${escapeHtml(note.title)}</h4>
              <p>${escapeHtml(note.body)}</p>
              <button type="button" data-delete-note="${escapeHtml(note.id)}">刪除</button>
            </article>
          `,
        )
        .join("")
    : `<article class="note-card"><h4>尚無備註</h4><p>可新增航班、門票、餐廳、分工或購物清單；內容會儲存在這台裝置。</p></article>`;
}

function renderNotes() {
  if (!notesStatus || !noteList) return;
  notesStatus.textContent = "離線本機模式：備註儲存在這台裝置，不依賴外部雲端服務。";
  renderNotesList(localNotes());
}

noteList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-note]");
  if (!button) return;
  const noteId = button.dataset.deleteNote;
  saveLocalNotes(localNotes().filter((note) => String(note.id) !== String(noteId)));
  renderNotes();
  showToast("備註已刪除");
});

refreshNotesButton?.addEventListener("click", () => {
  renderNotes();
  showToast("備註已重新整理");
});

noteForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(noteForm);
  const note = {
    id: crypto.randomUUID?.() || String(Date.now()),
    title: String(formData.get("title")).trim(),
    body: String(formData.get("body")).trim(),
  };
  const notes = localNotes();
  notes.unshift(note);
  saveLocalNotes(notes);
  noteForm.reset();
  renderNotes();
  showToast("備註已儲存在本機");
});

renderDateSwitcher();
renderDayPanel();
renderPlaceFilters();
renderPlaces();
renderFoodFilters();
renderFoodPhotoStrip();
renderFood();
renderNotes();
