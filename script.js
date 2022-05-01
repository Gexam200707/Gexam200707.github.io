function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const input = document.querySelector('.inputOF')

const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')

// plus.onclick = () => {
//     input.value++
// }
// minus.onclick = () => {
//     input.value--
// }







const quantities = document.querySelectorAll('.quantity');

[...quantities].forEach(function (quantity) {
    const minusButton = quantity.querySelector('.minus-btn');
    const plusButton = quantity.querySelector('.plus-btn');
    const inputField = quantity.querySelector('.input-btn');

    minusButton.addEventListener('click', function minusProduct() {
        const currentValue = Number(inputField.value);
        if (currentValue > 0) {
            inputField.value = currentValue - 1;
        } else inputField.value = 0
    });

    plusButton.addEventListener('click', function plusProduct() {
        const currentValue = Number(inputField.value);
        inputField.value = currentValue + 1;
    });

});


setInterval(() => {

    const clock = document.querySelector('.clock')
    let date = new Date()


    let hours = date.getHours();
    let minutes = date.getMinutes();
    let sec = date.getSeconds()
    let ampm = hours >= 12 ? 'Pm' : 'Am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ':' + sec + " " + ampm;

    clock.innerHTML = strTime


}, 0);


// Dark Mode


let darkMode = document.querySelector('.darkMode')
darkMode.onclick = () => {
    document.querySelector('body').style.background = '#010409'
    document.querySelector('.king_div').style.background = '#010409'
    document.querySelector('.container').style.background = '#010409'

    let h4 = document.querySelectorAll('.container h4 ')
    h4.forEach(pp => {
        pp.style.color = `white`
    })
    for (let i = 0; i < h4.length; i++) {
        h4[i].style.color = 'white'
    }


    let span = document.querySelectorAll('.container p ')
    span.forEach(spann => {
        spann.style.color = 'white'
    })
    for (let i = 0; i < span.length; i++) {
        span[i].style.color = 'white'
    }



    const elements = document.querySelectorAll(".ses");
    elements.forEach(element => {
        element.style.color = "white";
    });
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "white";
    }


    let show = document.querySelectorAll('.dropdown-content a')
    show.forEach(showw => {
        showw.style.color = 'white'
    })
    for (let i = 0; i < show.length; i++) {
        show[i].style.color = 'white'
    }


    let addItem = document.querySelectorAll('.addItem > a > h3')
    addItem.forEach(addItemm => {
        addItemm.style.background = 'white'
        addItemm.style.borderRadius = '20px'
        addItemm.style.width = '150px'
        addItemm.style.textAlign = 'center'

    })
    for (let i = 0; i < addItem.length; i++) {
        addItem[i].style.background = 'white'
    }


    let iimg = document.querySelectorAll('.addItem > i > img')

    iimg.forEach(iimgg => {
        iimgg.style.background = `white`
    })
    for (let i = 0; i < iimg.length; i++) {
        iimg[i].style.background = "white"
    }


    // let dropdownContent = document.querySelectorAll('.dropdown .dropdown-content')
    // dropdownContent.forEach(dropdownContentt => {
    //     dropdownContentt.style.background = '#393B3F'
    //     dropdownContentt.style.borderRadius = ' 20px'
    // })

    // for (let i = 0; i < dropdownContent.length; i++) {
    //     dropdownContentt.style.background = '#393B3F'
    // }


    let WhiteMode = document.querySelector('.WhiteMode')
    WhiteMode.innerHTML = "WhiteMode"

    WhiteMode.onclick = () => {
        location.reload()
    }

    const clock = document.querySelector('.clock')
    clock.style.color = "white"


}





// let conf = document.querySelector('.confirm')
// conf.onclick = () => {
//     document.body.style.background = '#4bff4b'
//     alert("You have successfully registered")
//     location.reload()
// }




