var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 0.660000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamento_Risaralda_1 = new ol.format.GeoJSON();
var features_Departamento_Risaralda_1 = format_Departamento_Risaralda_1.readFeatures(json_Departamento_Risaralda_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamento_Risaralda_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_Risaralda_1.addFeatures(features_Departamento_Risaralda_1);
var lyr_Departamento_Risaralda_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamento_Risaralda_1, 
                style: style_Departamento_Risaralda_1,
                popuplayertitle: 'Departamento_Risaralda',
                interactive: true,
    title: 'Departamento_Risaralda<br />\
    <img src="styles/legend/Departamento_Risaralda_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Departamento_Risaralda_1_1.png" /> 1 - 11<br />\
    <img src="styles/legend/Departamento_Risaralda_1_2.png" /> 11 - 34<br />\
    <img src="styles/legend/Departamento_Risaralda_1_3.png" /> 34 - 98<br />\
    <img src="styles/legend/Departamento_Risaralda_1_4.png" /> 98 - 370<br />\
    <img src="styles/legend/Departamento_Risaralda_1_5.png" /> 370 - 1168<br />' });
var group_Departamentos_Capas = new ol.layer.Group({
                                layers: [lyr_Departamento_Risaralda_1,],
                                fold: 'open',
                                title: 'Departamentos_Capas'});

lyr_GoogleHybrid_0.setVisible(true);lyr_Departamento_Risaralda_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_Departamentos_Capas];
lyr_Departamento_Risaralda_1.set('fieldAliases', {'fid': 'fid', 'No.': 'No.', 'OBJECTID': 'OBJECTID', 'MpCodigo': 'Código del municipio', 'MpNombre': 'Nombre del municipio', 'MpArea': 'MpArea', 'MpNorma': 'MpNorma', 'MpCategor': 'MpCategor', 'MpAltitud': 'MpAltitud', 'Restriccion': 'Restriccion', 'Depto': 'Depto', '10.Risaralda-Risaralda_ Área_Sembrada_(ha)': 'Área Sembrada (Hectáreas)', '10.Risaralda-Risaralda_ Área_Cosechada_(ha)': '10.Risaralda-Risaralda_ Área_Cosechada_(ha)', '10.Risaralda-Risaralda_Producción_(ton)': '10.Risaralda-Risaralda_Producción_(ton)', '10.Risaralda-Risaralda_Rendimiento_(ton/ha)': '10.Risaralda-Risaralda_Rendimiento_(ton/ha)', });
lyr_Departamento_Risaralda_1.set('fieldImages', {'fid': 'TextEdit', 'No.': 'Range', 'OBJECTID': 'TextEdit', 'MpCodigo': 'TextEdit', 'MpNombre': 'TextEdit', 'MpArea': 'TextEdit', 'MpNorma': 'TextEdit', 'MpCategor': 'Range', 'MpAltitud': 'Range', 'Restriccion': 'TextEdit', 'Depto': 'TextEdit', '10.Risaralda-Risaralda_ Área_Sembrada_(ha)': 'TextEdit', '10.Risaralda-Risaralda_ Área_Cosechada_(ha)': 'TextEdit', '10.Risaralda-Risaralda_Producción_(ton)': 'TextEdit', '10.Risaralda-Risaralda_Rendimiento_(ton/ha)': 'TextEdit', });
lyr_Departamento_Risaralda_1.set('fieldLabels', {'fid': 'hidden field', 'No.': 'inline label - visible with data', 'OBJECTID': 'hidden field', 'MpCodigo': 'inline label - visible with data', 'MpNombre': 'inline label - visible with data', 'MpArea': 'hidden field', 'MpNorma': 'hidden field', 'MpCategor': 'hidden field', 'MpAltitud': 'hidden field', 'Restriccion': 'hidden field', 'Depto': 'hidden field', '10.Risaralda-Risaralda_ Área_Sembrada_(ha)': 'inline label - visible with data', '10.Risaralda-Risaralda_ Área_Cosechada_(ha)': 'hidden field', '10.Risaralda-Risaralda_Producción_(ton)': 'hidden field', '10.Risaralda-Risaralda_Rendimiento_(ton/ha)': 'hidden field', });
lyr_Departamento_Risaralda_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});