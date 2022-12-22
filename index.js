//document.body.innerText = "Javascript Works"
const xmas_grab_run = event => {
const tree_svgObject = document.getElementById('tree_object')
const tree_contentDocument =  tree_svgObject.contentDocument
const tree_svg = tree_contentDocument.getElementById("the_tree")
console.log(tree_svgObject)
console.log(tree_contentDocument)
console.log(tree_svg)


}
document.addEventListener('DOMContentLoaded', xmas_grab_run)