const inputEmail = document.querySelector("#log-in-email");
const inputPassword = document.querySelector("#log-in-password");
const buttonLogIn = document.querySelector("#log-in-button");
const containerLogIn = document.querySelector(".container-log-in");
const containerHomePage = document.querySelector("#container-home-page");


const users = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" },
]

const cards = [
    { title: "cat",
    description: "Lorem ipsum dolor sit amet.",
    img: "images/cat.jpeg",
    alt: "cat"
    },
    { title: "cat",
    description: "Lorem ipsum dolor sit amet.",
    img: "images/cat.jpeg",
    alt: "cat"
    },
    { title: "cat",
    description: "Lorem ipsum dolor sit amet.",
    img: "images/cat.jpeg",
    alt: "cat"
    },
    ];


const setLocalStorage =(user) =>{
 localStorage.setItem("tasks", JSON.stringify(user));
}
const TheLogIsIncorrect = () =>{
    const findByEmail = users.find(u => u.email === inputEmail.value);
    if(findByEmail.password === inputPassword.value){
        containerLogIn.style.display = "none";
        containerHomePage.style.display = "block";
        return true;
    }
    else{
        var modal = document.getElementById("error-modal");
        modal.style.display = "block";
        setTimeout(() => {
            modal.style.display = "none";
        }, 15000);
        return false
    }
}

 const clickButtonLogIn = () => {
   const isTrue = TheLogIsIncorrect();
   if(isTrue){
    const user = {isLoggedIn: true}
    setLocalStorage(user)
   }
 }
 const refreshment = () => {
    const refresh = getLocalStorage();
    if(refresh){
        containerLogIn.style.display = "none";
        containerHomePage.style.display = "block";
    }

 }

 
 const getLocalStorage =()=> {
   return JSON.parse(localStorage.getItem("tasks"))
 }

 buttonLogIn.addEventListener("click", clickButtonLogIn);
 window.addEventListener("load", refreshment);

