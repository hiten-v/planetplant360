let l1=["Hawain Pothos","Bird's Nest Fern","Peace Lily","Cast Iron Plant","Tradescantia","Polka Dot Plant"];
let l2=[2000, 3000, 4000, 1700, 2000, 2100];
function myFunc(i)
{
    let p=parseInt(prompt("Enter the number of items to be added"));

    if (p>0)
    {
        alert(p+" items added to Cart");
        switch (i)
        {
            case "in1":
                console.log(l1[0]);
                document.getElementsByClassName("container").innerHTML=l1[0],l2[0];
                break;
            case "in2":
                document.getElementsByClassName("container").innerHTML=l1[1],l2[1];
                break;
            case "in3":
                document.getElementsByClassName("container").innerHTML=l1[2],l2[2];
                break;
            case "in4":
                document.getElementsByClassName("container").innerHTML=l1[3],l2[3];
                break;
            case "in5":
                document.getElementsByClassName("container").innerHTML=l1[4],l2[4];
                break;
            case "in6":
                document.getElementsByClassName("container").innerHTML=l1[5],l2[5];
                break;
        }
    }
    else
    {
        alert("No item added to Cart");
    }
}