$(document).ready(function () {
  var user = "";
  var userPage = "";
  $("#form").submit(function (event) {
    event.preventDefault();
    var username = $("#username").val();
    searchUser(username);
  });
  function searchUser(username) {
    $("#result").empty();
    $.get(
      `https://api.github.com/search/users?q=${username}+in:user&per_page=100`,
      function (data) {
        console.log(data);
        data.items.forEach((item) => {
          user = `<img class="img-thumbnail ml-3" src="${item.avatar_url}" width= 105 height = 102/> `;
          userPage = `<a target="blank" href="${item.html_url}">${user}</a>`;
          $("#result").append(userPage);
        });
      }
    );
  }
});
