window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 650) nav.className = ''; else nav.className = 'scroll';
  };