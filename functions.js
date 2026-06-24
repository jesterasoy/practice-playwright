//Day 3: Functions
// Paramaters is a placeholders and arguments is a value
function getBrowser() {
    return "Chrome";
}
console.log(getBrowser())

function isAdmin(user) {
    if (user === "admin") {
        console.log(("true"));
    } else {
        console.log(("false"));
    }
}
isAdmin("admin");

function executeTest(testCase) {
    console.log("Running: " + testCase)
}
function runTestSuite() {
    const tC = ["Login", "Checkout", "Profile"]
    for (let i = 0; i < tC.length; i++) {
        executeTest(tC[i]);
    }

}
runTestSuite();
