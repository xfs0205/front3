<template>
  <div id="map-container" style="width: 100%; height: 500px;"></div>
</template>

<script>
import { onMounted, ref } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';

export default {
  name: 'Map',
  setup() {
    const map = ref(null);

    const initMap = async () => {
      const AMap = await AMapLoader.load({
        key: '48b61109785de14a32cfe56b5a4254d7', // 替换为你的高德地图API密钥
        version: '2.0',
        plugins: ['AMap.ToolBar', 'AMap.Scale', 'AMap.Polyline'],
      });

      map.value = new AMap.Map('map-container', {
        zoom: 8, // 初始缩放级别
        center: [102.71233, 25.04309], // 云南的中心点经纬度
      });

      // 添加工具条和比例尺
      map.value.addControl(new AMap.ToolBar());
      map.value.addControl(new AMap.Scale());

      // 添加红军长征路线
      const path = [
        [100.22, 26.55], // 皎平渡（金沙江）
        [102.24, 26.07], // 会理
        [102.37, 25.59], // 禄劝
        [103.25, 25.57], // 寻甸
        [102.44, 25.59], // 昆明附近（柯渡）
      ];

      const polyline = new AMap.Polyline({
        path: path,
        strokeColor: "#FF33FF", // 线颜色
        strokeOpacity: 0.2, // 线透明度
        strokeWeight: 3, // 线宽
        strokeStyle: 'dashed' // 线样式
      });

      map.value.add(polyline);
    };

    onMounted(() => {
      initMap();
    });

    return {
      map,
    };
  },
};
</script>

<style scoped>
#map-container {
  width: 100%;
  height: 500px;
}
</style>