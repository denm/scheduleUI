//Пока так
var delItemId;

BindingEvents = function () {	

	$(".deleteThisItem").click(function () {
		switch ($(this).attr("data-element-type"))
		{
			case "tch":
			$.post("http://chemk.nekulin.ru/api/teachers/delete", {"id" : adelItemId}, function () {});
			break;
		}
	});

	adelItemId = $(this).attr("data-element-id");
	console.log("called");
	$(".deleteThisItem").click(function () {
		switch ($(this).attr("data-element-type"))
		{
			case "tch":
			$.post("http://chemk.nekulin.ru/api/teachers/delete", {"id" : adelItemId}, function () {});
			break;
		}
	});


};

Item = {
	CreateTeacher : function (item) {
		var table = document.getElementById("TeacherList").getElementsByTagName("TBODY")[0];		
		var tr = document.createElement("tr");
		var tdItemId = document.createElement("td");
		var tdItemValue = document.createElement("td");
		var tdItemAction = document.createElement("td");

		//Delete button
		var delButton = document.createElement("button");
		delButton.setAttribute("class", "btn btn-danger deleteThisItem");
		delButton.setAttribute("data-toggle", "modal");
		delButton.setAttribute("href", "#deleteItem");
		delButton.setAttribute("data-element-id", item.id);
		delButton.setAttribute("data-element-type", "tch");
		delButton.appendChild(document.createTextNode("Удалить"));


		//Увше игеещт
		var editButton = document.createElement("button");
		editButton.setAttribute("class", "btn btn-info");		
		editButton.appendChild(document.createTextNode("Редактировать"));

		tdItemId.innerHTML = item.id;

		tdItemValue.innerHTML = item.fname + " " + item.mname + " " + item.lname;

		tdItemAction.appendChild(delButton);
		tdItemAction.appendChild(document.createTextNode(" "));
		tdItemAction.appendChild(editButton);

		tr.appendChild(tdItemId);
		tr.appendChild(tdItemValue);
		tr.appendChild(tdItemAction);
		table.appendChild(tr);
	},
	CreateLesson : function (item) {
		var table = document.getElementById("LessonList").getElementsByTagName("TBODY")[0];		
		var tr = document.createElement("tr");
		var tdItemId = document.createElement("td");
		var tdItemValue = document.createElement("td");
		var tdItemAction = document.createElement("td");

		var tdItemHours = document.createElement("td");
		var tdItemCode = document.createElement("td");

		//Delete button
		var delButton = document.createElement("button");
		delButton.setAttribute("class", "btn btn-danger");
		delButton.setAttribute("data-toggle", "modal");
		delButton.setAttribute("href", "#deleteItem");
		delButton.setAttribute("data-element-id", item.id);
		delButton.setAttribute("data-element-type", "lsn");
		delButton.appendChild(document.createTextNode("Удалить"));


		//Увше игеещт
		var editButton = document.createElement("button");
		editButton.setAttribute("class", "btn btn-info");		
		editButton.appendChild(document.createTextNode("Редактировать"));

		tdItemId.innerHTML = item.id;
		tdItemValue.innerHTML = item.name;
		tdItemCode.innerHTML = item.code;
		tdItemHours.innerHTML = item.hours;

		tdItemAction.appendChild(delButton);
		tdItemAction.appendChild(document.createTextNode(" "));
		tdItemAction.appendChild(editButton);

		tr.appendChild(tdItemId);
		tr.appendChild(tdItemValue);
		tr.appendChild(tdItemCode);
		tr.appendChild(tdItemHours);
		tr.appendChild(tdItemAction);
		table.appendChild(tr);
	},
	CreateGroup : function (item) {
		var table = document.getElementById("LessonList").getElementsByTagName("TBODY")[0];		
		var tr = document.createElement("tr");
		var tdItemId = document.createElement("td");
		var tdItemValue = document.createElement("td");
		var tdItemAction = document.createElement("td");		

		//Delete button
		var delButton = document.createElement("button");
		delButton.setAttribute("class", "btn btn-danger");
		delButton.setAttribute("data-toggle", "modal");
		delButton.setAttribute("href", "#deleteItem");
		delButton.setAttribute("data-element-id", item.id);
		delButton.setAttribute("data-element-type", "grp");
		delButton.appendChild(document.createTextNode("Удалить"));


		//Увше игеещт
		var editButton = document.createElement("button");
		editButton.setAttribute("class", "btn btn-info");		
		editButton.appendChild(document.createTextNode("Редактировать"));

		tdItemId.innerHTML = item.id;
		tdItemValue.innerHTML = item.name;		

		tdItemAction.appendChild(delButton);
		tdItemAction.appendChild(document.createTextNode(" "));
		tdItemAction.appendChild(editButton);

		tr.appendChild(tdItemId);
		tr.appendChild(tdItemValue);		
		tr.appendChild(tdItemAction);
		table.appendChild(tr);
	}
};
Calendar = {
	Create : function () {
		var table = document.getElementById("CalendarTable").getElementsByTagName("TBODY")[0];

		for (var i = 0; i < 8; i++) {
			var tr  = document.createElement("tr");
			for (var day = 0; day < 8; day++) {
				var td  = document.createElement("td");
				if (day == 0)
					td.innerHTML = i;
				if (day > 0) {
					td.setAttribute("data-day", day);
					td.setAttribute("data-les", i);
					td.setAttribute("class", "calendarItem");
				}
				tr.appendChild(td);
			}
			table.appendChild(tr);
		}
	}
};