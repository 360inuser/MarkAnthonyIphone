function Storeinfo(){
  
	var self = Titanium.UI.createView();
	
	var header = Ti.UI.createView({
		top:0,
		height:'10%',
		backgroundColor:'black'
	});
	var head_lbl = Ti.UI.createLabel({
		text:'STORE INFO',
		color:'white'
	});
	var head_back = Ti.UI.createButton({
		title:'Back',
		left:'2%',
	});
	var head_next = Ti.UI.createButton({
		title:'Next',
		right:'2%',
	});
	
	var content = Ti.UI.createScrollView({
		top:'10%',
		contentHeight:'auto',
		backgroundColor:'white',
		disableBounce:true,
	});
	
	var flexSpace = Titanium.UI.createButton({
    	systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
 
	var btn_done = Titanium.UI.createButton({
    	systemButton:Titanium.UI.iPhone.SystemButton.DONE,
	});
	
	var btn_done1 = Titanium.UI.createButton({
    	systemButton:Titanium.UI.iPhone.SystemButton.DONE,
	});
	
	var btn_done2 = Titanium.UI.createButton({
    	systemButton:Titanium.UI.iPhone.SystemButton.DONE,
	});
	
	var btn_done3 = Titanium.UI.createButton({
    	systemButton:Titanium.UI.iPhone.SystemButton.DONE,
	});
	var keyboard_btns = [flexSpace,btn_done];
	var keyboard_btns1 = [flexSpace,btn_done1];
	var keyboard_btns2 = [flexSpace,btn_done2];
	var keyboard_btns3 = [flexSpace,btn_done3];
	
	var store = Ti.UI.createLabel({
		text:'Store/District',
		color:'black',
		top:'3%',
		left:'3%'
	});
	var store_in = Ti.UI.createTextField({
		width:'150',
		height:'6%',
		top:'3%',
		left:'50%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT,
		maxLength:15,
	});
	var address = Ti.UI.createLabel({
		text:'Address',
		color:'black',
		top:'10%',
		left:'3%'
	});
	var address_in = Ti.UI.createTextField({
		width:'150',
		height:'6%',
		top:'10%',
		left:'50%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var phone = Ti.UI.createLabel({
		text:'Phone',
		color:'black',
		top:'17%',
		left:'3%'
	});
	var phone_in = Ti.UI.createTextField({
		width:'150',
		height:'6%',
		top:'17%',
		left:'50%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',
		
	});
	var ppg = Ti.UI.createLabel({
		text:'PPG Classification',
		color:'black',
		top:'24%',
		left:'3%'
	});
	var ppg_in = Ti.UI.createTextField({
		width:'150',
		height:'6%',
		top:'24%',
		left:'50%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT,
		maxLength:20,
	});
	var line = Ti.UI.createView({
		height:'2',
		top:'31%',
		left:'10',
		right:'10',
		backgroundColor:'black'
	});
	var order = Ti.UI.createLabel({
		text:'Order Days',
		color:'black',
		top:'33%',
		left:'3%'
	});
	var order_in = Ti.UI.createTextField({
		width:'150',
		height:'6%',
		top:'33%',
		left:'50%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',
		
	});
	var delay = Ti.UI.createLabel({
		text:'Delay Days',
		color:'black',
		top:'40%',
		left:'3%'
	});
	var delay_in = Ti.UI.createTextField({
		width:'150',
		height:'6%',
		top:'40%',
		left:'50%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',
		
	});
	var callfreq = Ti.UI.createLabel({
		text:'Call Freq Days',
		color:'black',
		top:'47%',
		left:'3%'
	});
	var callfreq_in = Ti.UI.createTextField({
		width:'150',
		height:'6%',
		top:'47%',
		left:'50%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',
		
	});
	var accclass = Ti.UI.createLabel({
		text:'Account Class',
		color:'black',
		top:'54%',
		left:'3%'
	});
	/*var accclass_in = Ti.UI.createTextField({
		width:'150',
		height:'6%',
		top:'54%',
		left:'50%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});*/
	var line1 = Ti.UI.createView({
		height:'2',
		top:'61%',
		left:'10',
		right:'10',
		backgroundColor:'black'
	});
	var manager = Ti.UI.createLabel({
		text:'Manager',
		color:'black',
		top:'63%',
		left:'3%'
	});
	var manager_in = Ti.UI.createTextField({
		width:'150',
		height:'6%',
		top:'63%',
		left:'50%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var assistant = Ti.UI.createLabel({
		text:'Assistant',
		color:'black',
		top:'70%',
		left:'3%'
	});
	var assistant_in = Ti.UI.createTextField({
		width:'150',
		height:'6%',
		top:'70%',
		left:'50%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var rtdmanager = Ti.UI.createLabel({
		text:'RTD Manager',
		color:'black',
		top:'77%',
		left:'3%'
	});
	var rtdmanager_in = Ti.UI.createTextField({
		width:'150',
		height:'6%',
		top:'77%',
		left:'50%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var beermanager = Ti.UI.createLabel({
		text:'Beer Manager',
		color:'black',
		top:'84%',
		left:'3%'
	});
	var beermanager_in = Ti.UI.createTextField({
		width:'150',
		height:'6%',
		top:'84%',
		left:'50%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var productcon = Ti.UI.createLabel({
		text:'Product Consultant',
		color:'black',
		top:'91%',
		left:'3%',
	});
	var productcon_in = Ti.UI.createTextField({
		width:'150',
		height:'6%',
		top:'91%',
		left:'50%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',returnKeyType:Titanium.UI.RETURNKEY_DONE
	});
	store_in.addEventListener('return', function() {
    address_in.focus();
    });
    address_in.addEventListener('return', function() {
    phone_in.focus();
    });
    btn_done.addEventListener('click', function() {
   // alert('button working');
    ppg_in.focus();
    });
    ppg_in.addEventListener('return', function() {
    order_in.focus();
    });
    btn_done1.addEventListener('click', function() {
    //alert('button working');
    delay_in.focus();
    });
    btn_done2.addEventListener('click', function() {
   // alert('button working');
    callfreq_in.focus();
    });
    btn_done3.addEventListener('click',function(){
    accclass_in.focus();
    });
    manager_in.addEventListener('return', function() {
    assistant_in.focus();
    });
    assistant_in.addEventListener('return', function() {
    rtdmanager_in.focus();
    });
    rtdmanager_in.addEventListener('return', function() {
    beermanager_in.focus();
    });
    beermanager_in.addEventListener('return', function() {
    productcon_in.focus();
    });
    
    productcon_in.addEventListener('focus', function() {
         //content.setContentOffset({x:0 ,y:0});
         //productcon_in.blur();
         picker_view.animate(slide_out);
    });
    
    manager_in.addEventListener('focus', function() {
    picker_view.animate(slide_out);
    });
    assistant_in.addEventListener('focus', function() {
    picker_view.animate(slide_out);
    });
    rtdmanager_in.addEventListener('focus', function() {
    picker_view.animate(slide_out);
    });
    beermanager_in.addEventListener('focus', function() {
    picker_view.animate(slide_out);
    });
    store_in.addEventListener('focus', function() {
    picker_view.animate(slide_out);
    });
    address_in.addEventListener('focus', function() {
    picker_view.animate(slide_out);
    });
    ppg_in.addEventListener('focus', function() {
    picker_view.animate(slide_out);
    });
    phone_in.addEventListener('focus', function() {
    picker_view.animate(slide_out);
    });
    order_in.addEventListener('focus', function() {
    picker_view.animate(slide_out);
    });
    delay_in.addEventListener('focus', function() {
    picker_view.animate(slide_out);
    });
    callfreq_in.addEventListener('focus', function() {
    picker_view.animate(slide_out);
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

var accclass_in = Titanium.UI.createTextField({
	value:'AAA',
	width:'150',
	height:'6%',
	top:'54%',
	left:'50%',
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
	Titanium.UI.createPickerRow({title:'AAA'}),
	Titanium.UI.createPickerRow({title:'AA'}),
	Titanium.UI.createPickerRow({title:'A'}),
	Titanium.UI.createPickerRow({title:'B'}),
	Titanium.UI.createPickerRow({title:'C'}),
	Titanium.UI.createPickerRow({title:'D'})
];


picker.add(picker_data);

picker_view.add(toolbar);
picker_view.add(picker);


var slide_in =  Titanium.UI.createAnimation({bottom:0});
var slide_out =  Titanium.UI.createAnimation({bottom:-250});



accclass_in.addEventListener('focus', function() {
	//picker_view.visible=true;
	picker_view.animate(slide_in);
	accclass_in.blur();
	content.scrollTo(0,150);
	disable_view.visible=true;
	//alert(content.contentHeight);
});

drop_button.addEventListener('click',function() {
	disable_view.visible=true;
	//picker_view.visible=true;
	accclass_in.blur();
	store_in.blur();
	address_in.blur();
	phone_in.blur();
	ppg_in.blur();
	order_in.blur();
	delay_in.blur();
	callfreq_in.blur();
	manager_in.blur();
	assistant_in.blur();
	rtdmanager_in.blur();
	beermanager_in.blur();
	productcon_in.blur();
	picker_view.animate(slide_in);
	//alert(content.contentHeight);
	content.scrollTo(0,150);
	
});

cancel.addEventListener('click',function() {
	//picker_view.visible=false;
	disable_view.visible=false;
	picker_view.animate(slide_out);
	content.scrollTo(0,0);
});

done.addEventListener('click',function() {
	disable_view.visible=false;
	accclass_in.value =  picker.getSelectedRow(0).title;
	//picker_view.visible=false;
	picker_view.animate(slide_out);
	//content.scrollTo(0,0);
	manager_in.focus();
	//load_details_dropdown("SELECT DISTINCT state FROM store_master WHERE country=",picker1,2, picker.getSelectedRow(0).title);
});
	header.add(head_back);
	header.add(head_lbl);
	header.add(head_next);
	
	
	self.add(picker_view);
	self.add(disable_view);
	content.add(accclass_in);
	content.add(store);
	content.add(store_in);
	content.add(address);
	content.add(address_in);
	content.add(phone);
	content.add(phone_in);
	content.add(ppg);
	content.add(ppg_in);
	content.add(line);
	content.add(order);
	content.add(order_in);
	content.add(delay);
	content.add(delay_in);
	content.add(callfreq);
	content.add(callfreq_in);
	content.add(accclass);
	//content.add(accclass_in);
	content.add(line1);
	content.add(manager);
	content.add(manager_in);
	content.add(assistant);
	content.add(assistant_in);
	content.add(rtdmanager);
	content.add(rtdmanager_in);
	content.add(beermanager);
	content.add(beermanager_in);
	content.add(productcon);
	content.add(productcon_in);
	
	var dlg = Titanium.UI.createActivityIndicator({
                style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK,
                width:'auto',
                height:'auto',
                message:'Loading...',
                color:'black',
                
                });
	var store_ava=0;
	var store_id=0;
	
	Ti.App.addEventListener('autofillstoreinfo',function(e){
		
		store_in.value="";
		address_in.value="";
		phone_in.value="";
		ppg_in.value="";
	 	order_in.value="";
	 	delay_in.value="";
	 	callfreq_in.value="";
	 	accclass_in.value="AAA";
	 	manager_in.value="";
	 	assistant_in.value="";
	 	rtdmanager_in.value="";
	 	beermanager_in.value="";
	 	productcon_in.value="";
		
		
		phone_in.keyboardToolbar=keyboard_btns;
		phone_in.keyboardType =Ti.UI.KEYBOARD_NUMBER_PAD;
		
		order_in.keyboardToolbar=keyboard_btns1;
		order_in.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
		
		delay_in.keyboardToolbar=keyboard_btns2;
		delay_in.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
		
		callfreq_in.keyboardToolbar=keyboard_btns3;
		callfreq_in.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
		//alert('asasdasd');
		//var dlg = Ti.UI.createActivityIndicator();
		//dlg.setMessage('Loading...');
		var url = "http://192.168.1.55:8080/enterprise_project/Store_selection";
		var xhr = Ti.Network.createHTTPClient({
    	onload: function(e) {
    		dlg.hide();
    		//alert(this.responseText);
    		var response = JSON.parse(this.responseText);
    		if(response.Success == '1')
  			{
  			store_ava=1;
  			store_id=response.Store_id;
    		store_in.value=response.Store_name;
    		address_in.value=response.address;
    		phone_in.value=response.phone;
    		manager_in.value=response.Manager;
    		assistant_in.value=response.Assistant;
    		rtdmanager_in.value=response.RTD_Manager;
    		beermanager_in.value=response.Beer_Manager;
    		productcon_in.value=response.Pro_consultant;
    		}
    	},
    	onerror: function(e) {
        	// this function is called when an error occurs, including a timeout
        	dlg.hide();
        	Ti.API.debug(e.error);
        	//alert("Can't Find Server,Make Sure you are connected to internet.Try again!");
    	},
    		timeout:60000  /* in milliseconds */
		});
		
		var loginpost = {
    		json: "{'country':'"+ e.country +"','state':'"+ e.state +"','city':'"+ e.city +"','store':'"+ e.store +"'}"
    		
		};
		
		xhr.open("POST", url);
		
		xhr.send(loginpost);  // request is actually sent with this statement
		dlg.show();
	});
	
	Ti.App.addEventListener('reviewautofillstoreinfo',function(e){
		var poid=e.poid;
		//var dlg = Ti.UI.createActivityIndicator();
		//dlg.setMessage('Loading...');
		var url = "http://192.168.1.55:8080/enterprise_project/get_ordered_store_details";
		var xhr = Ti.Network.createHTTPClient({
    	onload: function(e) {
    		dlg.hide();
    		//alert(this.responseText);
    		var response = JSON.parse(this.responseText);
    		store_in.value=response.s_name;
    		address_in.value=response.address;
    		phone_in.value=response.phone;
    		ppg_in.value=response.ppg;
    		order_in.value=response.ord_days;
    		delay_in.value=response.del_days;
    		callfreq_in.value=response.call_days;
    		
    		accclass_in.value=response.acunt_class;
    		
    		var values_acc=response.acunt_class.toUpperCase();
    		
    		var index=-1;
        	
        	if(picker.columns[0])
		    {
			var _col = picker.columns[0];
			var len = _col.rowCount;
			//alert(len);
        	    for(var x = len-1; x >= 0; x-- )
        	    {
                   var _row = _col.rows[x];
                   _row.title=_row.title.toUpperCase();
                  // alert(_row.title + country);
                   if(_row.title == values_acc)
                   {
               	     index=x;
               	    // alert(x);
                   }
               
        	     }
		    }
		    
        	
        	if(index != -1)
            {
            	picker.setSelectedRow(0,index);
            	index=-1;
            }
    		
    		manager_in.value=response.manager;
    		assistant_in.value=response.assistant;
    		rtdmanager_in.value=response.rtd_manager;
    		beermanager_in.value=response.beer_manager;
    		productcon_in.value=response.product_consultant;
    	},
    	onerror: function(e) {
        	// this function is called when an error occurs, including a timeout
        	dlg.hide();
        	Ti.API.debug(e.error);
        	//alert("Can't Find Server,Make Sure you are connected to internet.Try again!");
    	},
    		timeout:60000  /* in milliseconds */
		});
		
		var poidpost = {
    		json: "{'po_id':'"+ poid +"'}"
    		
		};
		
		xhr.open("POST", url);
		
		xhr.send(poidpost);  // request is actually sent with this statement
		dlg.show();
		
	});
	
	 head_next.addEventListener('singletap',function(e){
	 	
	 	if(store_in.value==""||address_in.value==""||phone_in.value==""||ppg_in.value==""||
	 	order_in.value==""||delay_in.value==""||callfreq_in.value==""||accclass_in.value==""||
	 	manager_in.value==""||assistant_in.value==""||rtdmanager_in.value==""||beermanager_in.value==""||productcon_in.value=="")
		{
			alert("Please fill all the details");
		}	
		else
		{
			
			try
			{
				var formatted_addr=address_in.value;
			    formatted_addr= formatted_addr.replace(/[\r\n]/g, "\\n");
			    
				Ti.App.ppg=ppg_in.value;
				Ti.App.order=order_in.value;
				Ti.App.delay=delay_in.value;
				Ti.App.call=callfreq_in.value;
				Ti.App.accclass=accclass_in.value;
				Ti.App.manager=manager_in.value;
				Ti.App.assistant=assistant_in.value;
				Ti.App.rtdmanager=rtdmanager_in.value;
				Ti.App.beermanager=beermanager_in.value;
				Ti.App.proconin=productcon_in.value;
				Ti.App.store_name=store_in.value;
				Ti.App.address_store=formatted_addr;
				Ti.App.store_phone_no=phone_in.value;
				
			    Ti.App.fireEvent('openproductpage',{
				str_id:store_id,
				stravailable:store_ava,
				strname:store_in.value,
				address:address_in.value,
				phone:phone_in.value,
				ppg:ppg_in.value,
				order:order_in.value,
				delay:delay_in.value,
				call:callfreq_in.value,
				accclass:accclass_in.value,
				manager:manager_in.value,
				assistant:assistant_in.value,
				rtdmanager:rtdmanager_in.value,
				beermanager:beermanager_in.value,
				proconin:productcon_in.value
			});
			
			}
			catch(e)
			{
				alert(e.toString());
			}
		}
	 });
	
	self.add(dlg);
	self.add(content);
	self.add(header);
	Ti.App.addEventListener('storeinfoback',function(e){
		    store_in.value="";
			address_in.value="";
			phone_in.value="";
			ppg_in.value="";
			order_in.value="";
			delay_in.value="";
			callfreq_in.value="";
			accclass_in.value="";
			manager_in.value="";
			assistant_in.value="";
			rtdmanager_in.value="";
			beermanager_in.value="";
			productcon_in.value="";
			
		
			
	});
	return self;
};
module.exports = Storeinfo;
