/*
$(document).ready(() => {
    alert();
});
*/

$()

$(document).on('keydown', (e) => {
    if(e.key === 'Enter') {
        //console.log('clicked');
        //set var
        let name = $('#name').val();
        redPhone(name);
    }
});

function redPhone(name) {
    axios.get('https://superheroapi.com/api/10219050137697538/'+name)
    .then((r) => {
        console.log(r);
        let hName = r.data.name;
        let powers = r.data.powerstats;
        let img = r.data.image.url;

        let output = '';

        output += 
        `
        <h3>${hName}</h3>
        <img src="${img}"/>
        <p>${powers}</p>
        `

        $('body').append(output);
    })
    .catch((err) => {
        console.log(err);
    })
}