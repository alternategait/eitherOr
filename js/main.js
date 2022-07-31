
document.querySelector('button').addEventListener('click', choose)

function choose(){
  let choice = Math.ceil( Math.random() * 2 )
    if (choice == 1){ console.log (opt1)}
        else{ console.log (opt2) }
}