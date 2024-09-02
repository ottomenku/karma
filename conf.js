let population = 0;
let cycle = 1;
let action = 0;
let poptomb = ['Otto', 'Zsuzsi', 'Csaba', 'Erika', 'Jano', 'Éva', 'Peti', 'Edina', 'Tamás', 'Szandra', 'David', 'Monika', 'Bálint', 'Petra', 'Lackó'];
let actions = [{
        'name': 'heart',
        'color': 'red',
        'icon': '<svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16"fill = "currentColor"class = "bi bi-heart-fill"viewBox = "0 0 16 16"> <path fill-rule = "evenodd" d = "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg>'
    },
    {
        'name': 'angry',
        'color': 'black',
        'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-angry-fill" viewBox="0 0 16 16"> <path d = "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.053 4.276a.5.5 0 0 1 .67-.223l2 1a.5.5 0 0 1 .166.76c.071.206.111.44.111.687C7 7.328 6.552 8 6 8s-1-.672-1-1.5c0-.408.109-.778.285-1.049l-1.009-.504a.5.5 0 0 1-.223-.67zm.232 8.157a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 1 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5 0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5" /> < /svg> '
    }, {
        'name': 'smile',
        'color': 'yellow',
        'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16"> <path d = "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" /><path d = "M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" / ></svg > '
    }, {
        'name': 'sand',
        'color': 'yellow',
        'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-astonished" viewBox="0 0 16 16"> <path d = "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" /><path d = "M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5M4.884 4.022a2 2 0 0 1 1.458-.048.5.5 0 0 0 .316-.948 3 3 0 0 0-2.167.077 3.1 3.1 0 0 0-.773.478q-.036.03-.07.064l-.002.001a.5.5 0 0 0 .707.708l-.001.002.001-.002a2 2 0 0 1 .122-.1 2 2 0 0 1 .41-.232Zm6.232 0a2 2 0 0 0-1.458-.048.5.5 0 1 1-.316-.948 3 3 0 0 1 2.168.077 3 3 0 0 1 .773.478l.07.064v.001a.5.5 0 0 1-.706.708l.002.002-.002-.002a2 2 0 0 0-.122-.1 2 2 0 0 0-.41-.232ZM8 10c-.998 0-1.747.623-2.247 1.246-.383.478.08 1.06.687.98q1.56-.202 3.12 0c.606.08 1.07-.502.687-.98C9.747 10.623 8.998 10 8 10" /></svg>'
    }, {
        'name': 'kiss',
        'color': 'red',
        'icon': ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-kiss" viewBox="0 0 16 16"> <path fill-rule = "evenodd"d = "M12.493 13.368a7 7 0 1 1 2.489-4.858c.344.033.68.147.975.328a8 8 0 1 0-2.654 5.152 9 9 0 0 1-.81-.622m-3.731-3.22a13 13 0 0 0-1.107.318.5.5 0 1 1-.31-.95c.38-.125.802-.254 1.192-.343.37-.086.78-.153 1.103-.108.16.022.394.085.561.286.188.226.187.497.131.705a1.9 1.9 0 0 1-.31.593q-.115.16-.275.343.16.186.276.347c.142.197.256.397.31.595.055.208.056.479-.132.706-.168.2-.404.262-.563.284-.323.043-.733-.027-1.102-.113a15 15 0 0 1-1.191-.345.5.5 0 1 1 .31-.95c.371.12.761.24 1.109.321q.264.062.446.084a6 6 0 0 0-.502-.584.5.5 0 0 1 .002-.695 5.5 5.5 0 0 0 .5-.577 5 5 0 0 0-.448.082Zm.766-.087-.003-.001-.003-.001zm.002 1.867-.006.001zM6 8c.552 0 1-.672 1-1.5S6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8m2.757-.563a.5.5 0 0 0 .68-.194.93.93 0 0 1 .813-.493c.339 0 .645.19.813.493a.5.5 0 0 0 .874-.486A1.93 1.93 0 0 0 10.25 5.75c-.73 0-1.356.412-1.687 1.007a.5.5 0 0 0 .194.68M14 9.828c1.11-1.14 3.884.856 0 3.422-3.884-2.566-1.11-4.562 0-3.421Z" /> </svg> '
    }, {
        'name': 'tear',
        'color': 'white',
        'icon': ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-tear" viewBox="0 0 16 16"> <path d = "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" /><path d = "M6.831 11.43A3.1 3.1 0 0 1 8 11.196c.916 0 1.607.408 2.25.826.212.138.424-.069.282-.277-.564-.83-1.558-2.049-2.532-2.049-.53 0-1.066.361-1.536.824q.126.27.232.535.069.174.135.373ZM6 11.333C6 12.253 5.328 13 4.5 13S3 12.254 3 11.333c0-.706.882-2.29 1.294-2.99a.238.238 0 0 1 .412 0c.412.7 1.294 2.284 1.294 2.99M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5m-1.5-3A.5.5 0 0 1 10 3c1.162 0 2.35.584 2.947 1.776a.5.5 0 1 1-.894.448C11.649 4.416 10.838 4 10 4a.5.5 0 0 1-.5-.5M7 3.5a.5.5 0 0 0-.5-.5c-1.162 0-2.35.584-2.947 1.776a.5.5 0 1 0 .894.448C4.851 4.416 5.662 4 6.5 4a.5.5 0 0 0 .5-.5" / > < /svg>'
    }
];
let populations = {};
//let text = "<ul>";
//let tabletext = '';