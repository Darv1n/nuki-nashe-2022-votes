// Find position of first occurrence of a case-insensitive string
// original by: Martijn Wieringa
function stripos ( f_haystack, f_needle, f_offset ) {
	var haystack = f_haystack.toLowerCase();
	var needle = f_needle.toLowerCase();
	var index = 0;

	if( f_offset == undefined ) {
		f_offset = 0;
	}

	if( ( index = haystack.indexOf( needle, f_offset ) ) > -1 ) {
		return index;
	}

	return false;
}

// вырезаем теги
function stripHtml(html) {
	let tmp = document.createElement('div');
	tmp.innerHTML = html;
	return tmp.textContent || tmp.innerText || '';
}



// добавляем checkbox:checked
var checkboxes = document.querySelectorAll('.chartova2020__nominants input[type=checkbox]');
for ( c in checkboxes ) {
	checkboxes[c].checked=true
}


// скрываем указанные классы
let classes = ['#votes .chartova2020__order', '#votes .list-banner', '.adsbygoogle', '.direct', '.news__banner']
for ( c in classes ) {
	var items = document.querySelectorAll(classes[c]);
	for ( i in items ) {
		if ( typeof items[i] === 'object' ) {
			items[i].setAttribute('style', 'display:none');
		}
	}
}





// основной цикл
let keywords = ['СЛОТ', 'Нуки', 'Ставрович'];
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
				}
			}

			if ( itemMatch == false ) {
				listItems[i].parentElement.parentElement.classList.add( 'hidden' );
			}

		}

	}

	if ( typeof nominationItems[n] === 'object' && nominationMatch == false ) {
		nominationItems[n].classList.add( 'hidden' );
	}

}