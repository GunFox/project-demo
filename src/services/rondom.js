export default function(min, max) { // 返回min～max之间的随机数
  max = max * 1; min = min * 1
  return Math.floor(Math.random() * (max - min + 1) + min)
}
