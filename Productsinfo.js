function Productsinfo(){
  var self = Ti.UI.createView();
	var ordered_products=[];
	var shelf_review_product=[];
	var products_status=[];
	var products_arry=[];
	var imgStr;
	var strImg;
		
		
	Ti.App.newlisting="";
	Ti.App.mon1self="";
	Ti.App.mon1sefacing="";
	Ti.App.mon1fridge="";
	Ti.App.mon1frifacing="";
	Ti.App.mon2self="";
	Ti.App.mon2sefacing="";
	Ti.App.mon2fridge="";
	Ti.App.mon2frifacing="";
	Ti.App.mon3self="";
	Ti.App.mon3sefacing="";
	Ti.App.mon3fridge="";
	Ti.App.mon3frifacing="";
	Ti.App.adhoc="";
	Ti.App.productid="";

	
	var header = Ti.UI.createView({
		top:'0',
		height:'50',
		backgroundColor:'black'
	});
	var head_lbl = Ti.UI.createLabel({
		text:'PRODUCTS INFO',
		color:'white'
	});
	var head_back = Ti.UI.createButton({
		title:'Back',
		left:'5',
	});
	var head_sub = Ti.UI.createButton({
		title:'Submit',
		right:'5',
	});
	
	
	var content = Ti.UI.createView({
		top:'50',
		width:'320',
		//widht:'100%',
		//height:'100%',
		backgroundColor:'white',
	});
	var header1 = Ti.UI.createView({
		top:'0',
		//widht:'100%',
		height:'50',
		backgroundColor:'gray',
	});
	var menu_img = Ti.UI.createImageView({
		url:'smico.png',
		right:'5',
		visible:false,
	})
	var head_lbl1 = Ti.UI.createLabel({
		left:'5',
		text:'PRODUCTS',
		color:'white',		
	});
	var cameraimg = Ti.UI.createImageView({
		url:'camera-icon.png',
		right:'0dp',
		width:'50dp',
		height:'40dp',
		visible:true,
		zindex:'1'	
	});
	
	var tbl = Ti.UI.createTableView({
		top:'50',
		backgroundColor:'white',
		height:'auto',
		scrollable:true,
		left:'0',
		separatorColor:'white'
	});
	
	Ti.App.yesorno = Titanium.UI.createAlertDialog({
    						title: '',
    						message:'Do you want to go back?(entered details will be cleared)',
    						buttonNames: ['Yes','No'],
						});
	
	cameraimg.addEventListener('click',function(e){
		Titanium.Media.showCamera({
		success : function(event) {
          var capturedImg= event.media;
              if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) 
              {
				imgStr=Ti.Utils.base64encode(capturedImg);
				//todecode
				//strImg= Ti.Utils.base64decode(imgStr);
			  }
		//alert('completed successfully');
         },
		cancel : function() {
		//While cancellation of the process
		},
		error : function(error) {
               // If any error occurs during the process
 			alert(error.toString());
		}
	});		
	});
	
	//var tbl_data=[];
	
	Ti.App.load_global= function(){ 
	
	//var tbl_empty=[];
	
	//tbl.setData(tbl_empty);
	
	
	var dlg = Ti.UI.createActivityIndicator();
	dlg.setMessage('Loading...');
	var url = "http://192.168.1.55:8080/enterprise_project/product_list";
	var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
		dlg.hide();
		var jsonobj=JSON.parse(this.responseText);
		if (tbl.data.length > 0) {
    while (tbl.data[0].rows.length > 0) {
      tbl.deleteRow(0);
    }
   }
		//alert(this.responseText);
		try
		{
		if(jsonobj.productlist.length > 0)
		{
			
			for(var i=0;i<jsonobj.productlist.length;i++)
    		 {
    		 	 
    		  var row_view = Ti.UI.createView({
               		backgroundColor:'black',
               		height:'auto',
               		top:'0',
               		id:i,
               		hasChild:true
               });   
               var row_lbl = Ti.UI.createLabel({
               		color:'white',
               		text:jsonobj.productlist[i].cname,           
               		height:'40',
               		top:'0',
               		left:'5',
               		touchEnabled:false
               });
              //for(var i=0;i<jsonobj.productlist.products.length;i++)
              //{}
              var tb_data=[];
              //alert(jsonobj.productlist[i].products.length);
              for(var j=0;j<jsonobj.productlist[i].products.length;j++)
              {
              	var row_product=Ti.UI.createTableViewRow({
              		height:'40',
              		id:jsonobj.productlist[i].products[j].p_id,
              		cid:jsonobj.productlist[i].products[j].c_id,
              		value:jsonobj.productlist[i].products[j].p_name
              	});
              	var pro_label=Ti.UI.createLabel({
              		text:jsonobj.productlist[i].products[j].p_name,
              		color:'black',
              		left:'5',
              		id:jsonobj.productlist[i].products[j].p_id,
              		cid:jsonobj.productlist[i].products[j].c_id,
              		touchEnabled:false
              		
              	});
              	
     			
              	
              	    
              	row_product.add(pro_label);
              //	row_product.add(pro_staus);
              	tb_data.push(row_product);

              }
              
              
               var row_tbl=Ti.UI.createTableView({
               		backgroundColor:'white',
               		height:0,
               		top:'40',
               	    visible:true,
               	    data:tb_data,
               	    //separatorColor:'white'
               	    
               });
               var row_img = Ti.UI.createImageView({
               		url:'up.png',
               		right:'5',
               		height:'35',
               		top:'1',
               		touchEnabled:false
               		
               });
                var row_img1 = Ti.UI.createImageView({
               		url:'down.png',
               		right:'5',
               		height:'35',
               		top:'1',
               		visible:false,
               		touchEnabled:false
               		
               });
               
    		   var row = Ti.UI.createTableViewRow({
               		height:'40',
               		//title:'row'+i
               });       
               row_view.add(row_img);
               row_view.add(row_lbl);
               row_view.add(row_tbl);
               row_view.add(row_img1);
               row.add(row_view);
             
               tbl.appendRow(row);
               row_view.addEventListener('click',function(e){

    				
    				try
    				{	
    				if(e.source.hasChild != null && e.source.hasChild == true)
                    {
    				var test=Ti.UI.createView({});
    				var tappedRow = e.row;
                    test=e.source;
                    
                    if(test.children[2].height == 0)
                    {
                       var count_rows=test.children[2].data[0].rowCount;
                       count_rows=count_rows*40;
                       tappedRow.height=40+count_rows;                       
                       //alert(tb_data.length);
                       test.children[2].height=count_rows;
                       var img=Ti.UI.createImageView({});
                       img=test.children[0];
                       //alert(img.getUrl());
                       //img.setUrl('down.png');
                       img.visible=false;
                       var img1=Ti.UI.createImageView({});
                       img1=test.children[3];
                       img1.visible=true;
                        
                    }
                    else
                    {
                    	test.backgroundColor='black';
                    	tappedRow.height=40;
                    	test.children[2].height=0;
                    	var img=Ti.UI.createImageView();
                        img=test.children[0];
                        img.visible=true;
                        var img1=Ti.UI.createImageView({});
                        img1=test.children[3];
                        img1.visible=false;
                        //alert(img.getUrl());
                        //var filename = 'up.png';
                        //savedfile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
                        //img.image=filename;		
                    }
                    }
                    
                    else
                    {
                    	
                    	//alert(e.source.value);
                    	Ti.App.productid=e.source.id;
                    	Ti.App.test='close';
                    	Ti.App.fireEvent('slideview',{
                    		proname:e.source.value
                    	});
                    				
                    }
                    
    				}
    				catch(ex)
    				{
    					alert(ex.toString());
    				}
                    
      
               });
                
    		 }
    		}
    		
		}	
		
    	catch(e)
    	{
    		
    	}		
	},
	onerror: function(e) {
        Ti.API.debug(e.error);
        dlg.hide();
        alert("Can't Find Server,Make Sure you are connected to internet.Try again!");
    },
    	timeout:60000
	});	
	
		
		xhr.open("POST", url);
		
		xhr.send();
		dlg.show();
	}
	
	Ti.App.load_orderedproduct= function(){ 	
	
	
	var dlg = Ti.UI.createActivityIndicator();
	dlg.setMessage('Loading...');
	var url = "http://192.168.1.55:8080/enterprise_project/Productlist_with_status";
	var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
		dlg.hide();
		var tbl_empty=[];
		products_status=[];
	    tbl.setData(tbl_empty);
		var jsonobj=JSON.parse(this.responseText);
		//alert(this.responseText);
		try
		{
		//if(jsonobj.ordered_products.length > 0)
		//{
			//alert(jsonobj.ordered_products.length)
			
			for(var i=0;i<jsonobj.ordered_products.length;i++)
    		 {
    		 	 
    		  var row_view = Ti.UI.createView({
               		backgroundColor:'black',
               		height:'auto',
               		top:'0',
               		id:i,
               		hasChild:true
               });   
               var row_lbl = Ti.UI.createLabel({
               		color:'white',
               		text:jsonobj.ordered_products[i].c_name,           
               		height:'40',
               		top:'0',
               		left:'5',
               		touchEnabled:false
               });
              //for(var i=0;i<jsonobj.productlist.products.length;i++)
              //{}
              var tb_data=[];
              //alert(jsonobj.productlist[i].products.length);
              for(var j=0;j<jsonobj.ordered_products[i].products.length;j++)
              {
              	var row_product=Ti.UI.createTableViewRow({
              		height:'40',
              		id:jsonobj.ordered_products[i].products[j].p_id,
              		cid:jsonobj.ordered_products[i].products[j].c_id,
              		value:jsonobj.ordered_products[i].products[j].p_name
              	});
              	var pro_label=Ti.UI.createLabel({
              		text:jsonobj.ordered_products[i].products[j].p_name,
              		color:'black',
              		left:'5',
              		font:{fontSize:14},
              		id:jsonobj.ordered_products[i].products[j].p_id,
              		cid:jsonobj.ordered_products[i].products[j].c_id,
              		touchEnabled:false
              		
              	});
              	var pro_staus = Ti.UI.createLabel({
              		text:jsonobj.ordered_products[i].products[j].pro_status,
     				right:'3',
     				height:'40',
     				width:'70',
     				font:{fontSize:14},
     				id:jsonobj.ordered_products[i].products[j].p_id,
     				haslabel:true,
     				textAlign:'right'
     			});
              	
                if(jsonobj.ordered_products[i].products[j].pro_status=='started')
              	{
              		pro_staus.text=jsonobj.ordered_products[i].products[j].pro_status;
              		pro_staus.color='orange';
              		row_product.add(pro_staus);
              	}
              	if(jsonobj.ordered_products[i].products[j].pro_status=='complete')
              	{
              		pro_staus.text=jsonobj.ordered_products[i].products[j].pro_status;
              		pro_staus.color='green';
              		row_product.add(pro_staus);
              	}
              	if(jsonobj.ordered_products[i].products[j].pro_status=='incomplete')
              	{
              		pro_staus.text=jsonobj.ordered_products[i].products[j].pro_status;
              		pro_staus.color='red';
              		row_product.add(pro_staus);
              	}
     			
     			
     			products_status.push({pro_id:jsonobj.ordered_products[i].products[j].p_id,pro_status:jsonobj.ordered_products[i].products[j].pro_status});
     			
     			pro_staus.addEventListener('click',function(e){
             
               	    Ti.App.lbl_status=Ti.UI.createLabel({});
               	    
               	    
               	    Ti.App.lbl_status=e.source;
     				var alertDialog = Titanium.UI.createAlertDialog({
    						title: '',
    						message:'Select your Status',
    						buttonNames: ['Complete','Incomplete','Started'],
    						id:e.source.id
						});
 
					alertDialog.addEventListener('click',function(e){
					
    				if (e.index == 0)
    				 {
    				 	
       					Ti.App.lbl_status.text='complete';
       					Ti.App.lbl_status.color='green';
   					 }
   					 else if(e.index == 1)
   					 {
        				Ti.App.lbl_status.text='incomplete';
        				Ti.App.lbl_status.color='red';
   					 }
   					 else if(e.index == 2)
   					 {
   					 	Ti.App.lbl_status.text='started';
   					 	Ti.App.lbl_status.color='orange';
   					 }
   					 
   					 Ti.App.lbl_status.right ='5';
   					 
   					 for(var p=0;p<products_status.length;p++)
               	     {
               	    	if(products_status[p].pro_id == e.source.id)
               	    	{
               	    		if (e.index == 0)
    				        {
    				        	products_status[p].pro_status='complete';
    				        }
    				        else if(e.index == 1)
    				        {
    				        	products_status[p].pro_status='incomplete';
    				        }
    				        else
    				        {
    				        	products_status[p].pro_status='started';
    				        }
               	    	}
               	    	
               	     }
				});

				alertDialog.show();
	
     			});
				
              	//alert(pro_staus.getSelectedRow());   
              	row_product.add(pro_label);
                
               
              	tb_data.push(row_product);

              }
               
              
              
               var row_tbl=Ti.UI.createTableView({
               		backgroundColor:'white',
               		height:0,
               		top:'40',
               	    visible:true,
               	    data:tb_data,
               	    //separatorColor:'white'
               	    
               });
               var row_img = Ti.UI.createImageView({
               		url:'up.png',
               		right:'5',
               		height:'35',
               		top:'1',
               		touchEnabled:false
               		
               });
                var row_img1 = Ti.UI.createImageView({
               		url:'down.png',
               		right:'5',
               		height:'35',
               		top:'1',
               		visible:false,
               		touchEnabled:false
               		
               });
               
    		   var row = Ti.UI.createTableViewRow({
               		height:'40',
               		//title:'row'+i
               });       
               row_view.add(row_img);
               row_view.add(row_lbl);
               row_view.add(row_tbl);
               row_view.add(row_img1);
               row.add(row_view);
             
               tbl.appendRow(row);
               row_view.addEventListener('click',function(e){

    				
    				try
    				{	
    				if(e.source.hasChild != null && e.source.hasChild == true)
                    {
    				var test=Ti.UI.createView({});
    				var tappedRow = e.row;
                    test=e.source;
                    
                    if(test.children[2].height == 0)
                    {
                       var count_rows=test.children[2].data[0].rowCount;
                       count_rows=count_rows*40;
                       tappedRow.height=40+count_rows;                       
                       //alert(tb_data.length);
                       test.children[2].height=count_rows;
                       var img=Ti.UI.createImageView({});
                       img=test.children[0];
                       //alert(img.getUrl());
                       //img.setUrl('down.png');
                       img.visible=false;
                       var img1=Ti.UI.createImageView({});
                       img1=test.children[3];
                       img1.visible=true;
                        
                    }
                    else
                    {
                    	test.backgroundColor='black';
                    	tappedRow.height=40;
                    	test.children[2].height=0;
                    	var img=Ti.UI.createImageView();
                        img=test.children[0];
                        img.visible=true;
                        var img1=Ti.UI.createImageView({});
                        img1=test.children[3];
                        img1.visible=false;
                        //alert(img.getUrl());
                        //var filename = 'up.png';
                        //savedfile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
                        //img.image=filename;		
                    }
                    }
                    
                    else
                    {
                    
                     
                      if(e.source.haslabel==null)
                      {
                      	Ti.App.productid=e.source.id;
                      	if(ordered_products.length != 0)
                      	{
                      		var is_exists_index=0;
                      		for(var i=0;i<ordered_products.length;i++)
                      		{
                      	       if(ordered_products[i].pro_id == e.source.id)
                      	       {
                      	       	 is_exists_index=i+1;
                      	       }		
                      		}
                      		if(is_exists_index!=0)
                      		{
                      			
                      			//alert('exist');
                      			
                      		   /*var toast = Titanium.UI.createNotification({
    									duration:Ti.UI.NOTIFICATION_DURATION_LONG,
    									message: "Exists!"
							   });
							   toast.show();
                      			*/
                      			Ti.App.fireEvent('orderedslideview',{
                    			proname:e.source.value
                    	   		});
                      			load_slide_table();
                      		}
                      		else
                      		{
                      			//alert('not exist');
                      			/*var toast = Titanium.UI.createNotification({
    									duration:Ti.UI.NOTIFICATION_DURATION_LONG,
    									message: "Not Exists2!"
							   });
							   toast.show();*/
                      			Ti.App.fireEvent('orderedslideview',{
                    			proname:e.source.value
                    	   		});
                    	   		Ti.App.fireEvent('orderedloadproductform');
                      		}
                      	}
                      	else
                      	{
                       		/*var toast = Titanium.UI.createNotification({
    									duration:Ti.UI.NOTIFICATION_DURATION_LONG,
    									message: "Not Exists1!"
							   });
							toast.show();*/
                       		Ti.App.fireEvent('orderedslideview',{
                    			proname:e.source.value
                    	   	});
                    	   	Ti.App.fireEvent('orderedloadproductform');
                    	   //Ti.App.test='close';
                    	    
                      	}
                      	
                      	
                      }                      	
                    	
                    	
                    				
                    }
                    
    				}
    				catch(ex)
    				{
    					alert(ex.toString());
    				}
                    
      
               });
                
    		 }
    		//}
    		
		}	
		
    	catch(e)
    	{
    		alert(e);
    	}		
	},
	onerror: function(e) {
        Ti.API.debug(e.error);
        dlg.hide();
        alert("Can't Find Server,Make Sure you are connected to internet.Try again!");
    },
    	timeout:60000
	});	
	
		var poiost = {
    		json: "{'po_id':'"+ Ti.App.poid+"'}"	
		};
		//alert(Ti.App.poid);
		xhr.open("POST", url);
		
		xhr.send(poiost);
		dlg.show();
		
		//alert("LOAD WNDOWS!");
		/*var toast = Titanium.UI.createNotification({
    	 duration: Ti.UI.NOTIFICATION_DURATION_LONG,
   		 message: "Hi, I'm a toast!"
	});
	toast.show();*/
		
	}

	
	
	
	
	var slide = Ti.UI.createView({
		backgroundColor:'white',
		width:'280',
		right:'-280',
		top:'50'
	});
	var slide_head = Ti.UI.createView({
		backgroundColor:'gray',
		height:'50',
		top:'0'
	});
	var slide_lbl = Ti.UI.createLabel({
		text:'ProductTitle',
		left:'5',
		color:'white'
	});
	var slide_tbl = Ti.UI.createTableView({
		top:'50',
		backgroundColor:'white',
		scrollable:true,
		height:'auto'
	});
	
	Ti.App.addEventListener('loadproductform',function(e){
		var sl_tbl_data=[];
		var ext_value=[];
		global_textboxs=[];
		
		
		for(var t=0;t<products_arry.length;t++)
		{
			if(products_arry[t].prodid==Ti.App.productid)
			{
				//alert(products_arry[t].newlisting);
				ext_value.push(products_arry[t].newlisting);
				ext_value.push(products_arry[t].mon1self);
				ext_value.push(products_arry[t].mon1sefacing);
				ext_value.push(products_arry[t].mon1fridge);
				ext_value.push(products_arry[t].mon1frifacing);
				ext_value.push(products_arry[t].mon2self);
				ext_value.push(products_arry[t].mon2sefacing);
				ext_value.push(products_arry[t].mon2fridge);
				ext_value.push(products_arry[t].mon2frifacing);
				ext_value.push(products_arry[t].mon3self);
				ext_value.push(products_arry[t].mon3sefacing);
				ext_value.push(products_arry[t].mon3fridge);
				ext_value.push(products_arry[t].mon3frifacing);
				ext_value.push(products_arry[t].adhoc);
			}
		}
		
		var text_boxs=[];
		var lablename=['New Listing','Month 1 SHELF','Month 1 SHELF FACINGS','Month 1 FRIDGE','Month 1 FRIDGE FACINGS','Month 2 SHELF','Month 2 SHELF FACINGS','Month 2 FRIDGE','Month 2 FRIDGE FACINGS','Month 3 SHELF','Month 3 SHELF FACINGS','Month 3 FRIDGE','Month 3 FRIDGE FACINGS','Adhoc Display'];
		for(var k=0;k<14;k++)
		{	
			var datarow = Ti.UI.createTableViewRow({
				height:'40'
			});
			var datalbl = Ti.UI.createLabel({
				left:'5',
				color:'black',
				text:lablename[k],
				font:{fontSize:'11'},
			});
			
			var datatxt = Ti.UI.createTextField({
				right:'0',
				width:'130',
				font:{fontSize:'12'},
				hintText:lablename[k],
				txid:k,
			});
			
			
			var flexSpace = Titanium.UI.createButton({
    			systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
			});
 
			var btn_done = Titanium.UI.createButton({
    			systemButton:Titanium.UI.iPhone.SystemButton.DONE,
    			id:k
			});
	
			var keyboard_btns = [flexSpace,btn_done];
			
			btn_done.addEventListener('click', function(e) {
               //alert(e.source.id); 
               text_boxs[e.source.id+1].focus();     
  			});
			 
  			  
			
			//alert(ext_value.length );
			
			if(ext_value.length != 0)
			{
				    datatxt.value = ext_value[k];
				    
					if(k==0)
					{
					Ti.App.newlisting=ext_value[k];
					}
					if(k==1)
					{
					Ti.App.mon1self=ext_value[k];
					}
					if(k==2)
					{
					Ti.App.mon1sefacing=ext_value[k];
					}
					if(k==3)
					{
					Ti.App.mon1fridge=ext_value[k];
					}
					if(k==4)
					{
					Ti.App.mon1frifacing=ext_value[k];
					}
					if(k==5)
					{
					Ti.App.mon2self=ext_value[k];
					}
					if(k==6)
					{
					Ti.App.mon2sefacing=ext_value[k];
					}
					if(k==7)
					{
					Ti.App.mon2fridge=ext_value[k];
					}
					if(k==8)
					{
					Ti.App.mon2frifacing=ext_value[k];
					}
					if(k==9)
					{
					Ti.App.mon3self=ext_value[k];
					}
					if(k==10)
					{
					Ti.App.mon3sefacing=ext_value[k];
					}
					if(k==11)
					{
					Ti.App.mon3fridge=ext_value[k];
					}
					if(k==12)
					{
					Ti.App.mon3frifacing=ext_value[k];
					}
					if(k==13)
					{
					Ti.App.adhoc=ext_value[k];
					}
				
				
				
			}
			
			
			datatxt.addEventListener('change',function(e){
				//if(e.source.value.length!=0)
				//{
					if(e.source.txid==0)
					{
					Ti.App.newlisting=e.source.value;
					}
					if(e.source.txid==1)
					{
					Ti.App.mon1self=e.source.value;
					}
					if(e.source.txid==2)
					{
					Ti.App.mon1sefacing=e.source.value;
					}
					if(e.source.txid==3)
					{
					Ti.App.mon1fridge=e.source.value;
					}
					if(e.source.txid==4)
					{
					Ti.App.mon1frifacing=e.source.value;
					}
					if(e.source.txid==5)
					{
					Ti.App.mon2self=e.source.value;
					}
					if(e.source.txid==6)
					{
					Ti.App.mon2sefacing=e.source.value;
					}
					if(e.source.txid==7)
					{
					Ti.App.mon2fridge=e.source.value;
					}
					if(e.source.txid==8)
					{
					Ti.App.mon2frifacing=e.source.value;
					}
					if(e.source.txid==9)
					{
					Ti.App.mon3self=e.source.value;
					}
					if(e.source.txid==10)
					{
					Ti.App.mon3sefacing=e.source.value;
					}
					if(e.source.txid==11)
					{
					Ti.App.mon3fridge=e.source.value;
					}
					if(e.source.txid==12)
					{
					Ti.App.mon3frifacing=e.source.value;
					}
					if(e.source.txid==13)
					{
					Ti.App.adhoc=e.source.value;
					}
				//}
				//else
				//{
				/*	if(e.source.txid==0)
					{
					Ti.App.newlisting="";
					}
					if(e.source.txid==1)
					{
					Ti.App.mon1self="";
					}
					if(e.source.txid==2)
					{
					Ti.App.mon1sefacing="";
					}
					if(e.source.txid==3)
					{
					Ti.App.mon1fridge="";
					}
					if(e.source.txid==4)
					{
					Ti.App.mon1frifacing="";
					}
					if(e.source.txid==5)
					{
					Ti.App.mon2self="";
					}
					if(e.source.txid==6)
					{
					Ti.App.mon2sefacing="";
					}
					if(e.source.txid==7)
					{
					Ti.App.mon2fridge="";
					}
					if(e.source.txid==8)
					{
					Ti.App.mon2frifacing="";
					}
					if(e.source.txid==9)
					{
					Ti.App.mon3self="";
					}
					if(e.source.txid==10)
					{
					Ti.App.mon3sefacing="";
					}
					if(e.source.txid==11)
					{
					Ti.App.mon3fridge="";
					}
					if(e.source.txid==12)
					{
					Ti.App.mon3frifacing="";
					}
					if(e.source.txid==13)
					{
					Ti.App.adhoc="";
					}*/
				//}
			});
		    
		    
			datarow.add(datalbl);
			datarow.add(datatxt);
			text_boxs.push(datatxt);
			
			if(k==0)
			{
				if(ext_value.length == 0)
			    {
				   text_boxs[0].value='Yes';
				   Ti.App.newlisting='Yes';
				}
			}
			if(k==0)
			{
				datatxt.returnKeyType=Titanium.UI.RETURNKEY_NEXT;
				datatxt.addEventListener('focus',function(e){
					//text_boxs[1].focus();
					e.source.blur();
					var alert_=Titanium.UI.createAlertDialog({
    						title: '',
    						message:'Select your Status',
    						buttonNames: ['Yes','No'],
						});
					alert_.addEventListener('click',function(e)
					{
						if(e.index ==0)
						{
							text_boxs[0].value='Yes';
							Ti.App.newlisting='Yes';
						}
						else
						{
							text_boxs[0].value='No';
							Ti.App.newlisting='No';
						}
					});
					alert_.show();
					
				});
			}
			if(k==1)
			{
				datatxt.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
				datatxt.keyboardToolbar=keyboard_btns;
				
			}
			if(k==2)
			{
				datatxt.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
				datatxt.keyboardToolbar=keyboard_btns;
			}
			if(k==3)
			{
				datatxt.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
				datatxt.keyboardToolbar=keyboard_btns;
			}
			if(k==4)
			{
				datatxt.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
				datatxt.keyboardToolbar=keyboard_btns;
			}
			if(k==5)
			{
				datatxt.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
				datatxt.keyboardToolbar=keyboard_btns;
			}
			if(k==6)
			{
				datatxt.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
				datatxt.keyboardToolbar=keyboard_btns;
			}
			if(k==7)
			{
				datatxt.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
				datatxt.keyboardToolbar=keyboard_btns;
			}
			if(k==8)
			{
				datatxt.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
				datatxt.keyboardToolbar=keyboard_btns;
			}
			if(k==9)
			{
				datatxt.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
				datatxt.keyboardToolbar=keyboard_btns;
			}
			if(k==10)
			{
				datatxt.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
				datatxt.keyboardToolbar=keyboard_btns;
			}
			if(k==11)
			{
				datatxt.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
				datatxt.keyboardToolbar=keyboard_btns;
			}
			if(k==12)
			{
				datatxt.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
				datatxt.keyboardToolbar=keyboard_btns;
			}
			if(k==13)
			{
				datatxt.returnKeyType=Titanium.UI.RETURNKEY_DONE;
			}
			sl_tbl_data.push(datarow);
		}	
		slide_tbl.setData(sl_tbl_data);
		global_textboxs=text_boxs;
	});
	
	var global_textboxs=[];
	var load_slide_table=function()
	{
		shelf_review_product=[];
		var sl_tbl_data=[];
		slide_tbl.setData(sl_tbl_data);
		var index_var=0;
		global_textboxs=[];
		var text_boxs=[];
		
		for(var l=0;l<ordered_products.length;l++)
		{
			if(ordered_products[l].pro_id==Ti.App.productid)
			{
				
				
			var datarow = Ti.UI.createTableViewRow({
								height:'40'
		    });
			var datalbl = Ti.UI.createLabel({
					left:'5',
					color:'black',
					text:ordered_products[l].column_name,
					font:{fontSize:'11'},
			});
			var datatxt = Ti.UI.createTextField({
					value:ordered_products[l].column_value,
					right:'0',
					width:'130',
					font:{fontSize:'12'},
					hintText:ordered_products[l].column_name,
					txid:index_var,
			});
			
			var flexSpace = Titanium.UI.createButton({
    			systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
			});
 
			var btn_done = Titanium.UI.createButton({
    			systemButton:Titanium.UI.iPhone.SystemButton.DONE,
    			id:l
			});
	
			var keyboard_btns = [flexSpace,btn_done];
			
			btn_done.addEventListener('click', function(e) {
               //alert(e.source.id); 
               text_boxs[e.source.id+1].focus();     
  			});
			
			if(ordered_products[l].column_name == 'New Listing')
			{
				
				datatxt.returnKeyType=Titanium.UI.RETURNKEY_NEXT;
				datatxt.addEventListener('focus',function(e){
					//text_boxs[1].focus();
					e.source.blur();
					var alert_=Titanium.UI.createAlertDialog({
    						title: '',
    						message:'Select your Status',
    						buttonNames: ['Yes','No'],
						});
					alert_.addEventListener('click',function(e)
					{
						if(e.index ==0)
						{
							text_boxs[0].value='Yes';
							shelf_review_product[text_boxs[0].txid].column_value='Yes';
						}
						else
						{
							text_boxs[0].value='No';
							shelf_review_product[text_boxs[0].txid].column_value='No';
						}
					});
					alert_.show();
				});
			}
			
			if(ordered_products[l].column_name != 'New Listing' && ordered_products[l].column_name != 'Adhoc Display')
			{
				datatxt.keyboardType=Ti.UI.KEYBOARD_NUMBER_PAD;
				datatxt.keyboardToolbar=keyboard_btns;
			}
			if(ordered_products[l].column_name != 'Adhoc Display')
			{
				datatxt.returnKeyType=Titanium.UI.RETURNKEY_DONE;
			}
			
			shelf_review_product.push({id:index_var,column_name:ordered_products[l].column_name,column_value:ordered_products[l].column_value});
			
			datatxt.addEventListener('change',function(e){
				//alert('txtbox');
				if(e.source.value.length!=0)
				{
					//alert(e.source.txid);
					shelf_review_product[e.source.txid].column_value = "";
					shelf_review_product[e.source.txid].column_value=e.source.value;
				}
				else
				{
					shelf_review_product[e.source.txid].column_value="";
				}
			});
							

			datarow.add(datalbl);
			datarow.add(datatxt);
			text_boxs.push(datatxt);
			/*if(l==shelf_details.length-1)
			{
				datarow.height='100';
				datatxt.height='100';
			}*/
			sl_tbl_data.push(datarow);
			index_var=index_var+1;
		}
	    
	    }
	   // alert("LOAD ALERT:"+ JSON.stringify(shelf_review_product));
	    slide_tbl.setData(sl_tbl_data);
	    global_textboxs=text_boxs;
	}
	
	
	
	Ti.App.addEventListener('orderedloadproductform',function(e){
		//alert('orderedloadproductform');
		
		//var lablename=['New','Month 1 self','Month 1 facing','Month 2 self','Month 2 facing','Month 3 self','Month 3 facing','Fridge self','Fridge facing','Adhoc display']
		
		var dlg = Ti.UI.createActivityIndicator();
		dlg.setMessage('Loading...');
		var url = "http://192.168.1.55:8080/enterprise_project/get_shelf_details";
		var xhr = Ti.Network.createHTTPClient({
    	onload: function(e) {
    		var jsonobj=JSON.parse(this.responseText);
    		//alert(this.responseText);
    		try
    		{
    			//alert(jsonobj.shelf_details.length);
    			if(jsonobj.shelf_details.length > 0)
    			{
    				for(var h=0;h<jsonobj.shelf_details.length;h++)
    				{
					 ordered_products.push({column_name:jsonobj.shelf_details[h].column_name,column_value:jsonobj.shelf_details[h].column_value,pro_id:Ti.App.productid}); 
    				}
    				load_slide_table();
    					
    			}
    		}
    		catch(e)
    		{
    			alert(e.toString());
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
		
		var winreviewpost = {
    		json: "{'pro_id':'"+ Ti.App.productid +"','po_id':'"+ Ti.App.poid +"'}"
		};
		
		xhr.open("POST", url);
		
		xhr.send(winreviewpost);  // request is actually sent with this statement
		dlg.show();
	
	});

	
	var backview = Ti.UI.createView({
			top:'50',
			backgroundColor:'black',
			opacity:'0.7',
	});
	
	Ti.App.addEventListener('slideview',function(e){
		//alert('working');
		slide_lbl.setText(e.proname);
		slide.add(slide_tbl);
		slide_head.add(slide_lbl);
		slide.add(slide_head);
		
		var a=Ti.UI.createAnimation({
			left:'-280',
			right:'280',
			duration:500
		});
		
		var animation_end_function=function(e){
			//a.removeEventListener('complete',animation_end_function);
			backview.opacity=0.7;
			
		}
		
		a.addEventListener('complete',animation_end_function);
		
		slide.animate({
			right:'0',
			duration:500
		});
		
		content.add(backview);
		content.animate(a);
		menu_img.visible=true;
		cameraimg.visible=false;
		Ti.App.test='close';
		Ti.App.fireEvent('loadproductform');
		
	});
	
	
	Ti.App.addEventListener('orderedslideview',function(e){
		//alert('working');
		slide_lbl.setText(e.proname);
		slide.add(slide_tbl);
		slide_head.add(slide_lbl);
		slide.add(slide_head);
		
		var a=Ti.UI.createAnimation({
			left:'-280',
			right:'280',
			duration:500
		});
		
		var animation_end_function=function(e){
			//a.removeEventListener('complete',animation_end_function);
			backview.opacity=0.7;
			
		}
		
		a.addEventListener('complete',animation_end_function);
		
		slide.animate({
			right:'0',
			duration:500
		});
		
		content.add(backview);
		content.animate(a);
		menu_img.visible=true;
		cameraimg.visible=false;
		Ti.App.test='close';
	});
	
	
	menu_img.addEventListener('click',function(e){
		Ti.App.test='open';
		content.animate({
			left:'0',
			right:'0',
			duration:500
		});
		
		slide.animate({
			right:'-280',
			duration:500
		});
		
		content.remove(backview);
		menu_img.visible=false;
		cameraimg.visible=true;
	});
	
	//Swipe identification
	
	function makeSwipeable(view, allowVertical, tolerance) {
    tolerance = tolerance || 2;
    var start;
    view.addEventListener('touchstart', function(evt) {
        start = evt;
    });
    view.addEventListener('touchend', function (end) {
        var dx = end.x - start.x, dy = end.y - start.y;
        var dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        // only trigger if dragged further than 50 pixels
        if (dist < 50) {
            return;
        }
        var isVertical = Math.abs(dx / dy) < 1 / tolerance;
        var isHorizontal = Math.abs(dy / dx) < 1 / tolerance;
        // only trigger if dragged in a particular direction
        if (!isVertical && !isHorizontal) {
            return;
        }
        // disallow vertical swipe, depending on the setting
        if (!allowVertical && isVertical) {
            return;
        }
        // now fire the event off so regular 'swipe' handlers can use this!
        end.direction = isHorizontal ? ((dx < 0) ? 'left' : 'right') : ((dy < 0) ? 'up' : 'down');
        end.type = 'swipe';
        view.fireEvent('swipe', end);
    });
}
 

	makeSwipeable(self, true);
 

	self.addEventListener('swipe', function(evt) {
    	//alert('Swiped ' + evt.direction + '!');
    	if(menu_img.visible)
    	{
    		if(evt.direction == 'right')
    		{
    		content.animate({
				left:'0',
				right:'0',
				duration:500
			});
		 	content.remove(backview);
		 	slide.animate({
				right:'-280',
				duration:500
			});
			menu_img.visible=false;
			cameraimg.visible=true;
			Ti.App.test='open';
    	 	}
    	}
	});
	Ti.App.addEventListener('backbutton',function(e){
		
		Ti.App.test='close';
		if(menu_img.visible)
    	{	
    	content.animate({
			left:'0',
			right:'0',
			duration:500
		});
		 content.remove(backview);
		 slide.animate({
			right:'-280',
			duration:500
		});
		menu_img.visible=false;
		cameraimg.visible=true;
		Ti.App.test='open';			
    	}
    	else
    	{
    		
    		//alert(products_arry.length);
    	}  
	});
	
	Ti.App.addEventListener('clearorder',function(e){
		ordered_products=[];
    	shelf_review_product=[];
    	products_status=[];
    	
    	
    	for(a=0;a<ordered_products.length+1;a++)
    	{
    		ordered_products.pop(0);
    	}
    	for(b=0;b<shelf_review_product.length+1;b++)
    	{
    		shelf_review_product.pop(0);
    	}
    	for(c=0;c<products_status.length+1;c++)
    	{
    		products_status.pop(0);
    	}
    	/*for(d=0;d<orderarray1.length;d++)
    	{
    		orderarray1.pop(0);
    	}
    	for(e=0;e<selfarray.length;e++)
    	{
    		selfarray.pop(0);
    	}*/
    	for(f=0;f<products_arry.length+1;f++)
    	{
    		products_arry.pop(0);
    	}
    	
    	//alert(products_arry.length);
    	
	});
	
	
	head_sub.addEventListener('click',function(e){
	//alert(Ti.App.newlisting);	
	//Ti.UI.
	
	for(var i=0;i<global_textboxs.length;i++)
	{
		global_textboxs[i].blur();
	}
	
	
	if(Ti.App.poid==0 || Ti.App.poid == null)
	{		
	if(Ti.App.test=='close')
	{
	/*if(Ti.App.newlisting==""&&Ti.App.mon1self==""&&Ti.App.mon1facing==""&&Ti.App.mon2self==""&&Ti.App.mon2facing==""&&Ti.App.mon3self==""&&Ti.App.mon3facing==""&&Ti.App.fridgeself==""&&Ti.App.fridgefacing==""&&Ti.App.adhoc=="")
	{
		alert('Please fill the details');
	}*/
	//else
	//{
	//alert('data filed');
	var exist=0;
	for(var l=0;l<products_arry.length;l++)
    {
                    		if(products_arry[l].prodid==Ti.App.productid)
                    		{
                    			//alert(Ti.App.newlisting);	
								products_arry[l].newlisting=Ti.App.newlisting;
								products_arry[l].mon1self=Ti.App.mon1self;
								products_arry[l].mon1sefacing=Ti.App.mon1sefacing;
								products_arry[l].mon1fridge=Ti.App.mon1fridge;
								products_arry[l].mon1frifacing=Ti.App.mon1frifacing;	
								products_arry[l].mon2self=Ti.App.mon2self;
								products_arry[l].mon2sefacing=Ti.App.mon2sefacing;
								products_arry[l].mon2fridge=Ti.App.mon2fridge;
								products_arry[l].mon2frifacing=Ti.App.mon2frifacing;
								products_arry[l].mon3self=Ti.App.mon3self;
								products_arry[l].mon3sefacing=Ti.App.mon3sefacing;
								products_arry[l].mon3fridge=Ti.App.mon3fridge;
								products_arry[l].mon3frifacing=Ti.App.mon3frifacing;
								products_arry[l].adhoc=Ti.App.adhoc;
								exist=1;	
                    		}
    }
                    	
    if(exist==0)
    {
       products_arry.push({prodid:Ti.App.productid,newlisting:Ti.App.newlisting,mon1self:Ti.App.mon1self,mon1sefacing:Ti.App.mon1sefacing,mon1fridge:Ti.App.mon1fridge,mon1frifacing:Ti.App.mon1frifacing,mon2self:Ti.App.mon2self,mon2sefacing:Ti.App.mon2sefacing,mon2fridge:Ti.App.mon2fridge,mon2frifacing:Ti.App.mon2frifacing,mon3self:Ti.App.mon3self,mon3sefacing:Ti.App.mon3sefacing,mon3fridge:Ti.App.mon3fridge,mon3frifacing:Ti.App.mon3frifacing,adhoc:Ti.App.adhoc});	
       //alert(JSON.stringify(products_arry));    
    }
    Ti.App.fireEvent('backbutton');
    
   //	}
    //alert(products_arry.length);
	Ti.App.newlisting="";
	Ti.App.mon1self="";
	Ti.App.mon1sefacing="";
	Ti.App.mon1fridge="";
	Ti.App.mon1frifacing="";
	Ti.App.mon2self="";
	Ti.App.mon2sefacing="";
	Ti.App.mon2fridge="";
	Ti.App.mon2frifacing="";
	Ti.App.mon3self="";
	Ti.App.mon3sefacing="";
	Ti.App.mon3fridge="";
	Ti.App.mon3frifacing="";
	Ti.App.adhoc="";
	Ti.App.test='open';	
	}
	else
	{
		if(products_arry.length !=0)
		{
		var orderarray1=[];
		var selfarray=[];
		for(var a=0;a<products_arry.length;a++)
		{
		orderarray1.push({pro_id:products_arry[a].prodid,pro_status:'started'});
		selfarray.push({column:'New Listing',value:products_arry[a].newlisting,pro_id:products_arry[a].prodid});
		selfarray.push({column:'Month 1 SHELF',value:products_arry[a].mon1self,pro_id:products_arry[a].prodid});
		selfarray.push({column:'Month 1 SHELF FACINGS',value:products_arry[a].mon1sefacing,pro_id:products_arry[a].prodid});
		selfarray.push({column:'Month 1 FRIDGE',value:products_arry[a].mon1fridge,pro_id:products_arry[a].prodid});
		selfarray.push({column:'Month 1 FRIDGE FACINGS',value:products_arry[a].mon1frifacing,pro_id:products_arry[a].prodid});
		selfarray.push({column:'Month 2 SHELF',value:products_arry[a].mon2self,pro_id:products_arry[a].prodid});
		selfarray.push({column:'Month 2 SHELF FACINGS',value:products_arry[a].mon2sefacing,pro_id:products_arry[a].prodid});
		selfarray.push({column:'Month 2 FRIDGE',value:products_arry[a].mon2fridge,pro_id:products_arry[a].prodid});
		selfarray.push({column:'Month 2 FRIDGE FACINGS',value:products_arry[a].mon2frifacing,pro_id:products_arry[a].prodid});
		selfarray.push({column:'Month 3 SHELF',value:products_arry[a].mon3self,pro_id:products_arry[a].prodid});
		selfarray.push({column:'Month 3 SHELF FACINGS',value:products_arry[a].mon3sefacing,pro_id:products_arry[a].prodid});
		selfarray.push({column:'Month 3 FRIDGE',value:products_arry[a].mon3fridge,pro_id:products_arry[a].prodid});
		selfarray.push({column:'Month 3 FRIDGE FACINGS',value:products_arry[a].mon3frifacing,pro_id:products_arry[a].prodid});
		selfarray.push({column:'Adhoc Display',value:products_arry[a].adhoc,pro_id:products_arry[a].prodid});
		}
		//alert(Ti.App.appdetails[0]);
		//alert(Ti.App.appdetails[1]);
		//alert(Ti.App.appdetails[0]);
		//var final2=JSON.stringify(Ti.App.appdetails);
		var order_=JSON.stringify(orderarray1);
		var self_=JSON.stringify(selfarray);
		//var final1=JSON.stringify(products_arry);
		
		var post_json;
		var finalstr1="{'is_store_available':'"+Ti.App.store_avaapp+"','store':[{'store_name':'"+Ti.App.storeapp+"','country':'"+Ti.App.countryapp+"','state':'"+Ti.App.stateapp+"','city':'"+Ti.App.cityapp+"','address':'"+Ti.App.addressapp+"','phone':'"+Ti.App.phoneapp+"','manager':'"+Ti.App.managerapp+"','assitent':'"+Ti.App.assistantapp+"','rtdmanager':'"+Ti.App.rtdapp+"','beermanager':'"+Ti.App.beerapp+"','procons':'"+Ti.App.procon+"'}],"+
					"'po_details':[{'ppg':'"+Ti.App.ppgapp+"','ord_days':'"+Ti.App.orderapp+"','del_days':'"+Ti.App.delayapp+"','call_days':'"+Ti.App.callfreqapp+"','acount_class':'"+Ti.App.accountapp+"','manager':'"+Ti.App.managerapp+"','assitant':'"+Ti.App.assistantapp+"','rtdmanager':'"+Ti.App.rtdapp+"','beermanager':'"+Ti.App.beerapp+"','pro_con':'"+Ti.App.procon+"'}],"+
					"'order_pro':"+ order_ +",'shelf_details':"+self_ +",'img_binary':'"+imgStr+"','createdby':'"+Ti.App.current_user_id+"'}";
		var finalstr0="{'is_store_available':'"+Ti.App.store_avaapp+"',"+
					"'po_details':[{'store_id':'"+Ti.App.str_idapp+"','ppg':'"+Ti.App.ppgapp+"','ord_days':'"+Ti.App.orderapp+"','del_days':'"+Ti.App.delayapp+"','call_days':'"+Ti.App.callfreqapp+"','acount_class':'"+Ti.App.accountapp+"','manager':'"+Ti.App.managerapp+"','assitant':'"+Ti.App.assistantapp+"','rtdmanager':'"+Ti.App.rtdapp+"','beermanager':'"+Ti.App.beerapp+"','pro_con':'"+Ti.App.procon+"','s_name':'"+ Ti.App.store_name +"','s_addr':'"+ Ti.App.address_store +"','s_phone':'"+ Ti.App.store_phone_no +"'}],"+
					"'order_pro':"+ order_ +",'shelf_details':"+self_ +",'img_binary':'"+imgStr+"','createdby':'"+Ti.App.current_user_id+"'}";
		//alert(finalstr1);
		//alert(finalstr0);
		
		if(Ti.App.store_avaapp==1)
		{
		//alert(finalstr0);
		post_json=finalstr0;
		//products_arry=[];
		//Ti.App.appdetails=[];
		//Ti.App.orderarray1=[];
		//Ti.App.selfarray=[];
		}
		else
		{
		
		//alert(finalstr1);
		post_json=finalstr1;
		//products_arry=[];
		//Ti.App.appdetails=[];
		//Ti.App.orderarray1=[];
		//Ti.App.selfarray=[];
		}
		
		
		var dlg = Ti.UI.createActivityIndicator();
		dlg.setMessage('Loading...');
		var url = "http://192.168.1.55:8080/enterprise_project/SaveProducts";
		var xhr = Ti.Network.createHTTPClient({
    	onload: function(e) {
    		dlg.hide();
    		//alert(this.responseText);
    		var response_json=JSON.parse(this.responseText);
    		if(response_json.Success == 1)
    		{
    			products_arry=[];
				Ti.App.appdetails=[];
				orderarray1=[];
				selfarray=[];
    			Ti.App.fireEvent('close_windows',{});
    		}
    		else
    		{
    			alert(response_json.ErrorMessage);
    			
    		}
    	},
    	onerror: function(e) {
        	// this function is called when an error occurs, including a timeout
        	dlg.hide();
        	Ti.API.debug(e.error);
        	alert("Can't Find Server,Make Sure you are connected to internet.Try again!");
    	},
    		timeout:60000  /* in milliseconds */
		});

        var productpost = {
    		json:post_json
    		
		};

		xhr.open("POST", url);
		xhr.send(productpost);  // request is actually sent with this statement
		dlg.show();
			
		}
		else
		{
			alert('Select and Fill Any Product For Order!');
		}
		
	}
	}
	else
	{
		
		
		if(menu_img.visible)
		{
			for(var n=0;n<ordered_products.length;n++)
			{
				if(ordered_products[n].pro_id==Ti.App.productid)
				{
				for(var o=0;o<shelf_review_product.length;o++)
				{
					if(ordered_products[n].column_name == shelf_review_product[o].column_name)
					{
						ordered_products[n].column_value=shelf_review_product[o].column_value;
					}
				}
				}
		    }
		
		  //alert(JSON.stringify(shelf_review_product));
		
		  shelf_review_product=[];
		
		 Ti.App.fireEvent('backbutton');
		}
		else
		{
			//alert(JSON.stringify(products_status));
			var dlg = Ti.UI.createActivityIndicator();
			dlg.setMessage('Loading...');
			var url = "http://192.168.1.55:8080/enterprise_project/update_ordered_product";
			var xhr = Ti.Network.createHTTPClient({
    		onload: function(e) {
    			var response_json=JSON.parse(this.responseText);
    			if(response_json.Success ==1)
    			{
    				ordered_products=[];
    				shelf_review_product=[];
    			    products_status=[];
    			    Ti.App.fireEvent('close_windows',{});
    			    Ti.App.poid=0;	
    			}
    			else
    			{
    				alert(this.responseText);
    			}
    			dlg.hide();
    		//alert(this.responseText);
    		
    		
    		},
    		onerror: function(e) {
        	// this function is called when an error occurs, including a timeout
        		dlg.hide();
        		Ti.API.debug(e.error);
        		alert("Can't Find Server,Make Sure you are connected to internet.Try again!");
    		},
    			timeout:60000  /* in milliseconds */
			});
			
			var review_=JSON.stringify(ordered_products);
			var product_=JSON.stringify(products_status);
			var result= "{'po_id':'"+Ti.App.poid+"','ppg':'"+Ti.App.ppg+"','ord_days':'"+Ti.App.order+"','del_days':'"+Ti.App.delay+"','call_days':'"+Ti.App.call+"','acunt_class':'"+Ti.App.accclass+"','manager':'"+Ti.App.manager+"','assistant':'"+Ti.App.assistant+"','rtdmanager':'"+Ti.App.rtdmanager+"','beermanager':'"+Ti.App.beermanager+"','pro_con':'"+Ti.App.proconin+"',"+
						"'ordered_products':"+product_+",'shelf_master':"+review_+",'s_name':'"+ Ti.App.store_name +"','s_addr':'"+ Ti.App.address_store +"','s_phone':'"+ Ti.App.store_phone_no +"'}"


        	var reslutpost = {
    		json:result
    		
			};

        
    		
						
						
		xhr.open("POST", url);
		xhr.send(reslutpost);  // request is actually sent with this statement
		dlg.show();
			//alert(result);	
		}
	    
		
	}
	
	//Ti.App.fireEvent('submitclick');
	});
	
	
	header.add(head_lbl);
	header.add(head_back);
	header.add(head_sub);
	
	
	header1.add(head_lbl1);
	header1.add(menu_img);
	header1.add(cameraimg);
	
	content.add(tbl);
	content.add(header1);
	

	self.add(slide);
	self.add(header);
	self.add(content);
	//self.add(slide_view);
	
	
	return self;
};
module.exports = Productsinfo;
