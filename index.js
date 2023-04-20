var arr=[{
    image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1678694078_Dr._Willmar_Schwabe_Mini_banner_web.jpg"
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1676975578_Dr_Morepen__mini_web.jpg"
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681411498_Main_Mini-banner_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1676975578_Dr_Morepen__mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1670563832_Nutriog_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681801389_Groviva_Mini_banner_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1668781285_Netmeds-436x224pxl.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681821316_Baby_Organo__mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1677567964_Acuvue_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681801100_R-for-rabbit_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1672723539_Gizmoswala_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1675162224_Ambitech_Mini_banner_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1673939151_Omnigel_Mini-banner-web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681800740_Cipzer_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1678775027_Gynoveda_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1679987715_SBL_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1678186829_MOODS_Mini_banner_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681800795_Reckeweg_mini_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681801389_Groviva_Mini_banner_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1681800460_Satthwa_Mini_banner_web.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1675162224_Ambitech_Mini_banner_web.jpg",
   },{
       image:"https://www.netmeds.com/images/product-v1/150x150/996968/fast_up_whey_essentials_premium_whey_blend_powder_rich_chocolate_480_gm_0_0.jpg",
   },
   {
       image:"https://www.netmeds.com/images/cms/aw_rbslider/slides/1678775027_Gynoveda_mini_web.jpg",
   }
    ]
var temp=1;
setInterval(function()
{
    document.getElementById('radio'+temp).checked=true;
    temp++;
    if(temp>4)
    {
        temp=1;
    }
},4000);
var temp1=1;
setInterval(function()
{
    document.getElementById('Tradio'+temp1).checked=true;
    temp1++;
    if(temp1>4)
    {
        temp1=1;
    }
},2000);
console.log(arr.length);

// Set the date and time for April 24th, 2023
const endTime = new Date('2023-04-24T00:00:00Z');

function updateRemainingTime() {
  // Calculate the time remaining in milliseconds
  const remainingTime = endTime.getTime() - new Date().getTime();

  // Convert the remaining time to days, hours, minutes, and seconds
  const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const remainingSeconds = Math.floor((remainingTime / 1000) % 60);
  // Display the remaining time on the webpage
  const remainingTimeElement = document.getElementById('Time');
  remainingTimeElement.innerHTML = `${remainingHours}h&nbsp;${remainingMinutes}m&nbsp;${remainingSeconds}s &nbsp;remainning`;
}

// Call the updateRemainingTime function every second to update the remaining time
setInterval(updateRemainingTime, 1000);



// Call the updateRemainingTime function every second to update the remaining time
setInterval(updateRemainingTime, 1000);


// Call the updateRemainingTime function every second to update the remaining time
setInterval(updateRemainingTime, 1000);

arr.map(function(Elem, Index) {
    var div = document.createElement("div");
    var slides = document.createElement("div");
    var slider = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", Elem.image);
    div.append(image);
    slides.append(div);
    slider.append(slides);
    document.getElementsByClassName("Tslides")[0].append(slider);
})
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}
const Cslider = document.querySelector('.Cslider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const CslideWidth = document.querySelector('.Cslide').clientWidth;
let CslideIndex = 0;

prevBtn.addEventListener('click', () => {
  CslideIndex--;
  if (CslideIndex < 0) {
    CslideIndex = Cslider.children.length - 1;
  }
  Cslider.style.transform = `translateX(-${CslideIndex * CslideWidth}px)`;
});

nextBtn.addEventListener('click', () => {
  CslideIndex++;
  if (CslideIndex >= Cslider.children.length) {
    CslideIndex = 0;
  }
  Cslider.style.transform = `translateX(-${CslideIndex * CslideWidth}px)`;
});
