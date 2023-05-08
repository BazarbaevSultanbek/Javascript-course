let list = document.querySelector(".list");
list.addEventListener("click", (event) => {
    if (event.target.className == "btn-del") {
        let listItems = document.querySelectorAll(".list-item")
        let listArr = Array.prototype.slice.call(listItems);
        
        let id = event.target.closest(".list-item").id
        let filteredArr = listArr.filter((item) => item.id != id)

        list.innerHTML = ""

        filteredArr.forEach(element => {
            list.appendChild(element)
        });


    }



})


