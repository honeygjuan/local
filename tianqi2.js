// JavaScript Document
  
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
/* 相似度采用权重公式:（最高温+最低温）/(杭州最高温+杭州最低温)*0.3+风力/杭州风力*0.2+风速/杭州风速*0.2+能见度/杭州能见度*0.1+湿度/杭州湿度*0.1+气压/杭州气压*0.1*/
       function extendData()
		{
			
			var objs=[];//对象
			var simila=[];  //保存相似度
			var hangObj;
			for(var i=0;i<name.length;i++)
			{
				 $.getJSON("http://weather.china.xappengine.com/api?city="+name[i]+"&callback=?",
					 function(data){
						 
						 var high,low,chill,speed,visib,humi,pres;
						  
						 if(name[i]=="hangzhou")
						 {
							 high=data.forecasts[0].high;
							 low=data.forecasts[0].low;
							 chill=data.wind[0].chill;
							 speed=data.wind[0].speed;
							 visib=data.atmosphere[0].visibility;
							 humi=data.atmosphere[0].humidity;
							 pres=data.atmosphere[0].pressure;
							 hangObj=new Weather(high,low,chill,speed,visib,humi,pres);
						 }
						 else
						 {
							 var high=data.forecasts[0].high;
						     var low=data.forecasts[0].low;
						     var chill=data.wind[0].chill;
						     var speed=data.wind[0].speed;
						     var visib=data.atmosphere[0].visibility;
						     var humi=data.atmosphere[0].humidity;
						     var pres=data.atmosphere[0].pressure;
						     var obj=new Weather(high,low,chill,speed,visib,humi,pres);
						     objs.push(obj);
						 }
						
						if(objs.length==name.length-1)
						{
							for(var i=0;i<objs.length;i++)
							{
								simila.push(getSimp(objs[i],hangObj));
							}
							var plot2 = $.jqplot('chart22', [simila], {
							 title:{
				              text:"各城市与杭州天气相似度",
				              show:true
				              },
						     seriesDefaults: {
                              renderer: $.jqplot.BarRenderer,
                              rendererOptions: {
                              barMargin: 1   
                             }
                             },
                            series:[
                              {label:'相似度'}
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
                             
                }//end axes
            });
		 }//end if
						 });
		     }
		   
	    }
		
		function Weather(high,low,chill,speed,visibility,humidity,pressure)
		{
			//this.name=name;
			this.tempAvg=high+low;
			this.chill=chill;
			this.speed=speed;
			this.visibility=visibility;
			this.humidity=humidity;
			this.pressure=pressure;
	    }
		
		Weather.prototype={
		 //getName:function(){return this.name;}
		 getTempAvg:function(){return this.tempAvg;}
		 getChill:function(){return this.chill;}
		 getSpeed:function(){return this.speed;}
		 getVisib:function(){return this.visibility;}
		 getHumid:function(){return this.humidity;}
		 getPressure:function(){return this.pressure;}
		}
		function getSimp(obj1,obj2)
		{
			var sum=obj1.getTempAvg()/obj2.getTempAvg()*0.3+obj1.getChill()/obj2.getChill()*0.2+obj1.getSpeed()/obj2.getSpeed()*0.2+obj1.getVisib()/obj2.getVisib()*0.1+obj1.getHumid()/obj2.getHumid()+obj1.getPressure()/obj2.getPressure()*0.1;
			return sum;
	    }
		 
	
		 
		/* function showData()
		 {
			countTemp(); //调用统计高温
			computeSim();//调用相似度		 
		 }*/
		 
		