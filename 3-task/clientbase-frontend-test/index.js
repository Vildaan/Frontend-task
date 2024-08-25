const table = document.getElementById('body');



function create(name, expenditure, cylunders, value, power, weight, boost, year, country) {
    const htmlStr = `<div class="table__row"> \
    <div class="table__cell">${name}</div> \
    <div class="table__cell">${expenditure}</div> \
    <div class="table__cell">${cylunders}</div> \
    <div class="table__cell">${value}</div> \
    <div class="table__cell">${power}</div> \
    <div class="table__cell">${weight}</div> \
    <div class="table__cell">${boost}</div> \
    <div class="table__cell">${year}</div> \
    <div class="table__cell">${country}</div> \
  </div>`
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

for(i = 5; i > 0 ; i--) {
    fetch(`./data/cars-${i}.json`)
        .then((response) => response.json())
        .then((json) => {
            var size = Object.keys(json).length - 1;
            for(i = size; i >= 0; i--) {
                var car = [];
                var c = 0;
                for(e in json[i]) {
                    car[c] = json[i][e];
                    c += 1
                }
                var fragment = create(car[0], car[1], car[2], car[3], car[4], car[5], car[6], car[7], car[8]);
                document.body.insertBefore(fragment, document.body.childNodes[3]);
            }
        }) 
        .catch((error) => {
            console.error('Error:', error);
        });
}
