
let hours = ["6am","7am","8am","9am", "10am", "11am", "12pm", "1pm" , "2pm" , "3pm" , "4pm" , "5pm" , "6pm" , "7pm" ]


// Seattle 
let seattle = {
    name: "Seattle",
    minCust: 23 , 
    maxCust: 65 , 
    random : 0 ,
    AvgCookieperCust : 6.3 , 
    CustperHour : [] ,
    AvgCookieperHourArr : [] ,
    getRandomCust: function () {
        for (let i=0;i<hours.length;i++) {
            this.CustperHour.push(randomCustomerNumber(this.minCust,this.maxCust))
        }
    } ,
    getAvgCookieperHour : function() {
        let AvgCookieperHour;
        for (let i =0;i<this.CustperHour.length;i++) {

          this.AvgCookieperHourArr.push(Math.floor(this.CustperHour[i]*this.AvgCookieperCust));

        }


    } ,
    getTotalCookies : function() {
        let total = 0;
        for (let i =0; i<this.AvgCookieperHourArr.length;i++) {
            total+= this.AvgCookieperHourArr[i]
      }
      return total;  
    }


}

// This function is neccessary for calling methods inside functions and update the arrays which are the fuinal results
function CallEverything(object) {
    object.getRandomCust();
    object.getAvgCookieperHour();
    object.getTotalCookies();
}

// this function calculates the random number for customers
function randomCustomerNumber(min,max) { 
    let randomcustomer = Math.floor(Math.random()*((max-min+1)+min))
    return randomcustomer; 
}

// This function takes the name of the object and append elements to it
function Append(object) {

    let Shops = document.getElementById("shops"); // id for containing div

    let title = document.createElement("h3");

    Shops.appendChild(title);

    title.textContent = object.name;

    let unorderedlist = document.createElement("ul")

    Shops.appendChild(unorderedlist)

    for (let i = 0;i<hours.length;i++) {
        let listItem = document.createElement("li");
        unorderedlist.appendChild(listItem);
        listItem.textContent= hours[i] + ":" + object.AvgCookieperHourArr[i]  
    }

    let totalitem = document.createElement("li")

    unorderedlist.appendChild(totalitem);

    totalitem.textContent = "total: " + object.getTotalCookies();

    
}

CallEverything(seattle)
Append(seattle);



// Tokyo 

let tokyo = {
    name: "Tokyo",
    minCust: 3 , 
    maxCust: 24 , 
    random : 0 ,
    AvgCookieperCust : 1.2 , 
    CustperHour : [] ,
    AvgCookieperHourArr : [] ,
    getRandomCust: function () {
        for (let i=0;i<hours.length;i++) {
            this.CustperHour.push(randomCustomerNumber(this.minCust,this.maxCust))
        }
    } ,
    getAvgCookieperHour : function() {
        let AvgCookieperHour;
        for (let i =0;i<this.CustperHour.length;i++) {

          this.AvgCookieperHourArr.push(Math.floor(this.CustperHour[i]*this.AvgCookieperCust));

        }


    } ,
    getTotalCookies : function() {
        let total = 0;
        for (let i =0; i<this.AvgCookieperHourArr.length;i++) {
            total+= this.AvgCookieperHourArr[i]
      }
      return total;  
    }


}

CallEverything(tokyo);
Append(tokyo);

// Dubai
let dubai = {
    name: "Dubai",
    minCust: 11 , 
    maxCust: 38 , 
    random : 0 ,
    AvgCookieperCust : 3.7 , 
    CustperHour : [] ,
    AvgCookieperHourArr : [] ,
    getRandomCust: function () {
        for (let i=0;i<hours.length;i++) {
            this.CustperHour.push(randomCustomerNumber(this.minCust,this.maxCust))
        }
    } ,
    getAvgCookieperHour : function() {
        let AvgCookieperHour;
        for (let i =0;i<this.CustperHour.length;i++) {

          this.AvgCookieperHourArr.push(Math.floor(this.CustperHour[i]*this.AvgCookieperCust));

        }


    } ,
    getTotalCookies : function() {
        let total = 0;
        for (let i =0; i<this.AvgCookieperHourArr.length;i++) {
            total+= this.AvgCookieperHourArr[i]
      }
      return total;  
    }


}

CallEverything(dubai);
Append(dubai);

// Paris
let paris = {
    name: "Paris",
    minCust: 20 , 
    maxCust: 38 , 
    random : 0 ,
    AvgCookieperCust : 2.3 , 
    CustperHour : [] ,
    AvgCookieperHourArr : [] ,
    getRandomCust: function () {
        for (let i=0;i<hours.length;i++) {
            this.CustperHour.push(randomCustomerNumber(this.minCust,this.maxCust))
        }
    } ,
    getAvgCookieperHour : function() {
        let AvgCookieperHour;
        for (let i =0;i<this.CustperHour.length;i++) {

          this.AvgCookieperHourArr.push(Math.floor(this.CustperHour[i]*this.AvgCookieperCust));

        }


    } ,
    getTotalCookies : function() {
        let total = 0;
        for (let i =0; i<this.AvgCookieperHourArr.length;i++) {
            total+= this.AvgCookieperHourArr[i]
      }
      return total;  
    }


}

CallEverything(paris);
Append(paris);


// Lima
let lima = {
    name: "Lima",
    minCust: 2 , 
    maxCust: 16 , 
    random : 0 ,
    AvgCookieperCust : 4.6 , 
    CustperHour : [] ,
    AvgCookieperHourArr : [] ,
    getRandomCust: function () {
        for (let i=0;i<hours.length;i++) {
            this.CustperHour.push(randomCustomerNumber(this.minCust,this.maxCust))
        }
    } ,
    getAvgCookieperHour : function() {
        let AvgCookieperHour;
        for (let i =0;i<this.CustperHour.length;i++) {

          this.AvgCookieperHourArr.push(Math.floor(this.CustperHour[i]*this.AvgCookieperCust));

        }


    } ,
    getTotalCookies : function() {
        let total = 0;
        for (let i =0; i<this.AvgCookieperHourArr.length;i++) {
            total+= this.AvgCookieperHourArr[i]
      }
      return total;  
    }


}


CallEverything(lima);
Append(lima);

//End