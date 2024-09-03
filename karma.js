function reset() {
    // alert('reset');
    // karmatomb = {};
    $("#tablediv").html('');
    table_draw();
}

function people() {
    let ret = []
    ret[0] = Math.floor(Math.random() * population); //person
    ret[1] = Math.floor(Math.random() * action); //act
    return ret;
}



function cycle_run() {
    for (let i = 0; i < cycle; i++) {
        act_people = Math.floor(Math.random() * population + 1); //person
        res = people();
        ad_div_id = act_people + '_' + res[1] + '_adkap';
        kap_div_id = res[0] + '_' + res[1] + '_adkap';
        beir(ad_div_id, -1);
        beir(kap_div_id, 1);
        // a_action = people()[1];
    } // console.log(a_action);
}



function beir(div_id, val) {

    value = baseval_toint($('#' + div_id).text());
    beirval = value + val;
    $('#' + div_id).text(beirval);
    if (beirval == 0) { $('#' + div_id).css('background-color', 'green'); } else if (beirval < 0) { $('#' + div_id).css('background-color', 'red'); } else { $('#' + div_id).css('background-color', 'blue'); }

}

function baseval_toint(val) {
    if (val == 'n/a') { return 0; } else {
        return parseInt(val);
    }
}

function karma_ok() {

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
        table_draw()
    }

}

function start() {
    base_set();
    //table_draw();
    cycle_run();
}

function table_draw() {
    tabletext = '<table class="table table-bordered table-striped w-auto">  <thead class="thead-dark">';
    tabletext = tabletext + '<tr>';
    tabletext = tabletext + '<th >sn  </th>';
    for (let i = 0; i < action; i++) {
        if (i % 2 == 0) {
            tabletext = tabletext + '<th class="table-info">';
        } else {
            // tabletext = tabletext + '<th class="table-dark">';
            tabletext = tabletext + '<th class="table-secondary">';
        }
        tabletext = tabletext + actions[i].name + '<span style=" color:' + actions[i].color + '">' + actions[i].icon + '</span> </th> ';
    }
    tabletext = tabletext + '<th> Karma Ok?  </th>';

    tabletext = tabletext + ' </thead>';

    tabletext = tabletext + '<tbody>';
    for (let pop_i = 0; pop_i < population; pop_i++) {
        tabletext = tabletext + ' <tr>';
        tabletext = tabletext + '<td> ' + poptomb[pop_i] + ' </td>';
        for (let act_i = 0; act_i < action; act_i++) {
            tabletext = tabletext + '<td> <div style="" id="' + pop_i + '_' + act_i + '_adkap">n/a</div> </td> ';
            //  tabletext = tabletext + '<td> <div id="' + pop_i + '_' + act_i + 'kap"></div> </td> ';
        }
        tabletext = tabletext + '<td> <div id="' + pop_i + '_karmaok"></div> </td>';
        tabletext = tabletext + '</tr>';
    }

    tabletext = tabletext + '</tbody>';

    tabletext = tabletext + ' </table>';
    $("#tablediv").html(tabletext);
}



function set_karmatomb() {
    for (let i = 0; i < population; i++) {
        karmatomb[i] = 0;
        for (let ii = 0; ii < action; ii++) {
            karmatomb[i][ii] = 0;
        }
    }
}