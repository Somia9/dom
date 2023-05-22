var item = document.querySelectorAll('.item');
var lightBoxContainer = document.querySelector('.lightboxContainer');

var ligtboxitem= document.querySelector('.ligtboxitem');
var imgList =Array.from(document.querySelectorAll('.item img'));
var nextBtn =document.querySelector('#next');
var prevBtn =document.querySelector('#prev');
var closeBtn=document.querySelector('#close');

console.log(nextBtn)
var currentSlidIndex;
// console.log(lightBoxContainer);

for (let i = 0; i < imgList.length; i++) {
    
    imgList[i].addEventListener('click' , function(e){
       
        var imgSrc = e.target.getAttribute('src');
        currentSlidIndex=imgList.indexOf(e.target);
        ligtboxitem.style.backgroundImage = `url(${imgSrc})`;
            lightBoxContainer.classList.replace('d-none','d-flex');
        
    });                                                             
    
    
};


// lightBoxContainer.addEventListener('mouseup' ,function(){
//     lightBoxContainer.classList.replace('d-flex','d-none');
// });

function nextSlid() {

   
    currentSlidIndex++ ;

    if (currentSlidIndex == imgList.length ) {
        currentSlidIndex = 0;
    }

    var imgSrc= imgList[currentSlidIndex].getAttribute('src');
    ligtboxitem.style.backgroundImage =`url(${imgSrc})`;

}

function prevSlid() {
    currentSlidIndex--;
    if (currentSlidIndex<0) {

        currentSlidIndex =imgList.length -1;
        
    }
    console.log(currentSlidIndex);

    var imgSrc = imgList[currentSlidIndex].getAttribute('src');
    ligtboxitem.style.backgroundImage =`url(${imgSrc})`;
}

nextBtn.addEventListener('click' , nextSlid);   
prevBtn.addEventListener('click', prevSlid);

closeBtn.addEventListener('click',function closeSlider() {

    lightBoxContainer.classList.replace('d-flex' ,'d-none');

    
})
