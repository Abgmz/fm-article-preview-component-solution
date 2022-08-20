((d) => {
    let $shareBtns = d.querySelectorAll("[data-share-btn]");
    const $shareBox = d.querySelector("[data-share-box]");
    //console.log($shareBtns);
    const activeShareBox = (btn => {
        btn.addEventListener("click", e => {
            $shareBox.classList.toggle("active");
        })
    })

    $shareBtns.forEach(el => activeShareBox(el));
})(document);