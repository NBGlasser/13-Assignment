$(function() {
  
    $(".new").on("submit", function(event) {
      event.preventDefault();
  
      var newVich = {
        name: $("#name").val().trim(),
      };
  
      $.ajax("/api/sandviches", {
        type: "POST",
        data: newVich
      }).then(
        function() {
          location.reload();
        }
      );
    });

    $(".eat").on("click", function(event) {
        var id = $(this).data("id")
        event.preventDefault()
        $.ajax("/api/sandviches/" + id, {
          type: "PUT",
          data: {gone: true}
        }).then(
          function() {
            location.reload();
          }
      
        )
      })
      
    
});