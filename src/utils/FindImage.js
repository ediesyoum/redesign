const context = require.context('../assets/img', false, /\.png|\.jpg/);

export default function findImage(path) {
  return context(`./${path}`, true)
}
