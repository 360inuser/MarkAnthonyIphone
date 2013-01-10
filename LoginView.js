function LoginView() {
  
	var self = Ti.UI.createView({	
	});
	
	
	var header = Ti.UI.createView({
		top:0,
		height:'10%',
		backgroundColor:'black'
	});
	var head_lbl = Ti.UI.createLabel({
		text:'LOGIN',
		color:'white'
	});
	
	
	var content = Ti.UI.createView({
		top:'10%',
		height:'100%',
		backgroundColor:'white',
	})
	var user_log = Ti.UI.createLabel({
		text:'Username',
		color:'black',
		top:'10%',
		left:'10%',
	});
	var pass_log = Ti.UI.createLabel({
		text:'Password',
		color:'black',
		top:'20%',
		left:'10%'
	});
	var user_in = Ti.UI.createTextField({
		width:'50%',
		height:'7%',
		top:'10%',
		left:'40%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var pass_in = Ti.UI.createTextField({
		passwordMask:true,
		width:'50%',
		height:'7%',
		top:'20%',
		left:'40%',
		backgroundFocusedColor:'white',
		borderColor:'gray',
		borderWidth:'1',
		borderRadius:'2',
		returnKeyType:Titanium.UI.RETURNKEY_DONE
	});
	var chk_bx = Ti.UI.createImageView({
		url:'cb_glossy_off.png',
		top:'30%',
		left:'40%'
	});
	var chk_bx1 = Ti.UI.createImageView({
		url:'cb_glossy_on.png',
		top:'30%',
		left:'40%',
		visible:false
	});
	var rem_me = Ti.UI.createLabel({
		text:'Remember Me',
		color:'black',
		top:'30%',
		left:'50%'
	});
	var log_btn = Ti.UI.createButton({
		title:'Login',
		width:'35%',
		height:'auto'
	});
	var dlg = Titanium.UI.createActivityIndicator({
                style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK,
                width:'auto',
                height:'auto',
                message:'Loading...',
                color:'black',
                
                });
	
	

	chk_bx.addEventListener('click',function(e){
		if(chk_bx.visible)
		{
			chk_bx.visible=false;
			chk_bx1.visible=true;
			//vis=false;
		}
		else
		{
			chk_bx.visible=true;
			chk_bx1.visible=false;
			//vis=true;
		}
	});
	chk_bx1.addEventListener('click',function(e){
		if(chk_bx1.visible)
		{
			chk_bx1.visible=false;
			chk_bx.visible=true;
			//vis=false;
		}
		else
		{
			chk_bx1.visible=true;
			chk_bx.visible=false;
			//vis=true;
		}
	});
	
	user_in.addEventListener('return', function() {
    pass_in.focus();
    });
    
    Ti.App.addEventListener('clearlogin',function(e){
		user_in.value="";
		pass_in.value="";
		//log_cbox.value=false;
		chk_bx.visible=true;
		chk_bx1.visible=false;
	});
	
	Ti.App.addEventListener('rememberlogin',function(e){
		user_in.value=e.username;
		pass_in.value=e.password;
		//log_cbox.value=true;
		chk_bx1.visible=true;
		chk_bx.visible=false;
		rememberme_check();
	});
	
	
	function rememberme_check()
	{
		
		//dlg.setMessage('Loading...');
		var url = "http://192.168.1.55:8080/enterprise_project/loginjsonparse";
		var xhr = Ti.Network.createHTTPClient({
    	onload: function(e) {
    		dlg.hide();
    		
    		Ti.App.fireEvent('openhomepage',{
    			jsontext:this.responseText,
    			remember:chk_bx.getUrl(),
    			username:user_in.value,
    			password:pass_in.value
    		});
    		
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
    		json: "{'uname':'"+ user_in.value +"','pwd':'"+ pass_in.value +"'}"
    		
		};
		
		xhr.open("POST", url);
		
		xhr.send(loginpost);  // request is actually sent with this statement
		///alert('loading');
		dlg.show();
		
	}
	
	
	log_btn.addEventListener('click',function(e){
	    user_in.blur();
	    pass_in.blur();	
	    if(user_in.value=="" || pass_in.value=="")
		{
		alert("Enter the Username or Password");
		}
		else
		{
		rememberme_check();
		}
	});
	
	header.add(head_lbl);
	
	content.add(chk_bx);
	content.add(chk_bx1);
	content.add(log_btn);
	content.add(rem_me);
	content.add(user_in);
	content.add(pass_in);
	content.add(user_log);
	content.add(pass_log);
	
	
	self.add(content);
	self.add(header);
	self.add(dlg);
	return self;
};

module.exports = LoginView;
