var init = function () {

    var form = document.createElement('form');
    var div = document.createElement('div');
    var input = document.createElement('input');
    var button = document.createElement('button');

    div.className = 'form-group';
    input.className = 'form-control';
    input.type = 'text';
    input.id = 'username';
    button.type = 'button';

    var buttonText = 'click me';
    var buttonTextNode = document.createTextNode(buttonText);

    button.appendChild(buttonTextNode);
    div.appendChild(input);
    div.appendChild(button);
    form.appendChild(div);
    document.body.appendChild(form);
}