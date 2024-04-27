import { onMounted, onUnmounted } from "vue";

export default function (callback: Function, time = 1000) {
  let timer: number;

  onMounted(() => (timer = setInterval(callback, time)));
  onUnmounted(() => clearInterval(timer));
}
