// Guardar el contenido original de cada párrafo
var originalContent = [];
var content = document.getElementById('content');
var paragraphs = content.getElementsByTagName('p');
for (var i = 0; i < paragraphs.length; i++) {
  originalContent.push(paragraphs[i].innerHTML);
}

document.getElementById('searchInput').addEventListener('input', function() {
  var searchText = this.value;

  for (var i = 0; i < paragraphs.length; i++) {
    var text = originalContent[i];
    if (searchText.trim() === '') {
      paragraphs[i].innerHTML = originalContent[i];
    } else {
      if (text.includes(searchText)) {
        paragraphs[i].innerHTML = text.replace(new RegExp(searchText, 'gi'), function(match) {
          return '<span class="highlight">' + match + '</span>';
        });
      } else {
        paragraphs[i].innerHTML = originalContent[i];
      }
    }
  }
});

document.getElementById('searchInput').addEventListener('blur', function() {
  if (this.value.trim() === '') {
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].innerHTML = originalContent[i];
    }
  }
});
