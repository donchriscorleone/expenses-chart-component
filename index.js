
const charts = document.querySelector('div.charts');
const date = new Date();
const days = ["sun", "mond", "tue", "wed", "thu", "fri", "sat"];

fetch('./data.json')
  .then(response => response.json())
  .then(datas => {
    datas.forEach((data, index) => {
        const chart = `
        <div class="chart">
            <div class="amount" style="
                height: ${data.amount * 2.5}px;
                background-color: ${days[date.getDay()].toLowerCase().includes(data.day) ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'}";></div>
            <span class="day">${data.day}</span>
        </div>
        `

        charts.innerHTML += chart;
    })
  })
  .catch(error => console.log(error));

