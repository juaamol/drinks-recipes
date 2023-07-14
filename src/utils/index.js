export function scrollToMain() {
  const main = document.getElementById('main')

  if (main) {
    main.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
