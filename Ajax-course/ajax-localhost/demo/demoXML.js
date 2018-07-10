var init = function () {

    getXMLData();

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'courses.xml');

    //callback
    xhr.onreadystatechange = function() {

        //readyState = 0...4
        if ( xhr.readyState == 4 ) {

            queryXML(xhr.responseXML);

        }
    }

    xhr.send(null);



}


function getXMLData() {
    var xmlData = '<courses>' +
        '<course id="1"><name><firstCourse>php</firstCourse><lastCourse>Advanced PHP</lastCourse></name></course>' +
        '<course id="2"><name><firstCourse>java</firstCourse><lastCourse>Advanced JAVA</lastCourse></name></course>' +
        '<course id="3"><name><firstCourse>sql</firstCourse><lastCourse>Advanced SQL</lastCourse></name></course>' +
        '</courses>';

    var xmlParser;

    if ( window.DOMParser ) {

        //instance of DOMParser
        xmlParser = new DOMParser().parseFromString(xmlData, 'application/xml');

    } else {

        //instance of ActiveXObject
        xmlParser = new ActiveXObject('Microsoft.XMLDOM');
        xmlParser.loadXML(xmlData);

    }
    queryXML(xmlParser);
}


function queryXML(xmlParser) {

    var nameNode = xmlParser.getElementsByTagName('name');

    for ( var index = 0; index < nameNode.length; index ++ ) {
        // console.log(nameNode[index].childNodes[0].nodeValue);

        var id = nameNode[index].parentNode.id;

        var firstCourseNode = nameNode[index].getElementsByTagName('firstCourse')[0];
        var lastCourseNode = nameNode[index].getElementsByTagName('lastCourse')[0];

        var firstCourse = firstCourseNode.childNodes[0].nodeValue;
        var lastCourse = lastCourseNode.childNodes[0].nodeValue;

        console.log('id: ' + id + ' ' + firstCourse + ' ' + lastCourse);

    }
}









