// import {useDashboardStore} from '../stores/dashboard'
// import router from '../router'

// router.beforeEach((to) => {
//   console.log('Hello');
// })
// const store = useDashboardStore()

export const data = {
    
  labels: ['January', 'February', 'March', 'April', 'May', 'Jun'],
  datasets: [
    {
      label: 'Data One',
      lineTension: 0.3, 
      backgroundColor: '#88CC00',
      data: [10, 9, 20, 10, 0, 2],
      // data: store.chartData,
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
  