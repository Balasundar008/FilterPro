const buttons = document.querySelectorAll('.btn')
const boxes = document.querySelectorAll('.box')
const searchBox = document.querySelector('#search');

//  Search products by type product name in searchbox:
searchBox.addEventListener('keyup', (e) => {
    const searchText = e.target.value.toLowerCase().trim();
    //console.log(searchText);


    boxes.forEach((box) => {
        const data = box.dataset.item;
        //console.log(data);
        if (data.includes(searchText)) {
            box.style.display = 'block';
        }
        else {
            box.style.display = 'none';

        }

    })
    buttons.forEach((btn) => {
        btn.classList.remove('btn-clicked') //when search a product that btn-clicked class should be removed,because if not removed that class,
        // the last visited catagory and also all catogory will be showed
    })
    buttons[0].classList.add('btn-clicked')
    //when search a particular item the btn-clicked class
    // will be added at the all button,because we have notify that the search of product in all product
});


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveBtn(e);


        const btnName = btn.dataset.filter;


        boxes.forEach((box) => {

            if (btnName == 'all') {
                box.style.display = 'block';
            }
            else {
                const data = box.dataset.item;
                if (data.includes(btnName)) {
                    box.style.display = 'block';   //note: we show use every data-item name includes with their related btn name 
                }
                else {
                    box.style.display = 'none';

                }
            }

        })

    })
})

function setActiveBtn(e) {
    buttons.forEach((btn) => {
        btn.classList.remove('btn-clicked')
    })
    e.target.classList.add('btn-clicked')
}
