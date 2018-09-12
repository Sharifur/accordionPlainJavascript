var xgaAccordion = document.getElementsByClassName('xga-accrodion');
	// console.log(xgaAccordion);
	for (var i = 0; i < xgaAccordion.length; i++) {
		var heading = xgaAccordion[i].children[0].children[0];
		heading.onclick = function(ev){
			ev.preventDefault();
			var content =  this.parentElement.nextElementSibling;
			var accParentClass =  this.parentElement.parentElement.getAttribute('class');
			var groupId = document.getElementById(content.getAttribute('data-parent')).getAttribute('id');
			console.log(groupId);
			if (content.style.maxHeight) {
				//have close accordion
				content.style.maxHeight = null;
			}else{
				//have to open accordion
				var ddd = document.getElementById(groupId)
				var allPrents = ddd.getElementsByClassName(accParentClass);

				for (var i = 0; i < allPrents.length; i++) {
					allPrents[i].children[1].style.maxHeight = null;
					allPrents[i].children[0].children[0].classList.remove('open');
				}
				
				// console.log(dd)
				content.style.maxHeight = content.scrollHeight + 'px';
			}
			this.classList.toggle('open');
			// console.log(content.style.maxHeight);
		}
	}