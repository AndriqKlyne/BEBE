
flag=1
function f1()
{
    var Name = window.alert("I know you do, my Little one :)");
}
function f()
{
    if(flag==1)
        {
            Bn.style.top=400
            Bn.style.left=320
            flag=2
        }
    else if(flag==2)
        {
            Bn.style.top=200
            Bn.style.right=80
            flag=3
        }
    else if(flag==3)
        {
            Bn.style.top=520
            Bn.style.left=66
            flag=4
        }
    else if(flag==4)
    {
        Bn.style.top=200
        Bn.style.right=100
        flag=5
    }
    else if(flag==5)
    {
        Bn.style.top=100
        Bn.style.left=380
        flag=6
    }
    else if(flag==6)
    {
        Bn.style.top=450
        Bn.style.right=167
        flag=7
    }
    else if(flag==7)
    {
        Bn.style.top=234
        Bn.style.left=345
        flag=1
    }
}

