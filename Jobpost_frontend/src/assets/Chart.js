export const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Data One',
        lineTension: 0.3, 
        backgroundColor: '#88CC00',
        data: [10, 39, 20, 50, 25],
        fill: false
      }
    ],
    options:{
        plugins: {
            filler: {
                propagate: true
            }
        }
    }
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  