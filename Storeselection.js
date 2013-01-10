function Storeselection() {
  var self = Ti.UI.createView();
    var locationAdded = false;
		
	var header = Ti.UI.createView({
		top:0,
		height:'10%',
		backgroundColor:'black'
	});
	var head_lbl = Ti.UI.createLabel({
		text:'STORE SELECTION',
		color:'white'
	});
	var head_back = Ti.UI.createButton({
		title:'Back',
		left:'2%',
	});
	
	
	var content = Ti.UI.createView({
		top:'10%',
		height:'100%',
		backgroundColor:'white',
	});
	var country_lbl = Ti.UI.createLabel({
		text:'COUNTRY',
		top:'10%',
		left:'13%',
		color:'black'
	});
	var state_lbl = Ti.UI.createLabel({
		text:'STATE',
		top:'20%',
		left:'13%',
		color:'black'
	});
	var city_lbl = Ti.UI.createLabel({
		text:'CITY',
		top:'30%',
		left:'13%',
		color:'black'
	});
	var store_lbl = Ti.UI.createLabel({
		text:'STORE',
		top:'40%',
		left:'13%',
		color:'black'
	});
	var addr_lbl = Ti.UI.createLabel({
		text:'ADDRESS',
		top:'50%',
		left:'13%',
		color:'black'
	});
	var btn = Ti.UI.createButton({
		title:'Begin',
		top:'65%',
		width:'45%',
		height:'auto'
	});
	var addr = Ti.UI.createLabel({
		text:'Addressline1\nAddressline2',
		top:'50%',
		left:'42%',
		color:'black'
	});
	
	
var disable_view = Titanium.UI.createView({
	height:'480',
	backgroundColor:'black',
	opacity:0.5,
	zIndex:'1',
	visible:false
  });
var tr = Titanium.UI.create2DMatrix();
tr = tr.rotate(90);

var drop_button =  Titanium.UI.createButton({
		style:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
		transform:tr
});



var my_combo = Titanium.UI.createTextField({
	value:'India',
	width:'50%',
	top:'10%',
	left:'40%',
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	rightButton:drop_button,
	rightButtonMode:Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});



var picker_view = Titanium.UI.createView({
	height:250,
	bottom:-250,
	zIndex:'2'
});

var cancel =  Titanium.UI.createButton({
	title:'Cancel',
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});

var done =  Titanium.UI.createButton({
	title:'Done',
	style:Titanium.UI.iPhone.SystemButtonStyle.DONE
});

var spacer =  Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});


var toolbar =  Titanium.UI.createToolbar({
	top:0,
	items:[cancel,spacer,done]
});

var picker = Titanium.UI.createPicker({
		top:43
});
picker.selectionIndicator=true;

var picker_data = [
	Titanium.UI.createPickerRow({})
];


picker.add(picker_data);

picker_view.add(toolbar);
picker_view.add(picker);

var country_change=function(country_name)
{
    load_details_dropdown("SELECT DISTINCT state FROM store_master WHERE country=",picker1,2,country_name);
}

var state_change=function(state_name)
{
	load_details_dropdown("SELECT DISTINCT city FROM store_master WHERE state=",picker2,3,state_name);
}

var city_change=function(city_name)
{
	load_details_dropdown("SELECT s_name FROM store_master WHERE city=",picker3,4,city_name);
}

var store_change=function()
{
	load_address('SELECT address FROM store_master WHERE country=/"'+ my_combo.value +'/" and state=/"'+ my_combo1.value +'/" and city=/"'+ my_combo2.value +'/" and s_name=/"'+ my_combo3.value +'/"');
}



var load_details_dropdown=function(query,dropdown,index_var,search)
	{
		
		var url = "http://192.168.1.55:8080/enterprise_project/autosuggestion";
		var xhr = Ti.Network.createHTTPClient({
    	onload: function(e) {
    		//alert(this.responseText);
    		try
    		{
    			
    		var json_obj=JSON.parse(this.responseText);
    		if(json_obj.is_row == 1)
    		{
    		 //var current_pic = Ti.UI.createPicker({});	
    		 //current_pic=dropdown.source;
    			if(dropdown.columns[0])
				{
					var _col = dropdown.columns[0];
					var len = _col.rowCount;
        			for(var x = len-1; x >= 0; x-- )
        			{
                		var _row = _col.rows[x];
                		_col.removeRow(_row);
        			}
			    }
			    var pic_data=[];
	            var first_index;
	            if(json_obj.autosugvalues.length !=0)
	            {
	            	for(var j=0;j<json_obj.autosugvalues.length;j++)
			      {
			    	if(j==0)
			    	{
			    		first_index=json_obj.autosugvalues[j].sugvalue;
			    	}
			       	pic_data.push(Ti.UI.createPickerRow({title:json_obj.autosugvalues[j].sugvalue}));
			      }
	            }
			    
			    
			    dropdown.add(pic_data);
			    
			    if(index_var == 1)
			    {
			       my_combo.value=first_index;
			       country_change(first_index);
			    }
			    else if(index_var == 2)
			    {
			    	my_combo1.value=first_index;
			    	state_change(first_index);
			    }
			    else if(index_var == 3)
			    {
			    	my_combo2.value=first_index;
			    	city_change(first_index);
			    }
			    else if(index_var === 4)
			    {
			    	my_combo3.value =first_index;
			    	store_change();
			    } 
    		}
    		else
    		{
    			alert(this.responseText);
       		}
    		
    		//dlg.hide();
    		
    		}
    		catch(e)
    		{
    			//dlg.hide();
    		}
    	},
    	onerror: function(e) {
        	// this function is called when an error occurs, including a timeout
        	//dlg.hide();
        	Ti.API.debug(e.error);
        	alert("Can't Find Server,Make Sure you are connected to internet.Try again!");
    	},
    		timeout:60000  /* in milliseconds */
		});
		
		var loginpost;
		if(index_var ==1)
		{
			loginpost = {
    		    json: "{'query':'"+ query +"','search':''}"
		    };
		}
		else
		{
			loginpost = {
    		    json: "{'query':'"+ query +"','search':'"+ search +"'}"
		    };
		}
		
		
		
		
		
		xhr.open("POST", url);
		
		xhr.send(loginpost);  // request is actually sent with this statement
		//dlg.show();
	}




var load_address=function(query)
	{
	   
		var url = "http://192.168.1.55:8080/enterprise_project/autosuggestion";
		var xhr = Ti.Network.createHTTPClient({
    	onload:function(e){
    		//alert(this.responseText);
    		var json_obj=JSON.parse(this.responseText);
    		addr.text="address is loading...";
    		if(json_obj.autosugvalues.length  != 0)
    		{
    		  addr.text=json_obj.autosugvalues[0].sugvalue;
    		}
    		
    		dlg.hide();
    		
    	},
    	onerror: function(e) {
        	// this function is called when an error occurs, including a timeout
        	dlg.hide();
        	Ti.API.debug(e.error);
        	alert("Can't Find Server,Make Sure you are connected to internet.Try again!");
    	},
    		timeout:60000  /* in milliseconds */
		});
		
		var loginpost = {
    		json: "{'query':'"+ query  +"','search':''}"
		};
		
		xhr.open("POST", url);
		
		xhr.send(loginpost);  // request is actually sent with this statement
		dlg.show();	
	}
	











var slide_in =  Titanium.UI.createAnimation({bottom:0});
var slide_out =  Titanium.UI.createAnimation({bottom:-250});



my_combo.addEventListener('focus', function() {
	my_combo.blur();
	picker_view.animate(slide_in);
    disable_view.visible=true;
});

drop_button.addEventListener('click',function() {
	picker_view.animate(slide_in);
	disable_view.visible=true;
});

cancel.addEventListener('click',function() {
	picker_view.animate(slide_out);
	disable_view.visible=false;
});

done.addEventListener('click',function() {
	my_combo.value =  picker.getSelectedRow(0).title;
	picker_view.animate(slide_out);
	disable_view.visible=false;
	load_details_dropdown("SELECT DISTINCT state FROM store_master WHERE country=",picker1,2, picker.getSelectedRow(0).title);
});




var drop_button1 =  Titanium.UI.createButton({
		style:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
		transform:tr
});
var my_combo1 = Titanium.UI.createTextField({
	value:'Tamil Nadu',
	width:'50%',
	top:'20%',
	left:'40%',
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	rightButton:drop_button1,
	rightButtonMode:Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});



var picker_view1 = Titanium.UI.createView({
	height:250,
	bottom:-250,
	zIndex:'1'
});

var cancel1 =  Titanium.UI.createButton({
	title:'Cancel',
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});

var done1 =  Titanium.UI.createButton({
	title:'Done',
	style:Titanium.UI.iPhone.SystemButtonStyle.DONE
});

var spacer1 =  Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});


var toolbar1 =  Titanium.UI.createToolbar({
	top:0,
	items:[cancel1,spacer1,done1]
});

var picker1 = Titanium.UI.createPicker({
		top:43
});
picker1.selectionIndicator=true;

var picker_data1 = [
	Titanium.UI.createPickerRow({})
];


picker1.add(picker_data1);

picker_view1.add(toolbar1);
picker_view1.add(picker1);


my_combo1.addEventListener('focus', function() {
	my_combo1.blur();
	picker_view1.animate(slide_in);
	disable_view.visible=true;
});

drop_button1.addEventListener('click',function() {
	picker_view1.animate(slide_in);
	disable_view.visible=true;
});

cancel1.addEventListener('click',function() {
	picker_view1.animate(slide_out);
	disable_view.visible=false;
});

done1.addEventListener('click',function() {
	my_combo1.value =  picker1.getSelectedRow(0).title;
	picker_view1.animate(slide_out);
	disable_view.visible=false;
	
	load_details_dropdown("SELECT DISTINCT city FROM store_master WHERE state=",picker2,3, picker1.getSelectedRow(0).title);
});



var drop_button2 =  Titanium.UI.createButton({
		style:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
		transform:tr
});
var my_combo2 = Titanium.UI.createTextField({
	value:'Chennai',
	width:'50%',
	top:'30%',
	left:'40%',
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	rightButton:drop_button2,
	rightButtonMode:Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});



var picker_view2 = Titanium.UI.createView({
	height:250,
	bottom:-250,
	zIndex:'1'
});

var cancel2 =  Titanium.UI.createButton({
	title:'Cancel',
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});

var done2 =  Titanium.UI.createButton({
	title:'Done',
	style:Titanium.UI.iPhone.SystemButtonStyle.DONE
});

var spacer2 =  Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});


var toolbar2 =  Titanium.UI.createToolbar({
	top:0,
	items:[cancel2,spacer2,done2]
});

var picker2 = Titanium.UI.createPicker({
		top:43
});
picker2.selectionIndicator=true;

var picker_data2 = [
	Titanium.UI.createPickerRow({})
];


picker2.add(picker_data2);

picker_view2.add(toolbar2);
picker_view2.add(picker2);


my_combo2.addEventListener('focus', function() {
	my_combo2.blur();
	picker_view2.animate(slide_in);
	disable_view.visible=true;
});

drop_button2.addEventListener('click',function() {
	picker_view2.animate(slide_in);
	disable_view.visible=true;
});

cancel2.addEventListener('click',function() {
	picker_view2.animate(slide_out);
	disable_view.visible=false;
});

done2.addEventListener('click',function() {
	my_combo2.value =  picker2.getSelectedRow(0).title;
	picker_view2.animate(slide_out);
	disable_view.visible=false;
	
	load_details_dropdown("SELECT s_name FROM store_master WHERE city=",picker3,4,picker2.getSelectedRow(0).title);
	
});


var drop_button3 =  Titanium.UI.createButton({
		style:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
		transform:tr
});
var my_combo3 = Titanium.UI.createTextField({
	value:'Micromax',
	width:'50%',
	top:'40%',
	left:'40%',
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	rightButton:drop_button3,
	rightButtonMode:Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});



var picker_view3 = Titanium.UI.createView({
	height:250,
	bottom:-250,
	zIndex:'1'
});

var cancel3 =  Titanium.UI.createButton({
	title:'Cancel',
	style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
});

var done3 =  Titanium.UI.createButton({
	title:'Done',
	style:Titanium.UI.iPhone.SystemButtonStyle.DONE
});

var spacer3 =  Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});


var toolbar3 =  Titanium.UI.createToolbar({
	top:0,
	items:[cancel3,spacer3,done3]
});

var picker3 = Titanium.UI.createPicker({
		top:43
});
picker3.selectionIndicator=true;

var picker_data3 = [
	Titanium.UI.createPickerRow({})
];


picker3.add(picker_data3);

picker_view3.add(toolbar3);
picker_view3.add(picker3);


my_combo3.addEventListener('focus', function() {
	my_combo3.blur();
	picker_view3.animate(slide_in);
	disable_view.visible=true;
});

drop_button3.addEventListener('click',function() {
	picker_view3.animate(slide_in);
	disable_view.visible=true;
});

cancel3.addEventListener('click',function() {
	picker_view3.animate(slide_out);
	disable_view.visible=false;
});

done3.addEventListener('click',function() {
	my_combo3.value =  picker3.getSelectedRow(0).title;
	picker_view3.animate(slide_out);
	disable_view.visible=false;
	
	load_address('SELECT address FROM store_master WHERE country=/"'+ my_combo.value +'/" and state=/"'+ my_combo1.value +'/" and city=/"'+ my_combo2.value +'/" and s_name=/"'+ my_combo3.value +'/"');
});


	
	
	
	
	
	
	
	
	var con_pic = Ti.UI.createTextField({
		top:'10%',
		left:'42%',
		width:'45%',
		height:'8%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var sta_pic = Ti.UI.createTextField({
		top:'20%',
		left:'42%',
		width:'45%',
		height:'8%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',returnKeyType:Titanium.UI.RETURNKEY_NEXT
	})	
	var city_pic = Ti.UI.createTextField({
		top:'30%',
		left:'42%',
		width:'45%',
		height:'8%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',returnKeyType:Titanium.UI.RETURNKEY_NEXT
	})
	var str_pic = Ti.UI.createTextField({
		top:'40%',
		left:'42%',
		width:'45%',
		height:'8%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',returnKeyType:Titanium.UI.RETURNKEY_DONE
	});
	
	Ti.App.addEventListener('findcurrentlocation',function(e){
		
		
	    //Ti.Geolocation.addEventListener('location', locationCallback);
	    //locationAdded = true;
    
      	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
 
		//
	  	//  		SET DISTANCE FILTER.  THIS DICTATES HOW OFTEN AN EVENT FIRES BASED ON THE DISTANCE THE DEVICE MOVES
	  	//       THIS VALUE IS IN METERS

		Titanium.Geolocation.distanceFilter = 10;
 
		//
		// GET CURRENT POSITION - THIS FIRES ONCE
		//
		
		Titanium.Geolocation.getCurrentPosition(function(e)
		{
		    if (e.error)
		    {
		        alert('HFL cannot get your current location');
		        return;
		    }
		 
		    var longitude = e.coords.longitude;
		    var latitude = e.coords.latitude;
		    var altitude = e.coords.altitude;
		    var heading = e.coords.heading;
		    var accuracy = e.coords.accuracy;
		    var speed = e.coords.speed;
		    var timestamp = e.coords.timestamp;
		    var altitudeAccuracy = e.coords.altitudeAccuracy;
		 
		    //alert(e.coords.longitude);
		    locationCallback(e);
		 
		});
		
    });
    
    

    
    
    
    
    
    
    
    
    var dlg = Titanium.UI.createActivityIndicator({
                style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK,
                width:'auto',
                height:'auto',
                message:'Loading...',
                color:'black',
                
                });
    
    var locationCallback = function(e)
	{
		//var dlg = Titanium.UI.createActivityIndicator();
		//dlg.setMessage('Loading...');
       
       	try
  		{
    		var longitude = e.coords.longitude;
    		var latitude = e.coords.latitude;
    	}
    	catch(e)
      	{
      		
       	}
    	var streetname,city,state,pincode,country;
    	
    	var addrUrl = "http://maps.googleapis.com/maps/api/geocode/json?sensor=true&latlng="+latitude+","+longitude;
		//web-service call
		var addrReq = Titanium.Network.createHTTPClient({
    	onload: function(e){
    	var response = JSON.parse(this.responseText);
  		if(response.status == "OK")
  		{
        	var resLen = response.results[0].address_components.length;
        	for(var i=0; i < resLen; i++) 
        	{
	            switch (response.results[0].address_components[i].types[0])
    	        {
        	        case "street_number":
            	        //Ti.API.info("street number : "+response.results[0].address_components[i].long_name);
                	    break;
                	case "route":
                    	//Ti.API.info("street name : "+response.results[0].address_components[i].long_name);
                    	streetname=response.results[0].address_components[i].long_name;
                    	break;
                	case "locality":
                    	//Ti.API.info("city name : "+response.results[0].address_components[i].long_name);
                    	city=response.results[0].address_components[i].long_name;
                    	break;
                	case "administrative_area_level_1":
                    	//Ti.API.info("state name : "+response.results[0].address_components[i].long_name);
                    	state =response.results[0].address_components[i].long_name;
                    	break;
                	case "postal_code":
	                    //Ti.API.info("zip code : "+response.results[0].address_components[i].long_name);
	                    pincode=response.results[0].address_components[i].long_name;
    	                break;
        	        case "country":
            	        //Ti.API.info("country name : "+response.results[0].address_components[i].long_name);
            	        country=response.results[0].address_components[i].long_name;
                	    break;
                }
        	}
        	//mycom.value=country;
        	//sta_pic.value=state;
        	//city_pic.value=city;
        	//str_pic.value=streetname;
        	
        	country=country.toUpperCase();
        	state=state.toUpperCase();
        	city=city.toUpperCase();
        	
        	var index=-1;
        	
        	if(picker.columns[0])
		    {
			var _col = picker.columns[0];
			var len = _col.rowCount;
        	    for(var x = len-1; x >= 0; x-- )
        	    {
                   var _row = _col.rows[x];
                   _row.title=_row.title.toUpperCase();
                   if(_row.title==country)
                   {
               	     index=x;
               	     my_combo.value=_row.title
               	     load_details_dropdown("SELECT DISTINCT state FROM store_master WHERE country=",picker1,2,_row.title);
                   }
               
        	     }
		    }
        	
        	if(index != -1)
            {
            	picker.setSelectedRow(0,index);
            	
            	index=-1;
            }
        	
        	
        	if(picker1.columns[0])
		    {
			var _col = picker1.columns[0];
			var len = _col.rowCount;
        	    for(var x = len-1; x >= 0; x-- )
        	    {
                   var _row = _col.rows[x];
                   _row.title=_row.title.toUpperCase();
                   if(_row.title==state)
                   {
               	     index=x;
               	     my_combo1.value=_row.title
               	     load_details_dropdown("SELECT DISTINCT city FROM store_master WHERE state=",picker2,3,_row.title);
                   }
        	     }
		    }
		    
		    if(index != -1)
            {
            	picker1.setSelectedRow(0,index);
            	index=-1;
            }
		    
		    
        	if(picker2.columns[0])
		    {
			    var _col = picker2.columns[0];
			    var len = _col.rowCount;
        	    for(var x = len-1; x >= 0; x-- )
        	    {
                   var _row = _col.rows[x];
                   _row.title=_row.title.toUpperCase();
                   if(_row.title==state)
                   {
               	     index=x;
               	     my_combo2.value=_row.title
                   }
        	    }
		    }
        	
        	if(index != -1)
            {
            	picker2.setSelectedRow(0,index);
            	index=-1;
            }
        	
        	
        	
        	
        
        }
        
       	dlg.hide();	
    	},
    	onerror: function(e){
        	
        	dlg.hide();
        	Ti.API.debug(e.error);
        	alert("Can't find the location");
    	},
    		timeout:60000  
		});
		addrReq.open("GET",addrUrl);
		addrReq.send(null);
        dlg.show();
		
	}
    
    

   
   
	btn.addEventListener('click',function(e){
		if(my_combo.value==""||my_combo1.value==""||my_combo2.value==""||my_combo3.value=="")
		{
			//alert("Pleae fill all the details");
		}	
		else
		{
			Ti.App.fireEvent('openstoreinfopage',{
				country:my_combo.value,
				state:my_combo1.value,
				city:my_combo2.value,
				store:my_combo3.value
			});
			
		}
	});
	
	
    
    Ti.App.addEventListener('storepageloaddropdown',function(e){
		my_combo.value="";
		my_combo1.value="";
		my_combo2.value="";
		my_combo3.value="";
		
		if(picker.columns[0])
		{
			var _col = picker.columns[0];
			var len = _col.rowCount;
        	for(var x = len-1; x >= 0; x-- )
        	{
                var _row = _col.rows[x];
                _col.removeRow(_row);
        	}
		}
		
		if(picker1.columns[0])
		{
			var _col = picker1.columns[0];
			var len = _col.rowCount;
        	for(var x = len-1; x >= 0; x-- )
        	{
                var _row = _col.rows[x];
                _col.removeRow(_row);
        	}
		}
		if(picker2.columns[0])
		{
			var _col = picker2.columns[0];
			var len = _col.rowCount;
        	for(var x = len-1; x >= 0; x-- )
        	{
                var _row = _col.rows[x];
                _col.removeRow(_row);
        	}
		}
		if(picker3.columns[0])
		{
			var _col = picker3.columns[0];
			var len = _col.rowCount;
        	for(var x = len-1; x >= 0; x-- )
        	{
                var _row = _col.rows[x];
                _col.removeRow(_row);
        	}
		}
		
		load_details_dropdown("SELECT DISTINCT country FROM store_master",picker,1);
		
	});
	
	header.add(head_lbl);
	header.add(head_back);
	
	//content.add(con_pic);
	//content.add(sta_pic);
	//content.add(str_pic);
	//content.add(city_pic);
	
	

	content.add(disable_view);
	content.add(picker_view3);
	content.add(my_combo3);
	content.add(picker_view2);
	content.add(my_combo2);
    content.add(picker_view1);
	content.add(my_combo1);
	content.add(picker_view);
	content.add(my_combo);
	
	
	
	content.add(country_lbl);
	content.add(state_lbl);
	content.add(city_lbl);
	content.add(store_lbl);
	content.add(addr);
	content.add(addr_lbl);
	content.add(btn);
    
    self.add(dlg);
    self.add(header);
	self.add(content);
	return self;
};

module.exports = Storeselection;
