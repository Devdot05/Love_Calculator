

 



function addLove(){
    let input1 = firstInput.value
    let input2 = secondInput.value

    let answer = Math.random()*100
    firstInput.value = ''
    secondInput.value = ''
    let result = `${Math.round(answer)}%`

    if(input1 == '' || input2 == '') {
        alert('I am empty, you need to fill me')
        console.log(addLove);
        
    }
    else if(answer >= 0 && answer < 40){
        showResult.innerHTML = `
        <h3>Unserious relationship you and ${input2} can't last  </h3>
        <h1>${Math.round(answer)}%</h1>
        <h1>😢</h1>
        `
    }
    else if(answer >= 40 && answer < 60){
        showResult.innerHTML = `
        <h3> You and ${input2} can manage youselves  </h3>
        <h1>${Math.round(answer)}%</h1>
        <h1>😍</h1>
        `
    }
    else if(answer >= 60 && answer < 80){
        showResult.innerHTML = `
        <h3> You and ${input2} is in good relationship   </h3>
        <h1>${Math.round(answer)}%</h1>
        <h1>💕</h1>
        `
    }
    else if(answer >= 80 && answer <= 100){
        showResult.innerHTML = `
        <h3>  Go take date for your wedding   </h3>
        <h1>${Math.round(answer)}%</h1>
        <h1>✔💋</h1>
        `
    }
}