async function getride(){
    try {
        let ride = await axios.get('https://jsonplaceholder.typicode.com/users')

        document.getElementById("name").innerHTML = ride.data[1].name;
        document.getElementById("username").innerHTML = "Username:" + ride.data[1].username;
        document.getElementById("email").innerHTML = "Email:" + ride.data[1].email;
        document.getElementById("address").innerHTML = "Street:" + ride.data[1].address.street;
        document.getElementById("address22").innerHTML = "Suite:" + ride.data[1].address.suite;
        document.getElementById("address30").innerHTML = "City:" + ride.data[1].address.city;
        document.getElementById("address40").innerHTML = "Zipcode:" + ride.data[1].address.zipcode;
        document.getElementById("address50").innerHTML = "Lat:" + ride.data[1].address.geo.lat;
        document.getElementById("address60").innerHTML = "Lng:" + ride.data[1].address.geo.lng;
        document.getElementById("phone").innerHTML = "Phone:" + ride.data[1].phone;
        document.getElementById("website").innerHTML = "Website:" + ride.data[1].website;
        document.getElementById("company").innerHTML = "Company:" + ride.data[1].company.name;
        document.getElementById("company10").innerHTML = "Company:" + ride.data[1].company.catchPhrase;
        document.getElementById("company20").innerHTML = "Company:" + ride.data[1].company.bs;

        document.getElementById("name2").innerHTML = ride.data[2].name;
        document.getElementById("username2").innerHTML = "Username:" + ride.data[2].username;
        document.getElementById("email2").innerHTML = "Email:" + ride.data[2].email;
        document.getElementById("address2").innerHTML = "Street:" + ride.data[2].address.street;
        document.getElementById("address23").innerHTML = "Suite:" + ride.data[2].address.suite;
        document.getElementById("address31").innerHTML = "City:" + ride.data[2].address.city;
        document.getElementById("address41").innerHTML = "Zipcode:" + ride.data[2].address.zipcode;
        document.getElementById("address51").innerHTML = "Lat:" + ride.data[2].address.geo.lat;
        document.getElementById("address61").innerHTML = "Lng:" + ride.data[2].address.geo.lng;
        document.getElementById("phone2").innerHTML = "Phone:" + ride.data[2].phone;
        document.getElementById("website2").innerHTML = "Website:" + ride.data[2].website;
        document.getElementById("company2").innerHTML = "Company:" + ride.data[2].company.name;
        document.getElementById("company11").innerHTML = "Company:" + ride.data[2].company.catchPhrase;
        document.getElementById("company21").innerHTML = "Company:" + ride.data[2].company.bs;

        document.getElementById("name3").innerHTML = ride.data[3].name;
        document.getElementById("username3").innerHTML = "Username:" + ride.data[3].username;
        document.getElementById("email3").innerHTML = "Email:" + ride.data[3].email;
        document.getElementById("address3").innerHTML = "Street:" + ride.data[3].address.street;
        document.getElementById("address24").innerHTML = "Suite:" + ride.data[3].address.suite;
        document.getElementById("address32").innerHTML = "City:" + ride.data[3].address.city;
        document.getElementById("address42").innerHTML = "Zipcode:" + ride.data[3].address.zipcode;
        document.getElementById("address52").innerHTML = "Lat:" + ride.data[3].address.geo.lat;
        document.getElementById("address62").innerHTML = "Lng:" + ride.data[3].address.geo.lng;
        document.getElementById("phone3").innerHTML = "Phone:" + ride.data[3].phone;
        document.getElementById("website3").innerHTML = "Website:" + ride.data[3].website;
        document.getElementById("company3").innerHTML = "Company:" + ride.data[3].company.name;
        document.getElementById("company12").innerHTML = "Company:" + ride.data[3].company.catchPhrase;
        document.getElementById("company22").innerHTML = "Company:" + ride.data[3].company.bs;

        document.getElementById("name4").innerHTML = ride.data[4].name;
        document.getElementById("username4").innerHTML = "Username:" + ride.data[4].username;
        document.getElementById("email4").innerHTML = "Email:" + ride.data[4].email;
        document.getElementById("address4").innerHTML = "Street:" + ride.data[4].address.street;
        document.getElementById("address25").innerHTML = "Suite:" + ride.data[4].address.suite;
        document.getElementById("address33").innerHTML = "City:" + ride.data[4].address.city;
        document.getElementById("address43").innerHTML = "Zipcode:" + ride.data[4].address.zipcode;
        document.getElementById("address53").innerHTML = "Lat:" + ride.data[4].address.geo.lat;
        document.getElementById("address63").innerHTML = "Lng:" + ride.data[4].address.geo.lng;
        document.getElementById("phone4").innerHTML = "Phone:" + ride.data[4].phone;
        document.getElementById("website4").innerHTML = "Website:" + ride.data[4].website;
        document.getElementById("company4").innerHTML = "Company:" + ride.data[4].company.name;
        document.getElementById("company13").innerHTML = "Company:" + ride.data[4].company.catchPhrase;
        document.getElementById("company23").innerHTML = "Company:" + ride.data[4].company.bs;

        document.getElementById("name5").innerHTML = ride.data[5].name;
        document.getElementById("username5").innerHTML = "Username:" + ride.data[5].username;
        document.getElementById("email5").innerHTML = "Email:" + ride.data[5].email;
        document.getElementById("address5").innerHTML = "Street:" + ride.data[5].address.street;
        document.getElementById("address26").innerHTML = "Suite:" + ride.data[5].address.suite;
        document.getElementById("address34").innerHTML = "City:" + ride.data[5].address.city;
        document.getElementById("address44").innerHTML = "Zipcode:" + ride.data[5].address.zipcode;
        document.getElementById("address54").innerHTML = "Lat:" + ride.data[5].address.geo.lat;
        document.getElementById("address64").innerHTML = "Lng:" + ride.data[5].address.geo.lng;
        document.getElementById("phone5").innerHTML = "Phone:" + ride.data[5].phone;
        document.getElementById("website5").innerHTML = "Website:" + ride.data[5].website;
        document.getElementById("company5").innerHTML = "Company:" + ride.data[5].company.name;
        document.getElementById("company14").innerHTML = "Company:" + ride.data[5].company.catchPhrase;
        document.getElementById("company24").innerHTML = "Company:" + ride.data[5].company.bs;

        document.getElementById("name6").innerHTML = ride.data[6].name;
        document.getElementById("username6").innerHTML = "Username:" + ride.data[6].username;
        document.getElementById("email6").innerHTML = "Email:" + ride.data[6].email;
        document.getElementById("address6").innerHTML = "Street:" + ride.data[6].address.street;
        document.getElementById("address27").innerHTML = "Suite:" + ride.data[6].address.suite;
        document.getElementById("address35").innerHTML = "City:" + ride.data[6].address.city;
        document.getElementById("address45").innerHTML = "Zipcode:" + ride.data[6].address.zipcode;
        document.getElementById("address55").innerHTML = "Lat:" + ride.data[6].address.geo.lat;
        document.getElementById("address65").innerHTML = "Lng:" + ride.data[6].address.geo.lng;
        document.getElementById("phone6").innerHTML = "Phone:" + ride.data[6].phone;
        document.getElementById("website6").innerHTML = "Website:" + ride.data[6].website;
        document.getElementById("company6").innerHTML = "Company:" + ride.data[6].company.name;
        document.getElementById("company15").innerHTML = "Company:" + ride.data[6].company.catchPhrase;
        document.getElementById("company25").innerHTML = "Company:" + ride.data[6].company.bs;

    } catch(err) {
        console.error(err)
    }
}
getride()