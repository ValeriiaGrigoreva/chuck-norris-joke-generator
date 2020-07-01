document.querySelector(".get_jokes").addEventListener("click",getJokes);

function getJokes(e) {
    const number = document.querySelector("#number").value;

    const xhr = new XMLHttpRequest();

    xhr.open("GET",`http://api.icndb.com/jokes/random/${number}`, true);

    xhr.send();

    xhr.onload = function() {
        if(this.status == 200){
            const response = JSON.parse(this.responseText);

            let output = "";

            if(response.type === "success"){
                response.value.forEach(function(joke){
                    output += `<li class="list-group-item">${joke.joke}</li>`
                });
            }else{
                output += "<li>Something went wrong</li>";
            }

            document.querySelector(".jokes").innerHTML = output;
        }
    }
    e.preventDefault();
}