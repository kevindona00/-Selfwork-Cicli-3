let sceltavalida = false;
while ( sceltavalida === false){
let scelta = ( prompt ( " Enter the number or name of the drink... " )).toLowerCase().trim();
if (scelta === "1" || scelta === "acqua" ) {
    console.log( " E' stata selezionata l'acqua ");
    sceltavalida=true;
} else if  ( scelta === "2" || scelta === "coca cola" ) {
    console.log ( " E' stata selezionata coca cola ");
        sceltavalida=true;
} else if ( scelta === "3" || scelta === "birra" ) {
    console.log ( " E' stata selezionata birra ");
        sceltavalida=true;
} else {
    alert ( " scelta non valida! riprova. ");
}
}