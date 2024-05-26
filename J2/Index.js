
  let btn = document.getElementById('go-top-btn');

  window onscroll = function(){
    scrollFunction{}
  };

  function scrollFunction(){
    if(document.documentElement.scrollTop > 50){
        btn.style.display = 'block';
    }
    else{
        btn.style.display = 'none';
    }
  }

  function GoTopFunction(){
    document.documentElement.scrollTop = 0;
  }