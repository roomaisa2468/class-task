
var buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var command = button.dataset["element"];
        console.log(command);

        if (command == "insertImage" || command == "createLink") {
            var url = prompt("Enter link here:", "https://");
            document.execCommand(command, true, url);
        } else if (command == "hiliteColor") {
            var color = prompt("Enter highlight color (e.g., yellow):", "yellow");
            document.execCommand(command, false, color);
        } else if (command == "foreColor") {
            var color = prompt("Enter font color (e.g., red):", "red");
            document.execCommand(command, false, color);
        } else if (command == "fontSize") {
            var size = prompt("Enter font size (1-7):", "3");
            document.execCommand(command, false, size);
        }
        else if (command == "find") {
            var searchText = prompt("Enter text to find:");
            if (searchText) {
                var content = document.querySelector('.content').innerHTML;
                if (content.indexOf(searchText) !== -1) {
                    alert("Text found!");
                } else {
                    alert("Text not found.");
                }
            }
        }
        else if (command == "delete") {
            document.execCommand("delete", false, null);
        }
        else if (command == "cut") {
            document.execCommand("cut", false, null);
        } 
        else {
            document.execCommand(command, false, null);
        }
    });
});