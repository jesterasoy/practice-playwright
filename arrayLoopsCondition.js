// //Day 2: Arrays, Loops, and Conditions
// const browser = ["Chrome", "Firefox", "Edge", "Safari"];
// console.log("Browsers: " + browser[1]);


// const testCase = "Execute Test Case";
// for (let i = 1; i <= 5; i++) {
//     console.log(testCase + " " + i);
// }

// const user = "test";
// if (user === "Admin") {
//     console.log("Access granted");
// } else {
//     console.log("Access denied");

// }

// const testCases = ["Login", "Checkout", "Profile", "Logout"];
// for (let i = 0; i < testCases.length; i++) {
//     console.log("Running Test: " + tC);
// }


function checkBrowser(browser) {
    if (browser === "Chrome") {
        console.log("Supported Browser")
    } else {
        console.log("Unsupported Browser")

    }
}
checkBrowser("Chrome");

function execute() {
    const testCases = [
        "Login",
        "Checkout",
        "Profile"
    ]

    for (i = 0; i < testCases.length; i++) {
        console.log("Executing " + testCases[i] + " Test");
    }
}
execute();

function condition() {
    const testCases = [
        "Login",
        "Checkout",
        "Profile",
        "Payment"
    ];

    for (i = 0; i < testCases.length; i++) {
        if (testCases[i] === "Checkout" || testCases[i] === "Payment") {
            console.log(testCases[i] + " - " + "Critical Test")
        } else {
            console.log(testCases[i] + " - " + "Normal Test")

        }
    }
}
condition();


function executeTest() {
    const testCases = [
        "Login",
        "Checkout",
        "Logout"
    ];

    for (i = 0; i < testCases.length; i++) {
        console.log("Running: " + testCases[i])
    }
}
executeTest();

function count() {
    const users = [
        "admin",
        "qa",
        "guest",
        "admin"
    ];
    let adminCount = 0;
    for (i = 0; i < users.length; i++) {
        if (users[i] === "admin") {
            adminCount++
        }
    }
    console.log("Total Admin Users: " + adminCount)
}
count();