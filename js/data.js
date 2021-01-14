let user = {
  icons: {},
  entries: []
};


user = JSON.parse(localStorage.getItem('data'));


window.addEventListener('beforeunload', (e)=>{
  localStorage.setItem('data', JSON.stringify(data));
});
