const data = {
  icons: {
  }
};

const previousData = localStorage.getItem('data')
data = previousData;


window.addEventListener('beforeunload', (e)=>{
  const dataString = JSON.stringify(data);
  localStorage.setItem('data',dataString)
}))
