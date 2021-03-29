
/*
ITER CALC PRICE
1. AL CLICK DEL BUTTON ACCADE EVENTO --- calcolo prezzo  (AddEventListener) -- targhetizzo button
2. AL CLICK DEVO LEGGERE IL VALORE DELLA INPUT NAME -- targhetizzo name
3. SE NAME è OK AL CLICK AGGIUNGO COSTO INGREDIENTS AL PREZZO BASE -- taghetizzo ingredients
4. AL CLICK DEVO LEGGERE IL VALORE DELLA INPUT COUPON PER DISCOUNT
5. INSERISCO IN HTML PREZZO FINALE 


ITER ADD CLICCABILI
1. LOOP (get by class = htmlcollection)
2. ADDEVENTLISTENER CLICK 
3. SELEZIONARE ESATTAMENTE L'ADD CLICCATO
4. ASSOCIARE ALL'ADD CLICCATO IL FRATELLO A PARITà DI INDENTAZIONE PRECEDENTE ( ingrediente )
5. IL BOX DELL'INGREDIENTE DIVENTA CHECK
6. CAPOVOLGIMENTO DA TRUE A FALSE IN CASO DI DOPPIO CLICK (selezione / deselezione)
*/




//** REFERENZE
var btn = document.getElementById("button");
var burgerName = document.getElementById("name");
var ingredients = document.getElementsByClassName("ingredient-checkbox");  // get by class = Htmlcollection = serve un loop 
var coupon = document.getElementById("coupon");
var displayPrice = document.getElementById("price");
var addBtn = document.getElementsByClassName("ingredient-add"); // Htmlcollection

//** Settings
var coupons = ["codicesconto1", "codicesconto2", "codicesconto3"];



// CALC PRICE 

// 1
btn.addEventListener("click", function(){

    // 2
    var name = burgerName.value.trim();
    if (name.length === 0){
       alert("inserisci il nome del tuo Burger!!");
    } else {
       // 3
       price = 50;

       for (var i = 0; i < ingredients.length; i++ ){
           var ingredient = ingredients[i];

           // AGGIUNGO AL PREZZO SOLO INGRED SELEZIONATI
           // se è check
           if (ingredient.checked){
               // prendo valore input ingredient
               console.log(ingredient.value);
               // aggiorno prezzo convertendo il valore della stringa input in numero
               price += parseInt(ingredient.value);
           }
       }
       // aggiorno prezzo
       console.log(price);

       // 4
       var couponCode = coupon.value;
       // se il valore di coupon immesso è incluso in coupons
       if (coupons.includes(couponCode)){
           // - 20% di sconto 
           price -= price * 0.2;
       }

       // 5
       displayPrice.innerHTML = price.toFixed(2);
       

    }
    
});



// ADD CLICCABILI

// 1
for(var i = 0; i < addBtn.length; i++){
    var add = addBtn[i];

    // 2 
    add.addEventListener("click", function(){
        // 3
        console.log(this);
        // 4
        console.log(this.previousElementSibling);
        // 5
        var check = this.previousElementSibling;
        // 6
        check.checked = !check.checked;                  /* posso utilizzare la proprietà .checked perchè con .previusElementSibling 
                                                          ho associato lo span di add alla input (fratello a parità di indentazione precedente) */


        
    });
}
