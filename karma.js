let population = 0;
let cycle = 1;
let action = 0;
let karmatomb = {};
let text = "<ul>";
let tabletext = '';

function reset() {
    // alert('reset');
    karmatomb = {};
    $("#tablediv").html('');
}

function base_set() {
    // alert(document.getElementById("pop").value);
    spop = document.getElementById("pop").value
    scycle = document.getElementById("cyc").value
    sact = document.getElementById("act").value
    if (scycle != cycle || spop != population || sact != action) {
        cycle = scycle;
        population = spop;
        action = sact;
        reset();
        //  alert(cycle);
    }

}

function table_draw() {
    tabletext = '<table class="table table-bordered table-striped w-auto">  <thead class="thead-dark">';
    tabletext = tabletext + '<tr>';
    tabletext = tabletext + '<th >sn  </th>';
    for (let i = 0; i < action; i++) {
        if (i % 2 == 0) { tabletext = tabletext + '<th class="table-dark" >  #' + i + ' </th>'; } else {
            tabletext = tabletext + '<th> #' + i + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/></svg></th>';
        }
    }
    tabletext = tabletext + '<th> Karma Ok?  </th>';

    tabletext = tabletext + ' </thead>';

    tabletext = tabletext + '<tbody>';
    for (let pop_i = 0; pop_i < population; pop_i++) {
        tabletext = tabletext + ' <tr>';
        tabletext = tabletext + '<td> ' + pop_i + ' </td>';
        for (let act_i = 0; act_i < action; act_i++) {
            tabletext = tabletext + '<td> <div id="' + pop_i + '_' + act_i + '_adkap"></div> </td> ';
            //  tabletext = tabletext + '<td> <div id="' + pop_i + '_' + act_i + 'kap"></div> </td> ';
        }
        tabletext = tabletext + '<td> <div id="' + pop_i + '_karmaok"></div> </td>';
        tabletext = tabletext + '</tr>';
    }

    tabletext = tabletext + '</tbody>';

    tabletext = tabletext + ' </table>';
    $("#tablediv").html(tabletext);
}

function start() {
    base_set();
    // set_karmatomb();
    //  actin_general();
    table_draw()

}

function set_karmatomb() {
    for (let i = 0; i < population; i++) {
        karmatomb[i] = 0;
        for (let ii = 0; ii < action; ii++) {
            karmatomb[i][ii] = 0;
        }
    }
}

function actin_general() {
    // Returns a random integer from 0 to 9:
    person = Math.floor(Math.random() * population + 1);
    act = Math.floor(Math.random() * action + 1);


    // Object.defineProperty(karmatomb, 'kap', { //using Object.defineProperty() method of JavaScript object class 
    //     value: act,
    //     writable: true //configured writable property as true, and hence, the name property of object obj can be changed now
    // });

    console.log(karmatomb);
}

for (let i = 0; i < cycle; i++) {
    // text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

//   document.getElementById("demo").innerHTML = "Car: " + car;