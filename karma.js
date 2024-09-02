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
        cycle
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
        if (i % 2 == 0) {
            tabletext = tabletext + '<th>';
        } else {
            tabletext = tabletext + '<th class="table-dark">';
        }
        tabletext = tabletext + '#' + i + ' ' + actions[i].name + ' <span color="' + actions[i].color + '">' + actions[i].icon + '</span> </th> ';
    }
    tabletext = tabletext + '<th> Karma Ok?  </th>';

    tabletext = tabletext + ' </thead>';

    tabletext = tabletext + '<tbody>';
    for (let pop_i = 0; pop_i < population; pop_i++) {
        tabletext = tabletext + ' <tr>';
        tabletext = tabletext + '<td> ' + poptomb[pop_i] + ' </td>';
        for (let act_i = 0; act_i < action; act_i++) {
            tabletext = tabletext + '<td> <div id="' + pop_i + '_' + act_i + '_adkap">n/a</div> </td> ';
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

//for (let i = 0; i < cycle; i++) {
// text += "<li>" + fruits[i] + "</li>";
//}
//text += "</ul>";

//   document.getElementById("demo").innerHTML = "Car: " + car;