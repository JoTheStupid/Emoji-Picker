var emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "😚", "😙", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💋", "💌", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "💔", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "💯", "💢", "💥", "💫", "💦", "💨", "🕳️", "💣", "💬", "👁️‍🗨️", "🗨️", "🗯️", "💭", "💤", "💮", "✨", "🎆", "🎇", "🎶", "🎵", "🔥", "🎃", "🎄", "🎅", "🎁", "🎈", "🎉", "🎊", "🎋", "🎍", "🎎", "🎏", "🎐", "🎑", "🧧", "🎀", "🎁", "🎗️", "🎟️", "🎫", "🎖️", "🏆", "🏅", "🥇", "🥈", "🥉", "⚽", "⚾", "🥎", "🏀", "🏐", "🏈", "🏉", "🎾", "🥏", "🎳", "🏏", "🏑", "🏒", "🥍", "🏓", "🏸", "🥊", "🥋", "⛳", "🎣", "🤿", "🥅", "🏒", "🏑", "🏏", "🏸", "🥊", "🥋", "⛳", "🎣", "🤿", "🥅", "🏏", "🏸", "🥊", "🥋", "🎣", "🤿", "🥅", "🏊‍♀️", "🏊", "🏄‍♀️", "🏄", "🚣‍♀️", "🚣", "🏋️‍♀️", "🏋️", "🚴‍♀️", "🚴", "🤸‍♀️", "🤸", "🤽‍♀️", "🤽", "🤾‍♀️", "🤾", "🧗‍♀️", "🧗", "🚵‍♀️", "🚵", "🚴‍♀️", "🚴", "🏇", "🏂", "🏌️‍♀️", "🏌️", "🏄‍♂️", "🚣‍♂️", "🏋️‍♂️", "🚴‍♂️", "🤸‍♂️", "🤽‍♂️", "🤾‍♂️", "🧗‍♂️"];

var emojiContainer = document.createElement("div");
emojiContainer.style.position = "fixed";
emojiContainer.style.bottom = "60px"; // Updated this line
emojiContainer.style.left = "10px";
emojiContainer.style.backgroundColor = "#fff";
emojiContainer.style.padding = "10px";
emojiContainer.style.border = "1px solid #000";
emojiContainer.style.zIndex = "9999";
emojiContainer.style.display = "none";
emojiContainer.style.maxHeight = "400px";
emojiContainer.style.width = "400px";
emojiContainer.style.overflow = "auto";

emojis.forEach((emoji) => {
    var emojiSpan = document.createElement("span");
    emojiSpan.innerText = emoji;
    emojiSpan.style.cursor = "pointer";
    emojiSpan.style.marginRight = "10px";
    emojiSpan.style.fontSize = "30px";
    emojiSpan.onclick = function () {
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute("value", emoji);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    };
    emojiContainer.appendChild(emojiSpan);
});

var toggleButton = document.createElement("button");
toggleButton.innerText = "Toggle Emoji Picker";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "10px";
toggleButton.style.left = "10px";
toggleButton.style.zIndex = "9999";
toggleButton.onclick = function () {
    if (emojiContainer.style.display === "none") {
        emojiContainer.style.display = "block";
    } else {
        emojiContainer.style.display = "none";
    }
};

document.body.appendChild(emojiContainer);
document.body.appendChild(toggleButton);

// Drag and drop functionality
var drag = false;
var oldX, oldY;

toggleButton.onmousedown = function (e) {
    drag = true;
    oldX = e.clientX;
    oldY = e.clientY;
};

window.onmouseup = function () {
    drag = false;
};

window.onmousemove = function (event) {
    if (drag) {
        var left = parseInt(toggleButton.style.left) + event.clientX - oldX;
        var top = parseInt(toggleButton.style.bottom) + oldY - event.clientY;

        toggleButton.style.left = `${left}px`;
        emojiContainer.style.left = `${left}px`;

        toggleButton.style.bottom = `${top}px`;
        emojiContainer.style.bottom = `${top + 50}px`; // Update this line

        oldX = event.clientX;
        oldY = event.clientY;
    }
};