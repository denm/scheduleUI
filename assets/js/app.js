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

//TODO 
var Les = [
	{
		"day": "1",
		"les" : "1",
		"Value" : "Математика, 310 каб."
	},
	{
		"day": "1",
		"les" : "2",
		"Value" : "Программирование, 227 каб."
	},
	{
		"day": "1",
		"les" : "3",
		"Value" : "Разработка ИС, 223 каб."
	},
	{
		"day": "2",
		"les" : "3",
		"Value" : "Физра"
	},
	{
		"day": "2",
		"les" : "4",
		"Value" : "ММТ, 221 каб."
	},
	{
		"day": "2",
		"les" : "5",
		"Value" : "Компьютерное моделирование, 110 каб."
	},
	{
		"day": "3",
		"les" : "2",
		"Value" : "ММТ, 221 каб."
	},
	{
		"day": "3",
		"les" : "3",
		"Value" : "Компьютерное моделирование, 110 каб."
	},
	{
		"day": "3",
		"les" : "4",
		"Value" : "Разработка ИС, 223 каб."
	}
	,
	{
		"day": "4",
		"les" : "4",
		"Value" : "Компьютерное моделирование, 110 каб."
	},
	{
		"day": "4",
		"les" : "5",
		"Value" : "Компьютерное моделирование, 110 каб."
	},
	{
		"day": "4",
		"les" : "5",
		"Value" : "Разработка ИС, 223 каб."
	},	
	{
		"day": "5",
		"les" : "2",
		"Value" : "ММТ, 221 каб."
	},
	{
		"day": "5",
		"les" : "3",
		"Value" : "Компьютерное моделирование, 110 каб."
	},
	{
		"day": "5",
		"les" : "4",
		"Value" : "Разработка ИС, 223 каб."
	},	
	{
		"day": "6",
		"les" : "1",
		"Value" : "Разработка ИС, 223 каб."
	},
	{
		"day": "6",
		"les" : "3",
		"Value" : "ММТ, 221 каб."
	},
	{
		"day": "6",
		"les" : "4",
		"Value" : "Физра"
	}
];

var Rep = [
	{
		"day": "1",
		"les" : "1",
		"Value" : "Нет"
	},
	{
		"day": "1",
		"les" : "2",
		"Value" : "Программирование, 227 каб."
	},
	{
		"day": "1",
		"les" : "3",
		"Value" : "Разработка ИС, 223 каб."
	},
	{
		"day": "1",
		"les" : "4",
		"Value" : "Математика, 223 каб."
	},
	{
		"day": "5",
		"les" : "6",
		"Value" : "Математика, 223 каб."
	},
	{
		"day": "4",
		"les" : "4",
		"Value" : "Математика, 223 каб."
	},
	{
		"day": "4",
		"les" : "5",
		"Value" : "Нет"
	},
	{
		"day": "2",
		"les" : "1",
		"Value" : "Математика, 223 каб."
	},
	{
		"day": "3",
		"les" : "3",
		"Value" : "Математика, 223 каб."
	}	
];

function Fill () {
	$.each(Les, function (i, item) {
		console.log(item);
		$("#CalendarTable td[data-day="+item.day+"][data-les="+item.les+"]").html(item.Value);
	});
};

function FillRep () {
	$.each(Rep, function (i, item) {
		console.log(item);
		$("#CalendarTable td[data-day="+item.day+"][data-les="+item.les+"]").html(item.Value).css("background", "#E2F28F");
	});
};