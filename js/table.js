
var database = firebase.database();
var ref=database.ref().child("tes");
var d = new Date();
var today = new Date();
var dd = today.getDate();
var good;
var bad;
var production;
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}
today = dd+'-'+mm+'-'+yyyy;
var n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
console.log(n);

var reff=database.ref().child("table");
setInterval(function(){
  var date = new Date();
if(date.getHours() === 11 && date.getMinutes() === 06){
ref.once('value', function(snapshot) {

   var child = snapshot.val();
   good = child.good;
   bad = child.bad;
   console.log(good);
   var gv = parseInt(good, 10);
   var bv = parseInt(bad, 10);
   production = gv + bv;
   reff.push().set({
   good: good,
   bad: bad,
   production: production,
   date: today,
});
});
return;
}
}, 40000);
reff.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';
        snapshot.forEach(function(data){
            var val = data.val();
            content +='<tr>';
            content += '<td>' +val.date + '</td>';
            content += '<td>' +val.production + '</td>';
            content += '<td>' + val.good + '</td>';
            content += '<td>' + val.bad + '</td>';
            content += '</tr>';
        });
        $('#ex-table').append(content);
    }
});
ref.on('value', function(snapshot) {

   var child = snapshot.val();
   good = child.good;
   bad = child.bad;
   console.log(good);
   var gv = parseInt(good, 10);
   var bv = parseInt(bad, 10);
   production = gv + bv;

   //$('#ex').append("<tr><td>" +today+"</td><td>"+production+"</td><td>"+ good+ "</td><td>" + bad+"</td></tr>");
   // Email.send({
   //  Host : "smtp.gmail.com",
   //  Username : "divya.19.1@protosem.tech",
   //  Password : "divyard410",
   //  To : 'gokul.19.1@protosem.tech',
   //  From : "divya.19.1@protosem.tech",
   //  Subject :today + "  Regarding Quality Check Results",
   //  Body : "Total Production " + production + "<br> Good " + good + "<br> Bad " + bad,
   //});


  });
  // var database = firebase.database();
  //    database.ref().child("table").once('value', function(snapshot){
  //        if(snapshot.exists()){
  //            var content = '';
  //            snapshot.forEach(function(data){
  //                var val = data.val();
  //                content +='<tr>';
  //                content += '<td>' + val.bad + '</td>';
  //                content += '<td>' + val.good + '</td>'
  //                content += '</tr>';
  //            });
  //   $('#ex').append(content);
