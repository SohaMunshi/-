# - تصميم واجهة التحكم لتحريك القاعدة 
Here there are explanations of the task
the languages that have been used: HTML, CSS, JS.

#HTML Codes:

This code gives the title of the page:

      <title>Range Slider</title>

This code to insert the CSS file that has the styles of the page:

      <link rel="stylesheet" href="style.css">

In these codes we create the range slider:

      <div class="range-slider">

      <div class="slider-warpper">
      Motor1
      <input type="range" min="0" max="180" class="slider"> 
      <span>180</span>
      </div>

      <div class="slider-warpper">
      Motor2
      <input type="range" min="0" max="180" class="slider"> 
      <span>180</span>
      </div>

      <div class="slider-warpper">
      Motor3
      <input type="range" min="0" max="180" class="slider"> 
      <span>180</span>
      </div>

      <div class="slider-warpper">
      Motor4
      <input type="range" min="0" max="180" class="slider"> 
      <span>180</span>
      </div>

      <div class="slider-warpper">
      Motor5
      <input type="range" min="0" max="180" class="slider"> 
      <span>180</span>
      </div>

      <div class="slider-warpper">
      Motor6
      <input type="range" min="0" max="180" class="slider"> 
      <span>180</span>
      </div>

      </div>

Personally I put the JavaScript codes on a file like CSS, and this code we used it to insert our JS file:

      <script src="main.js"></script>

And on this code we create a Save button:

      <div class="my-buttons"></div>
      <button class="btn btn1">Save</button>


#CSS Codes:

This code to style the background:
 
       body{
	background:#ECFDD6;
	font-family: Arial, Helvetica, sans-seri;
	
      }
       
       
This code to style the “Range Slider” word:

      h1{
	font-size: 3rem;
	text-align: left;
	margin: 5rem 150;
	
	
      }
      
      
 
These codes to style the range sliders:

      .slider-warpper{
	position: relative;
	margin: 2rem;
	
	}

	.slider{
	appearance: none;
	-webkit-appearance: none;
	width: 410px;
	height: 30px;
	background-color: gray;
	box-shadow: inset 2px 2px 10px rgb(0,0,0,0.4);
	border-radius: 25px;
	outline: none;
	}

	.slider::-webkit-slider-thumb{
	-webkit-appearance: none;
	appearance: none;
	position: relative;
	width: 30px;
	height: 30px;
	border-radius: 5%;
	background: radial-gradient(#D2FF95, #D2FF95);
	
	}

	.slider::-moz-range-thumb{
	-webkit-appearance: none;
	appearance: none;
	position: relative;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: radial-gradient(#5CC7F5, #008DCA);	
	}

	.slider-warpper span{
	
	position: absolute;
	bottom: 50%;
	transform: translateY(50%);
	margin-left: 20px;
	font-size: 1.3rem;
	}
      
      

These codes to style the save button:

      .btn{
	background: none;
	border: 2px solid #63AF00;
	font-family: "montserrat", sans-serif;
	text-transform: appearance;
	padding: 12px 15px;
	min-width: 100px;
	cursor: pointer;
	transition: color 0.4s linear;
	position: relative;
	font-size: 1.6rem;
	text-align: left;
	margin: 1rem 450;
	}

	.btn:hover{
	color: #63AF00;	
	}

	.btn::befor{
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #63AF00;
	z-index: -1;
	transition: transform 0.5s;
	transform-origin: 0 0;
	transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
	}

	.btn1::befor{
	transform: scaleX(0);
	}


	.btn1:hover::befor{
	transform: scaleX(1);
	}

	}
      
      
#JS Codes:

These are the JS codes to keep tracking the range values on each slider:
	
      const sliders = document.querySelectorAll('.slider-warpper');


      sliders.forEach(slider=>{
	
	slider.addEventListener('input', ()=>{
	slider.lastElementChild.innerHTML = slider.firstElementChild.value
	})	
      })

      
      
      

      
      
      
