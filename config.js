* {
	box-sizing: border-box;
  }
  
  body {
	margin: 0;
  }
  
  #container {
	max-width: 600px;
	margin: 0 auto;
	text-align: center;
  }
  
  .clearfix {
	clear: both;
  }
  
  .hidden {
	display: none;
  }
  
  #user-info {
	border: 1px solid #CCC;
	clear: both;
	margin: 0 auto 20px;
	max-width: 400px;
	padding: 10px;
	text-align: left;
  }
  
  #photo-container {
	background-color: #EEE;
	border: 1px solid #CCC;
	float: left;
	height: 80px;
	margin-right: 10px;
	width: 80px;
  }
  
  #photo {
	height: 80px;
	margin: 0;
	width: 80px;
  }
  
  @media (max-width: 300px) {
	#photo-container,
	#photo {
	  height: 40px;
	  width: 40px;
	}
  }
  