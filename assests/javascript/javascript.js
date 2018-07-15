$("#mybutton").on("click", function(events){
    sessionStorage.setItem("userzip", $("#input1").val().trim());
    location.href = "Page-2-template.html";
})

$("#input1").on("enterKey",function(e){
    sessionStorage.setItem("userzip", $("#input1").val().trim());
    location.href = "Page-2-template.html";
});

 $("#input1").keyup(function(e){
     if(e.keyCode == 13)
     {
         $(this).trigger("enterKey");
     }
});
 
var zip = sessionStorage.getItem("userzip");
var mapdatalong = [];
var mapdatalat = [];
var concertVen = [];
var concertURL = [];
var venAddress = [];

localStorage.setItem("lons", mapdatalong);
localStorage.setItem("lats", mapdatalat);

 //create function for ajax data call
 function concert(){
     
     var queryURL = "https://api.jambase.com/events?zipCode=" + zip +"&radius=20page=0&api_key=43r3evt8kxbm266uphxmmyxy"
 
     $.ajax({
         url: queryURL,
         method: "GET"
     }).then(function(response){
         var load = response.Events;
         for (var i = 0; i < load.length; i++){
         var conartist = load[i].Artists[0].Name;
         var condates = load[i].Date;
         var convenue = load[i].Venue.Name;
         var conaddress = load[i].Venue.Address;
         var concity = load[i].Venue.City;
         var venURL = load[i].Venue.Url;
         var lats = load[i].Venue.Latitude;
         var longs = load[i].Venue.Longitude;
          
         mapdatalat.push(lats);
         mapdatalong.push(longs);
         concertVen.push(convenue);
         concertURL.push(venURL);
         venAddress.push(conaddress);


         
        var newDiv = $("<div class='box'>");
            newDiv.addClass("music-data")
        var p1 = $("<header class='is-size-4 has-text-weight-bold'>").append(conartist);
            newDiv.append(p1);
        var p2 = $("<p class='is-size-5'>").append("<strong>Date:</strong> " + condates);
            newDiv.append(p2);
        var p3 = $("<p class='is-size-5'>").append("<strong>Venue:</strong> " + convenue);
            newDiv.append(p3);
        var p4 = $("<p class='is-size-5'>").append("<strong>Address:</strong> " + conaddress);
            newDiv.append(p4);
        var p5 = $("<p class='is-size-5'>").append("<strong>City:</strong> " + concity);
            newDiv.append(p5);

        var secondDiv = $("<div class='box'>");
            secondDiv.addClass("buy-tickets")
        var q1 = $("<header class='is-size-4 has-text-weight-bold'>").append("<strong>Info</strong>");
            secondDiv.append(q1);
        var q2 = $("<a class='has-text-info is-size-4'>").append("<strong>Buy Tickets Now</strong>" + "<br>");
            q2.attr("href", venURL);
            secondDiv.append(q2);
        var q3 = $("<a class='has-text-danger is-size-4'>").append("<strong>Who The Fuck is This</strong>" + "<br>");
            q3.attr("href", "https://www.allmusic.com/search/artists/" + conartist);
            secondDiv.append(q3);
        var q4 = $("<a id='more-colors' class='is-size-4'>").append("<strong>Listen to a Song</strong>" );
            q4.attr("href", "https://www.youtube.com/results?search_query=" + conartist);
            secondDiv.append(q4);

          var conertdata = $("#new-data").append(newDiv);

          var tickitdata = $("#buy").append(secondDiv);
   
         }
        GetMap();
         var lonitutesOne = localStorage.getItem("lons");
        

          function GetMap() {
              // Initialize the map
              var lon = mapdatalat[0];
              var lat = mapdatalong[0];
             

              map = new Microsoft.Maps.Map(document.getElementById("myMap"),
                         { credentials: "AtWJG1uzq4rqQaftoe2MQVzNJN2SVic1QXgBO-5oaJsBRaHC2osRfoUKbvYBordM" });
            
              map.setView({
                  center: new Microsoft.Maps.Location(lon, lat),
                  zoom: 7
              })

              dataLayer = new Microsoft.Maps.EntityCollection();
              map.entities.push(dataLayer);
              

              var infoboxLayer = new Microsoft.Maps.EntityCollection();
              map.entities.push(infoboxLayer);

              infobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(0, 0), { visible: false, offset: new Microsoft.Maps.Point(0, 100) });
              infoboxLayer.push(infobox);

              AddData()
          }

          function AddData() {
              console.log(mapdatalat[0])
              console.log(mapdatalong[0]);
              console.log(concertVen)
            var lon = mapdatalat[0];
            var lat = mapdatalong[0];
            var conV = concertVen[0];
            var venueA = venAddress[0];
            var lon1 = mapdatalat[1];
            var lat1 = mapdatalong[1];
            var conV1 = concertVen[1];
            var venueA1 = venAddress[1];
            var lon2 = mapdatalat[2];
            var lat2 = mapdatalong[2];
            var conV2 = concertVen[2];
            var venueA2 = venAddress[2];
            var lon3 = mapdatalat[3];
            var lat3 = mapdatalong[3];
            var conV3 = concertVen[3];
            var venueA3 = venAddress[3];
            var lon4 = mapdatalat[4];
            var lat4 = mapdatalong[4];
            var conV4 = concertVen[4];
            var venueA4 = venAddress[4];
            var lon5 = mapdatalat[5];
            var lat5 = mapdatalong[5];
            var conV5 = concertVen[5];
            var venueA5 = venAddress[5];
            var lon6 = mapdatalat[6];
            var lat6 = mapdatalong[6];
            var conV6 = concertVen[6];
            var venueA6 = venAddress[6];
            var lon7 = mapdatalat[7];
            var lat7 = mapdatalong[7];
            var conV7 = concertVen[7];
            var venueA7 = venAddress[7];
            var lon8 = mapdatalat[8];
            var lat8 = mapdatalong[8];
            var conV8 = concertVen[8];
            var venueA8 = venAddress[8];
            var lon9 = mapdatalat[9];
            var lat9 = mapdatalong[9];
            var conV9 = concertVen[9];
            var venueA9 = venAddress[9];
            
            // var title = mapdatalat[2];
            // var lon2 = mapdatalat[0];
            // var lat2 = mapdatalat[1.];
            // var title2 = mapdatalat[2];
            // var lon3 = mapdatalat[0];
            // var lat3 = mapdatalat[1.];
            // var title3 = mapdatalat[2];
            // var lon4= mapdatalat[0];
            // var lat4 = mapdatalat[1.];
            // var title4 = mapdatalat[2];
            // var lon5 = mapdatalat[0];
            // var lat5 = mapdatalat[1.];
            // var title5 = mapdatalat[2];
            // var lon6 = mapdatalat[0];
            // var lat6 = mapdatalat[1.];
            // var title6 = mapdatalat[2];
            // var lon7 = mapdatalat[0];
            // var lat7 = mapdatalat[1.];
            // var title7 = mapdatalat[2];
            // var lon8 = mapdatalat[0];
            // var lat8 = mapdatalat[1.];
            // var title8 = mapdatalat[2];
            // var lon9 = mapdatalat[0];
            // var lat9 = mapdatalat[1.];
            // var title9 = mapdatalat[2];
            // var lon10 = mapdatalat[0];
            // var lat10 = mapdatalat[1.];
            // var title10 = mapdatalat[2];

            
              var pin1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon, lat));
              pin1.Title = conV;
              pin1.Description = venueA;
              Microsoft.Maps.Events.addHandler(pin1, 'click', displayInfobox);
              dataLayer.push(pin1);

              var pin2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon1, lat1));
              pin2.Title = conV1;
              pin2.Description = venueA1;
              Microsoft.Maps.Events.addHandler(pin2, 'click', displayInfobox);
              dataLayer.push(pin2);

              var pin3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
              pin3.Title = conV2;
              pin3.Description = venueA2;
              Microsoft.Maps.Events.addHandler(pin3, 'click', displayInfobox);
              dataLayer.push(pin3);

              var pin4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon3, lat3));
              pin4.Title = conV3;
              pin4.Description = venueA3;
              Microsoft.Maps.Events.addHandler(pin4, 'click', displayInfobox);
              dataLayer.push(pin4);

              var pin5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon4, lat4));
              pin5.Title = conV4;
              pin5.Description = venueA4;
              Microsoft.Maps.Events.addHandler(pin5, 'click', displayInfobox);
              dataLayer.push(pin5);

              var pin6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon5, lat5));
              pin6.Title = conV5;
              pin6.Description = venueA5;
              Microsoft.Maps.Events.addHandler(pin6, 'click', displayInfobox);
              dataLayer.push(pin6);

              var pin7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon6, lat6));
              pin7.Title = conV6;
              pin7.Description = venueA6;
              Microsoft.Maps.Events.addHandler(pin7, 'click', displayInfobox);
              dataLayer.push(pin7);

              var pin8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon7, lat7));
              pin8.Title = conV7;
              pin8.Description = venueA7;
              Microsoft.Maps.Events.addHandler(pin8, 'click', displayInfobox);
              dataLayer.push(pin8);

              var pin9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon8, lat8));
              pin9.Title = conV8;
              pin9.Description = venueA8;
              Microsoft.Maps.Events.addHandler(pin9, 'click', displayInfobox);
              dataLayer.push(pin9);


              var pin10 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon8, lat8));
              pin10.Title = conV9;
              pin10.Description = venueA9;
              Microsoft.Maps.Events.addHandler(pin10, 'click', displayInfobox);
              dataLayer.push(pin10);

        //       var pin2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
        //       pin2.Title = "This is Pin 2";
        //       pin2.Description = "Pin 2 description";
        //       Microsoft.Maps.Events.addHandler(pin2, 'click', displayInfobox);
        //       dataLayer.push(pin2);

        //       var pin3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
        //       pin3.Title = "This is Pin 2";
        //       pin3.Description = "Pin 2 description";
        //       Microsoft.Maps.Events.addHandler(pin3, 'click', displayInfobox);
        //       dataLayer.push(pin3);

        //       var pin4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
        //       pin4.Title = "This is Pin 2";
        //       pin4.Description = "Pin 2 description";
        //       Microsoft.Maps.Events.addHandler(pin4, 'click', displayInfobox);
        //       dataLayer.push(pin4);

        //       var pin5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
        //       pin2.Title = "This is Pin 2";
        //       pin2.Description = "Pin 2 description";
        //       Microsoft.Maps.Events.addHandler(pin5, 'click', displayInfobox);
        //       dataLayer.push(pin5);

        //       var pin6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
        //       pin6.Title = "This is Pin 2";
        //       pin6.Description = "Pin 2 description";
        //       Microsoft.Maps.Events.addHandler(pin6, 'click', displayInfobox);
        //       dataLayer.push(pin6);

        //       var pin7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
        //       pin7.Title = "This is Pin 2";
        //       pin7.Description = "Pin 2 description";
        //       Microsoft.Maps.Events.addHandler(pin7, 'click', displayInfobox);
        //       dataLayer.push(pin7);

        //       var pin8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
        //       pin8.Title = "This is Pin 2";
        //       pin8.Description = "Pin 2 description";
        //       Microsoft.Maps.Events.addHandler(pin8, 'click', displayInfobox);
        //       dataLayer.push(pin8);

        //       var pin9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
        //       pin9.Title = "This is Pin 2";
        //       pin9.Description = "Pin 2 description";
        //       Microsoft.Maps.Events.addHandler(pin9, 'click', displayInfobox);
        //       dataLayer.push(pin9);

        //       var pin10 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
        //       pin10.Title = "This is Pin 2";
        //       pin10.Description = "Pin 2 description";
        //       Microsoft.Maps.Events.addHandler(pin10, 'click', displayInfobox);
        //       dataLayer.push(pin10);
          }

          function displayInfobox(e) {
              if (e.targetType == 'pushpin') {
                  infobox.setLocation(e.target.getLocation());
                  infobox.setOptions({ visible: true, title: e.target.Title, description: e.target.Description });
              }
          }  

         var lonitutesOne = localStorage.getItem("lons");

     })
 };
console.log(mapdatalat);
concert();

//  var lonitutesOne = localStorage.getItem("lons");
//          console.log(lonitutesOne);

//           function GetMap() {
//               // Initialize the map
             

//               map = new Microsoft.Maps.Map(document.getElementById("myMap"),
//                          { credentials: "AtWJG1uzq4rqQaftoe2MQVzNJN2SVic1QXgBO-5oaJsBRaHC2osRfoUKbvYBordM" });

//               dataLayer = new Microsoft.Maps.EntityCollection();
//               map.entities.push(dataLayer);

//               var infoboxLayer = new Microsoft.Maps.EntityCollection();
//               map.entities.push(infoboxLayer);

//               infobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(0, 0), { visible: false, offset: new Microsoft.Maps.Point(0, 20) });
//               infoboxLayer.push(infobox);

//               AddData()
//           }

//           function AddData() {
//               console.log(mapdatalat[0])
//               console.log(mapdatalat);
//               console.log(mapdatalat);
//             var lon = mapdatalat[0];
//             var lat = mapdatalat[1.];
//             var title = mapdatalat[2];
//             var lon2 = mapdatalat[0];
//             var lat2 = mapdatalat[1.];
//             var title2 = mapdatalat[2];
//             var lon3 = mapdatalat[0];
//             var lat3 = mapdatalat[1.];
//             var title3 = mapdatalat[2];
//             var lon4= mapdatalat[0];
//             var lat4 = mapdatalat[1.];
//             var title4 = mapdatalat[2];
//             var lon5 = mapdatalat[0];
//             var lat5 = mapdatalat[1.];
//             var title5 = mapdatalat[2];
//             var lon6 = mapdatalat[0];
//             var lat6 = mapdatalat[1.];
//             var title6 = mapdatalat[2];
//             var lon7 = mapdatalat[0];
//             var lat7 = mapdatalat[1.];
//             var title7 = mapdatalat[2];
//             var lon8 = mapdatalat[0];
//             var lat8 = mapdatalat[1.];
//             var title8 = mapdatalat[2];
//             var lon9 = mapdatalat[0];
//             var lat9 = mapdatalat[1.];
//             var title9 = mapdatalat[2];
//             var lon10 = mapdatalat[0];
//             var lat10 = mapdatalat[1.];
//             var title10 = mapdatalat[2];

            
//             console.log(mapdatalat);
//               var pin1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon, lat));
//               pin1.Title = "This is Pin 2";
//               pin1.Description = "Pin 1 description";
//               Microsoft.Maps.Events.addHandler(pin1, 'click', displayInfobox);
//               dataLayer.push(pin1);

//               var pin2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
//               pin2.Title = "This is Pin 2";
//               pin2.Description = "Pin 2 description";
//               Microsoft.Maps.Events.addHandler(pin2, 'click', displayInfobox);
//               dataLayer.push(pin2);

//               var pin3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
//               pin3.Title = "This is Pin 2";
//               pin3.Description = "Pin 2 description";
//               Microsoft.Maps.Events.addHandler(pin3, 'click', displayInfobox);
//               dataLayer.push(pin3);

//               var pin4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
//               pin4.Title = "This is Pin 2";
//               pin4.Description = "Pin 2 description";
//               Microsoft.Maps.Events.addHandler(pin4, 'click', displayInfobox);
//               dataLayer.push(pin4);

//               var pin5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
//               pin2.Title = "This is Pin 2";
//               pin2.Description = "Pin 2 description";
//               Microsoft.Maps.Events.addHandler(pin5, 'click', displayInfobox);
//               dataLayer.push(pin5);

//               var pin6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
//               pin6.Title = "This is Pin 2";
//               pin6.Description = "Pin 2 description";
//               Microsoft.Maps.Events.addHandler(pin6, 'click', displayInfobox);
//               dataLayer.push(pin6);

//               var pin7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
//               pin7.Title = "This is Pin 2";
//               pin7.Description = "Pin 2 description";
//               Microsoft.Maps.Events.addHandler(pin7, 'click', displayInfobox);
//               dataLayer.push(pin7);

//               var pin8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
//               pin8.Title = "This is Pin 2";
//               pin8.Description = "Pin 2 description";
//               Microsoft.Maps.Events.addHandler(pin8, 'click', displayInfobox);
//               dataLayer.push(pin8);

//               var pin9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
//               pin9.Title = "This is Pin 2";
//               pin9.Description = "Pin 2 description";
//               Microsoft.Maps.Events.addHandler(pin9, 'click', displayInfobox);
//               dataLayer.push(pin9);

//               var pin10 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lon2, lat2));
//               pin10.Title = "This is Pin 2";
//               pin10.Description = "Pin 2 description";
//               Microsoft.Maps.Events.addHandler(pin10, 'click', displayInfobox);
//               dataLayer.push(pin10);
//           }

//           function displayInfobox(e) {
//               if (e.targetType == 'pushpin') {
//                   infobox.setLocation(e.target.getLocation());
//                   infobox.setOptions({ visible: true, title: e.target.Title, description: e.target.Description });
//               }
//           }  

//          var lonitutesOne = localStorage.getItem("lons");
//          console.log(lonitutesOne);

// concert();





