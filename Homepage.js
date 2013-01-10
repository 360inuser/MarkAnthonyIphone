function Homepage() {
  var self = Ti.UI.createView();
	
	var header = Ti.UI.createView({
		top:0,
		height:'10%',
		backgroundColor:'black'
	});
	var head_lbl = Ti.UI.createLabel({
		text:'HOMEPAGE',
		color:'white'
	});
	
	
	var content = Ti.UI.createView({
		top:'10%',
		height:'100%',
		backgroundColor:'white',
	});
	var log_name = Ti.UI.createLabel({
		text:'',
		top:'15%',
		height:'auto',
		width:'auto',
		color:'black'
	});
	var aud_btn = Ti.UI.createButton({
		title:'New Audit',
		top:'25%',
		width:'40%',
		height:'auto'
	});
	var reaud_btn = Ti.UI.createButton({
		title:'Review My Audit',
		top:'35%',
		width:'40%',
		height:'auto'
	});
	var logout_btn = Ti.UI.createButton({
		title:'Logout',
		top:'45%',
		width:'40%',
		height:'auto'
	});
	
	Ti.App.addEventListener('changeusername',function(e)
	{
		log_name.setText("WELCOME USER "+Ti.App.current_user);
	});
	
	header.add(head_lbl);
	
 	content.add(log_name);
 	content.add(aud_btn);
 	content.add(reaud_btn);
 	content.add(logout_btn);
 	
 	self.add(header);
 	self.add(content);
	return self;
};

module.exports = Homepage;
