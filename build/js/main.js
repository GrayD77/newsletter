
var letterContainer = $('#newsletter');
var formContainer = $('#editContainer');
var wholeData;
var enterData;
var addtData;

var jsonDirectory = "files/";
var hash = window.location.hash.slice(1);
$('#saveHTML .file-name').val(hash || '');

getJSON(window.location.hash.slice(1));
// get JSON
function getJSON(name){
	name = name || 'default';
	// $.getJSON("files/"+ name +".json", function(data){
	// 	// create DOM
	// 	createNewsLetter(data);
	// });

	$.ajax({
		dataType: "json",
		url: "files/"+ name +".json",
		success:  function(data){
		// create DOM
		window.location.hash = name;
		$('main').before('<p class="page-title">'+ name +'</p>');
		createNewsLetter(data);
		},
		error: function(){
			newModal('<p>Файл не найден</p>');
		}
	});

}



function createNewsLetter(data){
	// parse JSON and create DOM elemmets
	// according to the types of the type of each element
	if (data) {
		wholeData = data;
		addData = wholeData.info;
		enterData = wholeData.data;
	}

	letterContainer.html('');
	formContainer.html('')

	var length = enterData.length;
	var letterDomElement = $('<center style="font-family: Helvetica, Arial, sans-serif; font-size: 13px; margin: 0; padding: 0;">');
	var formDomElement = $('<div class="form-container">');


	for (var i = 0, length = enterData.length; i < length; i++) {

		var that = enterData[i];
		that.index = i;

		var newSection = $(Templates.create(that.type, that));
		var newForm = $(FormTemplates.create(that.type, that));

		letterDomElement.append(newSection);
		formDomElement.append(newForm);

	}

	// newSection form
	var newSectionForm = $(FormTemplates.create('addSection', addData))
	formDomElement.append(newSectionForm);

	letterContainer.append(letterDomElement);
	formContainer.append(formDomElement);

};


$(document).on('submit', '.editForm', function(e){
	e.preventDefault();
});

$(document).on('submit', '.addSection', function(e){
	e.preventDefault();

	var sectionTitle = $(this).find('[name="sectionTitle"]').val();
	console.log(`sectionTitle: ${sectionTitle}`);
	var typeIndex = $(this).find('[name="sectionType"]').val()
	var dataElement = {};

	var template = addData.sectionTemplates[typeIndex];

	for (var key in template) {
		dataElement[key] = template[key];
	}

	dataElement.data.sectionTitle = sectionTitle;

	enterData.push(dataElement);

	createNewsLetter();

});

$(document).on('click', '.sectionUp, .sectionDown', function(e){

	e.preventDefault();


	var delta = $(this).hasClass('sectionUp')   ? -1 :
				$(this).hasClass('sectionDown') ?  1 : null;

	if (!delta) return;

	var form = $(this).closest('.editForm')
	var fromIndex = form.data('index');
	var toIndex = fromIndex + delta;

	if (toIndex < 0 || toIndex >= enterData.length) return;

	var temp = enterData[fromIndex];

	enterData[fromIndex] = enterData[toIndex];
	enterData[toIndex] = temp;


	createNewsLetter();

});

$(document).on('click', '.sectionRemove', function(e){

	e.preventDefault();

	var form = $(this).closest('.editForm')
	var index = form.data('index');

	enterData.splice(index, 1);


	createNewsLetter();

});
// forms:

$(document).on('keyup change', '.editForm', function(e){

	var thisForm = $(this);
	var index = thisForm.data('index');
	var item = enterData[index];

	thisForm.find('input, textarea').each(function(){
		var name = this.name;

		if ( !this.value ) return false;

		if ( thisForm.hasClass('events')) {

			var eventIndex = $(this).closest('.event-form-wrapper').data('index');
			if (eventIndex === undefined ) {
				item.data[name] = this.value;
			} else {
				item.data.events[eventIndex][name] = cutScriptTag(this.value);
			}

		} else
		if ( thisForm.hasClass('fotos')) {

			var eventIndex = $(this).closest('.foto-form-wrapper').data('index');
			if (eventIndex === undefined ) {
				item.data[name] = this.value;
			} else {
				item.data.fotos[eventIndex][name] = cutScriptTag(this.value);
			}

		} else {

			item.data[name] = this.value;

		}


		var newHTML = $(Templates.create(item.type, item)).html();
		$('.section-wrapper').eq(index).html(newHTML);

	});

});

// addEvent:
$(document).on('click', '#addEvent, #addFoto' ,function(e){
	e.preventDefault();
	var form = $(this).closest('.editForm')
	var index = form.data('index');
	var item = enterData[index]
	var name = form.data('name');
	var newElement = {};
	var template = enterData[index]['template'];

	for (var key in template) {
		newElement[key] = template[key];
	}

	item.data[name].push(newElement);

	var newHTML = $(Templates.create(item.type, item)).html();
	$('.section-wrapper').eq(index).html(newHTML);
	var newForm = $(FormTemplates.create(item.type, item)).html();
	$('.editForm').eq(index).html(newForm);

});

$(document).on('click', '.removeItem', function(e){
	e.preventDefault();

	var form = $(this).closest('.editForm')
	var index = form.data('index');
	var item = enterData[index];
	var name = form.data('name');
	var elIndex = $(this).closest('.section').data('index');

// array of events || fotos : 
	item.data[name].splice(elIndex, 1);

	var newHTML = $(Templates.create(item.type, item)).html();
	$('.section-wrapper').eq(index).html(newHTML);
	var newForm = $(FormTemplates.create(item.type, item)).html();
	$('.editForm').eq(index).html(newForm);


});

$(document).on('click', '.sort', function(e){

	e.preventDefault();

	var delta = $(this).hasClass('sortUp')   ? -1 :
				$(this).hasClass('sortDown') ?  1 : null;

	if (!delta) return;

	var form = $(this).closest('.editForm')
	var index = form.data('index');
	var item = enterData[index];
	var name = form.data('name');
	var fromIndex = $(this).closest('.section').data('index');
	var toIndex = fromIndex + delta;

	if (toIndex < 0 || toIndex >= item.data[name].length) return;

	var temp = item.data[name][fromIndex];
	item.data[name][fromIndex] = item.data[name][toIndex];
	item.data[name][toIndex] = temp;

	var newHTML = $(Templates.create(item.type, item)).html();
	$('.section-wrapper').eq(index).html(newHTML);
	var newForm = $(FormTemplates.create(item.type, item)).html();
	$('.editForm').eq(index).html(newForm);

});

$('#openNewsLetter').on('submit', function(e){
	e.preventDefault();
	var name = $(this).find('input[name="fileName"]').val();
	if (!name) return;
	getJSON(name);
	$(this)[0].reset();
});

$('#saveHTML').on('submit', function(e){
	e.preventDefault();

	var htmlFile = {};
	htmlFile.html = getNewsLetterHtml();
	htmlFile.name = $(this).find('input[name="fileName"]').val();
	htmlFile.overwrite = $(this).find('input[name="overwrite"]').is(':checked');

	$.ajax(
		{
			type: "POST",
			url: "php/save-html.php",
			data : htmlFile,
			success : saveFileSuccess,
			error : saveFileError
		}
	);


	$.ajax(
		{
			type: "POST",
			url: "php/save-json.php",
			data : {myJson : JSON.stringify(wholeData), fileName: htmlFile.name}
		}
	);
});


$(document).on('click', '.close-modal' ,function(e){
	e.preventDefault();
	$(this).closest('.modal-container').remove();

});

$(document).on('click', '.copy-url-btn' ,function(e){
	e.preventDefault();

	var url;
	var secondPart = $(this).parent().find('.copy-url').attr('href');
	var firsPart = window.location.href.split('#')[0];

	url = firsPart + secondPart;

	copyToClipboard(url);
	$(this).text('Готово');
});

function saveFileSuccess(answerHTML) {
	// create modal window with answerHTML
	var modal = $(ModalWindow.getHTML(answerHTML));
	$('body').append(modal);

};

function newModal(html) {
	// create modal window with answerHTML
	var modal = $(ModalWindow.getHTML(html));
	$('body').append(modal);

};

function saveFileError(answerHTML) {
	// create modal window with answerHTML
	console.log('error')
};





function cutScriptTag(string) {
	var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

	while ( SCRIPT_REGEX.test(string) ) {
	    string = string.replace(SCRIPT_REGEX, "");
	}

	return string;
};

function getNewsLetterHtml() {

	var letter = $('<div>');
	letter.html(letterContainer.html());

	letter.find('.section-wrapper').each(function(){
		$(this).children().eq(0).unwrap();
	})

	html = letter.html();

	return html;
};


function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}