
const countdown = () => {
  (function () {
    'use strict';
    if (!$) var $ = a => { let r = document.querySelectorAll(a); return r.length > 1 ? r : r[0] }
    let target = new Date(Date.UTC(2021, 5, 28, 7, 10)), // yr,month-1 day
      origin = new Date(),
      total = target - origin,
      progressBarUpdate = (bar, val, of) => {
        let pct = (1 - val / of) * (Math.PI * 180);
        $(bar + ' .bar').style.strokeDashoffset = pct;
        $(bar + ' .number').innerText = Math.trunc(val);
      },
      update = (updateTotal) => {
        let na = new Date(),
          diff = target - na,
          d = new Date(diff),
          days = diff / (24 * 60 * 60 * 1000);
        if (updateTotal) return $('.totalbar .fill').style.width = ((1 - (diff / total)) * 100) + "%"
        progressBarUpdate('.days', (days), Math.trunc(target - origin) / (24 * 60 * 60 * 1000));
        progressBarUpdate('.hours', d.getHours(), 24);
        progressBarUpdate('.minutes', d.getMinutes(), 60);
        progressBarUpdate('.seconds', d.getSeconds(), 60);
      },
      ready = () => {
        update();
        update(true);
        setInterval(update, 1000);
        setInterval(function () { update(true); }, 30000);
      };
    if (document.readyState != 'loading')
      ready();
    else
      document.addEventListener('DOMContentLoaded', ready);
  })();

}


setInterval(countdown, 1000);