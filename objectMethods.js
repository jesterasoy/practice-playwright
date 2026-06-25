//Day 4: Objects & Methods

const users = [
    {
        username: "admin",
        role: "Administrator"
    },
    {
        username: "jester",
        role: "QA Tester"
    },
    {
        username: "john",
        role: "Developer"
    }
]

function username(users) {
    for (let i = 0; i < users.length; i++) {
        console.log("Username: " + users[i].username)
    }

}

function qaFound(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].role === "QA Tester") {
            console.log("\nQA Tester Found: " + users[i].username)
            console.log("\n")
        }
    }
}

function display(users) {
    let qaCount = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === "admin") {
            console.log("Username: " + users[i].username)
            console.log("Role: " + users[i].role)
        }

        if (users[i].role === "QA Tester") {
            qaCount++;
        }

        console.log("Username: " + users[i].username)
        console.log("Role: " + users[i].role)

    }
    console.log("\nTotal QA Testers: " + qaCount);

}

username(users);
qaFound(users);
display(users);


