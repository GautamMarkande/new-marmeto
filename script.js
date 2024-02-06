
let productData = 'im'
async function getData() {
    const response = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448");
    const data = await response.json();
    // productData = data
    return data
}

const images = [
    "https://s3-alpha-sig.figma.com/img/d636/7d6d/f34ce14e7187edeeb026d73413e4a29c?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PuX3Mn0c5KKkJu-GYfRIacoZToYwcoPxPdpsOIgIBHnYHIc-BkVC48FiBei-7ctsQD8eYN9MLrIvqfzCcfskZ7clpMLNUXPWgQ8dZZi2emW2OZsPm5DBQds7QhghzP4bCOGWoHsGmsTIe~rSiohVkWN~3idFpE4Z6HMuBrL-liLC1~FwmxEU3ReQfP4ZvPVMym2GZ5hHf-grScez-XoK2acEriQdoBa-wrkqxg-zlYVN4RV9Ll3JLuuuDHRj8j53yWR28ViXVBYMLPbkosXiFJh3ruphXNrmOB~AYVOPoWpZVNIEp5V8HBDBM-y-zb~hhlHS8SUjY4hvoOfQxNEx8w__",
    "https://s3-alpha-sig.figma.com/img/7f07/20f0/38539658df252c621f52c64231e8986a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jk7x08lGimJ8M2V7xqvvZCGXBtwnJOKrNOyMepwgdG239f9DLWy7pxcuW9UM~IqUBGfrnL2nzpEQJR6MC53wxHXdvewx4frx09tVcR9bLQLAPogIYRssjMRTIpbjiE9YD9Us4u3sVb8hKwizqUmGcnELTT78x9o~~XHD9keu8OOFTsT8vmMsDnXvGisHDYW6zU~0ELsAQ2sBvWSn~ZO6gA0ZcmqaxFeoMHOeixIRDBPg0c1NhTXc6X0VENlSEwvVCzmw46C-0rSCkHLDvopV6LCGgzMGf2l6nmIhj2M8Xb~oMzwM~oCz34erePAWWSKblIYS8n12qGE4oxNEzPK43A__",
    "https://s3-alpha-sig.figma.com/img/8a12/5fd1/8ad1df2ca3d3367baa54e79cf0caeff1?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bz5PZy-sYt01ETiVBYEPsGHvl1KmJUVWfe6EP9mqnalct7QoojAARpHelwgNjKYgEglfN~Yi4Z~RbiAT5qcd-CaCPYNN~3aP4~jwS-trYUj3eekl~BYsnVkitwVYtqaYR9xRiqvl5c0CTMxa50CQOBw3tfk4rvJQoWXx2XwdRUV7hYLp1pgGd--aEh4XtzBCI0b82-eVZHxXXmIpMhCIQPRYWHT-H3t8XFCw~1LfXFmCmQh~nFW2w~YUgsfDAfqfwlbnI3X0Li2~LVunRo4To-ijeodRDzF-wMHoANMh3tRJcB1fuslqeNROHsmArqwY-2nbkjfSjbMpx-Z2q3u7hw__",
    "https://s3-alpha-sig.figma.com/img/d636/7d6d/f34ce14e7187edeeb026d73413e4a29c?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PuX3Mn0c5KKkJu-GYfRIacoZToYwcoPxPdpsOIgIBHnYHIc-BkVC48FiBei-7ctsQD8eYN9MLrIvqfzCcfskZ7clpMLNUXPWgQ8dZZi2emW2OZsPm5DBQds7QhghzP4bCOGWoHsGmsTIe~rSiohVkWN~3idFpE4Z6HMuBrL-liLC1~FwmxEU3ReQfP4ZvPVMym2GZ5hHf-grScez-XoK2acEriQdoBa-wrkqxg-zlYVN4RV9Ll3JLuuuDHRj8j53yWR28ViXVBYMLPbkosXiFJh3ruphXNrmOB~AYVOPoWpZVNIEp5V8HBDBM-y-zb~hhlHS8SUjY4hvoOfQxNEx8w__"
]
const leftUpperContainer = document.querySelector('.leftUpperContainer')
const leftBottomContainer = document.querySelector('.leftBottomContainer')
const DecrBtn = document.querySelector('.DecQty')
const IncBtn = document.querySelector('.IncQty')
const AddtoCarBtn = document.querySelector('.addtocartBtn')
const CountQty = document.querySelector('.CountQty')
let savedImgID = `img${0 + 1}`
let savedDefaultColor = `color${0 + 1}`
let savedDefaultSize = `radio${0+1}`
let selectedColor = 'black'
let selectedSize = 'Small'
let selectedQty = 1;

DecrBtn.addEventListener('click',()=>{
    if(selectedQty>0){
        CountQty.innerText = `${--selectedQty}`
    }
})
IncBtn.addEventListener('click',()=>{
    CountQty.innerText = `${++selectedQty}`
})
AddtoCarBtn.addEventListener('click',()=>{
const AddtoCartInfo= document.querySelector('.infoForAddedCart')
 AddtoCartInfo.innerHTML = ` <p>Embrace Sideboard with Color ${selectedColor} and Size ${selectedSize} added to cart
 </p>`
 AddtoCartInfo.style.display='block';
})
function showDesc(desc){
const description = document.querySelector('.description')
description.innerText = "";
description.innerHTML = desc
}
function showImageDefault() {
    leftUpperContainer.innerHTML = ""
    const img = document.createElement('img')
    img.src = images[0];
    img.className = "image"
    img.alt = `img${0 + 1}`;
    leftUpperContainer.appendChild(img)
}
function showVenderDefault(vend) {
    const vendor = document.querySelector('.vendor')
    vendor.innerText = `${vend}`
}
function showTitleDefault(title) {
    const prodHead = document.querySelector('.prodHead');
    prodHead.innerText = title
}
function showPriceDefault(price) {
    const ActualPrice = document.querySelector('.ActualPrice')
    ActualPrice.innerText = price
}
function showComparePriceDefault(comparePrice) {
    const CutPrice = document.querySelector('.CutPrice')
    CutPrice.innerText = comparePrice
}
function getcolor(Colorobj) {
    for (let color in Colorobj) {
        return Colorobj[color]
    }
}
function toggleColor(id,color) {
  if(savedDefaultColor!==''&&savedDefaultColor){
    const colorB = document.getElementById(savedDefaultColor);
    colorB.className ="border"
  }
  savedDefaultColor = id
  const colorB = document.getElementById(id);
  colorB.style.border =`2px solid ${color}`
  colorB.className = 'border ColorActive'
}
function toggleSize(id,size){
    if(savedDefaultSize!==''&&savedDefaultSize){
        const radioBtnBox = document.getElementById(savedDefaultSize)
        radioBtnBox.className = 'radioBtn';
    }
    savedDefaultSize = id;
    const radioBtnBox = document.getElementById(id)
    radioBtnBox.className='radioBtn activeSize';
    radioBtnBox.style.accentColor = 'var(--lightPurple)'
    selectedSize = size;
    console.log(size)

}
function showColors(arrOfColors) {
    const CombiOfColors = document.querySelector('.CombiOfColors')
    for (let i = 0; i < arrOfColors.length; i++) {
        const createBox = document.createElement('div')
        if (i == 0) {
            createBox.className = 'border ColorActive'

        } else {
            createBox.className = 'border'
        }
        createBox.id=`color${i + 1}`
        const colorBox = document.createElement('div');
        colorBox.className = `color c${i + 1}`
        const findcolor = getcolor(arrOfColors[i])
        colorBox.style.backgroundColor = findcolor
        createBox.appendChild(colorBox)
        createBox.addEventListener('click', () => { toggleColor(`color${i + 1}`,findcolor)
        selectedColor = getKeycolor(arrOfColors[i])
     })
        CombiOfColors.appendChild(createBox)
    }
}
function getKeycolor(colorobj){
    for(let color in colorobj){
        return color;
    }
}
function showsizes(arrOfsizes){
   const size = document.querySelector('.size')
   for(let i = 0; i<arrOfsizes.length; i++){
      const radioBtnBox = document.createElement('div')
      radioBtnBox.className = 'radioBtn';
      if(i==0){
        radioBtnBox.className = 'radioBtn activeSize';
      }else{
        radioBtnBox.className = 'radioBtn';
      }
      const radioBtn = document.createElement('input')
      radioBtn.type = 'radio';
      radioBtn.name = 'size'
      radioBtn.id = `radio${i+1}`
      radioBtn.style.accentColor = 'var(--lightPurple)'
      radioBtnBox.appendChild(radioBtn);
      radioBtn.addEventListener('change',()=>{
        toggleSize(`radio${i+1}`, arrOfsizes[i])
         console.log(radioBtn.value)
      })
      const TextSpan = document.createElement('span')
      TextSpan.innerText = arrOfsizes[i]
      radioBtnBox.appendChild(TextSpan);
      size.appendChild(radioBtnBox);
   }
}
let product = ''
async function defaultUI() {
    productData = await getData()
    product = productData.product
    showImageDefault()
    showVenderDefault(product.vendor)
    showTitleDefault(product.title)
    showPriceDefault(product.price)
    showComparePriceDefault(product.compare_at_price)
    showColors(product.options[0].values)
    showsizes(product.options[1].values)
    showDesc(product.description)
    // savedDefaultColor = getcolor(product.options[0].value[0])
}
defaultUI()




function toggleImage(src, id) {
    if (savedImgID !== '' && savedImgID) {
        const activeImage = document.getElementById(savedImgID)
        activeImage.style.border = "none"
    }
    savedImgID = id;
    console.log(src, id)
    leftUpperContainer.innerHTML = "";
    const activeImage = document.getElementById(id)
    activeImage.style.border = "2px solid var(--lightPurple)"
    const img = document.createElement('img')
    img.src = src
    img.className = "image"
    leftUpperContainer.appendChild(img)
    console.log("clicked")
}
for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img')
    img.src = images[i];
    img.className = "TypeImg"
    img.alt = `img${i + 1}`;
    img.id = `img${i + 1}`;
    img.addEventListener('click', () => {
        toggleImage(images[i], `img${i + 1}`)
    })
    leftBottomContainer.appendChild(img)
    if (`img${i + 1}` === `img${0 + 1}`) {
        const activeImage = document.getElementById(`img${i + 1}`)
        activeImage.style.border = "2px solid var(--lightPurple)"
    }
}