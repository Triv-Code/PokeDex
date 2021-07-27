This is my PokeDex Project. Search for a Pokemon (by name or by number) and it will return some basic information fetched from two different APIs (https://pokeapi.co/ for the Data & https://pokeres.bastionbot.org/ for the images). 

My features include:
1. Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
	(fetch.js line 9 & 43)
	Line 9 is fetching from the PokeApi and line 43 uses the Poke ID from the first fetch() to retrieve an image of that pokemon. (See feature 2 for how I used the data.)
2. Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application
	(fetch.js line 14-28 / 46)
	Line 1 & 2 have empty arrays, with the code from lines 14-22 / 46 being used to create an object in the curPoke array and lines 23-28 being used to fill the curPokeStats array. Lines 88-103 use the data in those arrays to update the HTML.
3. Build a conversion tool that converts user input to another type and displays it (ex: converts cups to grams)
	(fetch.js 61-78)
	Function heightAdjust() takes in the (kind of...) metric unit and adjusts it to feet and inches. 
	Function weightAdjust() takes in the (kind of...) KG unit and adjusts it into pounds and onces. 
4. Visualize data in a graph, chart, or other visual representation of data
	(fetch.js 98-103)
	The function percentage() takes the stats in the curPokeStats array and turns those into a percentage of 160 (max pokemon stat value). The lines on 98-103 then update with that percentage and adjust the CSS to fill in the bar by that amount. 
	
	