// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var matchArray = [
    {
        name: "Christin",
        imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUgaRD1kWIFyODPemD9SNObU9RErUi1iPJPjcGcY3soZ8bFgyJQ",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = matchArray;