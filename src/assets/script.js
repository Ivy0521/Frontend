// Código JavaScript para hacer que el chat comience desde abajo
// alert("hola")
// Función para hacer scroll hacia abajo
function scrollToBottom() {
    var chatContainer = document.getElementById("chatContainer");
    
    if (chatContainer) {
        // alert("hola")
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }
  
  // Llamada inicial para asegurarse de que el chat comience desde abajo
scrollToBottom();