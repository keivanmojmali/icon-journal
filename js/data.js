let user = {
  icons: {

  },
  entries: []
}


const returningUser = localStorage.getItem('data')

if(returningUser !== null) {
  user = JSON.parse(returningUser);
}


window.addEventListener('beforeunload', (e)=>{
  localStorage.setItem('data', JSON.stringify(user));
});
