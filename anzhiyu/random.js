var posts=["rainbow-bubbles/Ubuntu安装php/","rainbow-bubbles/创建你的第一篇博客/","rainbow-bubbles/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };