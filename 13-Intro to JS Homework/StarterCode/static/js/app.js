// from data.js
var tableData = data;
const tbody= d3.select('tbody');

// YOUR CODE HERE!


// Building the table into 2 parts

function buildTable(data){ 
    // First, needing the clear table, and making space for the new data
    tbody.html("");

    data.forEach((item) => {
        var newRow= tbody.append('tr');
        Object.values(item).forEach((val) => {     
            newRow.append('td').text(val)
        });
    });
};

function handleClick() {
    // Looking through the date time value from the filer
    const date = d3.select("#datetime").property("value");
    const city = d3.select("#city").property("value");
    const state = d3.select("#state").property("value");
    const country = d3.select("#country").property("value");
    const shape = d3.select("#shape").property("value");

    // New variable (filteredData) be equal to our tabledata
    var filteredData= tableData; 

    // console.log(filteredData.datetime)
    // // Make surte to see a date was entered and we can filter the data using that date.
    if (date) {
        // Being able to utilize the table to filter data and view on the html index
        var filteredData = filteredData.filter(info => info.datetime === date);
    };
    
    if (city) {
        var lowCity= city.toLowerCase();
        // Being able to utilize the table to filter data and view on the html index
        var filteredData = filteredData.filter(info => info.city === lowCity);
    };
    
    if (state) {
        var lowState= state.toLowerCase();
        // Being able to utilize the table to filter data and view on the html index
        var filteredData = filteredData.filter(info => info.state === lowState);
    };
    if (country) {
        var lowCountry= country.toLowerCase();
        // Being able to utilize the table to filter data and view on the html index
        var filteredData = filteredData.filter(info => info.country === lowCountry);
    };
    if (shape) {
        var lowShape= shape.toLowerCase();
        // Being able to utilize the table to filter data and view on the html index
        var filteredData = filteredData.filter(info => info.shape === lowShape);
    };

    buildTable(filteredData)

};


d3.selectAll("#filter-btn").on('click', handleClick);


buildTable(tableData);

// .on('click')
