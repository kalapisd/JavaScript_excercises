const templateFactory = (arr) => {
let listItems = arr.map(item => `<li>${item}<>/li`).join('');

return `<ul>${listItems}<ul>`
}

export default templateFactory; 