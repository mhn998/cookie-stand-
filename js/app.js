
let hours = ["6:00am","7:00am","8:00am","9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm" , "2:00pm" , "3:00pm" , "4:00pm" , "5:00pm" , "6:00pm", "7:00pm"]


// The constructor function template
function Shop (name,minCust,maxCust,AvgCookieperCust,CustperHour,AvgCookieperHourArr) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust=maxCust;
    this.AvgCookieperCust = AvgCookieperCust;
    this.CustperHour = [];
    this.AvgCookieperHourArr = [];
    this.TotalCookies = 0; 

}

Shop.prototype.getRandomCust = function() {
    for (let i=0;i<hours.length;i++) {
        this.CustperHour.push(randomCustomerNumber(this.minCust,this.maxCust))
    }
}

Shop.prototype.getAvgCookieperHour = function () {
    for (let i =0;i<this.CustperHour.length;i++) {
        this.AvgCookieperHourArr.push(Math.floor(this.CustperHour[i]*this.AvgCookieperCust));
        this.TotalCookies+=Math.floor(this.CustperHour[i]*this.AvgCookieperCust)

      }

}


Shop.prototype.getTotalCookies = function() {
    let total = 0;
    for (let i =0; i<this.AvgCookieperHourArr.length;i++) {
        total+= this.AvgCookieperHourArr[i]
  }
  return total;  

}

Shop.prototype.CallEverything = function(object) {
    this.getRandomCust();
    this.getAvgCookieperHour();
    this.getTotalCookies();
}


let dataNames;
Shop.prototype.render = function() {



    let tr = document.createElement("tr")
    table.appendChild(tr)   

    dataNames = document.createElement("td")
    tr.appendChild(dataNames)
    dataNames.textContent = this.name;



    for(let i=0;i<hours.length;i++) {
        let dataSets = document.createElement("td")
        tr.appendChild(dataSets)
        dataSets.textContent = this.AvgCookieperHourArr[i];

    }

    let dataTotal = document.createElement("td")
    tr.appendChild(dataTotal)
    dataTotal.textContent = this.getTotalCookies();



}





// this function calculates the random number for customers
function randomCustomerNumber(min,max) { 
    let randomcustomer = Math.floor(Math.random()*((max-min+1)+min))
    return randomcustomer; 
}




// Define Shops & fill the object template
let seattle = new Shop ("Seattle",23,65,6.3,[],[]);
let tokyo = new Shop ("Tokyo",3,24,1.2,[],[])
let dubai = new Shop ("Dubai",11,38,3.7,[],[])
let paris = new Shop ("Paris",20,38,2.3,[],[])
let lima = new Shop ("Lima",2,16,4.6,[],[])

let allShops = [seattle,tokyo,dubai,paris,lima]

// fill the objectc arrays by passing them to their methods
for (let i =0;i<allShops.length;i++) {
    allShops[i].CallEverything();

}

//creates the table along with the headings
let Shops = document.getElementById("shops"); // id for containing div

let table = document.createElement("table");

Shops.appendChild(table)

// Heading function 
function rowHeading() {
    tr1st = document.createElement("tr")
table.appendChild(tr1st)

let tableHeading;
for (let i = 0;i<hours.length;i++) {
    tableHeading = document.createElement("th");
    tr1st.appendChild(tableHeading);
    tableHeading.textContent = hours[i];

  
  
}
tableHeading = document.createElement("th");
tr1st.appendChild(tableHeading)
tableHeading.textContent = "Location Daily Total";

}

rowHeading();


// filling table body 
for (let i=0;i<allShops.length;i++) {
    allShops[i].render();
}


//footer function

function footerHeading() {
let lastTr = document.createElement("tr")
table.appendChild(lastTr)

let dataTotal;
let grandData;
let grandTotal = 0;
dataTotal = document.createElement("td")
lastTr.appendChild(dataTotal)
dataTotal.innerText = "Totals" 
dataTotal.style.fontWeight= "700";
for(let i=0;i<hours.length;i++) {
    dataTotal = document.createElement("td")
    lastTr.appendChild(dataTotal)
    let totalEach =0;
    if (i<hours.length) {
        for (let j = 0; j < allShops.length; j++){
            totalEach += allShops[j].AvgCookieperHourArr[i];
        }
        dataTotal.textContent = totalEach;
    } 
       
    
}
for (let j = 0; j < allShops.length; j++) {
    grandTotal+=allShops[j].TotalCookies;

}
grandData =document.createElement("td")
lastTr.appendChild(grandData)
grandData.textContent = grandTotal;
// dataTotal.textContent = grandTotal;


}

footerHeading();



// dataTotal =document.createElement("td");
// lastTr.appendChild(dataTotal);
// dataTotal.textContent = SumofAll;





// generate footer
// function getRow(){
//     for(let i=0;i<hours.length;i++) {
//             let totalEach = 0;
//             for (let j = 0; j < allShops.length; j++){
//                 totalEach += allShops[j].AvgCookieperHourArr[i-1];
//             }
//             dataTotal.textContent = totalEach;
//     }

// } 





// Grab the sum for Each row of each shop per hour

// function TotalperHour() {
//     let totalEachHour = []
//     let sum;
//     let total;
//     for (let i=0;i<hours.length;i++) {
//         total =0;
//         let finalArr =[];
//         for(let j=0;j<allShops.length;j++) {

//             totalEachHour.push(allShops[j].AvgCookieperHourArr[i])
//             sum+=totalEachHour[j];

//             if(j==4) {
//                 total = sum;
//                 sum=0;
//             }
            
//         }
        
//         finalArr.push(total);
//         console.log(finalArr)
//     }

// }

// TotalperHour();
// console.log(finalArr)







// Shop.CallEverything(seattle);


// // Seattle 
// let seattle = {
//     name: "Seattle",
//     minCust: 23 , 
//     maxCust: 65 , 
//     AvgCookieperCust : 6.3 , 
//     CustperHour : [] ,
//     AvgCookieperHourArr : [] ,
//     getRandomCust: function () {
//         for (let i=0;i<hours.length;i++) {
//             this.CustperHour.push(randomCustomerNumber(this.minCust,this.maxCust))
//         }
//     } ,
//     getAvgCookieperHour : function() {
//         for (let i =0;i<this.CustperHour.length;i++) {
//           this.AvgCookieperHourArr.push(Math.floor(this.CustperHour[i]*this.AvgCookieperCust));

//         }


//     } ,
//     getTotalCookies : function() {
//         let total = 0;
//         for (let i =0; i<this.AvgCookieperHourArr.length;i++) {
//             total+= this.AvgCookieperHourArr[i]
//       }
//       return total;  
//     }


// }

// // This function is neccessary for calling methods inside functions and update the arrays which are the fuinal results
// function CallEverything(object) {
//     object.getRandomCust();
//     object.getAvgCookieperHour();
//     object.getTotalCookies();
// }



// // This function takes the name of the object and append elements to it
// function Append(object) {

//     let Shops = document.getElementById("shops"); // id for containing div

//     let title = document.createElement("h3");

//     Shops.appendChild(title);

//     title.textContent = object.name;

//     let unorderedlist = document.createElement("ul")

//     Shops.appendChild(unorderedlist)

//     for (let i = 0;i<hours.length;i++) {
//         let listItem = document.createElement("li");
//         unorderedlist.appendChild(listItem);
//         listItem.textContent= hours[i] + ":" + object.AvgCookieperHourArr[i]  
//     }

//     let totalitem = document.createElement("li")

//     unorderedlist.appendChild(totalitem);

//     totalitem.textContent = "total: " + object.getTotalCookies();

    
// }

// CallEverything(seattle)
// Append(seattle);



// // Tokyo 

// let tokyo = {
//     name: "Tokyo",
//     minCust: 3 , 
//     maxCust: 24 , 
//     AvgCookieperCust : 1.2 , 
//     CustperHour : [] ,
//     AvgCookieperHourArr : [] ,
//     getRandomCust: function () {
//         for (let i=0;i<hours.length;i++) {
//             this.CustperHour.push(randomCustomerNumber(this.minCust,this.maxCust))
//         }
//     } ,
//     getAvgCookieperHour : function() {
//         let AvgCookieperHour;
//         for (let i =0;i<this.CustperHour.length;i++) {

//           this.AvgCookieperHourArr.push(Math.floor(this.CustperHour[i]*this.AvgCookieperCust));

//         }


//     } ,
//     getTotalCookies : function() {
//         let total = 0;
//         for (let i =0; i<this.AvgCookieperHourArr.length;i++) {
//             total+= this.AvgCookieperHourArr[i]
//       }
//       return total;  
//     }


// }

// CallEverything(tokyo);
// Append(tokyo);

// // Dubai
// let dubai = {
//     name: "Dubai",
//     minCust: 11 , 
//     maxCust: 38 , 
//     AvgCookieperCust : 3.7 , 
//     CustperHour : [] ,
//     AvgCookieperHourArr : [] ,
//     getRandomCust: function () {
//         for (let i=0;i<hours.length;i++) {
//             this.CustperHour.push(randomCustomerNumber(this.minCust,this.maxCust))
//         }
//     } ,
//     getAvgCookieperHour : function() {
//         let AvgCookieperHour;
//         for (let i =0;i<this.CustperHour.length;i++) {

//           this.AvgCookieperHourArr.push(Math.floor(this.CustperHour[i]*this.AvgCookieperCust));

//         }


//     } ,
//     getTotalCookies : function() {
//         let total = 0;
//         for (let i =0; i<this.AvgCookieperHourArr.length;i++) {
//             total+= this.AvgCookieperHourArr[i]
//       }
//       return total;  
//     }


// }

// CallEverything(dubai);
// Append(dubai);

// // Paris
// let paris = {
//     name: "Paris",
//     minCust: 20 , 
//     maxCust: 38 , 
//     AvgCookieperCust : 2.3 , 
//     CustperHour : [] ,
//     AvgCookieperHourArr : [] ,
//     getRandomCust: function () {
//         for (let i=0;i<hours.length;i++) {
//             this.CustperHour.push(randomCustomerNumber(this.minCust,this.maxCust))
//         }
//     } ,
//     getAvgCookieperHour : function() {
//         let AvgCookieperHour;
//         for (let i =0;i<this.CustperHour.length;i++) {

//           this.AvgCookieperHourArr.push(Math.floor(this.CustperHour[i]*this.AvgCookieperCust));

//         }


//     } ,
//     getTotalCookies : function() {
//         let total = 0;
//         for (let i =0; i<this.AvgCookieperHourArr.length;i++) {
//             total+= this.AvgCookieperHourArr[i]
//       }
//       return total;  
//     }


// }

// CallEverything(paris);
// Append(paris);


// // Lima
// let lima = {
//     name: "Lima",
//     minCust: 2 , 
//     maxCust: 16 , 
//     AvgCookieperCust : 4.6 , 
//     CustperHour : [] ,
//     AvgCookieperHourArr : [] ,
//     getRandomCust: function () {
//         for (let i=0;i<hours.length;i++) {
//             this.CustperHour.push(randomCustomerNumber(this.minCust,this.maxCust))
//         }
//     } ,
//     getAvgCookieperHour : function() {
//         let AvgCookieperHour;
//         for (let i =0;i<this.CustperHour.length;i++) {

//           this.AvgCookieperHourArr.push(Math.floor(this.CustperHour[i]*this.AvgCookieperCust));

//         }


//     } ,
//     getTotalCookies : function() {
//         let total = 0;
//         for (let i =0; i<this.AvgCookieperHourArr.length;i++) {
//             total+= this.AvgCookieperHourArr[i]
//       }
//       return total;  
//     }


// }


// CallEverything(lima);
// Append(lima);

// //End