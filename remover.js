function stripos ( f_haystack, f_needle, f_offset ) {	// Find position of first occurrence of a case-insensitive string
	// 
	// +	 original by: Martijn Wieringa

	var haystack = f_haystack.toLowerCase();
	var needle = f_needle.toLowerCase();
	var index = 0;

	if(f_offset == undefined) {
		f_offset = 0;
	}

	if((index = haystack.indexOf(needle, f_offset)) > -1) {
		return index;
	}

	return false;
}


function stripHtml(html) {
	let tmp = document.createElement('div');
	tmp.innerHTML = html;
	return tmp.textContent || tmp.innerText || '';
}


console.log(true);



// Добавляем checkbox:checked
var checkboxes = document.querySelectorAll('.chartova2020__nominants input[type=checkbox]');
for (i in checkboxes) {
	checkboxes[i].checked=true
}


// убираем баннеры 
var bannerItems = document.querySelectorAll('#votes .list-banner');
for ( b in bannerItems ) {
	if ( typeof bannerItems[b] === 'object' ) {
		bannerItems[b].classList.add( 'hidden' );
	}
}


// убираем баннеры 
var orderItems = document.querySelectorAll('#votes .chartova2020__order');
for ( o in orderItems ) {
	if ( typeof orderItems[o] === 'object' ) {
		orderItems[o].setAttribute('style', 'display:none');
	}
}





let keywords = ['СЛОТ', 'Нуки', 'Ставрович'];

// основной цикл
var nominationItems = document.querySelectorAll('#votes > li.list-item');
for ( n in nominationItems ) {
	var nominationMatch = false;

	if ( typeof nominationItems[n] === 'object' ) {
		var listItems = nominationItems[n].querySelectorAll('.list-item .nominant__title');
	}

	for ( i in listItems ) {

		if ( typeof listItems[i] === 'object' ) {
			var itemMatch = false;

			for (let k = 0; k < keywords.length; k++) {

				if ( stripos( stripHtml( listItems[i].innerHTML ), keywords[k] ) !== false ) {
					itemMatch = true;
					nominationMatch = true;

					//console.log( stripHtml( listItems[i].innerHTML ) );
				}
			}

			if ( itemMatch == false ) {
				listItems[i].parentElement.parentElement.classList.add( 'hidden' );
			}

		}

		//console.log( nominationMatch );

	}

	if ( typeof nominationItems[n] === 'object' && nominationMatch == false ) {
		nominationItems[n].classList.add( 'hidden' );
	}


	//console.log( nominationItems[n].innerHTML );
}


