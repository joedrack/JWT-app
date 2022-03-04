const Users = [
    {
        "email": "joe@gmail.com",
        "password": "12345678"
    },
    {
        "email": "yanko@gmail.com",
        "password": "@yankovicmush"
    }
]

/**
 * Let's suppose that we have public posts and prinuim posts where onlya authanticated users can access
 */
const publicPosts = [
    {
        title: "Javascript basics",
        content: "Javascript global Object"
    },
    {
        title: "Javascript variables",
        content: "Using var,let and const to declare variables in JS"
    }
]

const prenuimPosts = [
    {
        title: "Javascript functions",
        content: "Javascript functions power"
    },
    {
        title: "Javascript object",
        content: "Using key value pairs to store complexx data in JS"
    }
]

module.exports = {
    Users,
    publicPosts,
    prenuimPosts
}