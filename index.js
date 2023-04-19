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
    if(temp1>2)
    {
        temp1=1;
    }
},4000);
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
// arr.map(function(Elem, Index) {
//     var div = document.createElement("div");
//     var slides = document.createElement("div");
//     var slider = document.createElement("div");
//     var image = document.createElement("img");
//     image.setAttribute("src", Elem.image);
//     div.append(image);
//     slides.append(div);
//     slider.append(slides);
//     document.getElementsByClassName("Tslides")[0].append(slider);
// })