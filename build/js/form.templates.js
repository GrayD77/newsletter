var FormTemplates = {

	mainSection: function(item){
		var data = item.data;

		var html = `

			<form action=""  class="editForm" data-index="${item.index}">

				<div class="section-controls">
					<span class="sectionUp section-sort"></span>
					<span class="sectionDown section-sort"></span>
					<span class="sectionRemove">X</span>
				</div>

				<h1>${item.data.sectionTitle}</h1>

				<label>
					<span>Дата (например: 16-25 января)</span>
					<input type="text" name="date" value="${item.data.date}">
				</label>

				<label>
					<span>ссылка на кратинку:</span>
					<input type="text" name="img" value="${item.data.img}">
				</label>

			</form>

		`;

		return html;
	},

	mainEvent: function(item){
		var html = `
			<form action=""  class="editForm" data-index="${item.index}">
				<h1>${item.data.sectionTitle}</h1>

								<div class="section-controls">
					<span class="sectionUp section-sort"></span>
					<span class="sectionDown section-sort"></span>
					<span class="sectionRemove">X</span>
				</div>

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

			</form>
		`;
		return html;
	},

	article: function(item){
		var html = `
			<form action=""  class="editForm" data-index="${item.index}">
				<h1>${item.data.sectionTitle}</h1>

								<div class="section-controls">
					<span class="sectionUp section-sort"></span>
					<span class="sectionDown section-sort"></span>
					<span class="sectionRemove">X</span>
				</div>

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
				<label>
					<span>Ссылка на новость</span>
					<input type="text" name="link" value="${item.data.link}">
				</label>
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
		<form class="editForm events" data-index="${item.index}" data-name="events">
		<h1>${item.data.sectionTitle}</h1>

				<div class="section-controls">
					<span class="sectionUp section-sort"></span>
					<span class="sectionDown section-sort"></span>
					<span class="sectionRemove">X</span>
				</div>

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

				<h2>
					Event #${i+1}
				</h2>
				<div class="event-form-wrapper section" data-index="${i}">

					<div class="item-controls">
						<div class="sort-wrapper">
							<span class="sort sortUp"></span>
							<span class="sort sortDown"></span>
						</div>
						<span class="removeItem">x</span>
					</div>

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
					<label>
						<span>Ссылка на новость</span>
						<input type="text" name="link" value="${item.data.events[i].link}">
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
		<form class="editForm fotos" data-index="${item.index}" data-name="fotos">
		<h1>${item.data.sectionTitle}</h1>

		<div class="section-controls">
			<span class="sectionUp section-sort"></span>
			<span class="sectionDown section-sort"></span>
			<span class="sectionRemove">X</span>
		</div>

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
				<div class="foto-form-wrapper section" data-index="${i}">
					<div class="item-controls">
						<div class="sort-wrapper">
							<span class="sort sortUp"></span>
							<span class="sort sortDown"></span>
						</div>
						<span class="removeItem">x</span>
					</div>
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

			<form action=""  class="editForm" data-index="${item.index}">
				<h3>${item.data.sectionTitle}</h3>

								<div class="section-controls">
					<span class="sectionUp section-sort"></span>
					<span class="sectionDown section-sort"></span>
					<span class="sectionRemove">X</span>
				</div>

				<label>
					<span>Заголовок раздела</span>
					<input type="text" name="sectionTitle" value="${item.data.sectionTitle}">
				</label>
			</form>

		`;

		return html;
	},

	addSection: function(item) {
		// item -> addData (data.info)

		var html = `
			<hr>
			<form action="" class="addSection">
				<h1>СОЗДАТЬ РАЗДЕЛ:</h1>
				<label>
					<span>Заголовок раздела:</span>
					<input type="text" name="sectionTitle">
				</label>
				<label>
					<span>Тип раздела</span>
					<select name="sectionType">

		`;


		for (var i = 0, length = item.sectionTemplates.length; i < length; i++) {

			html += `<option value="${i}">${item.sectionTemplates[i].name}</option>`;

		}


		html += `
					</select>
				</label>
				<button class="createSection">Создать</button>
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
