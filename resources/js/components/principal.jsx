// Recupera los datos del usuario de sessionStorage
const user = JSON.parse(window.sessionStorage.getItem('user'));
export const Principal=()=>{
    const user = JSON.parse(window.sessionStorage.getItem('user'));
    console.log(user);
    return(<div></div>)

}