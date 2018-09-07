console.log("Content not yet Loaded")
document.addEventListener('DOMContentLoaded', function() {
  console.log("Content Loaded")
  const imageId = 76 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
// once i know the DOM is loaded i want to fetch the image for the user to see.
  fetch(`https://randopic.herokuapp.com/images/${imageId}`)
  // fetch the image, then 'jsonify'the response
    .then(resp => resp.json())
    .then(data => displayImage(data))
// after the image properly appears on the DOM, i want to add liking fucntionality to it.

let likeButton = document.querySelector("button")
console.log(likeButton);
// here i'll add a handler for the 'click' event by providing a callback function.
// Whenever the element is clicked, my logic will add a like for the user to see.
// and then update my database with the new number of likes
likeButton.addEventListener('click', addLike)

// here i'll create the function to add likes when my eventListener 'hears' a click
function addLike(event) {
let userLikes = document.querySelector("#likes")
console.log(userLikes);

// this closes my addLike function
}










// here i'll create the fucntion to manipulate the data response i 'jsonified'
// from the fetch request intended to show the user the image after the page loads
 function displayImage(data) {
   let image = document.querySelector("#image")
   let imageName = document.querySelector("#name")
   console.log(imageName);
   console.log(image);
   image.src = `${data.url}`
   console.log(image.src)
   //let imgName = `${data.name}`
   //console.log(imgName)
   imageName.append(`${data.name}`)
// this closes my displayImage fucntion
 }
// this last curly bracket + para closses out the main document
})
