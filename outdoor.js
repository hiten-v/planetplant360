let l11=["Agave","Cactus","Snake Plant","Alovera","Jade Plant","Jasmine"];
let l22=[1200, 2000, 1500, 2700, 3500, 3000];
function myFunc(i)
{
    let p=parseInt(prompt("Enter the number of items to be added"));

    if (p>0)
    {
        alert(p+" items added to Cart");
        switch (i)
        {
            case "out1":
                console.log(l11[0]);
                document.getElementsByClassName("container").innerHTML=l11[0],l22[0];
                break;
            case "out2":
                document.getElementsByClassName("container").innerHTML=l11[1],l22[1];
                break;
            case "out3":
                document.getElementsByClassName("container").innerHTML=l11[2],l22[2];
                break;
            case "out4":
                document.getElementsByClassName("container").innerHTML=l11[3],l22[3];
                break;
            case "out5":
                document.getElementsByClassName("container").innerHTML=l11[4],l22[4];
                break;
            case "out6":
                document.getElementsByClassName("container").innerHTML=l11[5],l22[5];
                break;
        }
    }
    else
    {
        alert("No item added to Cart");
    }
}