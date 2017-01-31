var Templates = {

	mainSection: function(item){
		var data = item.data;

		var html = `
			<div class="section-wrapper" data-index="${item.index}">
				<table width="800" class="white-bg" border="0" cellpadding="0" cellspacing="0" bgcolor="#fff" style="background-color: #fff; margin: 0; padding: 0;">
					<tr style="height: 50px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
					<tr style="margin: 0; padding: 0;">
						<td align="center" style="font-size: 13px; line-height: 17px; margin: 0; padding: 0; width: 274px;">
							<span mc:edit="top-left-text">
								Анонс мероприятий IMAGURU
								<br>

								${data.date}

							</span>
						</td>
						<td style="margin: 0; padding: 0; width: 252px;"></td>
						<td align="center" style="font-size: 13px; line-height: 17px; margin: 0; padding: 0; width: 274px;">
							<span mc:edit="top-right-text">
								Письмо отображается некорректно?
								<br>
								<a href="*|ARCHIVE|*" style="color: inherit;">
									Откройте письмо в браузере.
								</a>
							</span>
						</td>
					</tr>
					<tr style="height: 13px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
				</table>
				<table width="800" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" class="white-bg" style="background-color: #fff; margin: 0; padding: 0;">
					<tr style="margin: 0; padding: 0;">
						<td style="margin: 0; padding: 0; width: 800px;">
							<img mc:edit="main-image" src="

								${data.img}

							" width="800" height="276" alt="IMAGURU" style="display: block; height: auto; max-width: 800px;">
						</td>
					</tr>
					<tr style="margin: 0; padding: 0;">
						<td align="center" valign="top" style="font-size: 21px; margin: 0; padding: 0;">
							<span mc:edit="main-text">
								ГЛАВНЫЕ СОБЫТИЯ
								<br>

								${data.date}

							</span>
						</td>
					</tr>
					<tr style="height: 63px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
				</table>
			</div>
		`;

		return html;
	},

	mainEvent: function(item){
		var html = `
			<div class="section-wrapper" data-index="${item.index}">
				<table width="800" border="0" cellpadding="0" cellspacing="0" class="devider" bgcolor="#f1f2f2" style="background-color: #f1f2f2; height: 60px; margin: 0; padding: 0;">
					<tr style="margin: 0; padding: 0;">
						<td align="center" style="font-size: 19px; height: 60px; margin: 0; padding: 0;">
							<span mc:edit="section-title-1">


								${item.data.sectionTitle}


							</span>
						</td>
					</tr>
				</table>
		`;
		for ( var i = 0, length = item.data.events.length; i < length; i++) {
			html += `
				<table width="800" bgcolor="#fff" class="white-bg" border="0" cellpadding="0" cellspacing="0" style="background-color: #fff; margin: 0; padding: 0;">
					<tr style="height: 27px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
					<tr class="h2" style="color: #ef4136; font-size: 32px; margin: 0; padding: 0;">
						<td style="margin: 0; padding: 0; width: 45px;"></td>
						<td align="center" style="margin: 0; padding: 0;">
							<a target="_blank" href="

								${item.data.events[i].link}

							" style="text-decoration: none; color: #ef4136;">
								<span mc:edit="title" style="color: #ef4136; font-size: 32px;">

									${item.data.events[i].title}

								</span>
							</a>
						</td>
						<td style="margin: 0; padding: 0; width: 45px;"></td>
					</tr>
					<tr style="height: 25px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
					<tr style="margin: 0; padding: 0;">
						<td style="margin: 0; padding: 0; width: 45px;"></td>
						<td style="margin: 0; padding: 0; width: 710px;">

							<a target="_blank" href="
								${item.data.events[i].link}
							" style="text-decoration: none;">
								<img mc:edit="main-event-img" src="

								${item.data.events[i].img}

								" width="710" height="355" alt="${item.data.events[i].title}" style="display: block; height: auto; max-width: 710px;">
							</a>

						</td>
						<td style="margin: 0; padding: 0; width: 45px;"></td>
					</tr>
					<tr style="height: 36px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
					<tr style="margin: 0; padding: 0;">
						<td style="margin: 0; padding: 0; width: 45px;"></td>
						<td style="margin: 0; padding: 0;">
							<span mc:edit="main-event-descr" style="font-size: 16px; line-height: 19px;">

							${item.data.events[i].dscr}

							</span>
						</td>
						<td style="margin: 0; padding: 0; width: 45px;"></td>
					</tr>
					<tr style="height: 56px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
				</table>
			`;
		};

		html += `</div>`;
		return html;
	},

	article: function(item){
		var html = `
			<div class="section-wrapper" data-index="${item.index}">

				<table width="800" border="0" cellpadding="0" cellspacing="0" class="devider" bgcolor="#f1f2f2" style="background-color: #f1f2f2; height: 60px; margin: 0; padding: 0;">
					<tr style="margin: 0; padding: 0;">
						<td align="center" style="font-size: 19px; height: 60px; margin: 0; padding: 0;">
							<span mc:edit="section-title-3">


								${item.data.sectionTitle}


							</span>
						</td>
					</tr>
				</table>
				<table class="title" bgcolor="#fff" width="800" border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0;">
					<tr style="height: 22px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
					<tr style="margin: 0; padding: 0;">
						<td align="center" style="margin: 0; padding: 0;">

							<a target="_blank" href="
								${item.data.link}
							" style="text-decoration: none; color: #ef4136;">

							<span mc:edit="article-title" class="article-title" style="color: #ef4136; font-size: 30px; line-height: 35px;">


								${item.data.title}

							</span>

							</a>
						</td>
					</tr>
					<tr style="height: 30px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
				</table>
				<table class="title" bgcolor="#fff" width="800" border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0;">
					<tr style="margin: 0; padding: 0;">
						<td style="margin: 0; padding: 0; width: 45px;"></td>

						<td style="margin: 0; padding: 0; width: 360px;">

							<a target="_blank" href="
								${item.data.link}
							" style="text-decoration: none;">

								<img mc:edit="article-image" src="

									${item.data.img}


								" height="330" width="360" alt="${item.data.title}" style="display: block; height: auto; max-width: 360px;">
							</a>
						</td>
						<td style="margin: 0; padding: 0; width: 20px;"></td>
						<td align="left" valign="top" style="margin: 0; padding: 0;">
							<span mc:edit="article-dscr" class="article-dscr" style="font-size: 16px; line-height: 24px;">

								${item.data.dscr}

							</span>
						</td>
						<td style="margin: 0; padding: 0; width: 45px;"></td>
					</tr>
					<tr style="height: 56px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
				</table>

			</div>
		`;

		return html;
	},

	events: function(item){

		var html = ``;
		var htmlHeader = ``;
		var htmlBody = ``;
		var htlmFooter = ``;


		// header
		htmlHeader = `
			<div class="section-wrapper" data-index="${item.index}">
				<table width="800" border="0" cellpadding="0" cellspacing="0" class="devider" bgcolor="#f1f2f2" style="background-color: #f1f2f2; height: 60px; margin: 0; padding: 0;">
					<tr style="margin: 0; padding: 0;">
						<td align="center" style="font-size: 19px; height: 60px; margin: 0; padding: 0;">
							<span mc:edit="section-title-2">

								${item.data.sectionTitle}

							</span>
						</td>
					</tr>
				</table>
				<table width="800" bgcolor="#fff" class="white-bg" border="0" cellpadding="0" cellspacing="0" style="background-color: #fff; margin: 0; padding: 0;">
		`;
		htmlFooter = `
				<tr style="height: 70px; margin: 0; padding: 0;">
					<td style="height: inherit; margin: 0; padding: 0;"></td>
				</tr>
				</table>
			</div>
		`;

		// item.data.events
		for (var i = 0, length = item.data.events.length; i < length; i+=2) {

			htmlBody += `

				<tr style="height: 35px; margin: 0; padding: 0;">
					<td style="height: inherit; margin: 0; padding: 0;"></td>
				</tr>

				<tr style="margin: 0; padding: 0;">
					<td style="margin: 0; padding: 0; width: 123px;"></td>
					<td style="margin: 0; padding: 0; width: 256px;" valign="top">

						<a target="_blank" href="
							${item.data.events[i].link}
						" style="display:block; text-decoration:none;">

						<img mc:edit="event-1-image" src="


							${item.data.events[i].img}


						" width="256" height="216" alt="" style="display: block; height: auto; max-width: 256px;">
							</a>

						<span style="display: block; height: 12px;"></span>
						<span mc:edit="event-1-date" class="event-date" style="color: #ef4136; font-size: 19px;">


							${item.data.events[i].date}


						</span>
						<span style="display: block; height: 6px;"></span>
						<span mc:edit="event-1-dscr" class="event-dscr">

							${item.data.events[i].dscr}


						</span>
					</td>
					<td style="margin: 0; padding: 0; width: 42px;"></td>
					<td style="margin: 0; padding: 0; width: 256px;" valign="top">
							<a target="_blank" href="

								${item.data.events[i+1] ? item.data.events[i+1].link : ''}

							" style="display:block;">
							${item.data.events[i+1] ? '<img mc:edit="event-2-image" src="' : '' }


							${item.data.events[i+1] ? item.data.events[i+1].img : ''}


						${item.data.events[i+1] ? `" width="256" height="216" alt="" style="display: block; height: auto; max-width: 256px;">` : ''}
						</a>

						<span style="display: block; height: 12px;"></span>
						<span mc:edit="event-2-date" class="event-date" style="color: #ef4136; font-size: 19px;">


							${item.data.events[i+1] ? item.data.events[i+1].date : ''}


						</span>
						<span style="display: block; height: 6px;"></span>
						<span mc:edit="event-2-dscr" class="event-dscr">


							${item.data.events[i+1] ? item.data.events[i+1].dscr : ''}


						</span>
					</td>
					<td style="margin: 0; padding: 0; width: 123px;"></td>
				</tr>

			`;

		};

		html = htmlHeader + htmlBody + htmlFooter;

		return html;
	},

	social : function(item){

		var html = ``;
		var htmlHeader = ``;
		var htmlBody = ``;
		var htlmFooter = ``;

		htmlHeader = `
			<div class="section-wrapper" data-index="${item.index}">
				<table width="800" border="0" cellpadding="0" cellspacing="0" class="devider" bgcolor="#f1f2f2" style="background-color: #f1f2f2; height: 60px; margin: 0; padding: 0;">
					<tr style="margin: 0; padding: 0;">
						<td align="center" style="font-size: 19px; height: 60px; margin: 0; padding: 0;">
							<span mc:edit="section-title-5">

								${item.data.sectionTitle}

							</span>
						</td>
					</tr>
				</table>
				<table class="title white-bg" bgcolor="#fff" width="800" border="0" cellpadding="0" cellspacing="0" style="background-color: #fff; margin: 0; padding: 0;">
		`;

		htmlFooter = `
					<tr style="height: 56px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
				</table>
			</div>
		`;

		for (var i = 0, length = item.data.fotos.length; i < length; i+=3) {

			htmlBody += `
				<tr style="height: 30px; margin: 0; padding: 0;">
					<td style="height: inherit; margin: 0; padding: 0;"></td>
				</tr>
				<tr style="margin: 0; padding: 0;">
					<td style="margin: 0; padding: 0; width: 45px;"></td>
					<td style="margin: 0; padding: 0;">

						<img mc:edit="social-photo-1" src="

							${item.data.fotos[i].img}

						" width="220" height="190" alt="Фото" style="display: block; height: auto; max-width: 220px;">
					</td>
					<td style="margin: 0; padding: 0; width: 25px;"></td>
					<td style="margin: 0; padding: 0;">


						${item.data.fotos[i+1] ? '<img mc:edit="social-photo-2" src="' : ''}
						${item.data.fotos[i+1] ? item.data.fotos[i + 1].img : ''}
						${item.data.fotos[i+1] ? '" width="220" height="190" alt="Фото" style="display: block; height: auto; max-width: 220px;">' : ''}

					</td>
					<td style="margin: 0; padding: 0; width: 25px;"></td>
					<td style="margin: 0; padding: 0;">


						${item.data.fotos[i+2] ? '<img mc:edit="social-photo-3" src="' : ''}

						${item.data.fotos[i+2] ? item.data.fotos[i+2].img : ''}

						${item.data.fotos[i+2] ? '" width="220" height="190" alt="Фото" style="display: block; height: auto; max-width: 220px;">' : ''}

					</td>
					<td style="margin: 0; padding: 0; width: 45px;"></td>
				</tr>
			`;

		};

		html = htmlHeader + htmlBody + htmlFooter;

		return html;
	},

	footer : function(item) {
		var html = `
			<div class="section-wrapper" data-index="${item.index}">
				<table class="title white-bg" bgcolor="#fff" width="800" border="0" cellpadding="0" cellspacing="0" style="background-color: #fff; margin: 0; padding: 0;">
					<tr align="center" style="margin: 0; padding: 0;">
						<td style="margin: 0; padding: 0;">
							<span style="color: #ef4136; font-size: 18px;">

								${item.data.sectionTitle}

							</span>
						</td>
					</tr>
					<tr style="height: 30px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
				</table>
				<table class="title white-bg" bgcolor="#fff" width="800" border="0" cellpadding="0" cellspacing="0" style="background-color: #fff; margin: 0; padding: 0;">
					<tr style="margin: 0; padding: 0;">
						<td style="margin: 0; padding: 0; width: 342px;">
							<img src="http://imaguru.co/newsletter/left-stripe.png" width="342" height="28" alt="" style="display: block; height: auto;">
						</td>
						<td style="margin: 0; padding: 0; width: 26px;">
							<a href="https://www.instagram.com/explore/locations/223977749/" target="_blank" class="block-link" mc:edit="instagramm-link" style="color: inherit; display: block; height: 100%; width: 100%;">
								<img src="http://imaguru.co/newsletter/inst.png" width="27" height="28" alt="fb" style="display: block;">
							</a>
						</td>
						<td class="white-space" style="margin: 0; padding: 0; width: 18px;"></td>
						<td style="margin: 0; padding: 0; width: 26px;">
							<a href="https://www.facebook.com/imaguruby/" class="block-link" target="_blank" mc:edit="fb-link" style="color: inherit; display: block; height: 100%; width: 100%;">
								<img src="http://imaguru.co/newsletter/fb.png" width="27" height="28" alt="fb" style="display: block;">
							</a>
						</td>
						<td class="white-space" style="margin: 0; padding: 0; width: 18px;"></td>
						<td style="margin: 0; padding: 0; width: 26px;">
							<a href="https://imaguru.by" target="_blank" class="block-link" mc:edit="another-link" style="color: inherit; display: block; height: 100%; width: 100%;">
								<img src="http://imaguru.co/newsletter/rs.png" width="27" height="27" alt="rs" style="display: block;">
							</a>
						</td>
						<td style="margin: 0; padding: 0; width: 342px;">
							<img src="http://imaguru.co/newsletter/right-stripe.png" width="342" height="28" alt="" style="display: block; height: auto;">
						</td>
					</tr>
					<tr style="height: 56px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
				</table>
				<table width="800" bgcolor="#fff" class="white-bg" border="0" cellpadding="0" cellspacing="0" style="background-color: #fff; margin: 0; padding: 0;">
					<tr style="margin: 0; padding: 0;">
						<td align="center" style="margin: 0; padding: 0;">
							<span style="color: #6d6e71; font-size:13px;" mc:edit="footer-text">

							${item.data.footerHTMLContent}

							</span>
						</td>
					</tr>
					<tr style="height: 60px; margin: 0; padding: 0;">
						<td style="height: inherit; margin: 0; padding: 0;"></td>
					</tr>
				</table>
			</div>
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
