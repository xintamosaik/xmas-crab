//document.body.innerText = "Javascript Works"
const xmas_grab_run = event => {
const svgObject = document.getElementById('tree_object').contentDocument
console.log(svgObject)
const svg = svgObject.getElementById('the_tree')
console.log(svg)
}
document.addEventListener('DOMContentLoaded', xmas_grab_run)