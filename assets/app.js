/*
$(document).ready(() => {
    alert();
});
*/

$('#hBtn').on('click', (e) => {
        //console.log('clicked');
        //generate random number
        //set var
        let id = Math.floor((Math.random() * 731) + 1);
        redPhone(id);
});

function redPhone(id) {
    axios.get('https://superheroapi.com/api/10219050137697538/'+id)
    .then((r) => {
        $('.char').html = ' ';

        //console.log(r);

        let hName = r.data.name;
        let rName = r.data.biography['full-name']; //---ISSUE
        let race = r.data.appearance.race;
        let base = r.data.work.base;
        let family = r.data.connections.relatives;
        let img = r.data.image.url;
        let fAppearance = r.data.biography['first-appearance']; //---ISSUE
        let groups = r.data.connections['group-affiliation']; //---ISSUE

        let output = '';

        output += 
        `
        <h3>${hName}</h3>
        <h5>(${rName})</h5>
        <h5>(${race})</h5>
        <img src="${img}"/>
        <p>${fAppearance}</p>
        <hr/>
        <p>Base of opperations: ${base}</p>
        <p>Family: ${family}</p>
        <p>Member of: ${groups}</p> 
        <p>Finish with powers and abilities</p>
        `

        $('.char').append(output);
    })
    .catch((err) => {
        console.log(err);
    })
}