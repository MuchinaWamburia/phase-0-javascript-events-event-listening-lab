function addingEventListener() {
  let input = document.getElementById('input');
  input.addEventListener('abort', function() {
    alert('Aborted!');
  })
}