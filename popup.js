/**
 * Over-engineered top-level closure to avoid
 * anything here from leaking globally.
 * @param {HTMLElement} timeEl
 * @param {HTMLElement} dateEl
 */
;((timeEl, dateEl) => {
  ;('use strict')

  /** @type {Intl.DateTimeFormatOptions} */
  const dateFormatOpts = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }

  /** @type {Intl.DateTimeFormatOptions} */
  const timeFormatOpts = {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
  }

  function clockWrite() {
    const date = new Date()

    timeEl.firstChild.nodeValue = date.toLocaleTimeString(
      undefined,
      timeFormatOpts,
    )
    dateEl.firstChild.nodeValue = date.toLocaleDateString(
      undefined,
      dateFormatOpts,
    )

    setTimeout(clockWrite, 1000)
  }

  clockWrite()
})(document.getElementById('time'), document.getElementById('date'))
