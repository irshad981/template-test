const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];


//  Unspash API
const count = 10;
const apiKey ='bF3HQ_b_JCiWbJfX6dGp7p-DKk4iKaQpx3pwncjYrVQ';
// wQVfadNMFpqdvJgmMIoUUEuRLTyIIjZGR-a6WFGXaIo
//LJb9jl7zGEoEcceRrIkQlv0bgTCOBmA1woTsefHT8FY
// a1dsUIc0BvmHYhauamSNXSwuBni3TplDOtr5wn-ePi0
//EmArfHue9PvFt6GzqhUzUKWqnvnAbSqQ4UlVJ9uMlek

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Helper Function to Set Arributes on DOM Elements
function setAttributes(element , attributes){
  for( const key in attributes) {
    element.setAttribute(key ,attributes[key]);
  }
}


// create Elements Foe Links & Photos , add to DOM
function displayPhotos(){
    photosArray.forEach((photo)=>{
      // Create <a> to link Unspash
      const item = document.createElement('a');
      item.setAttribute('href' , photo.links.html);
      item.setAttribute('target' , '_blank');

      setAttributes(item , {
        href: photo.links.html,
        target:'_blank',

      });
      
      // Create <Img> for photo
      const img = document.createElement('img');
    //   img.setAttribute('alt' , photo.urls.regular);
    //   img.setAttribute('alt' , photo.alt_description);
    //   img.setAttribute('alt' , photo.alt_description);
    setAttributes(img , {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title:photo.alt_description,
    });
      // Put <img > inside <a> then put both inside imageContainer Element
      item.appendChild(img);
      imageContainer.append(item);
      
    })
}




// Get Photos from Unspalsh API
async function getPhotos(){
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json();
         displayPhotos();
        console.log(photosArray + "------");
    
    }catch(error){

    }
}

// check to see if scrolling near bottom of page , Load More Photos
window.addEventListener('scroll' , ()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        getPhotos();
        console.log('load more')
    }
    // console.log('scrolled')
})

// Check to see if scrolling near bootom of page , Load More Photos
// window.addEventListener('scroll' , () => {
//     console.log('scrolled');
// })


// on load
 getPhotos()