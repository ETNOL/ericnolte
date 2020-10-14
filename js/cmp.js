// @ts-check
var consentKey = 'cookie-consent'
checkCmpAcceptCookie()

window.addEventListener('click', function (event) {
  var target = event.target
  console.log(target)
  if (!(target instanceof HTMLElement)) { return }

  if (target.classList.contains('accept-cookies')) {
    handleAcceptCookies()
  }

  if (target.classList.contains('close')) {
    handleModalClose()
  }
})

function handleAcceptCookies() {
  document.cookie = consentKey + '=true'
  handleModalClose()
}

function handleModalClose() {
  document.querySelector('.modal').remove()
}

function checkCmpAcceptCookie() {
  if (!document.cookie.length) {
    return displayModal()
  }

  var cookies = parseCookie(document.cookie)
  if (!cookies[consentKey]) {
    return displayModal()
  }
}

function displayModal() {
  var modal = document.querySelector('.modal')
  if (modal && modal instanceof HTMLElement) {
    modal.style.display = 'block';
  }


}

function parseCookie(str) {
  return str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
}
