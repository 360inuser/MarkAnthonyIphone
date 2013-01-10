function Reviewmyaudict(){
  var self = Ti.UI.createView();
	
	var header = Ti.UI.createView({
		top:'0',
		height:'50',
		backgroundColor:'black'
	});
	var head_lbl = Ti.UI.createLabel({
		text:'REVIEW MY AUDIT',
		color:'white'
	});
	var head_back = Ti.UI.createButton({
		title:'Back',
		left:'5',
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
	var head_lbl1 = Ti.UI.createLabel({
		left:'5',
		text:'MY AUDIT',
		color:'white',		
	});
	var tbl = Ti.UI.createTableView({
		top:'50',
		backgroundColor:'white',
		height:'auto',
		scrollable:true,
		left:'0',
		separatorColor:'white'
	});
	//var tbl_data=[];
	Ti.App.addEventListener('reviewload',function(e){ 
	var url = "http://192.168.1.55:8080/enterprise_project/review_store";
	var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
		var tbl_empty=[];
		tbl.setData(tbl_empty);
		var jsonobj=JSON.parse(this.responseText);
		try
		{
		if(jsonobj.Ordered_days.length > 0)
		{
			
			for(var i=0;i<jsonobj.Ordered_days.length;i++)
    		 {
    		 //Ti.API.info("SELECT :"+i);
    		 //alert(i);
    		  var row_view = Ti.UI.createView({
               		backgroundColor:'black',
               		height:'auto',
               		top:'0',
               		id:i,
               		hasChild:true
               });   
               var row_lbl = Ti.UI.createLabel({
               		color:'white',
               		text:jsonobj.Ordered_days[i].dates,           
               		height:'40',
               		top:'0',
               		left:'5',
               		touchEnabled:false
               });
              //for(var i=0;i<jsonobj.productlist.products.length;i++)
              //{}
              var tb_data=[];
              
              //alert(jsonobj.Ordered_days[0].po_details.length);
              for(var j=0;j<jsonobj.Ordered_days[i].po_details.length;j++)
              {
              	
              	var row_product=Ti.UI.createTableViewRow({
              		height:'40',
              		poid:jsonobj.Ordered_days[i].po_details[j].po_id,
              		strid:jsonobj.Ordered_days[i].po_details[j].store_id,
              	});
              	var pro_label=Ti.UI.createLabel({
              		text:jsonobj.Ordered_days[i].po_details[j].s_name,
              		color:'black',
              		left:'5',
              		touchEnabled:false
              		
              	});
              	
              	var pro_staus=Ti.UI.createLabel({
              		color:'gray',
              		right:'5',
              		text:jsonobj.Ordered_days[i].po_details[j].ord_time,
              		touchEnabled:false
              	});
              	
              	row_product.add(pro_label);
              	row_product.add(pro_staus);
              	tb_data.push(row_product);

              }
              
              
               var row_tbl=Ti.UI.createTableView({
               		backgroundColor:'white',
               		height:'0',
               		top:'40',
               	    visible:true,
               	    data:tb_data,
               	    
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
               		height:40,
               });       
               row_view.add(row_img);
               row_view.add(row_lbl);
               row_view.add(row_tbl);
               row_view.add(row_img1);
               row.add(row_view);
             
               tbl.appendRow(row);
               row_view.addEventListener('click',function(e){
               //alert('clicked')
    				try
    				{	
    				if(e.source.hasChild != null && e.source.hasChild == true)
                    {
    				var test=Ti.UI.createView({});
    				var tappedRow = e.row;
                    test=e.source;
                    
                    
                    if(test.children[2].height == 0)
                    {
                       test.backgroundColor='black';
                       
                       var count_rows=test.children[2].data[0].rowCount;
                       count_rows=count_rows*40;
                       tappedRow.height=40+count_rows;                       
                       test.children[2].height=count_rows;
                       
                       test.children[2].backgroundColor='white';
                       test.children[2].separatorColor='gray';
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
                        test.children[2].separatorColor='gray';
                        //alert(img.getUrl());
                        //var filename = 'up.png';
                        //savedfile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
                        //img.image=filename;		
                    }
                    }
                    
                    else
                    {
                    	//alert(e.source.poid);
                    	Ti.App.fireEvent('storeinfoload');
                    	Ti.App.fireEvent('storeinfowindowopen',{});
                    	
                    	Ti.App.poid=e.source.poid
                    	Ti.App.fireEvent('reviewautofillstoreinfo',{
                    		poid:e.source.poid
                    	});
                    	//alert(e.source.value);
                    	//Ti.App.productid=e.source.id;
                    	//Ti.App.test='close';
                    	//Ti.App.fireEvent('slideview',{
                    	//	proname:e.source.value
                    	//});
                    				
                    }
                    
    				}
    				catch(ex)
    				{
    					alert(ex.toString());
    				}
                    
    				//}
    				//else
    				//{
    					//
    				//}  
    				
    				
               });
                
    		 }
    	}
		}	
		
    	catch(e)
    	{
    		alert(e);
    	}		
    	//tbl.setData(tbl_data);
	},
	onerror: function(e) {
        Ti.API.debug(e.error);
        alert("Can't Find Server,Make Sure you are connected to internet.Try again!");
    },
    	timeout:60000
	});	
	
		
		xhr.open("POST", url);
		
		xhr.send();
	});
	
	header.add(head_lbl);
	header.add(head_back);
	header1.add(head_lbl1);
	content.add(tbl);
	content.add(header1);
	self.add(content);
	self.add(header);
	return self;
};
module.exports = Reviewmyaudict;
