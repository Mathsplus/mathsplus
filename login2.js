function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="user")
{
    
	window.open("menu.html","_parent");
    return false;

}
else
{
    alert("login failed");
}


}
