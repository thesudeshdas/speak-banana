// get the elements to work on
const textInput = document.querySelector('#text-area-input');
const textOutput = document.querySelector('#text-area-output');
const btnTranslate = document.querySelector('#btn-translate');



let url = 'https://api.funtranslations.com/translate/minion.json';






const getUrl = text => {
    return url + '?text=' + text;
}




const showError = error => {
    alert('Server down, please try after sometime!');
}


// function to translate



const translate = () => {
    
    const text = textInput.value;
    
    
    
    fetch(getUrl(text))
        .then(response => response.json())
        .then(json => showOutput(json))
        .catch(showError)
    
    
    
}

const showOutput = (text) => {
    console.log(text)
    textOutput.innerHTML = text.contents.translated;
}










// event listening
btnTranslate.addEventListener('click', translate);