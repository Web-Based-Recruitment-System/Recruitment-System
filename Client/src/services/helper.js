

/*Base url of backend*/
export const BASE_URL="http://localhost:7878";


//Logout the user and redirect to the sigin page
//pass the navigate when using
export const logout=(navigate)=>{
    localStorage.removeItem("token");
    navigate('/signin');
}
