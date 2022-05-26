 fetch("https://api.data.gov.sg/v1/environment/psi")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    var temp = "";
    environmentData = data.items[0].readings;
    updatedTimestamp = data.items[0].update_timestamp
    //console.log(updatedTimestamp);

    for(var key in environmentData) {

    //console.log(key)
    var metric = key;
    var west = environmentData[metric]['west'];
    var national = environmentData[metric]['national'];
    var east = environmentData[metric]['east'];
    var central = environmentData[metric]['central'];
    var south = environmentData[metric]['south'];
    var north = environmentData[metric]['north'];

    //format datetime
    var formattedDateTime = moment(updatedTimestamp).format('Do MMMM YYYY, h:mm:ss a')
    //console.log(formattedDateTime);

     temp += "<tr>";
     temp += "<td>" + metric + "</td>";
     temp += "<td>" + west + "</td>";
     temp += "<td>" + national + "</td>";
     temp += "<td>" + east + "</td>";
     temp += "<td>" + central + "</td>";
     temp += "<td>" + south + "</td>";
     temp += "<td>" + north + "</td>";
     temp += "</tr>"
}
//Insert the values into the HTML div elements 
document.getElementById("info").innerHTML = temp;
document.getElementById("updatedtimestamp").innerHTML = formattedDateTime;

    })
    
    .catch(function(error) {
      console.log(error);
    });