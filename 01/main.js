const buttons = document.querySelectorAll(".button")

const handleClick = () => {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(button.innerHTML)
        })
    });  
};

handleClick();