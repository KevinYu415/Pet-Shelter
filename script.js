function Petting(pets_counter){
    var pets_counter  = document.querySelector("#"+ pets_counter);
    pets_counter.innerText++;
}
function donate(donation){
    donation.remove();
}
function choice(animal){
    if(animal.value == "Dog"){
        alert("You are looking for a: Dog");
    }
    else if(animal.value == "Cat"){
        alert("You are looking for a: Cat");
    }
}