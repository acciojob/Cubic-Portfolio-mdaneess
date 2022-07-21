//your code here
var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );

function reset() {
    for (i = 1; i <= 9; i++) {
        const block = document.getElementById(`${i}`);
        block.style.backgroundColor = "transparent";
    }
}
  
document.getElementById('reset_button').addEventListener('click', reset);

document.getElementById('change_button').addEventListener('click', () => {
    reset();
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;
    // alert(colorId)
    const block = document.getElementById(`${blockId}`);
    block.style.backgroundColor = color;
});
