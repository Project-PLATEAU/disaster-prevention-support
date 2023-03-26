reearth.ui.show(`
  <style>


    html,body {
      margin: 0;
      width:180px;
      min-width: fit-content;
    }

    button{
      display: flex;
      align-items: center;
      padding: 8px 16px;

      min-height: 38px;

      background: #00BEBE;

      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
      border:none;
      border-radius: 4px;

      color:#fff;
    }

  </style>
 
 <body>

  <div class="btn-wrapper">
    <button class="btn-link" onclick="onClickButton()">
    <span class="title">Button Title</span>
    </button>
  </div>

 </body>


<script>
  let url, bgColor,textColor,property,reearth;


  function onClickButton(){

    if(!property.default.linkType || property.default.linkType === "normal"){
      url = property.default.url;
    }else if(property.default.linkType === "geojsonio"){
      let lat = reearth.visualizer.camera.position.lat;
      let lng = reearth.visualizer.camera.position.lng;
      url = "https://geojson.io/#map=14/" + lat + "/" + lng;
    }else if(property.default.linkType === "gsi"){
      let lat = reearth.visualizer.camera.position.lat;
      let lng = reearth.visualizer.camera.position.lng;
      url = "https://maps.gsi.go.jp/#14/" + lat + "/" + lng;
    }
    
    // URLの遷移(新しいページを開く)
    window.open( url, "_blank" );
  }

  window.addEventListener("message", e => {
    if (e.source !== parent) return;
    property = e.data.property;
    reearth = e.source.reearth;
    if("bgColor" in property.default === true){
      document.getElementsByClassName('btn-link')[0].style.backgroundColor = property.default.bgColor;
    }else{
      document.getElementsByClassName('btn-link')[0].style.backgroundColor = "#00BEBE";
    }

    if("textColor" in property.default === true){
      document.getElementsByClassName('title')[0].style.color = property.default.textColor;
    }else{
      document.getElementsByClassName('title')[0].style.color = "#FFF";
    }

    if("title" in property.default === true){
      document.getElementsByClassName('title')[0].innerHTML = property.default.title;
    }else{
      document.getElementsByClassName('title')[0].innerHTML = "Button Title";
    }
  });


</script>

`);




reearth.on("update", send);
send();

function send() {
  reearth.ui.postMessage({
    property: reearth.widget.property
  });
}
