var FormTemplates = {

	mainSection: function(item){
		var data = item.data;

		var html = `

			<form action=""  class="editForm editForm-${item.index}">

				<label>
					<span>Дата (например: 16-25 января)</span>
					<input type="text" name="date" value="${item.data.date}">
				</label>
				<label>
					<span>ссылка на кратинку:</span>
					<input type="text" name="img" value="${item.data.img}">
				</label>

				<hr>
			</form>

		`;

		return html;
	},

	mainEvent: function(item){
		var html = `
			<form action=""  class="editForm editForm-${item.index}">
				<h1>${item.data.sectionTitle}</h1>
				<label>
					<span>Заголовок раздела</span>
					<input type="text" name="sectionTitle" value="${item.data.sectionTitle}">
				</label>

				<label>
					<span>Название события</span>
					<input type="text" name="title" value="${item.data.title}">
				</label>

				<label>
					<span>Ссылка на кратинку:</span>
					<input type="text" name="img" value="${item.data.img}">
				</label>

				<label>
					<span>Описание</span>
					<textarea name="dscr" value="">${item.data.dscr}
					</textarea>
				</label>

				<hr>
			</form>
		`;
		return html;
	},

	article: function(item){
		var html = `
			<form action=""  class="editForm editForm-${item.index}">
				<h1>${item.data.sectionTitle}</h1>
				<label>
					<span>Заголовок раздела</span>
					<input type="text" name="sectionTitle" value="${item.data.sectionTitle}">
				</label>

				<label>
					<span>Заголовок статьи</span>
					<input type="text" name="title" value="${item.data.title}">
				</label>

				<label>
					<span>URL картинки</span>
					<input type="text" name="img" value="${item.data.img}">
				</label>

				<label>
					<span>Описание</span>
					<textarea name="dscr" value="">${item.data.dscr}
					</textarea>
				</label>

				<hr>
			</form>
			`;
		return html;
	},

	events: function(item){
		var html = ``;
		var htmlHeader = ``;
		var htmlBody = ``;
		var htmlFooter = ``;
		// item.data.events
		htmlHeader = `
		<form class="editForm events">
		<h1>${item.data.sectionTitle}</h1>
		<label>
			<span>Заголовок раздела</span>
			<input type="text" name="sectionTitle" value="${item.data.sectionTitle}">
		</label>
		`;

		htmlFooter = `
			<button id="addEvent">Добавить событие</button>
			</form>
		`;

		for (var i = 0, length = item.data.events.length; i < length; i++) {
			htmlBody += `
				<h2>Event #${i+1}</h2>
				<div class="event-form-wrapper" data-index="${i}">
					<label>
						<span>URL картинки</span>
						<input type="text" name="img" value="${item.data.events[i].img}">
					</label>
					<label>
						<span>Дата:</span>
						<input type="text" name="date" value="${item.data.events[i].date}">
					</label>
					<label>
						<span>Название</span>
						<textarea class="event" name="dscr">${item.data.events[i].dscr}</textarea>
					</label>
				</div>
			`;
		};

		html = htmlHeader + htmlBody + htmlFooter;
		return html;
	},

	social: function(item) {

		var html = ``;
		var htmlHeader = ``;
		var htmlBody = ``;
		var htmlFooter = ``;
		// item.data.events
		htmlHeader = `
		<form class="editForm fotos">
		<h1>${item.data.sectionTitle}</h1>
		<label>
			<span>Заголовок раздела</span>
			<input type="text" name="sectionTitle" value="${item.data.sectionTitle}">
		</label>
		`;

		htmlFooter = `
			<button id="addFoto">Добавить фото</button>
			</form>
		`;

		for (var i = 0, length = item.data.fotos.length; i < length; i++) {
			htmlBody += `
				<h2>Foto #${i+1}</h2>
				<div class="foto-form-wrapper" data-index="${i}">
					<label>
						<span>URL картинки</span>
						<input type="text" name="img" value="${item.data.fotos[i].img}">
					</label>
				</div>
			`;
		};

		html = htmlHeader + htmlBody + htmlFooter;
		return html;
	},

	footer: function(item) {
		var html = `

			<form action=""  class="editForm editForm-${item.index}">
				<h3>${item.data.sectionTitle}</h3>
				<label>
					<span>Заголовок раздела</span>
					<input type="text" name="sectionTitle" value="${item.data.sectionTitle}">
				</label>
			</form>

		`;

		return html;
	},

	create: function(type, item) {
		var self = this;
		var action = self[type];

		if ( typeof(action) !== 'function' ) return false;

		return action(item);
	}
};
