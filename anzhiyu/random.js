var posts=["rainbow-bubbles/golang面试常见问题总结/","rainbow-bubbles/swoole面试常见问题/","rainbow-bubbles/PHP面试常见问题总结/","rainbow-bubbles/Ubuntu安装php/","rainbow-bubbles/搭建Hexo博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };