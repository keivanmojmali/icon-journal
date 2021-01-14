let user = {
  uniqueId: 1,
  icons: {

  },
  entries: []
}


const returningUser = localStorage.getItem('user')

if(returningUser !== null) {
  user = JSON.parse(returningUser);
}


window.addEventListener('beforeunload', (e)=>{
  localStorage.setItem('user', JSON.stringify(user));
});
