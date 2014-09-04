function loadChart() {
$("#myChart").highcharts({
  xAxis: {
      categories: ['OO Design','Rails', 'Comp Sci', 'Gems/Libraries', 'Angular']
  },

  series: [
   	{
	  	data:[0,0,0,1,0], 
	  	stack:0,
	  	name:"Tracked Progress"
	  }, {
   		data: [5, 30, 5, 5, 15],
   		stack:0,
   		name:"Initial Estimates"
   	}
  ],
   chart: {
   	type:'column'
   }, 
   title: {
   	text:"Web Development Progress"
   },
   yAxis:{
   	title:{
   		text:"Experience level"
   	}
   },
   plotOptions: {
   	column: {
   		stacking: 'normal'
   	}
   }

});
};