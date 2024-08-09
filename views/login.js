const postData = async (user) => {
    let req = await fetch("http://localhost:8090/user/login", {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
    });
    if (req.ok) {
        let res = await req.json();
        console.log(res);
        document.cookie = `id=${res.User._id}`;
        alert("Login successful!");
        window.location.href = "/views/index.html";
    } else {
        alert("Login failed. Please try again.");
    }
};

const handleData = (e) => {
    e.preventDefault();
    let data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    postData(data);
};

document.getElementById("userData").addEventListener("submit", handleData);
