if(window.location.pathname === "/sign-up") {
    // DOM Objects
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const btn = document.querySelector("#btn-signup");

    // Event Listener
    btn.addEventListener("click", signUp);

    // Event Handler
    const signUp = (e) => {
        e.preventDefault();

        const formData = { username, email, password };

        fetch("https://api-gateway/sign-up", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData),
            redirect : "follow"
        }).then(res => res.json())
        .then(data => {
            window.location.href = "index.html";
        }).catch(err => console.log(err));
    };
}

if(window.location.pathname === "/sign-in") {
    // DOM Objects
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const btn = document.querySelector("#btn-signin");

    // Event Listener
    btn.addEventListener("click", signIn);

    // Event Handler
    const signIn = (e) => {
        e.preventDefault();

        const formData = { username, password };

        fetch("https://api-gateway/sign-in", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData),
            redirect : "follow"
        }).then(res => res.json())
        .then(data => {
            window.location.href = "index.html";
        }).catch(err => console.log(err));
    };
}

if(window.location.pathname === "/index") {
    // DOM Objects
    const subject = document.querySelector("#subject");
    const prescription = document.querySelector("#prescription");
    const btn = document.querySelector("#btn-prescription");

    // Event Listener
    btn.addEventListener("click", signUp);

    // Event Handler
    const signUp = (e) => {
        e.preventDefault();

        const formData = { subject, prescription };

        fetch("https://api-gateway/sign-up", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData),
            redirect : "follow"
        }).then(res => res.json())
        .then(data => {
            window.location.href = "intro.html";
        }).catch(err => console.log(err));
    };
}