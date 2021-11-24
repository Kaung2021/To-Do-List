//First we need to define five vvariable for intereactive
var addBtn = document.getElementById('addBtn');
var removeBtn = document.getElementById('removeBtn');
var input = document.getElementById('addInput');
var list = document.getElementById('lists');
var dlt = document.getElementById('listIcon');
//In 5 of them,we need to declare only 3 variable to define
addBtn.addEventListener('click', addItem);
list.addEventListener('click', removeItem);

//Declaration > addBtn
function addItem() {
    //first,equal variable to input
    let data = input;
    //then using appendChild properties for addition
    const listCreate = document.createElement('li');
    const listText = document.createTextNode(data.value);
    listCreate.appendChild(listText);
    list.appendChild(listCreate);
    //script for close button
    const iconB = document.createElement('div');
    iconB.classList.add("listIcon");
    const closeBtn = document.createElement('Button');
    closeBtn.classList.add("rBtn");
    closeBtn.innerHTML = "⨉";
    //calling with appendChild
    iconB.appendChild(closeBtn);
    listCreate.appendChild(iconB);
    //clear the input
    data.value = ""

};
//Declaration > removeItem
function removeItem(element) {
    var item = element.target;
    if (item.classList[0]) {
        const list = item.parentElement;
        //adding Animation    
        list.classList.add('falling');
        list.addEventListener('transitionend', function() {
            //remove
            this.remove();
        })
    }
};
//Hide item
removeBtn.addEventListener('click', function() {
    let rBox = document.getElementById('listHolder');
    rBox.classList.toggle('rBox');
})