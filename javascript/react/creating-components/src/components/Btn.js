// function Btn(){
//     const clickHandler = () => 
//         console.log('Clicked')
//     return(
//         <button onClick={clickHandler}>
//             Click me
//         </button>
//     )
// }

// export default Btn


function Btn(){
    const clickHandler = () => {
        let randomNum = Math.floor(Math.random() * 3) + 1
        console.log(randomNum)
        let userInput = prompt('type a number');
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
      }
    return(
        <button onClick={clickHandler}>
            Click me to guess a number from 1 to 3
        </button>
    )
}

export default Btn