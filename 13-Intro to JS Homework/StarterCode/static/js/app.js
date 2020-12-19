// from data.js
var tableData = data;
const tbody= d3.select('tbody');

// YOUR CODE HERE!


// Two functions (1) for that click (2) populate table with that data

function buildTable(data){ 
    // First, we need to clear the table, making space for the new data
    tbody.html("");

    data.forEach((item) => {
        var newRow= tbody.append('tr');
        Object.values(item).forEach((val) => {     
            newRow.append('td').text(val)
        });
    });
};

function handleClick() {
    // Grab the date time value from the filer
    const date = d3.select("#datetime").property("value");
    const city = d3.select("#city").property("value");
    const state = d3.select("#state").property("value");
    const country = d3.select("#country").property("value");
    const shape = d3.select("#shape").property("value");

    // Let a new variable (filteredData) be equal to our tabledata (we essentially have a copy of the original table)
    var filteredData= tableData; 

    // console.log(filteredData.datetime)
    // // Check to see if a date was entered and filter the data using that date
    if (date) {
        // Rebuild the table using the filter data and produce on the page
        var filteredData = filteredData.filter(info => info.datetime === date);
    };
    
    if (city) {
        var lowCity= city.toLowerCase();
        // Rebuild the table using the filter data and produce on the page
        var filteredData = filteredData.filter(info => info.city === lowCity);
    };
    
    if (state) {
        var lowState= state.toLowerCase();
        // Rebuild the table using the filter data and produce on the page
        var filteredData = filteredData.filter(info => info.state === lowState);
    };
    if (country) {
        var lowCountry= country.toLowerCase();
        // Rebuild the table using the filter data and produce on the page
        var filteredData = filteredData.filter(info => info.country === lowCountry);
    };
    if (shape) {
        var lowShape= shape.toLowerCase();
        // Rebuild the table using the filter data and produce on the page
        var filteredData = filteredData.filter(info => info.shape === lowShape);
    };

    buildTable(filteredData)

};


d3.selectAll("#filter-btn").on('click', handleClick);


buildTable(tableData);

// .on('click')
