const share = document.getElementById("share")
const shareToggle = (e) => {
	e.preventDefault()
	console.log("I was clicked!")
}
share.addEventListener("click", shareToggle)
