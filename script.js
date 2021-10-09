const dqs = (el)=> document.querySelector (el);
const dqsall = (el)=> document.querySelectorAll (el);

pizzaJson.map((item, index)=>{
    let pizzaItem = document.querySelector('.pizza-item').cloneNode(true);
    // prencher as informaões em pizzariaItem

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        dqs ('.pizzaWindowArea').style.display = 'flex';
    });
        
    
     
    
    document.querySelector('.pizza-area').append(pizzaItem);

});