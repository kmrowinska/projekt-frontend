# projekt-frontend
Projekt frontendowy - statyczny widok responsywnej strony.

## Struktura projektu
Projekt umieszczony jest w folderze projekt-crafton, który zawiera cztery główne podfoldery: <br>
	•	css/ – pięć plików CSS odpowiedzialnych za wygląd strony. Kaskady zostały podzielone tematycznie, aby zwiększyć czytelność i ograniczyć długość pojedynczych plików. <br>
	•	images/ – zasoby graficzne (loga, zdjęcia do sliderów itp.).<br>
	•	js/ – folder z głównym plikiem JavaScript (main.js).<br>
	•	pages/ – dodatkowe podstrony. Większość z nich jest przykładowa i została utworzona do testów nawigacji (np. strona inwestycji) dlatego są one puste.<br>
Oprócz folderów w projekcie znajdują się także:<br>
	•	index.html – strona główna projektu (zawiera nagłówek, slider, formularz kontaktowy, stopkę)<br>
	•	navbar.html – fragment HTML z menu nawigacyjnym, wczytywany dynamicznie (taka struktura, ze wzg. na ławtiejsze wczytywanie na innych stronach).<br>

## Funkcje w main.js
Ze względu na małą ilość kodu, nie separowałam konkretnych funkcji np. Do sliderów, navabru itd. Kod jest czytelny a funkcje opisane są w taki sposób, że jest wiadome do czego każda z nich ma służyć.<br>
Funkcje w kodzie:<br>
	•	initNavbar() – wczytuje navbar.html i inicjalizuje dropdowny oraz hamburger menu<br>
	•	initDropdowns() – obsługuje rozwijane menu<br>
	•	initHamburger() – obsługuje menu mobilne<br>
	•	initButtons() – przekierowuje przyciski .custom-btn i .custom-btn2 na odpowiednie podstrony<br>
	•	initSlider() – prosty slider do przełączania obrazków<br>
Dzięki tej strukturze kod jest łatwy do dalszej rozbudowy i ewentualnego przeniesienia do innych plików js.<br>

## Uruchomienie
Projekt mozna uruchomic w przeglądarce poprzez uruchomienie strony: https://kmrowinska.github.io/projekt-frontend/ <br>
Opcjonalnie, mozna uruchomic prosty lokalny serwer poprzez komendę:<br>
python3 -m http.server 8000 i wejść na stronę http://localhost:8000<br>

## Mozliwe usprawnienia
Projekt mozna potencjalnie usprawnić poprzez:<br>
- rozdzielenie kodu JavaScript na odpowiednie moduły,<br>
- dodanie backendu, który obsługuje formularz kontaktowy,<br>
- rozszerzenie podstron z folderu pages o treść i dodanie gotowego menu nawigacyjnego
