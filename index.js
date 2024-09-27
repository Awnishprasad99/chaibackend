require("dotenv").config();

const express = require("express");

const app = express();

const github = {
  login: "Awnishprasad99",
  id: 82196621,
  node_id: "MDQ6VXNlcjgyMTk2NjIx",
  avatar_url: "https://avatars.githubusercontent.com/u/82196621?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Awnishprasad99",
  html_url: "https://github.com/Awnishprasad99",
  followers_url: "https://api.github.com/users/Awnishprasad99/followers",
  following_url:
    "https://api.github.com/users/Awnishprasad99/following{/other_user}",
  gists_url: "https://api.github.com/users/Awnishprasad99/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Awnishprasad99/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/Awnishprasad99/subscriptions",
  organizations_url: "https://api.github.com/users/Awnishprasad99/orgs",
  repos_url: "https://api.github.com/users/Awnishprasad99/repos",
  events_url: "https://api.github.com/users/Awnishprasad99/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Awnishprasad99/received_events",
  type: "User",
  site_admin: false,
  name: "Awnish prasad sharma",
  company: "A.P.J abdual kalam technical university",
  blog: "",
  location: "Gorakhpur ,India",
  email: null,
  hireable: null,
  bio: "I write code",
  twitter_username: null,
  public_repos: 35,
  public_gists: 0,
  followers: 5,
  following: 7,
  created_at: "2021-04-09T04:32:20Z",
  updated_at: "2024-09-20T12:28:15Z",
};


app.get('/github',(req,res)=>{
    res.send(github)
})
app.get("/", (req, res) => {
  res.send("hello there");
});

app.get("/twitter", (req, res) => {
  res.send("running twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>hello world</h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`server is running bro !! ${process.env.PORT}`);
});
