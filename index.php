<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>table scrollable</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<script type="text/javascript" src="script.js"></script>
</head>
<body>


	<div id="firstpart" ></div>
	<table id="results">
		<thead>
			<tr>
				<th>1</th>
				<th>2</th>
				<th>3</th>
				<th>4</th>
				<th>5</th>
				<th>6</th>
				<th>7</th>
				<th>8</th>
				<th>9</th>
				<th>10</th>
			</tr>
		</thead>
		<tbody>

			<script type="text/javascript">
				//Заполнение
				for( var i = 1; i <= 20; i ++) {
					var tr = document.createElement('tr');
					tbody = document.getElementsByTagName('tbody')[0];
					tbody.appendChild(tr);
					for(j = 1; j <= 10; j ++){
						var td = document.createElement('td');
						td.innerHTML = 'hello bitch';				
						tr.appendChild(td);		
					}
				}
			</script>
							
			</tbody>
		</table>
	</body>
	</html>