
document.querySelector('button').addEventListener('click', choose)

function choose(){
  let choice = Math.ceil( Math.random() * 2 )
    if (choice == 1){ console.log (document.getElementById('opt1').value)}
        else{ console.log (document.getElementById('opt2').value) }
}