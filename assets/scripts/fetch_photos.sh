#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$ROOT/assets/photos"

fetch_commons() {
  commons_name="$1"
  output_name="$2"

  media_url="$(
    curl -L --fail --retry 3 --get "https://commons.wikimedia.org/w/api.php" \
      --data-urlencode "action=query" \
      --data-urlencode "format=json" \
      --data-urlencode "prop=imageinfo" \
      --data-urlencode "iiprop=url" \
      --data-urlencode "titles=File:${commons_name}" \
    | jq -r '.query.pages[]?.imageinfo[0]?.url // empty'
  )"

  if [ -z "$media_url" ]; then
    echo "Could not resolve: $commons_name" >&2
    exit 1
  fi

  curl -L --fail --retry 3 -A "ChengduTripWebsite/1.0" \
    "$media_url" -o "$ROOT/assets/photos/$output_name"
}

fetch_commons "Chunxiroaddaytime.jpg" "chunxi.jpg"
fetch_commons "Giant Panda at Chengdu Panda Base.jpg" "panda.jpg"
fetch_commons "Jiuzhaigou Lake.jpg" "jiuzhaigou.jpg"
fetch_commons "Huanglonggou Pools.jpg" "huanglong.jpg"
fetch_commons "Leshan Giant Buddha.jpg" "leshan.jpg"
fetch_commons "Golden Top of Mount Emei.jpg" "emei.jpg"
fetch_commons "SanXingDui Museum.jpg" "sanxingdui.jpg"
fetch_commons "宽窄巷子 - panoramio.jpg" "kuanzhai.jpg"
