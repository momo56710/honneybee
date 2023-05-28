const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
plus.addEventListener("click", e => {

    const PiecesNum = Number(document.querySelector("#PiecesNum").value)
    document.querySelector("#PiecesNum").value = `${PiecesNum + 1}`
})
minus.addEventListener("click", e => {
    const PiecesNum = Number(document.querySelector("#PiecesNum").value)
    if (PiecesNum > 0) {
        document.querySelector("#PiecesNum").value = `${PiecesNum - 1}`
    }
})
const ImgThum = document.querySelectorAll(".NrmlvwIPT")
const ICnt = document.querySelector("#NrmlVw")
const IPrdct = document.querySelector("#NrmlvwIP")
const Style = document.querySelectorAll(".NrmlVwStyle")
const SlideShowCnt = document.querySelector(".SlideShowCnt")
const IPSrc = 'images/image-product-'
const IPList = [`${IPSrc}1.jpg`, `${IPSrc}2.jpg`, `${IPSrc}3.jpg`, `${IPSrc}4.jpg`]
const Ssprvs = document.querySelector("#SsPrevious")
const Ssnxt = document.querySelector("#Ssnext")
const Nrmlvwprvs = document.querySelector("#NrmlVwprevious")
const Nrmlvwnxt = document.querySelector("#NrmlVwnext")
let count = 0
ICnt.addEventListener("click", () => {
    Style.forEach(e => {
        e.addEventListener("click", () => {
            IPrdct.src = `${IPList[Array.from(Style).indexOf(e)]}`

        })
        e.checked ? ImgThum[Array.from(Style).indexOf(e)].classList.add("slected") : ImgThum[Array.from(Style).indexOf(e)].classList.remove("slected")
    })
})
if (screen.width > 700 && screen.height > 620) {
    IPrdct.addEventListener("click", e => {
        SlideShowCnt.classList.remove("none")


    })

}
const SsStyle = document.querySelectorAll(".SlideShowStyle")
const SsICnt = document.querySelector("#SlideShow")
const SsImgThum = document.querySelectorAll(".SlideShowIPT")
const SsIPrdct = document.querySelector("#SlideShowIP")
SsICnt.addEventListener("click", () => {
    SsStyle.forEach(e => {
        e.addEventListener("click", () => {
            SsIPrdct.src = `${IPList[Array.from(SsStyle).indexOf(e)]}`
            count = Array.from(SsStyle).indexOf(e)

        })
        e.checked ? SsImgThum[Array.from(SsStyle).indexOf(e)].classList.add("slected") : SsImgThum[Array.from(SsStyle).indexOf(e)].classList.remove("slected")
    })
})
let previous = (a) => {
    const ITum = document.querySelectorAll(".SlideShowStyle")
    count -= 1
    if (count < 0) {
        count = 3
    }
    a.src = `${IPList[count]}`
    ITum[count].checked = true
    ITum.forEach(e => {
        e.checked ? SsImgThum[Array.from(ITum).indexOf(e)].classList.add("slected") : SsImgThum[Array.from(ITum).indexOf(e)].classList.remove("slected")
    })
}
let next = (a) => {
    const ITum = document.querySelectorAll(".SlideShowStyle ")
    count += 1
    if (count > 3) {
        count = 0
    }
    a.src = `${IPList[count]}`
    ITum[count].checked = true
    ITum.forEach(e => {
        e.checked ? SsImgThum[Array.from(ITum).indexOf(e)].classList.add("slected") : SsImgThum[Array.from(ITum).indexOf(e)].classList.remove("slected")
    })
}
Ssprvs.addEventListener("click", () => {
    previous(SsIPrdct)

})
Ssnxt.addEventListener("click", () => {
    next(SsIPrdct)

})
Nrmlvwprvs.addEventListener("click", () => {
    previous(IPrdct)

})
Nrmlvwnxt.addEventListener("click", () => {
    next(IPrdct)

})
const Ssclose = document.querySelector(".close")
Ssclose.addEventListener("click", e => {
    SlideShowCnt.classList.add("none")
})
Ssclose.addEventListener("mouseenter", e => {
    document.querySelector(".close img").src = "images/icon-close-orange.svg"
})
Ssclose.addEventListener("mouseleave", e => {
    document.querySelector(".close img").src = "images/icon-close.svg"
})
