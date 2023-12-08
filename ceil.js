let la1=["English Ivy ","Baby's Tears","Burro Tail","Arrowhead Vine","Boston Fern ","Philodendron"];
let la2=[2200,4000,3500,4200,4400,3900];
function myFunc(i)
{
    let p=parseInt(prompt("Enter the number of items to be added"));
    
    if (p>0)
    {
        alert(p+" items added to Cart");
        switch (i)
        {
            case "c1":
                console.log(la1[0]);
                document.getElementsByClassName("container").innerHTML=la1[0],la2[0];
                break;
            case "c2":
                document.getElementsByClassName("container").innerHTML=la1[1],la2[1];
                break;
            case "c3":
                document.getElementsByClassName("container").innerHTML=la1[2],la2[2];
                break;
            case "c4":
                document.getElementsByClassName("container").innerHTML=la1[3],la2[3];
                break;
            case "c5":
                document.getElementsByClassName("container").innerHTML=la1[4],la2[4];
                break;
            case "c6":
                document.getElementsByClassName("container").innerHTML=la1[5],la2[5];
                break;
        }
    }
    else
    {
        alert("No item added to Cart");
    }
}