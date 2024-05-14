let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let post = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    // redundante, já que o input é requisitado pelo form
    if (input.value === "") {
        msg.innerHTML = "post não pode ser vazio";
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};

let createPost = (data) => {
    post.innerHTML += `
        <div>
            <p>${data.text}</p>
            <span class="options">
                <button onClick="editPost(this)">editar</button>
                <button onClick="deletePost(this)">deletar</button>
            </span>
        </div>
    `;
    input.value = "";
};

let acceptData = () => {
    let data = {};
    data["text"] = input.value;
    console.log(data);
    createPost(data);
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    console.log("post editado");
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
    console.log("post removido");
}