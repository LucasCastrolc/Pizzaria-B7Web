const dqs = (el)=>document.querySelector(el);
const dqsall = (el)=> document.querySelectorAll (el);

pizzaJson.map((item, index)=>{
    let pizzaItem = dqs('.models .pizza-item').cloneNode(true);

    //Variavel responsavel por armazenar qual pizza está sendo setada
    pizzaItem.setAttribute('data-key', index);

    // preencher as informações em pizzariaItem
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    
    //Adicionar evento suave de 200ms ao click do evento ao aparecer na tela

    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        dqs ('.pizzaBig img').src = pizzaJson[key].img;
        dqs('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        dqs('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        dqs('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        dqsall('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        dqs ('.pizzaWindowArea').style.opacity = 0;
        dqs ('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            dqs ('.pizzaWindowArea').style.opacity = 1;
        }, 200);
        
    });
        
    
     
    
    dqs('.pizza-area').append(pizzaItem);

});