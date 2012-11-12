 // JavaScript Document 

    var tempData =[];  //存放温度数据
	   var name=[];
	     name.push("anshan");
         name.push("aomen");
         name.push("baise");
         name.push("beihai");
         name.push("beijing");
         name.push("benxi");
         name.push("changde");
         name.push("changsha");
         name.push("chenzhou");
         name.push("chengdu");
         name.push("chongqing");
         name.push("dali");
         name.push("dalian");
         name.push("dandong");
         name.push("emeishan");
         name.push("erlianhaote");
         name.push("foshan");
         name.push("fushun");
         name.push("ganzhou");
         name.push("guangzhou");
         name.push("guilin");
         name.push("haerbin");
         name.push("haicheng");
         name.push("haikou");
         name.push("haining");
         name.push("hangzhou");
         name.push("hefei");
         name.push("huhehaote");
         name.push("xianggang");
         name.push("jinan");
         name.push("jingdezhen");
         name.push("jiujiang");
         name.push("jiuquan");
         name.push("kashi");
         name.push("kaifen");
         name.push("kelamayi");
         name.push("kunming");
         name.push("lasa");
         name.push("lanzhou");
         name.push("lishui");
         name.push("liuyang");
         name.push("liuzhou");
         name.push("luoyang");
         name.push("mianyang");
         name.push("mudanjiang");
         name.push("nanchang");
         name.push("nanjing");
         name.push("nanning");
         name.push("nanyang");
         name.push("ningbo");
         name.push("pingyao");
         name.push("poyang");
         name.push("qiqihaer");
         name.push("sanya");
         name.push("shanghai");
         name.push("shaoxing");
         name.push("shenyang");
         name.push("shenzhen");
         name.push("shijiazhuang");
         name.push("suining");
         name.push("taibei");
         name.push("taiyuan");
         name.push("tianjin");
         name.push("tieling");
         name.push("tulufan");
         name.push("wulumuqi");
         name.push("wenzhou");
         name.push("wugang");
         name.push("wuhan");
         name.push("wutaishan");
         name.push("wuzhou");
         name.push("xiangtan");
         name.push("yangcheng");
         name.push("yangquan");
         name.push("yichun");
         name.push("yueyang");
         name.push("yuncheng");
         name.push("zhengzhou");
		  
		 function showData()
		 { 
		
			for(var i=0;i<name.length;i++)
		    {
			  $.getJSON("http://weather.china.xappengine.com/api?city="+name[i]+"&callback=?",
              function(data) {
				  tempData.push(data.forecasts[0].high);
				  if(tempData.length==name.length-1)
				  {
					  tempData.sort();
					  var len=tempData.length;
                      var highTemp = [];
                      var cityNum = [];
                   for(var i=0;i<len;)
		           {
                      var maxnum = 0;
                    for(var j=i;j<len;j++)
			        { 
                       if(tempData[i] == tempData[j]){
                         maxnum++;
			            }
                    }
                    highTemp.push(tempData[i]);
                    cityNum.push(maxnum);
                    i+=maxnum;
					
                   }
               
               var plot = $.jqplot('chart1', [cityNum], {
                  title:{
				    text:"全国天气最高气温数量统计图",
				    show:true
				 },
                 seriesDefaults: {
                 renderer: $.jqplot.BarRenderer,
                 rendererOptions: {
                 barMargin: 1   
                 }
                 },
                 series:[
                    {label:'城市个数'}
                  ],
                legend:{
                 show:true,
                 location:'ne'
                 },
                axes:{
                 xaxis:{
                     renderer:$.jqplot.CategoryAxisRenderer,
                     ticks:highTemp
                 },
                 yaxis:{
                     tickOptions:{formatString:'%d个'}
                 }
                }//end axes
            });
		 }//end if
		 
			  });
			
		 }//end for
		}
		
 
 
    
