const selector = document.querySelector('#selectNum');
const txtNum = document.querySelector('#txtNum');
const txtResult = document.querySelector('#txtResult');

selector.addEventListener('change', function(event) {
    //console.log(event.target.value);
    txtNum.value = "";
    txtNum.placeholder = `Enter The ${event.target.value} Number`;
    txtResult.value = "";
});

txtNum.addEventListener('input', function(event) {
    console.log(event);
    if (event.target.value === "") {
        txtResult.value = "";
        return;
    }
    let num = event.target.value;
    findResult(num, selector.value);
});

const findResult = (no, opt) => {
    switch (opt) {
        case 'Prime Number':
            var count = 0;
            for (let i = 2; i < no; i++) {
                if (no % i === 0) {
                    count++;
                }
            }
            count === 0 ? txtResult.value = "Its Prime Number" : txtResult.value = "Its Not A Prime Number";
            break;
        case 'Perfect Number':
            var sum = 0;
            for (let i = 1; i < no; i++) {
                if (no % i === 0) {
                    sum += i;
                }
            }
            sum === no * 1 ? txtResult.value = "Its Perfect Number" : txtResult.value = "Its Not A Perfect Number";
            break;
        case 'Armstrong Number':
            var sum = 0;
            var count = 0;
            for (let i = no; i > 0; i = parseInt(i / 10)) {
                count++;
            }
            for (let i = no; i > 0; i = parseInt(i / 10)) {
                sum += Math.pow(i % 10, count);
            }
            sum === no * 1 ? txtResult.value = "Its Armstrong Number" : txtResult.value = "Its Not An Armstrong Number";
            break;
        case 'Palindrome Number':
            let rev = 0;
            for (let i = no; i > 0; i = parseInt(i / 10)) {
                rev = rev * 10 + i % 10;

            }
            rev === no * 1 ? txtResult.value = "Its Palindrome Number" : txtResult.value = "Its Not A Palindrome Number";
            break;
        case 'Neon Number':
            let num = no * no;
            var sum = 0;
            for (let i = num; i > 0; i = parseInt(i / 10)) {
                sum += i % 10;
            }
            sum === no * 1 ? txtResult.value = "Its Neon Number" : txtResult.value = "Its Not A Neon Number";
            break;
    }
}