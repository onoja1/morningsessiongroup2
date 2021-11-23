async function gettrees(){
    try {
        let trees = await axios.get('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai')

        document.getElementById("title").innerHTML = trees.data[0].productTitle; 
        document.getElementById("price").innerHTML = "Price: N" + trees.data[0].productPrice;
        document.getElementById("description").innerHTML = trees.data[0].productDescription;
        document.getElementById("image").src = "https://project1-bonsai-jacobtimms.vercel.app/" + trees.data[0].productImage;
    
    
        document.getElementById("title2").innerHTML = trees.data[1].productTitle; 
        document.getElementById("price2").innerHTML = "Price: N" + trees.data[1].productPrice;
        document.getElementById("description2").innerHTML = trees.data[1].productDescription;
        document.getElementById("image2").src = "https://project1-bonsai-jacobtimms.vercel.app/" + trees.data[1].productImage;
    
    
        document.getElementById("title3").innerHTML = trees.data[2].productTitle; 
        document.getElementById("price3").innerHTML = "Price: N" + trees.data[2].productPrice;
        document.getElementById("description3").innerHTML = trees.data[2].productDescription;
        document.getElementById("image3").src = "https://project1-bonsai-jacobtimms.vercel.app/" + trees.data[2].productImage;
        
        document.getElementById("title4").innerHTML = trees.data[3].productTitle;
        document.getElementById("price4").innerHTML = "Price: N" + trees.data[3].productPrice;
        document.getElementById("description4").innerHTML = trees.data[3].productDescription;
        document.getElementById("image4").src = "https://project1-bonsai-jacobtimms.vercel.app/" + trees.data[3].productImage;
    
        document.getElementById("title5").innerHTML = trees.data[4].productTitle;
        document.getElementById("price5").innerHTML = "Price: N" + trees.data[4].productPrice;
        document.getElementById("description5").innerHTML = trees.data[4].productDescription;
        document.getElementById("image5").src = "https://project1-bonsai-jacobtimms.vercel.app/" + trees.data[4].productImage;
    
        document.getElementById("title6").innerHTML = trees.data[5].productTitle;
        document.getElementById("price6").innerHTML = "Price: N" + trees.data[5].productPrice;
        document.getElementById("description6").innerHTML = trees.data[5].productDescription;
        document.getElementById("image6").src = "https://project1-bonsai-jacobtimms.vercel.app/" + trees.data[5].productImage;
    } catch (err) {
        console.error(err)
    }
}
gettrees()