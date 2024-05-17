

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height==='' ||isNaN(height) || height<0) {
        result.innerHTML = "please Enter valid Height";
    }
    else if(weight==='' ||isNaN(weight) || weight<0) {
        result.innerHTML = "please Enter a valid weight";
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        const rs = `<span>Your bmi is ${bmi}</span>`;
        
        if (bmi < 18.6){
            result.innerHTML = `${rs}<br/>
            <span>Your are underweight!!</span>`;
        }
        else if (bmi > 18.6 && bmi <24.9){
            result.innerHTML = `${rs}<br/>
            <span>Your are Healthy!!</span>`;
        }
        else if (bmi > 24.9){
            result.innerHTML = `${rs}<br/>
            <span>Your are overweight!!</span>`;
        }
    }
})