
document.querySelector('button').addEventListener('click', choose)

function choose(){
    let opt1 = document.getElementById('opt1').value;
    let opt2 = document.getElementById('opt2').value;
  let choice = Math.ceil( Math.random() * 2 );
    if (choice == 1){ document.querySelector('#youShould').innerText = `You should ${opt1}.`}
        else{ document.querySelector('#youShould').innerText = `You should ${opt2}.`}
}