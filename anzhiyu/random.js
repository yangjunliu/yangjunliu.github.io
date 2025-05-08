var posts=["2025/05/08/hello-world/","2025/05/08/创建你的第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };