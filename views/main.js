const postData = async (user) => {
    try {
        let req = await fetch("http://localhost:8090/tasks", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        });
        if (req.ok) {
            let res = await req.json();
            console.log(res);
            alert("Task added successfully!");
            getTask();  // Refresh the task list after adding a new task
        } else {
            console.error(`Error: ${req.status} - ${req.statusText}`);
            alert("Failed to add task");
        }
    } catch (error) {
        console.error('Request failed', error);
        alert("Failed to add task due to a network or server issue.");
    }
};

let id = document.cookie;
let userId = id.split("; ")[0].split("=")[1];  // Correctly parsing the cookie
console.log(userId);
if (!userId) {
    window.location.href = "/views/login.html";
}

const handleData = (e) => {
    e.preventDefault();
    let data = {
        task: document.getElementById('task').value,
        userId: userId
    };
    postData(data);
};

document.getElementById("taskData").addEventListener("submit", handleData);

const mapper = (data) => {
    document.getElementById("taskList").innerHTML = "";

    data.map((ele) => {
        let h1 = document.createElement("h1");
        h1.innerHTML = ele.task;
        let h2 = document.createElement("h2");
        h2.innerHTML = ele.status ? "Completed" : "Pending";
        let div = document.createElement("div");
        div.append(h1, h2);

        document.getElementById("taskList").append(div);
    });
};

const getTask = async () => {
    try {
        let req = await fetch(`http://localhost:8090/tasks/user/${userId}`);
        if (!req.ok) {
            console.error(`Error: ${req.status} - ${req.statusText}`);
            alert("Failed to retrieve tasks");
            return;
        }
        let data = await req.json();
        mapper(data);
    } catch (error) {
        console.error('Request failed', error);
        alert("Failed to retrieve tasks due to a network or server issue.");
    }
};

getTask();
