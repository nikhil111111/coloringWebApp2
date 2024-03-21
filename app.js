//1.
const getcolor = () => {
    //Hex code 
    //we need that random number which creates hexadecimal number so that we r multiplying it with 16777215
    const randomNumber = Math.floor(Math.random() * 16777215);
    //above line is genrating random numbers NOW to convert them into hexa
    const randomCode = "#" + randomNumber.toString(16); //16 stands for hexadecimal code --- 16 is passed as a hexa unit
    // console.log(randomNumber,randomCode);
    //click krne pr body pr change hoga 
    document.body.style.backgroundColor = randomCode;
    //container box me randomn code 
    document.getElementById("color-code").innerText = randomCode

    //when user click the code genrated must be copied to click board so that user just have to ctr+v
    navigator.clipboard.writeText(randomCode)
}
//event call -> click krne pr chlega
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

//initial call -> page load hone pr chlega
getcolor();