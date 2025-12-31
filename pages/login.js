export default function login(){
    return `<form action="/submit" method="post">
        <input type="text" placeholder="enter name" />
        <br/>
        <br/>
        <input type="password" placeholder="enter password" />
        <br/>
        <br/>
        <button>Login</button>
        <a href='/'>Go To Home</a>
        </form>`
}