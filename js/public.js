
		var select = document.getElementById("select");
		var row = document.getElementById("select").getElementsByTagName("img")[0];
		var city = document.getElementById("city");
		var navMine = document.getElementById("nav_mine");
		var rowSolid = document.getElementById("nav_mine").getElementsByTagName("img")[1];
		var mineList = document.getElementById("mine_list");
		select.onclick = city_open;
		navMine.onclick = mine_open;
		function city_open(){
				city.style.display = 'block';
				// row.style.transform = "rotateZ(180deg)"
				select.onclick = city_close;
		}
		function city_close(){
				city.style.display = 'none';
				row.style.transform = "rotateZ(0deg)"
				select.onclick = city_open;
		}
		function mine_open(){
				mineList.style.display = 'block';
				rowSolid.style.transform = "rotateZ(180deg)"
				navMine.onclick = mine_close;
		}
		function mine_close(){
				mineList.style.display = 'none';
				rowSolid.style.transform = "rotateZ(0deg)"
				navMine.onclick = mine_open;
		}