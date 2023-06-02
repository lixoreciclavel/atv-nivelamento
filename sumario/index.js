const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg",
      "color": "box-reaction"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg",
      "color": "box-memory", 
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg",
      "color": "box-verbal"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg",
      "color": "box-visual"
    }
  ]

const summaryBox = document.querySelector('.summary-box')

window.addEventListener('DOMContentLoaded', ()=>{
    let displaySummary = data.map( (item)=>{
        return `<div class="summary-box ${item.color} ">
        <article class="summary-info">
          <img src=${item.icon} alt="">
          <p>Reaction</p>
        </article>
        <h5 class="summary-calc"><span>${item.score}</span> / 100</h5>
      </div>`
    })
    displaySummary = displaySummary.join("")
    console.log(displaySummary);

    summaryBox.innerHTML = displaySummary;
});